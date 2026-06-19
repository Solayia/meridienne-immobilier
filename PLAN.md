# PLAN — Refonte WebGL immersive Méridienne Immobilier

## Concept : "Traverser l'architecture"

Expérience scroll-driven plein écran. L'utilisateur traverse des espaces
architecturaux stylisés (arches, colonnes, volumes géométriques) en
scrollant. Le contenu DOM se superpose à des moments clés. Un seul canvas
WebGL couvre toute la page, la caméra suit un chemin piloté par le scroll.

Esthétique : architectural minimal. Géométries épurées (arches, cubes,
escaliers, colonnes), matériaux mats (pierre crème, terracotta, métal
brossé encre), éclairage directionnel chaud + ombres portées.

---

## Stack technique

| Lib | Rôle |
|-----|------|
| React 18 + Vite | Base existante, on garde |
| @react-three/fiber | Canvas React, scène 3D |
| @react-three/drei | Helpers (Environment, Float, Text3D, MeshTransmission…) |
| @react-three/postprocessing | Grain, vignette, SSAO léger |
| Lenis | Smooth scroll, source unique de progression |
| GSAP + ScrollTrigger | Chorégraphie caméra + éléments DOM syncs au scroll |
| Tailwind 3 | Styles DOM (inchangé) |

---

## Architecture

```
src/
├── App.jsx                  # Layout : Canvas plein écran + DOM overlay
├── main.jsx                 # Entry
├── index.css                # Tailwind + styles globaux
├── canvas/
│   ├── Scene.jsx            # Scène principale (caméra, lumières, fog)
│   ├── CameraRig.jsx        # Caméra pilotée par scroll progress (0→1)
│   ├── sections/
│   │   ├── HeroScene.jsx    # Toits géométriques + arche d'entrée
│   │   ├── GalleryScene.jsx # 4 cadres flottants (images biens)
│   │   ├── StatsScene.jsx   # "15" en 3D extrudé terracotta
│   │   ├── ArchScene.jsx    # Passage voûté (transition agence)
│   │   └── QuartiersScene.jsx # Plans d'images en profondeur
│   ├── materials/
│   │   ├── StoneMaterial.jsx    # Pierre crème mate
│   │   └── TerracottaMaterial.jsx # Terracotta mat
│   ├── geometry/
│   │   ├── Arch.jsx         # Arc en plein cintre (procédural)
│   │   ├── Column.jsx       # Colonne cylindrique
│   │   └── Staircase.jsx    # Escalier géométrique
│   └── effects/
│       └── PostEffects.jsx  # Grain + vignette + SSAO léger
├── dom/
│   ├── Navbar.jsx           # Inchangé (fixed z-50 au-dessus du canvas)
│   ├── HeroOverlay.jsx      # Titre H1 + baseline (position: fixed, opacity liée au scroll)
│   ├── BiensOverlay.jsx     # Infos des biens (apparaissent quand on passe devant les cadres)
│   ├── StatsOverlay.jsx     # Chiffres clés en DOM
│   ├── AgenceOverlay.jsx    # Texte agence (60% gauche)
│   ├── QuartiersOverlay.jsx # Liste numérotée 01→04
│   ├── CtaOverlay.jsx       # Formulaire estimation
│   └── Footer.jsx           # Footer classique (en dehors du canvas)
├── hooks/
│   ├── useScrollProgress.js # Lenis → valeur 0-1 normalisée
│   ├── useSectionProgress.js # Progress local par section (start%, end%)
│   └── useReducedMotion.js  # Détecte prefers-reduced-motion
└── lib/
    └── lenis.js             # Instance Lenis singleton
```

Principe fondamental : **progressive enhancement**.
- Le DOM contient TOUT le contenu (SEO, accessibilité).
- Le canvas WebGL est une couche visuelle par-dessus.
- Si WebGL échoue → le site DOM fonctionne seul (fallback).

---

## Chorégraphie scroll (section par section)

### 1. HERO (scroll 0 → 15%)
- **3D** : Caméra démarre en plongée sur des toits géométriques simplifiés
  (cubes terracotta, surfaces crème). Descend lentement vers une grande
  arche d'entrée. Lumière dorée latérale, ombres longues.
- **DOM** : Titre Fraunces géant "L'art de vivre autrement" en overlay
  fixed, opacité qui fade out en scrollant. Baseline terracotta en-dessous.
- **Transition** : La caméra passe sous l'arche → fondu vers la galerie.

### 2. BIENS — Galerie (scroll 15 → 40%)
- **3D** : On entre dans un espace galerie. 4 cadres (planes avec les
  images des biens en texture) disposés dans l'espace en layout bento 3D
  (tailles variées, profondeurs différentes). La caméra avance lentement
  et passe devant chaque cadre.
- **DOM** : Quand un cadre est "en face" de la caméra, l'overlay DOM
  affiche titre + surface + prix du bien (apparition douce).
- **Interaction** : Hover sur un cadre = léger déplacement vers l'avant.

### 3. STATS — Rupture sombre (scroll 40 → 55%)
- **3D** : Transition progressive vers un espace sombre (fog encre).
  Le "15" apparaît en géométrie 3D extrudée, matériau terracotta mat.
  Rotation lente (pas de spin — juste 15° de bascule au scroll).
  Deux colonnes encadrent le chiffre.
- **DOM** : Stats secondaires (240+, 98%, 72h) en overlay blanc/crème.

### 4. AGENCE — Passage voûté (scroll 55 → 70%)
- **3D** : Caméra traverse un couloir voûté (2 arches en enfilade).
  Lumière au bout du tunnel. L'espace s'ouvre sur un volume lumineux.
- **DOM** : Texte agence overlay gauche (60%), photo intégrée côté droit.
  Apparition progressive liée au scroll.

### 5. QUARTIERS (scroll 70 → 85%)
- **3D** : 4 plans d'images disposés en profondeur (z-stacking),
  comme des cartes postales flottantes. Le hover/focus déplace
  subtilement la caméra vers le plan survolé.
- **DOM** : Liste numérotée 01→04 à gauche, comme actuellement.
  Hover = le plan 3D correspondant passe au premier plan.

### 6. CTA + FOOTER (scroll 85 → 100%)
- **3D** : Scène se simplifie. Quelques éléments géométriques
  flottants discrets (petits cubes, lignes). Background crème/sable.
- **DOM** : Formulaire d'estimation centré. Footer en-dessous
  (hors canvas, en flux normal).

---

## Postprocessing

- **Grain film** : subtil (0.15 intensity), cohérent avec le ton éditorial.
- **Vignette** : légère (0.3), centre le regard.
- **SSAO** : très léger, pour donner de la profondeur aux volumes.
- Pas de bloom, pas de chromatic aberration (anti-slop).

---

## Gestion mobile

- **Détection** : `navigator.maxTouchPoints > 0` + écran < 768px.
- **Mode mobile** : Scène simplifiée (moins de géométries, pas de
  postprocessing, pas de SSAO). Les plans d'images restent mais les
  géométries architecturales sont réduites.
- **Fallback critique** : Si WebGL non supporté ou device très faible,
  le canvas ne se monte pas → le site DOM s'affiche seul avec les
  animations CSS existantes (useScrollReveal).

---

## Accessibilité

- `prefers-reduced-motion: reduce` → canvas statique (une seule frame),
  tout le contenu DOM visible immédiatement, pas de scroll hijack.
- Le scroll n'est JAMAIS piégé. Lenis est en mode smooth mais les
  ancres (#biens, #agence…) et le clavier fonctionnent.
- Tout le contenu textuel est dans le DOM (pas dans la scène 3D).
- Les images ont des alt text.
- `aria-hidden="true"` sur le canvas (décoratif).
- Focus visible sur tous les éléments interactifs.

---

## Performance

- Géométries procédurales (pas de fichiers GLTF lourds).
- `dpr={Math.min(window.devicePixelRatio, 2)}` — cap à 2.
- `frameloop="always"` mais pause quand l'onglet est caché
  (document.visibilitychange).
- Textures : images existantes (Unsplash), chargées en lazy via
  drei `useTexture` avec suspension.
- Pas de shadow map (ombres simulées par géométrie/matériau).
- Budget cible : < 300 Ko JS supplémentaire (R3F + drei + GSAP).

---

## Étapes d'implémentation

1. **Setup stack** : installer R3F, drei, postprocessing, Lenis, GSAP.
   Restructurer App.jsx (Canvas + DOM overlay).
2. **Lenis + scroll progress** : hooks useScrollProgress / useSectionProgress.
3. **CameraRig** : chemin caméra piloté par scroll progress.
4. **HeroScene** : géométries architecturales + matériaux + lumière.
5. **GalleryScene** : cadres flottants avec textures biens.
6. **StatsScene** : "15" extrudé + colonnes.
7. **ArchScene** : passage voûté.
8. **QuartiersScene** : plans en profondeur.
9. **PostEffects** : grain + vignette.
10. **DOM overlays** : repositionner tout le contenu textuel.
11. **Mobile** : version allégée + fallback.
12. **Audit** : perf (fps), accessibilité, prefers-reduced-motion.
13. **Build + deploy** : push dev → préprod GitHub Pages.

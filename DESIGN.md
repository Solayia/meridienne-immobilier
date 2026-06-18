# DESIGN.md — Méridienne Immobilier

## Direction artistique
- **Positionnement** : agence immobilière haut de gamme, Toulouse, biens d'exception
- **Ton** : premium, éditorial, discret — inspiré presse archi (AD, Wallpaper*)
- **Anti-générique** : asymétrie, rupture de rythme, pas de card grid égale

## Palette
| Rôle | Nom | Hex |
|------|-----|-----|
| Fond principal | Crème | `#F5F0EB` |
| Fond secondaire | Sable | `#E8E0D8` |
| Texte | Encre | `#1A1A1A` |
| Accent unique | Terracotta | `#C4653A` |
| Accent hover | Terracotta foncé | `#A8522E` |

Pas de violet, pas d'indigo, pas de gradient décoratif.

## Typographie
| Usage | Police | Source |
|-------|--------|--------|
| Titres / Display | Fraunces (opsz, ital) | Google Fonts |
| Corps / UI | DM Sans | Google Fonts |

Titres très grands (clamp 3rem→7.5rem), utilisés comme éléments graphiques.

## Principes visuels
- Beaucoup de blanc, grandes photos plein cadre
- Mise en page asymétrique et éditoriale (jamais 50/50)
- Coins droits (aucun border-radius)
- Ombres quasi inexistantes
- Grille bento pour les biens (tailles variées)

## Motion
- Reveals au scroll via IntersectionObserver
- Parallax léger (0.1×) sur le hero uniquement
- Easing : `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out)
- `prefers-reduced-motion` respecté (animations désactivées)
- Anti-slop : pas de pulse, blur partout, hover-scale systématique, stagger-spam

## Wireframe
1. **NAV** — Logo serif gauche | liens discrets | bouton "Estimer" outline terracotta
2. **HERO** — Split 38/62 asymétrique, titre Fraunces géant + parallax photo
3. **BIENS** — Bento : 7-cols×2-rows + 2×5-cols empilées + 1 pleine largeur
4. **RUPTURE** — Fond encre, "15" géant terracotta, 3 stats en ligne
5. **AGENCE** — 60 texte / 40 image, offset vertical
6. **QUARTIERS** — Liste numérotée 01→04, image hover-reveal sticky
7. **CTA** — Fond sable, titre serif, champ adresse + bouton
8. **FOOTER** — 3 colonnes minimal

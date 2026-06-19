export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-sand bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="font-display text-xl tracking-tight">Méridienne</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/45">
              Immobilier d'exception à Toulouse.
              <br />
              Biens haut de gamme &amp; accompagnement sur-mesure.
            </p>
          </div>

          <address className="flex flex-col gap-2 text-sm not-italic text-ink/55">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/30">
              Contact
            </span>
            <a href="tel:+33561000000" className="transition-colors duration-300 hover:text-ink">
              05 61 00 00 00
            </a>
            <a href="mailto:contact@meridienne-immobilier.fr" className="transition-colors duration-300 hover:text-ink">
              contact@meridienne-immobilier.fr
            </a>
            <p className="mt-1">12 rue de la Pomme, 31000 Toulouse</p>
          </address>

          <nav className="flex flex-col gap-2 text-sm text-ink/55" aria-label="Pied de page">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/30">
              Navigation
            </span>
            <a href="#biens" className="transition-colors duration-300 hover:text-ink">Biens</a>
            <a href="#agence" className="transition-colors duration-300 hover:text-ink">L'Agence</a>
            <a href="#quartiers" className="transition-colors duration-300 hover:text-ink">Quartiers</a>
            <a href="#estimer" className="transition-colors duration-300 hover:text-ink">Estimer</a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-sand/60 pt-6 text-xs text-ink/30 md:flex-row md:justify-between">
          <p>&copy; {year} Méridienne Immobilier. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-300 hover:text-ink/50">Mentions légales</a>
            <a href="#" className="transition-colors duration-300 hover:text-ink/50">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

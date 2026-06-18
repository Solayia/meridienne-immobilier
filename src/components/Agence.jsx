import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Agence() {
  const [textRef, textVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="agence" className="py-20 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-5 md:gap-16">
          {/* Text — 60 % */}
          <div
            ref={textRef}
            className={`md:col-span-3 md:pt-16 transition-all duration-[1s] ease-expo-out ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
              L'agence
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-6xl">
              Un accompagnement
              <br />
              <em className="italic">sur-mesure</em>
            </h2>

            <div className="mt-8 max-w-lg space-y-5 text-base leading-relaxed text-ink/60 md:text-lg">
              <p>
                Depuis 2009, Meridienne accompagne une clientele exigeante dans la
                recherche de biens d'exception a Toulouse et dans toute la region
                Occitanie.
              </p>
              <p>
                Notre approche repose sur trois piliers : une ecoute attentive de
                vos besoins, une discretion absolue dans chaque transaction, et une
                connaissance fine du marche local qui nous permet d'identifier les
                opportunites avant qu'elles ne soient publiques.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
              <p className="text-sm font-medium tracking-wide text-terracotta">
                Caroline Verdier, fondatrice
              </p>
            </div>
          </div>

          {/* Image — 40 %, offset vertically */}
          <div
            ref={imgRef}
            className={`md:col-span-2 md:-mt-12 transition-all duration-[1.2s] ease-expo-out ${
              imgVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Bureau de l'agence Meridienne, espace lumineux et epure"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

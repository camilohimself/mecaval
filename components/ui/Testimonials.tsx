import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  service?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  // Placeholder testimonials - À remplacer avec vrais avis clients
  const defaultTestimonials: Testimonial[] = [
    {
      quote: "Service rapide et professionnel. Ma tondeuse est repartie comme neuve en 2 jours. Je recommande vivement !",
      author: "Jean-Pierre M.",
      location: "Sion",
      service: "Réparation tondeuse"
    },
    {
      quote: "Excellent accueil et diagnostic précis. Sylvain a pris le temps d'expliquer la panne. Prix honnête.",
      author: "Marie D.",
      location: "Savièse",
      service: "Diagnostic machine"
    },
    {
      quote: "Enfin un atelier sérieux dans la région ! Délai respecté et machine certifiée aux normes. Parfait.",
      author: "François R.",
      location: "Conthey",
      service: "Certification électrique"
    },
    {
      quote: "Contact direct avec le réparateur, c'est tellement plus simple. Travail impeccable sur mon vélo électrique.",
      author: "Sophie L.",
      location: "Sion",
      service: "Réparation VAE"
    },
    {
      quote: "Rapport qualité-prix excellent. Plus besoin d'aller jusqu'à Pfefferlé et attendre 3 semaines !",
      author: "Alain B.",
      location: "Savièse",
      service: "Entretien machines"
    }
  ];

  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <section className="section border-y">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-light border border-teal rounded-lg mb-4">
            <Quote className="w-7 h-7 text-teal" />
          </div>
          <h2 className="text-h2 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Témoignages authentiques de clients satisfaits
          </p>
        </div>

        {/* Testimonials Grid - 3 colonnes desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card card-interactive animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-teal/30" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-body text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-sm">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.location}
                </p>
                {testimonial.service && (
                  <p className="text-xs text-teal mt-2 font-medium">
                    {testimonial.service}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note pour développeur */}
        <div className="mt-12 card bg-rouge-light border-rouge text-center max-w-2xl mx-auto">
          <p className="text-sm text-rouge-dark font-medium">
            💬 Avis clients à collecter : Remplacer les placeholders par de vrais témoignages
          </p>
          <p className="text-xs text-rouge-dark/70 mt-2">
            Format recommandé : Citation courte (2-3 lignes) + Prénom + Initiale nom + Ville
          </p>
        </div>
      </div>
    </section>
  );
}

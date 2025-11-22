import { Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
  const tAtelier = useTranslations('atelier.testimonials');

  // Placeholder testimonials - Using translations
  const defaultTestimonials: Testimonial[] = [
    {
      quote: tAtelier('testimonial1Quote'),
      author: tAtelier('testimonial1Author'),
      location: tAtelier('testimonial1Location'),
      service: tAtelier('testimonial1Service')
    },
    {
      quote: tAtelier('testimonial2Quote'),
      author: tAtelier('testimonial2Author'),
      location: tAtelier('testimonial2Location'),
      service: tAtelier('testimonial2Service')
    },
    {
      quote: tAtelier('testimonial3Quote'),
      author: tAtelier('testimonial3Author'),
      location: tAtelier('testimonial3Location'),
      service: tAtelier('testimonial3Service')
    },
    {
      quote: tAtelier('testimonial4Quote'),
      author: tAtelier('testimonial4Author'),
      location: tAtelier('testimonial4Location'),
      service: tAtelier('testimonial4Service')
    },
    {
      quote: tAtelier('testimonial5Quote'),
      author: tAtelier('testimonial5Author'),
      location: tAtelier('testimonial5Location'),
      service: tAtelier('testimonial5Service')
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
            {tAtelier('title')}
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            {tAtelier('subtitle')}
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
            {tAtelier('note')}
          </p>
        </div>
      </div>
    </section>
  );
}

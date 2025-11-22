import { Camera } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category?: 'atelier' | 'machines' | 'equipement';
}

interface AtelierGalleryProps {
  images?: GalleryImage[];
}

export default function AtelierGallery({ images }: AtelierGalleryProps) {
  // Placeholder images structure - À remplacer avec vraies photos
  const defaultImages: GalleryImage[] = [
    { src: '/images/placeholder-atelier-1.jpg', alt: 'Atelier Mecaval - Vue générale', category: 'atelier' },
    { src: '/images/placeholder-atelier-2.jpg', alt: 'Sylvain au travail', category: 'atelier' },
    { src: '/images/placeholder-machine-1.jpg', alt: 'Machine de contrôle normes électriques', category: 'equipement' },
    { src: '/images/placeholder-machine-2.jpg', alt: 'Réparation moteur électrique', category: 'machines' },
    { src: '/images/placeholder-atelier-3.jpg', alt: 'Espace de travail organisé', category: 'atelier' },
    { src: '/images/placeholder-equipement-1.jpg', alt: 'Outils professionnels', category: 'equipement' },
  ];

  const galleryImages = images || defaultImages;

  return (
    <section className="section bg-gray-50">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">Notre Atelier en Images</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Découvrez notre environnement de travail et notre équipement professionnel
          </p>
        </div>

        {/* Gallery Grid - 3 colonnes desktop, 2 tablette, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="card card-interactive p-0 overflow-hidden group animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">

                {/* Placeholder Icon - À RETIRER quand vraies photos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>

                {/* TODO: Uncomment when real images available
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                */}

                {/* Placeholder Text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded">
                    <p className="text-sm font-semibold text-gray-900">{image.alt}</p>
                    {image.category && (
                      <p className="text-xs text-gray-600 mt-1 capitalize">{image.category}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note pour développeur */}
        <div className="mt-8 card bg-teal-light border-teal text-center">
          <p className="text-sm text-teal-dark font-medium">
            📸 Photos à ajouter : Placer les images dans <code className="bg-teal/10 px-2 py-1 rounded">/public/images/</code>
          </p>
        </div>
      </div>
    </section>
  );
}

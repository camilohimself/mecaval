import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactPage() {
  const faq = [
    {
      question: 'Quel est le délai de réparation ?',
      answer: 'Nous garantissons un délai maximum de 48h pour la plupart des réparations. Certaines pièces spéciales peuvent nécessiter un délai supplémentaire, nous vous informons toujours à l\'avance.'
    },
    {
      question: 'Faut-il prendre rendez-vous ?',
      answer: 'Non, vous pouvez passer directement à l\'atelier aux heures d\'ouverture. Pour un diagnostic approfondi, un appel préalable est recommandé mais pas obligatoire.'
    },
    {
      question: 'Le diagnostic est-il payant ?',
      answer: 'Le diagnostic coûte X CHF, mais ce montant est entièrement déduit si vous acceptez la réparation.'
    },
    {
      question: 'Proposez-vous un service de récupération ?',
      answer: 'Nous pouvons récupérer et livrer votre machine selon votre zone géographique. Contactez-nous pour connaître les modalités et tarifs.'
    },
    {
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer: 'Nous acceptons les paiements en espèces, carte bancaire et TWINT.'
    },
    {
      question: 'Avez-vous une garantie sur les réparations ?',
      answer: 'Oui, toutes nos réparations sont garanties. La durée dépend du type d\'intervention. Détails indiqués sur votre facture.'
    }
  ];

  return (
    <>
      <Header />
      <main>

        {/* Hero Section */}
        <section className="section border-b bg-gray-50">
          <div className="container text-center">
            <h1 className="text-display mb-4">
              Nous Contacter
            </h1>
            <p className="text-body text-xl max-w-2xl mx-auto">
              Une question ? Un devis ? Passez nous voir ou contactez-nous !
            </p>
          </div>
        </section>

        {/* Coordonnées Principales */}
        <section className="section border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Téléphone */}
              <a href="tel:0767080308" className="card hover:border-rouge transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rouge-light border border-rouge rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-rouge transition-colors">
                    <Phone className="w-6 h-6 text-rouge group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">Téléphone</h3>
                    <p className="text-xl font-bold text-rouge">076 708 03 08</p>
                    <p className="text-sm text-gray-600 mt-1">Lun-Sam • Appel direct</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@mecaval.ch" className="card hover:border-teal transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light border border-teal rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors">
                    <Mail className="w-6 h-6 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">Email</h3>
                    <p className="text-lg font-semibold text-teal">info@mecaval.ch</p>
                    <p className="text-sm text-gray-600 mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/41767080308" target="_blank" rel="noopener noreferrer" className="card hover:border-teal transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light border border-teal rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors">
                    <MessageCircle className="w-6 h-6 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">WhatsApp</h3>
                    <p className="text-lg font-semibold text-teal">076 708 03 08</p>
                    <p className="text-sm text-gray-600 mt-1">Message rapide</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Formulaire + Infos */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Formulaire */}
              <div>
                <h2 className="text-h2 mb-6">
                  Envoyez-nous un message
                </h2>
                <div className="card card-elevated">
                  <ContactForm />
                </div>
              </div>

              {/* Infos Pratiques */}
              <div className="space-y-6">

                {/* Horaires */}
                <div className="card card-elevated">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-teal-light border border-teal rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="text-h3">Horaires d'ouverture</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-900">Lundi - Vendredi</span>
                      <span className="text-gray-700">À définir</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-900">Samedi</span>
                      <span className="text-gray-700">À définir</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="font-semibold text-gray-900">Dimanche</span>
                      <span className="text-rouge font-semibold">Fermé</span>
                    </div>
                  </div>

                  <div className="mt-6 card bg-teal-light border-teal">
                    <p className="text-sm text-teal-dark font-medium">
                      Ouvert le samedi pour votre commodité !
                    </p>
                  </div>
                </div>

                {/* Adresse */}
                <div className="card card-elevated">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-rouge-light border border-rouge rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-rouge" />
                    </div>
                    <h3 className="text-h3">Notre Atelier</h3>
                  </div>

                  <p className="text-body mb-6">
                    <strong className="text-gray-900">Mecaval</strong><br />
                    [Adresse complète]<br />
                    1965 Savièse<br />
                    Valais, Suisse
                  </p>

                  <Button
                    variant="outline"
                    size="md"
                    icon={MapPin}
                    iconPosition="left"
                    href="https://maps.google.com/?q=Savièse"
                    fullWidth
                  >
                    Ouvrir dans Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Placeholder */}
        <section className="h-96 bg-gray-200 border-y border-gray-300">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-300 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-lg font-semibold text-gray-700">Google Maps à intégrer</p>
              <p className="text-sm text-gray-600">Coordonnées exactes à définir</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-light border border-teal rounded-lg mb-4">
                <HelpCircle className="w-7 h-7 text-teal" />
              </div>
              <h2 className="text-h2 mb-4">
                Questions Fréquentes
              </h2>
              <p className="text-body text-lg">
                Trouvez rapidement les réponses à vos questions
              </p>
            </div>

            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="card hover:border-teal transition-colors">
                  <h3 className="text-h4 mb-3 flex items-start gap-2">
                    <span className="text-teal flex-shrink-0">Q:</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-body text-sm pl-6">
                    <strong className="text-teal">R:</strong> {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 card bg-gray-100 border-gray-300 text-center">
              <p className="text-body text-lg mb-6">
                Vous n'avez pas trouvé la réponse à votre question ?
              </p>
              <Button
                variant="primary"
                size="lg"
                icon={Phone}
                iconPosition="left"
                href="tel:0767080308"
              >
                Appelez-nous : 076 708 03 08
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

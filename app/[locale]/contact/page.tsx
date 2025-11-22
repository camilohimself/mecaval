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
      answer: 'Le diagnostic coûte X CHF, mais ce montant est entièrement déduit si vous acceptez la réparation. Vous ne payez donc que si vous décidez de ne pas réparer.'
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
      answer: 'Oui, toutes nos réparations sont garanties. La durée dépend du type d\'intervention. Les détails de garantie sont indiqués sur votre facture.'
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-teal py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gris-900 mb-4">
                Nous Contacter
              </h1>
              <p className="text-xl text-gris-700 mb-6">
                Une question ? Un devis ? Passez nous voir ou contactez-nous !
              </p>
            </div>
          </div>
        </section>

        {/* Coordonnées Principales */}
        <section className="py-12 bg-white border-b border-gris-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Téléphone */}
              <a href="tel:0767080308" className="flex items-start gap-4 p-6 rounded-xl hover:bg-teal-50 transition-colors group">
                <div className="w-12 h-12 bg-rouge-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-rouge-700 transition-colors">
                  <Phone className="w-6 h-6 text-rouge-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gris-900 mb-1">Téléphone</h3>
                  <p className="text-2xl font-bold text-rouge-700">076 708 03 08</p>
                  <p className="text-sm text-gris-600 mt-1">Lun-Sam • Appel direct</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@mecaval.ch" className="flex items-start gap-4 p-6 rounded-xl hover:bg-teal-50 transition-colors group">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-700 transition-colors">
                  <Mail className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gris-900 mb-1">Email</h3>
                  <p className="text-lg font-semibold text-teal-700">info@mecaval.ch</p>
                  <p className="text-sm text-gris-600 mt-1">Réponse sous 24h</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/41767080308" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 rounded-xl hover:bg-teal-50 transition-colors group">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-700 transition-colors">
                  <MessageCircle className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gris-900 mb-1">WhatsApp</h3>
                  <p className="text-lg font-semibold text-teal-700">076 708 03 08</p>
                  <p className="text-sm text-gris-600 mt-1">Message rapide</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Formulaire + Infos */}
        <section className="py-12 sm:py-16 md:py-20 bg-gris-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div>
                <h2 className="text-3xl font-bold text-gris-900 mb-6">
                  Envoyez-nous un message
                </h2>
                <div className="bg-white rounded-xl border-2 border-gris-200 p-8 shadow-lg">
                  <ContactForm />
                </div>
              </div>

              {/* Infos Pratiques */}
              <div className="space-y-8">
                {/* Horaires */}
                <div className="bg-white rounded-xl border-2 border-gris-200 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-teal-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gris-900">Horaires d'ouverture</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-gris-200">
                      <span className="font-semibold text-gris-900">Lundi - Vendredi</span>
                      <span className="text-gris-700">À définir</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gris-200">
                      <span className="font-semibold text-gris-900">Samedi</span>
                      <span className="text-gris-700">À définir</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="font-semibold text-gris-900">Dimanche</span>
                      <span className="text-rouge-700 font-semibold">Fermé</span>
                    </div>
                  </div>

                  <div className="mt-6 bg-teal-50 rounded-lg p-4">
                    <p className="text-sm text-teal-900">
                      <strong>Ouvert le samedi</strong> pour votre commodité !
                    </p>
                  </div>
                </div>

                {/* Adresse */}
                <div className="bg-white rounded-xl border-2 border-gris-200 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-rouge-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-rouge-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gris-900">Notre Atelier</h3>
                  </div>

                  <p className="text-lg text-gris-700 mb-4">
                    <strong className="text-gris-900">Mecaval</strong><br />
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
                    className="w-full"
                  >
                    Ouvrir dans Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="h-96 bg-gris-300">
          <div className="w-full h-full flex items-center justify-center text-gris-600">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-gris-500" />
              <p className="text-lg font-semibold">Google Maps à intégrer</p>
              <p className="text-sm">Coordonnées exactes à définir</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <HelpCircle className="w-8 h-8 text-teal-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gris-900 mb-4">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-gris-700">
                Trouvez rapidement les réponses à vos questions
              </p>
            </div>

            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-gris-50 rounded-xl p-6 border-2 border-gris-200 hover:border-teal-700 transition-colors">
                  <h3 className="text-lg font-bold text-gris-900 mb-3 flex items-start gap-3">
                    <span className="text-teal-700 flex-shrink-0">Q:</span>
                    {item.question}
                  </h3>
                  <p className="text-gris-700 pl-7">
                    <strong className="text-teal-700">R:</strong> {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-gris-100 rounded-xl p-8">
              <p className="text-lg text-gris-700 mb-4">
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

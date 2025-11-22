import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactPage() {
  const tContact = useTranslations('contact');
  const tCommon = useTranslations('common');
  const tCta = useTranslations('cta');

  const faq = [
    {
      question: tContact('faq.q1'),
      answer: tContact('faq.a1')
    },
    {
      question: tContact('faq.q2'),
      answer: tContact('faq.a2')
    },
    {
      question: tContact('faq.q3'),
      answer: tContact('faq.a3')
    },
    {
      question: tContact('faq.q4'),
      answer: tContact('faq.a4')
    },
    {
      question: tContact('faq.q5'),
      answer: tContact('faq.a5')
    },
    {
      question: tContact('faq.q6'),
      answer: tContact('faq.a6')
    }
  ];

  return (
    <>
      <Header />
      <main>

        {/* Hero Section */}
        <section className="section border-b bg-gray-50 animate-fadeIn">
          <div className="container text-center">
            <h1 className="text-display mb-4 animate-slideUp">
              {tContact('hero.title')}
            </h1>
            <p className="text-body text-xl max-w-2xl mx-auto animate-slideUp animation-delay-100">
              {tContact('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Coordonnées Principales */}
        <section className="section border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Téléphone */}
              <a href="tel:0767080308" className="card card-interactive animate-slideUp animation-delay-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rouge-light border border-rouge rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-rouge transition-colors">
                    <Phone className="w-6 h-6 text-rouge group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">{tContact('cards.phone')}</h3>
                    <p className="text-xl font-bold text-rouge">076 708 03 08</p>
                    <p className="text-sm text-gray-600 mt-1">{tContact('cards.phoneHours')}</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@mecaval.ch" className="card card-interactive animate-slideUp animation-delay-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light border border-teal rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors">
                    <Mail className="w-6 h-6 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">{tContact('cards.email')}</h3>
                    <p className="text-lg font-semibold text-teal">info@mecaval.ch</p>
                    <p className="text-sm text-gray-600 mt-1">{tContact('cards.emailResponse')}</p>
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/41767080308" target="_blank" rel="noopener noreferrer" className="card card-interactive animate-slideUp animation-delay-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light border border-teal rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors">
                    <MessageCircle className="w-6 h-6 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-h4 mb-2">{tContact('cards.whatsapp')}</h3>
                    <p className="text-lg font-semibold text-teal">076 708 03 08</p>
                    <p className="text-sm text-gray-600 mt-1">{tContact('cards.whatsappQuick')}</p>
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
                  {tContact('form.title')}
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
                    <h3 className="text-h3">{tContact('hours.title')}</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-900">{tContact('hours.weekdays')}</span>
                      <span className="text-gray-700">{tContact('hours.weekdaysHours')}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-900">{tContact('hours.saturday')}</span>
                      <span className="text-gray-700">{tContact('hours.saturdayHours')}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="font-semibold text-gray-900">{tContact('hours.sunday')}</span>
                      <span className="text-rouge font-semibold">{tContact('hours.sundayHours')}</span>
                    </div>
                  </div>

                  <div className="mt-6 card bg-teal-light border-teal">
                    <p className="text-sm text-teal-dark font-medium">
                      {tContact('hours.note')}
                    </p>
                  </div>
                </div>

                {/* Adresse */}
                <div className="card card-elevated">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-rouge-light border border-rouge rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-rouge" />
                    </div>
                    <h3 className="text-h3">{tContact('location.title')}</h3>
                  </div>

                  <p className="text-body mb-6">
                    <strong className="text-gray-900">{tContact('location.name')}</strong><br />
                    {tContact('location.addressLine1')}<br />
                    {tContact('location.addressLine2')}<br />
                    {tContact('location.addressLine3')}
                  </p>

                  <Button
                    variant="outline"
                    size="md"
                    icon={MapPin}
                    iconPosition="left"
                    href="https://maps.google.com/?q=Savièse"
                    fullWidth
                  >
                    {tCta('openGoogleMaps')}
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
              <p className="text-lg font-semibold text-gray-700">{tContact('location.mapPlaceholder')}</p>
              <p className="text-sm text-gray-600">{tContact('location.mapPlaceholderSubtext')}</p>
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
                {tContact('faq.title')}
              </h2>
              <p className="text-body text-lg">
                {tContact('faq.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="card hover:border-teal transition-colors">
                  <h3 className="text-h4 mb-3 flex items-start gap-2">
                    <span className="text-teal flex-shrink-0">{tCommon('question')}</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-body text-sm pl-6">
                    <strong className="text-teal">{tCommon('answer')}</strong> {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 card bg-gray-100 border-gray-300 text-center">
              <p className="text-body text-lg mb-6">
                {tContact('faq.notFound')}
              </p>
              <Button
                variant="primary"
                size="lg"
                icon={Phone}
                iconPosition="left"
                href="tel:0767080308"
              >
                {tContact('faq.callUs')}
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

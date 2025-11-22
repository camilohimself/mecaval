import { useTranslations } from 'next-intl';
import { Phone, ArrowRight, Zap, Settings, Bike, CheckCircle, Clock, Award, MapPin } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const t = useTranslations('home');
  const tCta = useTranslations('cta');

  return (
    <>
      <Header />
      <main>

        {/* Hero Section - Clean & Professional */}
        <section className="section border-b relative overflow-hidden animate-fadeIn">
          {/* Background gradient - TRÈS subtil avec couleurs Mecaval */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-light/15 via-white to-rouge-light/10" />
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column - Content */}
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-light text-teal-dark text-sm font-semibold rounded-full border border-teal animate-slideUp">
                  <MapPin className="w-4 h-4" />
                  <span>{t('hero.location')}</span>
                </div>

                {/* Hero Title */}
                <div className="space-y-4 animate-slideUp animation-delay-100">
                  <h1 className="text-display text-balance">
                    {t('hero.title')}
                  </h1>
                  <p className="text-body text-xl max-w-xl mx-auto lg:mx-0">
                    {t('hero.subtitle')}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp animation-delay-200">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={Phone}
                    iconPosition="left"
                    href="tel:0767080308"
                  >
                    076 708 03 08
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    href="#contact"
                  >
                    {tCta('quote')}
                  </Button>
                </div>

                {/* Trust Indicators - Clean Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-4 animate-slideUp animation-delay-300">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-900">
                      <CheckCircle className="w-5 h-5 text-teal" />
                      <span className="font-semibold text-sm">{t('hero.badge1')}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-900">
                      <Award className="w-5 h-5 text-teal" />
                      <span className="font-semibold text-sm">{t('hero.badge2')}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-900">
                      <Clock className="w-5 h-5 text-teal" />
                      <span className="font-semibold text-sm">{t('hero.badge3')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Placeholder */}
              <div className="lg:col-span-5">
                <div className="card card-elevated p-12 bg-gray-50 flex items-center justify-center min-h-[400px]">
                  <div className="text-center space-y-4">
                    <Settings className="w-24 h-24 text-teal mx-auto" />
                    <p className="text-sm text-gray-500">{t('hero.photoPlaceholder')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Grid Professional */}
        <section className="section bg-gray">
          <div className="container text-center">

            {/* Section Header */}
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-h2 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-body text-lg">
                {t('services.subtitle')}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid-3 text-left">

              {/* Service 1 - Machines Électriques */}
              <div className="card card-elevated card-interactive animate-slideUp animation-delay-100">

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-light border border-teal rounded-lg transition-transform duration-300 hover:scale-110">
                    <Zap className="w-6 h-6 text-teal" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-h3 mb-3">
                  {t('services.electric.title')}
                </h3>
                <p className="text-body mb-6">
                  {t('services.electric.description')}
                </p>

                {/* CTA */}
                <a
                  href="/services#electric"
                  className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  {tCta('learnMore')}
                  <ArrowRight className="w-4 h-4 transition-transform hover:translate-x-1" />
                </a>
              </div>

              {/* Service 2 - Machines Thermiques */}
              <div className="card card-elevated card-interactive animate-slideUp animation-delay-200">

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-rouge-light border border-rouge rounded-lg transition-transform duration-300 hover:scale-110">
                    <Settings className="w-6 h-6 text-rouge" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-h3 mb-3">
                  {t('services.thermal.title')}
                </h3>
                <p className="text-body mb-6">
                  {t('services.thermal.description')}
                </p>

                {/* CTA */}
                <a
                  href="/services#thermal"
                  className="inline-flex items-center gap-2 text-rouge font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  {tCta('learnMore')}
                  <ArrowRight className="w-4 h-4 transition-transform hover:translate-x-1" />
                </a>
              </div>

              {/* Service 3 - Vélos */}
              <div className="card card-elevated card-interactive animate-slideUp animation-delay-300">

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-light border border-teal rounded-lg transition-transform duration-300 hover:scale-110">
                    <Bike className="w-6 h-6 text-teal" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-h3 mb-3">
                  {t('services.bikes.title')}
                </h3>
                <p className="text-body mb-6">
                  {t('services.bikes.description')}
                </p>

                {/* CTA */}
                <a
                  href="/services#bikes"
                  className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  {tCta('learnMore')}
                  <ArrowRight className="w-4 h-4 transition-transform hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Boxed Layout */}
        <section className="section border-b">
          <div className="container">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-h2 mb-4">
                {t('why.title')}
              </h2>
              <p className="text-body text-lg">
                {t('why.subtitle')}
              </p>
            </div>

            {/* Grid 2x2 */}
            <div className="grid-2 max-w-4xl mx-auto">

              {/* Reason 1 - Fast */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-rouge-light border border-rouge rounded-lg">
                      <Clock className="w-5 h-5 text-rouge" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">
                      {t('why.fast.title')}
                    </h3>
                    <p className="text-body text-sm">
                      {t('why.fast.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 2 - Quality */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-light border border-teal rounded-lg">
                      <CheckCircle className="w-5 h-5 text-teal" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">
                      {t('why.quality.title')}
                    </h3>
                    <p className="text-body text-sm">
                      {t('why.quality.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 3 - Direct Contact */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-light border border-teal rounded-lg">
                      <Phone className="w-5 h-5 text-teal" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">
                      {t('why.direct.title')}
                    </h3>
                    <p className="text-body text-sm">
                      {t('why.direct.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 4 - Certified */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-rouge-light border border-rouge rounded-lg">
                      <Award className="w-5 h-5 text-rouge" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">
                      {t('why.certified.title')}
                    </h3>
                    <p className="text-body text-sm">
                      {t('why.certified.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Section - Clean & Centered */}
        <section className="section bg-gray-900 text-white">
          <div className="container">

            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-h2">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-gray-300">
                {tCta('visitUs')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  icon={Phone}
                  iconPosition="left"
                  href="tel:0767080308"
                >
                  076 708 03 08
                </Button>
                <a
                  href="/contact"
                  className="btn btn-lg btn-outline-teal bg-white text-gray-900 border-white hover:bg-gray-100"
                >
                  <span>{tCta('contactUs')}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

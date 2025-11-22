import { useTranslations } from 'next-intl';
import { Zap, Settings, Bike, Building2, CheckCircle, Phone, ArrowRight, Award, Clock, Target, Wrench, Shield, TrendingUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const tCta = useTranslations('cta');
  const tCommon = useTranslations('common');
  const tServices = useTranslations('services');

  const essentialServices = [
    {
      icon: Zap,
      title: tServices('electric.title'),
      badge: tServices('electric.badge'),
      badgeColor: 'rouge',
      description: tServices('electric.description'),
      startingPrice: tServices('electric.startingPrice'),
      features: [
        tServices('electric.feature1'),
        tServices('electric.feature2'),
        tServices('electric.feature3'),
        tServices('electric.feature4')
      ],
      link: '#electric'
    },
    {
      icon: Settings,
      title: tServices('thermal.title'),
      badge: tServices('thermal.badge'),
      badgeColor: 'teal',
      description: tServices('thermal.description'),
      startingPrice: tServices('thermal.startingPrice'),
      features: [
        tServices('thermal.feature1'),
        tServices('thermal.feature2'),
        tServices('thermal.feature3'),
        tServices('thermal.feature4')
      ],
      link: '#thermal'
    },
    {
      icon: Bike,
      title: tServices('bikes.title'),
      badge: tServices('bikes.badge'),
      badgeColor: 'teal',
      description: tServices('bikes.description'),
      startingPrice: tServices('bikes.startingPrice'),
      features: [
        tServices('bikes.feature1'),
        tServices('bikes.feature2'),
        tServices('bikes.feature3'),
        tServices('bikes.feature4')
      ],
      link: '#bikes'
    }
  ];

  const metrics = [
    { value: tServices('metrics.metric1Value'), label: tServices('metrics.metric1Label'), subtext: tServices('metrics.metric1Sub') },
    { value: tServices('metrics.metric2Value'), label: tServices('metrics.metric2Label'), subtext: tServices('metrics.metric2Sub') },
    { value: tServices('metrics.metric3Value'), label: tServices('metrics.metric3Label'), subtext: tServices('metrics.metric3Sub') }
  ];

  const pricingCategories = [
    {
      title: tServices('pricing.diagnostic.title'),
      price: tServices('pricing.diagnostic.price'),
      note: tServices('pricing.diagnostic.note'),
      features: [
        tServices('pricing.diagnostic.feature1'),
        tServices('pricing.diagnostic.feature2'),
        tServices('pricing.diagnostic.feature3')
      ]
    },
    {
      title: tServices('pricing.repair.title'),
      price: tServices('pricing.repair.price'),
      note: tServices('pricing.repair.note'),
      features: [
        tServices('pricing.repair.feature1'),
        tServices('pricing.repair.feature2'),
        tServices('pricing.repair.feature3')
      ]
    },
    {
      title: tServices('pricing.certification.title'),
      price: tServices('pricing.certification.price'),
      note: tServices('pricing.certification.note'),
      features: [
        tServices('pricing.certification.feature1'),
        tServices('pricing.certification.feature2'),
        tServices('pricing.certification.feature3')
      ],
      highlight: true
    }
  ];

  const b2bServices = [
    {
      icon: Building2,
      title: tServices('b2b.contracts.title'),
      description: tServices('b2b.contracts.description'),
      benefits: [
        tServices('b2b.contracts.benefit1'),
        tServices('b2b.contracts.benefit2'),
        tServices('b2b.contracts.benefit3')
      ]
    },
    {
      icon: Wrench,
      title: tServices('b2b.construction.title'),
      description: tServices('b2b.construction.description'),
      benefits: [
        tServices('b2b.construction.benefit1'),
        tServices('b2b.construction.benefit2'),
        tServices('b2b.construction.benefit3')
      ]
    },
    {
      icon: TrendingUp,
      title: tServices('b2b.landscaping.title'),
      description: tServices('b2b.landscaping.description'),
      benefits: [
        tServices('b2b.landscaping.benefit1'),
        tServices('b2b.landscaping.benefit2'),
        tServices('b2b.landscaping.benefit3')
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>

        {/* Hero Section - Ultra Minimal */}
        <section className="section border-b animate-fadeIn">
          <div className="container text-center max-w-4xl mx-auto space-y-8">

            {/* Titre seul */}
            <h1 className="text-display animate-slideUp">
              {tServices('hero.title')}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 animate-slideUp animation-delay-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">
                <Zap className="w-4 h-4 text-rouge" />
                <span className="text-sm font-medium text-gray-900">{tServices('hero.badge1')}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">
                <Shield className="w-4 h-4 text-teal" />
                <span className="text-sm font-medium text-gray-900">{tServices('hero.badge2')}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">
                <Target className="w-4 h-4 text-teal" />
                <span className="text-sm font-medium text-gray-900">{tServices('hero.badge3')}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-200">
              <Button variant="primary" size="lg" icon={Phone} iconPosition="left" href="tel:0767080308">
                076 708 03 08
              </Button>
              <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right" href="#pricing">
                {tCta('seeRates')}
              </Button>
            </div>

          </div>
        </section>

        {/* Essential Services - Grid 3 colonnes Next.js */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">{tServices('essential.title')}</h2>
              <p className="text-body text-lg">{tServices('essential.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {essentialServices.map((service, index) => {
                const Icon = service.icon;
                const badgeBg = service.badgeColor === 'rouge' ? 'bg-rouge-light text-rouge-dark border-rouge' : 'bg-teal-light text-teal-dark border-teal';

                return (
                  <a key={index} href={service.link} className={`card card-interactive animate-slideUp animation-delay-${(index + 1) * 100}`}>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex px-2 py-1 text-xs font-bold rounded border ${badgeBg}`}>
                        {service.badge}
                      </div>
                      <div className={`w-10 h-10 ${service.badgeColor === 'rouge' ? 'bg-rouge-light' : 'bg-teal-light'} rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                        <Icon className={`w-5 h-5 ${service.badgeColor === 'rouge' ? 'text-rouge' : 'text-teal'}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-h3 mb-2">{service.title}</h3>
                    <p className="text-body text-sm mb-4">{service.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">{tCommon('from')} </span>
                      <span className="text-2xl font-bold text-gray-900">{service.startingPrice}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Callout Premium - Différenciateur (comme React Server Components) */}
        <section id="electric" className="section border-y bg-gradient-to-br from-teal-light to-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal text-white text-xs font-bold rounded-full mb-4">
                  <Award className="w-3 h-3" />
                  {tServices('callout.badge')}
                </div>

                <h2 className="text-display mb-4">
                  {tServices('callout.title')}
                </h2>

                <p className="text-body text-xl mb-6">
                  {tServices('callout.subtitle')}
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    tServices('callout.feature1'),
                    tServices('callout.feature2'),
                    tServices('callout.feature3'),
                    tServices('callout.feature4')
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-body">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="primary" size="lg" href="tel:0767080308">
                  {tCta('requestDiagnostic')}
                </Button>
              </div>

              {/* Right - Visual Placeholder */}
              <div className="card bg-white p-12 text-center">
                <Shield className="w-32 h-32 text-teal mx-auto mb-4" />
                <p className="text-sm text-gray-500">Photo machine de contrôle à venir</p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics - Vercel Style */}
        <section className="section border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-500">{metric.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Machines Thermiques - Détail rapide */}
        <section id="thermal" className="section bg-gray-50">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-rouge-light border border-rouge rounded-lg mb-4">
                <Settings className="w-7 h-7 text-rouge" />
              </div>
              <h2 className="text-h2 mb-4">{tServices('thermal.title')}</h2>
              <p className="text-body text-lg">{tServices('thermal.description')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="card">
                <h3 className="text-h4 mb-4">{tServices('thermal.serviceTitle')}</h3>
                <ul className="space-y-2">
                  {[tServices('thermal.serviceFeature1'), tServices('thermal.serviceFeature2'), tServices('thermal.serviceFeature3'), tServices('thermal.serviceFeature4')].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-rouge flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-4">{tServices('thermal.repairTitle')}</h3>
                <ul className="space-y-2">
                  {[tServices('thermal.repairFeature1'), tServices('thermal.repairFeature2'), tServices('thermal.repairFeature3'), tServices('thermal.repairFeature4')].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-rouge flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vélos - Détail rapide */}
        <section id="bikes" className="section border-b">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-light border border-teal rounded-lg mb-4">
                <Bike className="w-7 h-7 text-teal" />
              </div>
              <h2 className="text-h2 mb-4">{tServices('bikes.title')}</h2>
              <p className="text-body text-lg">{tServices('bikes.description')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="card">
                <h3 className="text-h4 mb-4">{tServices('bikes.serviceTitle')}</h3>
                <ul className="space-y-2">
                  {[tServices('bikes.serviceFeature1'), tServices('bikes.serviceFeature2'), tServices('bikes.serviceFeature3'), tServices('bikes.serviceFeature4')].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-4">{tServices('bikes.electricTitle')}</h3>
                <ul className="space-y-2">
                  {[tServices('bikes.electricFeature1'), tServices('bikes.electricFeature2'), tServices('bikes.electricFeature3'), tServices('bikes.electricFeature4')].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 card bg-teal-light border-teal text-center">
              <p className="text-sm text-teal-dark font-semibold">
                {tServices('bikes.speedpedNote')}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing - Vercel Pricing Style */}
        <section id="pricing" className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">{tServices('pricing.title')}</h2>
              <p className="text-body text-lg">{tServices('pricing.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingCategories.map((category, index) => (
                <div
                  key={index}
                  className={`card ${category.highlight ? 'border-teal bg-teal-light' : 'bg-white'}`}
                >
                  <h3 className="text-h3 mb-2">{category.title}</h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gray-900">{category.price}</div>
                    <div className="text-sm text-gray-600">{category.note}</div>
                  </div>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`w-4 h-4 ${category.highlight ? 'text-teal' : 'text-gray-400'} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center card bg-white border-gray-300 max-w-2xl mx-auto">
              <p className="text-sm text-gray-600">
                Tarifs indicatifs hors pièces détachées. Prix final selon état de la machine. Devis gratuit.
              </p>
            </div>
          </div>
        </section>

        {/* B2B Services - Dark Section (Vercel AI Cloud style) */}
        <section className="section bg-gray-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rouge text-white text-xs font-bold rounded-full mb-4">
                <Building2 className="w-3 h-3" />
                PROFESSIONNELS
              </div>
              <h2 className="text-h2 text-white mb-4">{tServices('b2b.title')}</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {tServices('b2b.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {b2bServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="card bg-gray-800 border-gray-700">
                    <Icon className="w-8 h-8 text-rouge mb-4" />
                    <h3 className="text-h4 text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-rouge flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Button variant="primary" size="lg" icon={Phone} iconPosition="left" href="tel:0767080308">
                {tCta('contactB2B')}
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section border-t">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-h2">{tServices('cta.title')}</h2>
              <p className="text-body text-lg">
                {tServices('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" icon={Phone} iconPosition="left" href="tel:0767080308">
                  076 708 03 08
                </Button>
                <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right" href="/contact">
                  {tCta('findUs')}
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

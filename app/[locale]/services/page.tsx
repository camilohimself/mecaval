import { useTranslations } from 'next-intl';
import { Zap, Settings, Bike, Building2, CheckCircle, Phone, ArrowRight, Award, Clock, Target, Wrench, Shield, TrendingUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const tCta = useTranslations('cta');

  const essentialServices = [
    {
      icon: Zap,
      title: 'Machines Électriques',
      badge: 'URGENT',
      badgeColor: 'rouge',
      description: 'Réparation complète + certification normes électriques',
      startingPrice: '50 CHF',
      features: [
        'Diagnostic professionnel',
        'Réparation toutes marques',
        'Certificat de conformité',
        'Garantie incluse'
      ],
      link: '#electric'
    },
    {
      icon: Settings,
      title: 'Machines Thermiques',
      badge: 'SAISON',
      badgeColor: 'teal',
      description: 'Entretien et réparation moteurs essence',
      startingPrice: '80 CHF',
      features: [
        'Révision complète',
        'Nettoyage carburateur',
        'Affûtage lames',
        'Hivernage'
      ],
      link: '#thermal'
    },
    {
      icon: Bike,
      title: 'Vélos & E-bikes',
      badge: 'EXPRESS',
      badgeColor: 'teal',
      description: 'Tous types de vélos et vélos électriques',
      startingPrice: '60 CHF',
      features: [
        'Révision complète',
        'Réglage précis',
        'Diagnostic VAE',
        'Service rapide'
      ],
      link: '#bikes'
    }
  ];

  const metrics = [
    { value: '48h', label: 'Délai maximum', subtext: 'vs 2-3 semaines ailleurs' },
    { value: '100%', label: 'Machines testées', subtext: 'Avant livraison' },
    { value: '0 CHF', label: 'Frais cachés', subtext: 'Devis transparent' }
  ];

  const pricingCategories = [
    {
      title: 'Diagnostic',
      price: '50 CHF',
      note: 'Déduit si réparation',
      features: ['Analyse complète', 'Devis détaillé', 'Explications']
    },
    {
      title: 'Réparation',
      price: 'Variable',
      note: 'Selon panne',
      features: ['Pièces qualité', 'Délai 48h', 'Garantie']
    },
    {
      title: 'Certification',
      price: 'Inclus',
      note: 'Gratuit',
      features: ['Test normes', 'Certificat', 'Conformité'],
      highlight: true
    }
  ];

  const b2bServices = [
    {
      icon: Building2,
      title: 'Contrats Annuels',
      description: 'Maintenance préventive avec tarifs négociés',
      benefits: ['Planning fixe', 'Tarifs -15%', 'Priorité']
    },
    {
      icon: Wrench,
      title: 'BTP & Construction',
      description: 'Service dédié métiers du bâtiment',
      benefits: ['Dépannage rapide', 'Devis 24h', 'Factures détaillées']
    },
    {
      icon: TrendingUp,
      title: 'Paysagistes',
      description: 'Entretien saisonnier parc machines',
      benefits: ['Remise en service', 'Suivi saison', 'Hivernage']
    }
  ];

  return (
    <>
      <Header />
      <main>

        {/* Hero Section - Ultra Minimal */}
        <section className="section border-b">
          <div className="container text-center max-w-4xl mx-auto space-y-8">

            {/* Titre seul */}
            <h1 className="text-display">
              Réparation en 48 heures.
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">
                <Zap className="w-4 h-4 text-rouge" />
                <span className="text-sm font-medium text-gray-900">48h garanti</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">
                <Shield className="w-4 h-4 text-teal" />
                <span className="text-sm font-medium text-gray-900">Normes certifiées</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">
                <Target className="w-4 h-4 text-teal" />
                <span className="text-sm font-medium text-gray-900">Contact direct</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" icon={Phone} iconPosition="left" href="tel:0767080308">
                076 708 03 08
              </Button>
              <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right" href="#pricing">
                Voir les tarifs
              </Button>
            </div>

          </div>
        </section>

        {/* Essential Services - Grid 3 colonnes Next.js */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">Services Essentiels</h2>
              <p className="text-body text-lg">Réparation rapide et professionnelle</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {essentialServices.map((service, index) => {
                const Icon = service.icon;
                const badgeBg = service.badgeColor === 'rouge' ? 'bg-rouge-light text-rouge-dark border-rouge' : 'bg-teal-light text-teal-dark border-teal';

                return (
                  <a key={index} href={service.link} className="card hover:shadow-lg transition-all group">
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex px-2 py-1 text-xs font-bold rounded border ${badgeBg}`}>
                        {service.badge}
                      </div>
                      <div className={`w-10 h-10 ${service.badgeColor === 'rouge' ? 'bg-rouge-light' : 'bg-teal-light'} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${service.badgeColor === 'rouge' ? 'text-rouge' : 'text-teal'}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-h3 mb-2">{service.title}</h3>
                    <p className="text-body text-sm mb-4">{service.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">À partir de </span>
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
                  DIFFÉRENCIATEUR MAJEUR
                </div>

                <h2 className="text-display mb-4">
                  Contrôle Normes Électriques
                </h2>

                <p className="text-body text-xl mb-6">
                  Seul atelier du Valais avec machine de certification complète
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Machine de diagnostic professionnelle',
                    'Certificat de conformité officiel',
                    'Remise aux normes garantie',
                    'Sécurité totale pour vos assurances'
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
                  Demander un diagnostic
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h2 className="text-h2 mb-4">Machines Thermiques</h2>
              <p className="text-body text-lg">Tondeuses, débroussailleuses, tronçonneuses - Entretien saisonnier complet</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-h4 mb-4">Révision Complète</h3>
                <ul className="space-y-2">
                  {['Vidange + filtres', 'Nettoyage carburateur', 'Réglage moteur', 'Test performance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-rouge flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-4">Réparations Courantes</h3>
                <ul className="space-y-2">
                  {['Problème démarrage', 'Remplacement lanceur', 'Affûtage lames', 'Diagnostic panne'].map((item, i) => (
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
              <h2 className="text-h2 mb-4">Vélos & E-bikes</h2>
              <p className="text-body text-lg">VTT, route, ville, électriques - Entretien et réparation tous types</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-h4 mb-4">Services Vélos</h3>
                <ul className="space-y-2">
                  {['Révision complète', 'Réglage freins/vitesses', 'Changement pneus', 'Entretien transmission'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-4">Vélos Électriques</h3>
                <ul className="space-y-2">
                  {['Diagnostic VAE', 'Batterie & moteur', 'Électronique embarquée', 'Mise à jour système'].map((item, i) => (
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
                Partenariat Speedped - Commande de vélos sur demande
              </p>
            </div>
          </div>
        </section>

        {/* Pricing - Vercel Pricing Style */}
        <section id="pricing" className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">Tarification Transparente</h2>
              <p className="text-body text-lg">Pas de surprises - Devis détaillé avant intervention</p>
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
              <h2 className="text-h2 text-white mb-4">Solutions B2B</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Services sur mesure pour entreprises du bâtiment et de la construction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                Contacter pour devis B2B
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section border-t">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-h2">Besoin d'une réparation rapide ?</h2>
              <p className="text-body text-lg">
                Appelez-nous ou passez directement à l'atelier à Savièse
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" icon={Phone} iconPosition="left" href="tel:0767080308">
                  076 708 03 08
                </Button>
                <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right" href="/contact">
                  Nous trouver
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

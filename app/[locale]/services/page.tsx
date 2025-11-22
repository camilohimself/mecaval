import { useTranslations } from 'next-intl';
import { Zap, Settings, Bike, Building2, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import PricingTable from '@/components/ui/PricingTable';

export default function ServicesPage() {
  const tCta = useTranslations('cta');

  return (
    <>
      <Header />
      <main>

        {/* Hero Section - Clean */}
        <section className="section border-b bg-gray-50">
          <div className="container text-center">
            <h1 className="text-display mb-4">
              Services de Réparation Professionnels
            </h1>
            <p className="text-body text-xl max-w-3xl mx-auto">
              Machines électriques, thermiques et vélos • Grille tarifaire transparente • Savièse, Valais
            </p>
          </div>
        </section>

        {/* Jump Links Navigation - Sticky */}
        <section className="sticky top-16 z-40 bg-white border-b border-gray-200">
          <div className="container">
            <nav className="flex gap-2 md:gap-3 overflow-x-auto py-4 -mx-4 px-4">
              <a href="#electric" className="whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-light hover:text-teal-dark transition-colors">
                Électriques
              </a>
              <a href="#thermal" className="whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-rouge-light hover:text-rouge-dark transition-colors">
                Thermiques
              </a>
              <a href="#bikes" className="whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-light hover:text-teal-dark transition-colors">
                Vélos
              </a>
              <a href="#b2b" className="whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                B2B
              </a>
              <a href="#pricing" className="whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium bg-rouge text-white hover:bg-rouge-dark transition-colors">
                Tarifs
              </a>
            </nav>
          </div>
        </section>

        {/* Section 1 - Machines Électriques */}
        <section id="electric" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Left Column */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-light border border-teal rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-teal" />
                  </div>
                  <h2 className="text-h2">Machines Électriques</h2>
                </div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-teal-light text-teal-dark text-sm font-semibold rounded-full border border-teal mb-4">
                    Remise aux normes certifiée
                  </span>
                  <p className="text-body mb-4">
                    Nous réparons tous types d'outils électriques professionnels et domestiques avec notre machine de diagnostic électrique professionnelle.
                  </p>
                  <p className="text-body">
                    Chaque machine réparée est contrôlée et remise aux normes électriques avant livraison. Certificat de conformité inclus.
                  </p>
                </div>

                <div className="card bg-teal-light border-teal">
                  <h3 className="text-h4 mb-4">Ce que nous réparons</h3>
                  <ul className="space-y-2">
                    {[
                      'Perceuses, visseuses, meuleuses',
                      'Scies circulaires et scies sauteuses',
                      'Ponceuses, raboteuses, défonceuses',
                      'Marteaux perforateurs',
                      'Compresseurs électriques',
                      'Aspirateurs professionnels'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="card border-teal">
                  <h3 className="text-h4 mb-6">Types de réparations</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Remplacement charbons moteur', desc: 'Perte de puissance, charbons usés' },
                      { title: 'Réparation câble alimentation', desc: 'Câbles coupés, dénudés, abîmés' },
                      { title: 'Remplacement interrupteurs', desc: 'Interrupteur défectueux ou cassé' },
                      { title: 'Réparation cartes électroniques', desc: 'Variateurs de vitesse, régulateurs' },
                      { title: 'Bobinage moteur', desc: 'Moteur brûlé ou court-circuit' },
                      { title: 'Contrôle normes électriques', desc: 'Certification + certificat officiel' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                        <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Machines Thermiques */}
        <section id="thermal" className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Left Column - Reverse Order on Mobile */}
              <div className="order-2 lg:order-1">
                <div className="card border-rouge">
                  <h3 className="text-h4 mb-6">Services d'entretien</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Révision complète', desc: 'Vidange, filtres, bougies, carburateur' },
                      { title: 'Réparation démarrage', desc: 'Lanceur cassé, starter défectueux' },
                      { title: 'Nettoyage carburateur', desc: 'Machine qui ne démarre plus' },
                      { title: 'Remplacement filtres', desc: 'Filtre à air et filtre à essence' },
                      { title: 'Affûtage lames', desc: 'Tondeuses, débroussailleuses' },
                      { title: 'Diagnostic panne moteur', desc: 'Perte de puissance, fumée' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                        <div className="w-2 h-2 bg-rouge rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-rouge-light border border-rouge rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-rouge" />
                  </div>
                  <h2 className="text-h2">Machines Thermiques</h2>
                </div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-rouge-light text-rouge-dark text-sm font-semibold rounded-full border border-rouge mb-4">
                    Entretien moteurs essence
                  </span>
                  <p className="text-body mb-4">
                    Tondeuses, débroussailleuses, tronçonneuses, taille-haies : nous entretenons et réparons tous vos outils de jardin.
                  </p>
                  <p className="text-body">
                    La majorité des pannes proviennent d'un mauvais entretien. Nous effectuons des révisions complètes pour prolonger la durée de vie de vos machines.
                  </p>
                </div>

                <div className="card bg-rouge-light border-rouge">
                  <h3 className="text-h4 mb-4">Machines thermiques</h3>
                  <ul className="space-y-2">
                    {[
                      'Tondeuses à gazon (autoportées, poussées)',
                      'Débroussailleuses et taille-bordures',
                      'Tronçonneuses thermiques',
                      'Taille-haies thermiques',
                      'Souffleuses et aspirateurs de jardin',
                      'Motoculteurs et motobineuses'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-rouge flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Vélos & E-bikes */}
        <section id="bikes" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Left Column */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-light border border-teal rounded-lg flex items-center justify-center">
                    <Bike className="w-6 h-6 text-teal" />
                  </div>
                  <h2 className="text-h2">Vélos & E-bikes</h2>
                </div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-teal-light text-teal-dark text-sm font-semibold rounded-full border border-teal mb-4">
                    Tous types de vélos
                  </span>
                  <p className="text-body mb-4">
                    Entretien et réparation de tous types de vélos : vélos classiques, VTT, vélos de route, et vélos électriques.
                  </p>
                  <p className="text-body">
                    Partenariat Speedped : commande de vélos Speedped sur demande. Contactez-nous pour plus d'informations.
                  </p>
                </div>

                <div className="card bg-teal-light border-teal">
                  <h3 className="text-h4 mb-4">Services vélos</h3>
                  <ul className="space-y-2">
                    {[
                      'Révision complète et mise au point',
                      'Réglage freins et vitesses',
                      'Changement pneus et chambres à air',
                      'Entretien chaîne et transmission',
                      'Diagnostic vélos électriques',
                      'Commande vélos Speedped'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="card border-teal">
                  <h3 className="text-h4 mb-6">Types de vélos</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Vélos classiques', desc: 'Vélos de ville, hollandais, vintage' },
                      { title: 'VTT', desc: 'Cross-country, enduro, descente' },
                      { title: 'Vélos de route', desc: 'Vélos de course, cyclocross' },
                      { title: 'Vélos électriques (VAE)', desc: 'E-bikes urbains et VTT électriques' },
                      { title: 'Vélos cargo', desc: 'Transport et cargos électriques' },
                      { title: 'Vélos enfants', desc: 'Draisiennes, vélos avec roulettes' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                        <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Services B2B */}
        <section id="b2b" className="section bg-gray-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-rouge rounded-lg mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-h2 text-white mb-4">Services B2B Professionnels</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Solutions sur mesure pour entreprises du bâtiment et de la construction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card bg-gray-800 border-gray-700">
                <h3 className="text-h4 text-white mb-3">Contrats d'entretien</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Forfaits annuels pour l'entretien régulier de votre parc machines.
                </p>
                <ul className="space-y-2">
                  {['Maintenance préventive', 'Intervention prioritaire', 'Tarifs négociés'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-rouge flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-gray-800 border-gray-700">
                <h3 className="text-h4 text-white mb-3">Entreprises BTP</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Service adapté aux professionnels du bâtiment et de la construction.
                </p>
                <ul className="space-y-2">
                  {['Dépannage rapide', 'Devis sous 24h', 'Factures détaillées'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-rouge flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-gray-800 border-gray-700">
                <h3 className="text-h4 text-white mb-3">Paysagistes</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Entretien de votre parc de machines de jardinage. Service saisonnier.
                </p>
                <ul className="space-y-2">
                  {['Remise en service printemps', 'Entretien saison', 'Hivernage automne'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-rouge flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-6">
                Contactez-nous pour un devis personnalisé adapté à vos besoins professionnels
              </p>
              <Button
                variant="primary"
                size="lg"
                icon={Phone}
                iconPosition="left"
                href="tel:0767080308"
              >
                076 708 03 08
              </Button>
            </div>
          </div>
        </section>

        {/* Section 5 - Grille Tarifaire */}
        <section id="pricing" className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">Grille Tarifaire Transparente</h2>
              <p className="text-body text-lg">
                Tarifs indicatifs hors pièces • Devis gratuit et sans engagement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <PricingTable
                title="DIAGNOSTIC & SERVICES"
                accentColor="teal"
                rows={[
                  { service: 'Diagnostic machine (déduit si réparation)', price: 'X CHF' },
                  { service: 'Déplacement atelier (selon zone)', price: 'X CHF' },
                  { service: 'Devis détaillé', price: 'Gratuit' },
                  { service: 'Conseil téléphonique', price: 'Gratuit' }
                ]}
              />

              <PricingTable
                title="MACHINES ÉLECTRIQUES"
                accentColor="teal"
                rows={[
                  { service: 'Remplacement charbons moteur', price: 'X CHF' },
                  { service: 'Réparation câble alimentation', price: 'X CHF' },
                  { service: 'Remplacement interrupteur', price: 'X CHF' },
                  { service: 'Réparation carte électronique', price: 'X CHF' },
                  { service: 'Bobinage moteur', price: 'Sur devis' },
                  { service: 'Contrôle normes électriques', price: 'X CHF', highlight: true }
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <PricingTable
                title="MACHINES THERMIQUES"
                accentColor="rouge"
                rows={[
                  { service: 'Révision tondeuse complète', price: 'X CHF' },
                  { service: 'Nettoyage carburateur', price: 'X CHF' },
                  { service: 'Remplacement lanceur', price: 'X CHF' },
                  { service: 'Vidange + filtres', price: 'X CHF' },
                  { service: 'Affûtage lame tondeuse', price: 'X CHF' }
                ]}
              />

              <PricingTable
                title="VÉLOS & E-BIKES"
                accentColor="teal"
                rows={[
                  { service: 'Révision complète vélo classique', price: 'X CHF' },
                  { service: 'Révision vélo électrique', price: 'X CHF' },
                  { service: 'Réglage freins + vitesses', price: 'X CHF' },
                  { service: 'Changement pneus (x2)', price: 'X CHF' },
                  { service: 'Réparation crevaison', price: 'X CHF' }
                ]}
              />
            </div>

            <div className="card bg-white border-gray-300 text-center">
              <p className="text-body font-semibold mb-3">
                Tarifs indicatifs hors pièces détachées
              </p>
              <p className="text-sm text-gray-600">
                Prix finaux selon l'état de la machine et les pièces à remplacer. Devis gratuit avant toute intervention.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section bg-gray-900 text-white">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-h2 text-white">
                Besoin d'un devis personnalisé ?
              </h2>
              <p className="text-lg text-gray-300">
                Contactez-nous pour obtenir un devis gratuit et détaillé adapté à votre machine
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
                  <span>Formulaire de contact</span>
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

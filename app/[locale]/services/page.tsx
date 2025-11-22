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
        {/* Hero Section */}
        <section className="bg-gradient-teal py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gris-900 mb-4">
                Services de Réparation Professionnels
              </h1>
              <p className="text-xl text-gris-700 mb-6">
                Machines électriques, thermiques et vélos • Grille tarifaire transparente • Savièse, Valais
              </p>
            </div>
          </div>
        </section>

        {/* Jump Links Navigation */}
        <section className="sticky top-16 sm:top-20 z-40 bg-white border-b border-gris-200 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex gap-2 md:gap-4 overflow-x-auto py-3 md:py-4 -mx-4 px-4 scrollbar-hide">
              <a href="#electric" className="whitespace-nowrap px-3 md:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-gris-700 hover:bg-teal-100 hover:text-teal-700 transition-colors">
                <span className="hidden sm:inline">Machines </span>Électriques
              </a>
              <a href="#thermal" className="whitespace-nowrap px-3 md:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-gris-700 hover:bg-teal-100 hover:text-teal-700 transition-colors">
                <span className="hidden sm:inline">Machines </span>Thermiques
              </a>
              <a href="#bikes" className="whitespace-nowrap px-3 md:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-gris-700 hover:bg-teal-100 hover:text-teal-700 transition-colors">
                Vélos <span className="hidden sm:inline">& E-bikes</span>
              </a>
              <a href="#b2b" className="whitespace-nowrap px-3 md:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-gris-700 hover:bg-teal-100 hover:text-teal-700 transition-colors">
                <span className="hidden sm:inline">Services </span>B2B
              </a>
              <a href="#pricing" className="whitespace-nowrap px-3 md:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-rouge-700 text-white hover:bg-rouge-900 transition-colors">
                <span className="hidden sm:inline">Grille </span>Tarifaire
              </a>
            </nav>
          </div>
        </section>

        {/* Section 1 - Machines Électriques */}
        <section id="electric" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-teal-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-gris-900">Réparation Machines Électriques</h2>
                </div>
                <p className="text-lg text-teal-700 font-semibold mb-6">
                  Remise aux normes électriques certifiée
                </p>
                <p className="text-gris-700 mb-6">
                  Nous réparons tous types d'outils électriques professionnels et domestiques avec notre machine de diagnostic électrique professionnelle. Moteurs brûlés, cartes électroniques défectueuses, câbles cassés, charbons usés : nous intervenons sur toutes les pannes.
                </p>
                <p className="text-gris-700 mb-8">
                  Chaque machine électrique réparée est contrôlée et remise aux normes électriques avant livraison. Vous recevez un certificat de conformité pour vos assurances et votre sécurité.
                </p>

                <div className="bg-teal-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gris-900 mb-4">Ce que nous réparons :</h3>
                  <ul className="space-y-2">
                    {[
                      'Perceuses, visseuses, meuleuses',
                      'Scies circulaires et scies sauteuses',
                      'Ponceuses, raboteuses, défonceuses',
                      'Marteaux perforateurs',
                      'Compresseurs électriques',
                      'Aspirateurs professionnels',
                      'Tous outils électriques de chantier'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                        <span className="text-gris-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl border-2 border-teal-700 p-6">
                  <h3 className="text-xl font-bold text-gris-900 mb-4">Types de réparations :</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Remplacement charbons moteur', desc: 'Charbons usés causant perte de puissance' },
                      { title: 'Réparation câble alimentation', desc: 'Câbles coupés, dénudés, abîmés' },
                      { title: 'Remplacement interrupteurs', desc: 'Interrupteur défectueux ou cassé' },
                      { title: 'Réparation cartes électroniques', desc: 'Variateurs de vitesse, régulateurs' },
                      { title: 'Bobinage moteur', desc: 'Moteur brûlé ou court-circuit' },
                      { title: 'Contrôle normes électriques', desc: 'Certification conformité + certificat' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-700 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gris-900">{item.title}</h4>
                          <p className="text-sm text-gris-600">{item.desc}</p>
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
        <section id="thermal" className="py-20 bg-gris-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-xl border-2 border-rouge-700 p-6">
                  <h3 className="text-xl font-bold text-gris-900 mb-4">Services d'entretien :</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Révision complète', desc: 'Vidange, filtres, bougies, carburateur' },
                      { title: 'Réparation démarrage', desc: 'Lanceur cassé, starter défectueux' },
                      { title: 'Nettoyage carburateur', desc: 'Machine qui ne démarre plus après hiver' },
                      { title: 'Remplacement filtres', desc: 'Filtre à air et filtre à essence' },
                      { title: 'Affûtage lames', desc: 'Tondeuses, débroussailleuses' },
                      { title: 'Diagnostic panne moteur', desc: 'Perte de puissance, fumée anormale' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-rouge-700 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gris-900">{item.title}</h4>
                          <p className="text-sm text-gris-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-rouge-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-rouge-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-gris-900">Réparation Machines Thermiques</h2>
                </div>
                <p className="text-lg text-rouge-700 font-semibold mb-6">
                  Entretien et réparation moteurs essence
                </p>
                <p className="text-gris-700 mb-6">
                  Tondeuses, débroussailleuses, tronçonneuses, taille-haies, souffleuses, motoculteurs : nous entretenons et réparons tous vos outils de jardin et machines thermiques.
                </p>
                <p className="text-gris-700 mb-8">
                  La majorité des pannes proviennent d'un mauvais entretien (carburateur encrassé après l'hiver, filtres bouchés). Nous effectuons des révisions complètes pour prolonger la durée de vie de vos machines.
                </p>

                <div className="bg-rouge-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gris-900 mb-4">Machines thermiques :</h3>
                  <ul className="space-y-2">
                    {[
                      'Tondeuses à gazon (autoportées, poussées)',
                      'Débroussailleuses et taille-bordures',
                      'Tronçonneuses thermiques',
                      'Taille-haies thermiques',
                      'Souffleuses et aspirateurs de jardin',
                      'Motoculteurs et motobineuses',
                      'Nettoyeurs haute pression thermiques'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-rouge-700 flex-shrink-0 mt-0.5" />
                        <span className="text-gris-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Vélos & E-bikes */}
        <section id="bikes" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Bike className="w-6 h-6 text-teal-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-gris-900">Entretien Vélos & E-bikes</h2>
                </div>
                <p className="text-lg text-teal-700 font-semibold mb-6">
                  Tous types de vélos et vélos électriques
                </p>
                <p className="text-gris-700 mb-6">
                  Nous assurons l'entretien et la réparation de tous types de vélos : vélos classiques, VTT, vélos de route, et vélos électriques. Service rapide et soigné pour rouler en toute sécurité.
                </p>
                <p className="text-gris-700 mb-8">
                  Partenariat Speedped : nous pouvons commander des vélos Speedped sur demande pour nos clients. N'hésitez pas à nous contacter pour plus d'informations.
                </p>

                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gris-900 mb-4">Services vélos :</h3>
                  <ul className="space-y-2">
                    {[
                      'Révision complète et mise au point',
                      'Réglage freins et vitesses',
                      'Changement pneus et chambres à air',
                      'Entretien chaîne et transmission',
                      'Réparation crevaisons',
                      'Diagnostic et réparation vélos électriques',
                      'Commande vélos Speedped sur demande'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                        <span className="text-gris-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl border-2 border-teal-700 p-6">
                  <h3 className="text-xl font-bold text-gris-900 mb-4">Types de vélos :</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Vélos classiques', desc: 'Vélos de ville, hollandais, vintage' },
                      { title: 'VTT', desc: 'VTT cross-country, enduro, descente' },
                      { title: 'Vélos de route', desc: 'Vélos de course, cyclocross' },
                      { title: 'Vélos électriques (VAE)', desc: 'E-bikes urbains et VTT électriques' },
                      { title: 'Vélos cargo', desc: 'Vélos de transport et cargos électriques' },
                      { title: 'Vélos enfants', desc: 'Draisiennes, vélos avec roulettes' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-700 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gris-900">{item.title}</h4>
                          <p className="text-sm text-gris-600">{item.desc}</p>
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
        <section id="b2b" className="py-20 bg-gris-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rouge-700 rounded-full mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services B2B Professionnels</h2>
              <p className="text-xl text-gris-300">
                Solutions sur mesure pour entreprises du bâtiment et de la construction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gris-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Contrats d'entretien</h3>
                <p className="text-gris-300 mb-4">
                  Forfaits annuels pour l'entretien régulier de votre parc machines. Planification et tarifs préférentiels.
                </p>
                <ul className="space-y-2">
                  {['Maintenance préventive', 'Intervention prioritaire', 'Tarifs négociés'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gris-300">
                      <CheckCircle className="w-4 h-4 text-rouge-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gris-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Entreprises BTP</h3>
                <p className="text-gris-300 mb-4">
                  Service adapté aux professionnels du bâtiment, maçonnerie, menuiserie, électricité, plomberie.
                </p>
                <ul className="space-y-2">
                  {['Dépannage rapide', 'Devis sous 24h', 'Factures détaillées'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gris-300">
                      <CheckCircle className="w-4 h-4 text-rouge-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gris-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Paysagistes</h3>
                <p className="text-gris-300 mb-4">
                  Entretien de votre parc de tondeuses, débroussailleuses, taille-haies. Service saisonnier.
                </p>
                <ul className="space-y-2">
                  {['Remise en service printemps', 'Entretien saison', 'Hivernage automne'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gris-300">
                      <CheckCircle className="w-4 h-4 text-rouge-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gris-300 mb-6">
                Contactez-nous pour établir un devis personnalisé adapté à vos besoins professionnels.
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
        <section id="pricing" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gris-900 mb-4">
                Grille Tarifaire Transparente
              </h2>
              <p className="text-xl text-gris-700">
                Tarifs indicatifs hors pièces • Devis gratuit et sans engagement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <PricingTable
                title="DIAGNOSTIC & SERVICES DE BASE"
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
                  { service: 'Réparation câble d\'alimentation', price: 'X CHF' },
                  { service: 'Remplacement interrupteur', price: 'X CHF' },
                  { service: 'Réparation carte électronique simple', price: 'X CHF' },
                  { service: 'Bobinage moteur (selon puissance)', price: 'Sur devis' },
                  { service: 'Contrôle normes électriques certifié', price: 'X CHF', highlight: true }
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <PricingTable
                title="MACHINES THERMIQUES"
                accentColor="rouge"
                rows={[
                  { service: 'Révision tondeuse complète', price: 'X CHF' },
                  { service: 'Nettoyage carburateur', price: 'X CHF' },
                  { service: 'Remplacement lanceur', price: 'X CHF' },
                  { service: 'Vidange + filtres', price: 'X CHF' },
                  { service: 'Affûtage lame tondeuse', price: 'X CHF' },
                  { service: 'Révision débroussailleuse/tronçonneuse', price: 'X CHF' }
                ]}
              />

              <PricingTable
                title="VÉLOS & E-BIKES"
                accentColor="teal"
                rows={[
                  { service: 'Révision complète vélo classique', price: 'X CHF' },
                  { service: 'Révision complète vélo électrique', price: 'X CHF' },
                  { service: 'Réglage freins + vitesses', price: 'X CHF' },
                  { service: 'Changement pneus (x2)', price: 'X CHF' },
                  { service: 'Réparation crevaison', price: 'X CHF' },
                  { service: 'Entretien chaîne + transmission', price: 'X CHF' }
                ]}
              />
            </div>

            <div className="bg-gris-100 rounded-xl p-8 text-center">
              <p className="text-lg text-gris-700 mb-4">
                <strong>Tarifs indicatifs hors pièces détachées.</strong> Les prix finaux dépendent de l'état de la machine et des pièces à remplacer. Devis gratuit et détaillé avant toute intervention.
              </p>
              <p className="text-sm text-gris-600">
                Garantie sur nos réparations • Pièces de qualité • Certificat de conformité électrique inclus
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-teal-700 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Besoin d'un devis personnalisé ?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Contactez-nous pour obtenir un devis gratuit et détaillé adapté à votre machine.
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
              <Button
                variant="outline"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                href="/contact"
                className="border-white text-white hover:bg-white hover:text-teal-700"
              >
                Formulaire de contact
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

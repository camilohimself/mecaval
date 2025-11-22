import { useTranslations } from 'next-intl';
import { Phone, CheckCircle, Clock, FileText, Wrench, Award, User, Heart, Target, Users, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function AtelierPage() {
  const tCta = useTranslations('cta');

  const methodology = [
    {
      step: 1,
      icon: Phone,
      title: 'CONTACT',
      duration: 'Immédiat',
      description: 'Vous nous appelez au 076 708 03 08 ou passez directement à l\'atelier.',
      benefits: [
        'Accueil immédiat (pas d\'attente)',
        'Conseil téléphonique gratuit',
        'Devis gratuit sans engagement'
      ],
      color: 'teal'
    },
    {
      step: 2,
      icon: FileText,
      title: 'DIAGNOSTIC',
      duration: '30-60 min',
      cost: 'X CHF (déduit si réparation acceptée)',
      description: 'Nous examinons votre machine avec nos outils de diagnostic professionnels pour identifier la panne exacte.',
      benefits: [
        'Diagnostic précis de la panne',
        'Devis détaillé écrit',
        'Explication claire du problème'
      ],
      color: 'rouge'
    },
    {
      step: 3,
      icon: Wrench,
      title: 'RÉPARATION',
      duration: '⚡ 48h maximum',
      description: 'Nous réparons votre machine dans notre atelier avec des pièces de qualité. Transparence totale sur les interventions.',
      benefits: [
        'Délai garanti 48h (sauf pièces spéciales)',
        'Pièces de qualité certifiées',
        'Vous informons de l\'avancement'
      ],
      color: 'teal'
    },
    {
      step: 4,
      icon: Award,
      title: 'CONTRÔLE QUALITÉ',
      duration: '15-30 min',
      description: 'Chaque machine réparée est testée et contrôlée. Pour les machines électriques : contrôle aux normes avec notre machine spécialisée.',
      benefits: [
        'Tests de fonctionnement complets',
        'Contrôle normes électriques (si applicable)',
        'Certificat de conformité délivré'
      ],
      color: 'rouge'
    },
    {
      step: 5,
      icon: CheckCircle,
      title: 'LIVRAISON',
      duration: 'À votre convenance',
      description: 'Vous récupérez votre machine réparée, propre et fonctionnelle. Explications sur les réparations effectuées et conseils d\'entretien.',
      benefits: [
        'Machine testée et prête à l\'emploi',
        'Facture détaillée et certificat',
        'Garantie sur nos réparations'
      ],
      color: 'teal'
    }
  ];

  const team = [
    {
      name: 'Sylvain',
      role: 'Réparateur & Technicien',
      description: 'Expert en réparation de machines électriques et thermiques. Sylvain répare vos outils avec précision et passion depuis de nombreuses années.',
      skills: ['Électromécanique', 'Diagnostic', 'Contrôle normes'],
      icon: Wrench
    },
    {
      name: 'Cyrielle',
      role: 'Accueil & Administration',
      description: 'Cyrielle assure l\'accueil des clients, la gestion administrative et la coordination des interventions. Votre interlocutrice privilégiée.',
      skills: ['Relation client', 'Devis', 'Planification'],
      icon: Users
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Proximité & Service Local',
      description: 'Atelier familial à Savièse. Contact direct avec votre réparateur, sans intermédiaires.'
    },
    {
      icon: Clock,
      title: 'Rapidité d\'Intervention',
      description: 'Délai 48h garanti vs 2-3 semaines chez la concurrence. Votre temps est précieux.'
    },
    {
      icon: Target,
      title: 'Qualité & Fiabilité',
      description: 'Notre réputation est en jeu. Réparations durables, pièces de qualité, satisfaction garantie.'
    },
    {
      icon: Award,
      title: 'Transparence & Conseil',
      description: 'Prix affichés, devis détaillés, conseils honnêtes. Pas de surprises, pas de vente forcée.'
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
                Notre Atelier
              </h1>
              <p className="text-xl text-gris-700 mb-6">
                Expertise, Rapidité et Service de Proximité à Savièse
              </p>
            </div>
          </div>
        </section>

        {/* Notre Méthode en 5 Étapes */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gris-900 mb-4">
                Notre Méthodologie en 5 Étapes
              </h2>
              <p className="text-xl text-gris-700">
                Processus transparent et efficace pour une réparation réussie
              </p>
            </div>

            <div className="space-y-8">
              {methodology.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                const bgColor = step.color === 'teal' ? 'bg-teal-50' : 'bg-rouge-50';
                const borderColor = step.color === 'teal' ? 'border-teal-700' : 'border-rouge-700';
                const iconBg = step.color === 'teal' ? 'bg-teal-700' : 'bg-rouge-700';
                const stepBg = step.color === 'teal' ? 'bg-teal-700' : 'bg-rouge-700';

                return (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Numéro d'étape (mobile) */}
                    <div className="lg:hidden flex justify-center">
                      <div className={`${stepBg} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold`}>
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} ${bgColor} rounded-xl border-2 ${borderColor} p-8`}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`${iconBg} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gris-900 mb-1">
                            ÉTAPE {step.step} - {step.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className="text-gris-700">
                              <Clock className="w-4 h-4 inline mr-1" />
                              {step.duration}
                            </span>
                            {step.cost && (
                              <span className="text-gris-700 font-semibold">
                                {step.cost}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gris-700 mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-2">
                        <p className="font-semibold text-gris-900 mb-3">Ce que vous obtenez :</p>
                        {step.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className={`w-5 h-5 ${step.color === 'teal' ? 'text-teal-700' : 'text-rouge-700'} flex-shrink-0 mt-0.5`} />
                            <span className="text-gris-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Numéro d'étape (desktop) */}
                    <div className={`hidden lg:flex justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className={`${stepBg} text-white w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold shadow-xl`}>
                        {step.step}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* L'équipe */}
        <section className="py-12 sm:py-16 md:py-20 bg-gris-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gris-900 mb-4">
                L'Équipe Mecaval
              </h2>
              <p className="text-xl text-gris-700">
                Un atelier familial à votre service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {team.map((member, index) => {
                const Icon = member.icon;
                return (
                  <div key={index} className="bg-white rounded-xl border-2 border-gris-200 p-8 hover:border-teal-700 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-700 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gris-900 mb-1">{member.name}</h3>
                        <p className="text-lg text-teal-700 font-semibold">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-gris-700 mb-6">
                      {member.description}
                    </p>

                    <div>
                      <p className="font-semibold text-gris-900 mb-3">Compétences :</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1.5 bg-teal-100 text-teal-900 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gris-900 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gris-700">
                Ce qui fait la différence Mecaval
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-teal-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gris-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gris-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Notre Engagement */}
        <section className="py-12 sm:py-16 md:py-20 bg-gris-900 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Notre Engagement Qualité
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-300 mb-2">48h</div>
                <p className="text-gris-300">Délai maximum de réparation</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-300 mb-2">100%</div>
                <p className="text-gris-300">Machines testées avant livraison</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-300 mb-2">0</div>
                <p className="text-gris-300">Frais cachés ou surprises</p>
              </div>
            </div>

            <div className="bg-gris-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Notre Promesse</h3>
              <div className="space-y-3">
                {[
                  'Réparations durables avec des pièces de qualité',
                  'Conseils honnêtes et personnalisés',
                  'Devis détaillé avant toute intervention',
                  'Garantie sur nos réparations',
                  'Contact direct avec le réparateur',
                  'Transparence totale sur les tarifs'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0" />
                    <span className="text-gris-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 sm:py-16 md:py-20 bg-teal-700 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Passez nous voir à l'atelier !
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Savièse, Valais • Ouvert du lundi au samedi
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
                Nous trouver
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

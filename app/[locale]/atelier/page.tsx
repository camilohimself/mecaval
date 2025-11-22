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
      cost: 'X CHF (déduit si réparation)',
      description: 'Diagnostic professionnel avec nos outils spécialisés pour identifier la panne exacte.',
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
      description: 'Réparation dans notre atelier avec des pièces de qualité. Transparence totale sur les interventions.',
      benefits: [
        'Délai garanti 48h (sauf pièces spéciales)',
        'Pièces de qualité certifiées',
        'Information de l\'avancement'
      ],
      color: 'teal'
    },
    {
      step: 4,
      icon: Award,
      title: 'CONTRÔLE QUALITÉ',
      duration: '15-30 min',
      description: 'Tests complets et contrôle aux normes électriques avec notre machine spécialisée.',
      benefits: [
        'Tests de fonctionnement complets',
        'Contrôle normes électriques',
        'Certificat de conformité'
      ],
      color: 'rouge'
    },
    {
      step: 5,
      icon: CheckCircle,
      title: 'LIVRAISON',
      duration: 'À votre convenance',
      description: 'Récupération de votre machine réparée, propre et fonctionnelle avec explications détaillées.',
      benefits: [
        'Machine testée et prête',
        'Facture détaillée + certificat',
        'Garantie sur nos réparations'
      ],
      color: 'teal'
    }
  ];

  const team = [
    {
      name: 'Sylvain',
      role: 'Réparateur & Technicien',
      description: 'Expert en réparation de machines électriques et thermiques. Sylvain répare vos outils avec précision et passion.',
      skills: ['Électromécanique', 'Diagnostic', 'Contrôle normes'],
      icon: Wrench
    },
    {
      name: 'Cyrielle',
      role: 'Accueil & Administration',
      description: 'Cyrielle assure l\'accueil, la gestion administrative et la coordination des interventions.',
      skills: ['Relation client', 'Devis', 'Planification'],
      icon: Users
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Proximité & Service Local',
      description: 'Atelier familial à Savièse. Contact direct avec votre réparateur.'
    },
    {
      icon: Clock,
      title: 'Rapidité d\'Intervention',
      description: 'Délai 48h garanti vs 2-3 semaines chez la concurrence.'
    },
    {
      icon: Target,
      title: 'Qualité & Fiabilité',
      description: 'Réparations durables, pièces de qualité, satisfaction garantie.'
    },
    {
      icon: Award,
      title: 'Transparence & Conseil',
      description: 'Prix affichés, devis détaillés, conseils honnêtes.'
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
              Notre Atelier
            </h1>
            <p className="text-body text-xl max-w-2xl mx-auto animate-slideUp animation-delay-100">
              Expertise, Rapidité et Service de Proximité à Savièse
            </p>
          </div>
        </section>

        {/* Notre Méthode en 5 Étapes */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">
                Notre Méthodologie en 5 Étapes
              </h2>
              <p className="text-body text-lg max-w-2xl mx-auto">
                Processus transparent et efficace pour une réparation réussie
              </p>
            </div>

            <div className="space-y-12">
              {methodology.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                const bgColor = step.color === 'teal' ? 'bg-teal-light' : 'bg-rouge-light';
                const borderColor = step.color === 'teal' ? 'border-teal' : 'border-rouge';
                const iconBg = step.color === 'teal' ? 'bg-teal' : 'bg-rouge';
                const numberBg = step.color === 'teal' ? 'bg-teal' : 'bg-rouge';
                const checkColor = step.color === 'teal' ? 'text-teal' : 'text-rouge';

                return (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Numéro étape - Desktop */}
                    <div className={`hidden lg:flex justify-center ${isEven ? 'lg:col-span-2 lg:order-1' : 'lg:col-span-2 lg:order-3'}`}>
                      <div className={`${numberBg} text-white w-20 h-20 rounded-lg flex items-center justify-center text-3xl font-bold`}>
                        {step.step}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`lg:col-span-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className={`card ${bgColor} ${borderColor} card-interactive`}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`${iconBg} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-h3 mb-2">
                              ÉTAPE {step.step} - {step.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {step.duration}
                              </span>
                              {step.cost && (
                                <span className="font-semibold">
                                  {step.cost}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <p className="text-body mb-6">
                          {step.description}
                        </p>

                        <div className="space-y-2">
                          <p className="font-semibold text-gray-900 mb-3 text-sm">Ce que vous obtenez:</p>
                          {step.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className={`w-5 h-5 ${checkColor} flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* L'équipe */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">
                L'Équipe Mecaval
              </h2>
              <p className="text-body text-lg">
                Un atelier familial à votre service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => {
                const Icon = member.icon;
                return (
                  <div key={index} className="card card-elevated hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-h3 mb-1">{member.name}</h3>
                        <p className="text-sm text-teal font-semibold">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-body mb-6">
                      {member.description}
                    </p>

                    <div>
                      <p className="font-semibold text-gray-900 mb-3 text-sm">Compétences</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span key={i} className="badge badge-teal text-xs">
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
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-body text-lg">
                Ce qui fait la différence Mecaval
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-light border border-teal rounded-lg mb-4">
                      <Icon className="w-7 h-7 text-teal" />
                    </div>
                    <h3 className="text-h4 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-body text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Notre Engagement */}
        <section className="section bg-gray-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 text-white mb-4">
                Notre Engagement Qualité
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-teal mb-2">48h</div>
                <p className="text-gray-400">Délai maximum</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal mb-2">100%</div>
                <p className="text-gray-400">Machines testées</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal mb-2">0</div>
                <p className="text-gray-400">Frais cachés</p>
              </div>
            </div>

            <div className="card bg-gray-800 border-gray-700 max-w-2xl mx-auto">
              <h3 className="text-h3 text-white mb-6 text-center">Notre Promesse</h3>
              <div className="space-y-3">
                {[
                  'Réparations durables avec pièces de qualité',
                  'Conseils honnêtes et personnalisés',
                  'Devis détaillé avant intervention',
                  'Garantie sur nos réparations',
                  'Contact direct avec le réparateur',
                  'Transparence totale sur les tarifs'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section bg-gray-900 text-white border-t border-gray-800">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-h2 text-white">
                Passez nous voir à l'atelier !
              </h2>
              <p className="text-lg text-gray-300">
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
                <a
                  href="/contact"
                  className="btn btn-lg btn-outline-teal bg-white text-gray-900 border-white hover:bg-gray-100"
                >
                  <span>Nous trouver</span>
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

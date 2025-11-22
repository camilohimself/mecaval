import { useTranslations } from 'next-intl';
import { Phone, CheckCircle, Clock, FileText, Wrench, Award, User, Heart, Target, Users, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import AtelierGallery from '@/components/ui/AtelierGallery';
import Testimonials from '@/components/ui/Testimonials';

export default function AtelierPage() {
  const tCta = useTranslations('cta');
  const tCommon = useTranslations('common');
  const tAtelier = useTranslations('atelier');

  const methodology = [
    {
      step: 1,
      icon: Phone,
      title: tAtelier('methodology.step1.title'),
      duration: tAtelier('methodology.step1.duration'),
      description: tAtelier('methodology.step1.description'),
      benefits: [
        tAtelier('methodology.step1.benefit1'),
        tAtelier('methodology.step1.benefit2'),
        tAtelier('methodology.step1.benefit3')
      ],
      color: 'teal'
    },
    {
      step: 2,
      icon: FileText,
      title: tAtelier('methodology.step2.title'),
      duration: tAtelier('methodology.step2.duration'),
      cost: tAtelier('methodology.step2.cost'),
      description: tAtelier('methodology.step2.description'),
      benefits: [
        tAtelier('methodology.step2.benefit1'),
        tAtelier('methodology.step2.benefit2'),
        tAtelier('methodology.step2.benefit3')
      ],
      color: 'rouge'
    },
    {
      step: 3,
      icon: Wrench,
      title: tAtelier('methodology.step3.title'),
      duration: tAtelier('methodology.step3.duration'),
      description: tAtelier('methodology.step3.description'),
      benefits: [
        tAtelier('methodology.step3.benefit1'),
        tAtelier('methodology.step3.benefit2'),
        tAtelier('methodology.step3.benefit3')
      ],
      color: 'teal'
    },
    {
      step: 4,
      icon: Award,
      title: tAtelier('methodology.step4.title'),
      duration: tAtelier('methodology.step4.duration'),
      description: tAtelier('methodology.step4.description'),
      benefits: [
        tAtelier('methodology.step4.benefit1'),
        tAtelier('methodology.step4.benefit2'),
        tAtelier('methodology.step4.benefit3')
      ],
      color: 'rouge'
    },
    {
      step: 5,
      icon: CheckCircle,
      title: tAtelier('methodology.step5.title'),
      duration: tAtelier('methodology.step5.duration'),
      description: tAtelier('methodology.step5.description'),
      benefits: [
        tAtelier('methodology.step5.benefit1'),
        tAtelier('methodology.step5.benefit2'),
        tAtelier('methodology.step5.benefit3')
      ],
      color: 'teal'
    }
  ];

  const team = [
    {
      name: tAtelier('team.sylvain.name'),
      role: tAtelier('team.sylvain.role'),
      description: tAtelier('team.sylvain.description'),
      skills: [
        tAtelier('team.sylvain.skill1'),
        tAtelier('team.sylvain.skill2'),
        tAtelier('team.sylvain.skill3')
      ],
      icon: Wrench
    },
    {
      name: tAtelier('team.cyrielle.name'),
      role: tAtelier('team.cyrielle.role'),
      description: tAtelier('team.cyrielle.description'),
      skills: [
        tAtelier('team.cyrielle.skill1'),
        tAtelier('team.cyrielle.skill2'),
        tAtelier('team.cyrielle.skill3')
      ],
      icon: Users
    }
  ];

  const values = [
    {
      icon: Heart,
      title: tAtelier('values.value1Title'),
      description: tAtelier('values.value1Desc')
    },
    {
      icon: Clock,
      title: tAtelier('values.value2Title'),
      description: tAtelier('values.value2Desc')
    },
    {
      icon: Target,
      title: tAtelier('values.value3Title'),
      description: tAtelier('values.value3Desc')
    },
    {
      icon: Award,
      title: tAtelier('values.value4Title'),
      description: tAtelier('values.value4Desc')
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
              {tAtelier('hero.title')}
            </h1>
            <p className="text-body text-xl max-w-2xl mx-auto animate-slideUp animation-delay-100">
              {tAtelier('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Notre Méthode en 5 Étapes */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">
                {tAtelier('methodology.title')}
              </h2>
              <p className="text-body text-lg max-w-2xl mx-auto">
                {tAtelier('methodology.subtitle')}
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
                              {tCommon('step')} {step.step} - {step.title}
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
                          <p className="font-semibold text-gray-900 mb-3 text-sm">{tCommon('whatYouGet')}</p>
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
                {tAtelier('team.title')}
              </h2>
              <p className="text-body text-lg">
                {tAtelier('team.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
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
                      <p className="font-semibold text-gray-900 mb-3 text-sm">{tCommon('skills')}</p>
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

        {/* Gallery Atelier */}
        <AtelierGallery />

        {/* Nos Valeurs */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">
                {tAtelier('values.title')}
              </h2>
              <p className="text-body text-lg">
                {tAtelier('values.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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

        {/* Testimonials Clients */}
        <Testimonials />

        {/* Notre Engagement */}
        <section className="section bg-gray-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-h2 text-white mb-4">
                {tAtelier('commitment.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-teal mb-2">{tAtelier('commitment.metric1Value')}</div>
                <p className="text-gray-400">{tAtelier('commitment.metric1Label')}</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal mb-2">{tAtelier('commitment.metric2Value')}</div>
                <p className="text-gray-400">{tAtelier('commitment.metric2Label')}</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal mb-2">{tAtelier('commitment.metric3Value')}</div>
                <p className="text-gray-400">{tAtelier('commitment.metric3Label')}</p>
              </div>
            </div>

            <div className="card bg-gray-800 border-gray-700 max-w-2xl mx-auto">
              <h3 className="text-h3 text-white mb-6 text-center">{tAtelier('commitment.promiseTitle')}</h3>
              <div className="space-y-3">
                {[
                  tAtelier('commitment.promise1'),
                  tAtelier('commitment.promise2'),
                  tAtelier('commitment.promise3'),
                  tAtelier('commitment.promise4'),
                  tAtelier('commitment.promise5'),
                  tAtelier('commitment.promise6')
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
                {tAtelier('cta.title')}
              </h2>
              <p className="text-lg text-gray-300">
                {tAtelier('cta.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  icon={Phone}
                  iconPosition="left"
                  href="tel:0767080308"
                >
                  {tCta('call')}
                </Button>
                <a
                  href="/contact"
                  className="btn btn-lg btn-outline-teal bg-white text-gray-900 border-white hover:bg-gray-100"
                >
                  <span>{tCta('findUs')}</span>
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

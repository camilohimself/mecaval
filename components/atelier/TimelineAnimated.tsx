'use client';

/**
 * TimelineAnimated - Timeline premium avec SVG draw animation
 * Inspire de: Linear changelog, Stripe Connect
 *
 * Features:
 * - SVG line draw animation au scroll
 * - Step cards avec stagger animation
 * - Progress tracking visuel
 * - Respecte prefers-reduced-motion
 */

import { useEffect, useRef, useState } from 'react';
import { Phone, FileText, Wrench, Award, CheckCircle, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface TimelineStep {
  step: number;
  icon: typeof Phone;
  title: string;
  duration: string;
  cost?: string;
  description: string;
  benefits: string[];
  color: 'teal' | 'rouge';
}

export default function TimelineAnimated() {
  const tAtelier = useTranslations('atelier');
  const tCommon = useTranslations('common');

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const methodology: TimelineStep[] = [
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
      duration: '',
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

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Scroll-based animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress (0 to 1) based on scroll position
      const start = windowHeight * 0.8;
      const end = -containerHeight + windowHeight * 0.3;
      const progress = Math.min(Math.max((start - containerTop) / (start - end), 0), 1);

      setLineProgress(progress);

      // Calculate active step based on progress
      const stepProgress = progress * methodology.length;
      setActiveStep(Math.min(Math.floor(stepProgress), methodology.length - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion, methodology.length]);

  return (
    <section className="section relative overflow-hidden">
      {/* Premium Teal gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-dark via-teal to-teal-dark">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(at 40% 20%, rgba(255, 255, 255, 0.1) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(214, 59, 75, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(255, 255, 255, 0.08) 0px, transparent 50%)'
        }} />
      </div>

      <div className="container relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {tAtelier('methodology.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {tAtelier('methodology.subtitle')}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1">
            {/* Background line */}
            <div className="absolute inset-0 bg-white/20 rounded-full" />
            {/* Animated progress line */}
            <div
              className="absolute top-0 left-0 w-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{
                height: prefersReducedMotion ? '100%' : `${lineProgress * 100}%`,
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {methodology.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              const isActive = index <= activeStep || prefersReducedMotion;
              const isCurrentStep = index === activeStep;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ease-out ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: prefersReducedMotion ? '0ms' : `${index * 100}ms`
                  }}
                >
                  {/* Step Number Circle - Desktop Center */}
                  <div className={`hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 w-20 h-20 rounded-full items-center justify-center z-10 transition-all duration-500 ${
                    isActive
                      ? 'bg-white shadow-xl scale-100'
                      : 'bg-white/30 scale-90'
                  } ${isCurrentStep ? 'ring-4 ring-white/50 ring-offset-4 ring-offset-teal' : ''}`}
                  >
                    <span className={`text-3xl font-extrabold transition-colors duration-300 ${
                      isActive ? 'text-teal' : 'text-white/50'
                    }`}>
                      {step.step}
                    </span>
                  </div>

                  {/* Content Grid */}
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-start ${isLeft ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Spacer for alternating layout */}
                    <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1'}`} />

                    {/* Card */}
                    <div className={`${isLeft ? 'lg:col-start-1 lg:row-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                      <div className={`timeline-card bg-white rounded-lg p-6 md:p-8 transition-all duration-500 ${
                        isActive ? 'shadow-2xl' : 'shadow-lg opacity-70'
                      } ${isCurrentStep ? 'ring-2 ring-teal/30' : ''}`}>

                        {/* Mobile Step Number */}
                        <div className={`lg:hidden inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 transition-all duration-300 ${
                          isActive ? 'bg-teal text-white' : 'bg-gray-200 text-gray-400'
                        }`}>
                          <span className="text-xl font-extrabold">{step.step}</span>
                        </div>

                        {/* Icon + Title */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            step.color === 'teal' ? 'bg-teal' : 'bg-rouge'
                          } ${isCurrentStep ? 'scale-110 shadow-lg' : ''}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                              {step.title}
                            </h3>
                            {step.duration && (
                              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                <span className="flex items-center gap-1.5 font-semibold">
                                  <Clock className="w-4 h-4 text-teal" />
                                  {step.duration}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-gray-700 mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Benefits */}
                        <div className="space-y-3 pt-4 border-t border-gray-200">
                          <p className="font-bold text-gray-900 text-sm mb-3">{tCommon('whatYouGet')}</p>
                          {step.benefits.map((benefit, i) => (
                            <div
                              key={i}
                              className={`flex items-start gap-3 transition-all duration-300 ${
                                isActive ? 'opacity-100' : 'opacity-50'
                              }`}
                              style={{
                                transitionDelay: isActive ? `${i * 100}ms` : '0ms'
                              }}
                            >
                              <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                step.color === 'teal' ? 'text-teal' : 'text-rouge'
                              }`} />
                              <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection line indicator - Desktop */}
                  {index < methodology.length - 1 && (
                    <div className={`hidden lg:block absolute left-1/2 top-20 w-3 h-3 rounded-full -translate-x-1/2 transition-all duration-500 ${
                      index < activeStep ? 'bg-white scale-100' : 'bg-white/30 scale-75'
                    }`}
                    style={{ top: 'calc(100% - 2rem)' }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Final success indicator */}
          <div className={`hidden lg:flex justify-center mt-16 transition-all duration-700 ${
            lineProgress >= 0.95 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-xl">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-bold text-gray-900">Processus complet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

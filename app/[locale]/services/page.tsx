'use client';

import { useTranslations } from 'next-intl';
import { Zap, Settings, Bike, Building2, CheckCircle, Phone, ArrowRight, Wrench, TrendingUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ServicesPage() {
  const tCta = useTranslations('cta');
  const tServices = useTranslations('services');

  return (
    <>
      <Header />
      <main>

        {/* Navigation Tabs - Menu Style */}
        <nav className="menu-nav">
          <div className="container">
            <div className="menu-nav-inner">
              <a href="#electric" className="menu-nav-item menu-nav-item-teal">
                <Zap className="w-4 h-4" />
                <span>{tServices('electric.title')}</span>
              </a>
              <a href="#thermal" className="menu-nav-item menu-nav-item-rouge">
                <Settings className="w-4 h-4" />
                <span>{tServices('thermal.title')}</span>
              </a>
              <a href="#bikes" className="menu-nav-item menu-nav-item-teal">
                <Bike className="w-4 h-4" />
                <span>{tServices('bikes.title')}</span>
              </a>
              <a href="#pro" className="menu-nav-item menu-nav-item-dark">
                <Building2 className="w-4 h-4" />
                <span>Pro</span>
              </a>
            </div>
          </div>
        </nav>

        {/* ============================================ */}
        {/* SECTION 1: MACHINES ÉLECTRIQUES */}
        {/* ============================================ */}
        <section id="electric" className="menu-section">
          <div className="container">
            <div className="menu-section-header">
              <div className="menu-section-icon menu-section-icon-teal">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h2 className="menu-section-title">{tServices('electric.title')}</h2>
                <p className="menu-section-subtitle">{tServices('electric.description')}</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="menu-grid">

              {/* Item 1: Diagnostic */}
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{tServices('pricing.diagnostic.title')}</h3>
                  <div className="menu-item-price">{tServices('pricing.diagnostic.price')}</div>
                </div>
                <p className="menu-item-note">{tServices('pricing.diagnostic.note')}</p>
                <ul className="menu-item-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.diagnostic.feature1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.diagnostic.feature2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.diagnostic.feature3')}</li>
                </ul>
              </div>

              {/* Item 2: Réparation */}
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{tServices('pricing.repair.title')}</h3>
                  <div className="menu-item-price">{tServices('pricing.repair.price')}</div>
                </div>
                <p className="menu-item-note">{tServices('pricing.repair.note')}</p>
                <ul className="menu-item-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.repair.feature1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.repair.feature2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.repair.feature3')}</li>
                </ul>
              </div>

              {/* Item 3: Certification - Highlight */}
              <div className="menu-item menu-item-highlight">
                <div className="menu-item-badge">Exclusif</div>
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{tServices('pricing.certification.title')}</h3>
                  <div className="menu-item-price">{tServices('pricing.certification.price')}</div>
                </div>
                <p className="menu-item-note">{tServices('pricing.certification.note')}</p>
                <ul className="menu-item-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.certification.feature1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.certification.feature2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('pricing.certification.feature3')}</li>
                </ul>
              </div>

            </div>

            {/* Services inclus */}
            <div className="menu-services-list">
              <h4 className="menu-services-title">{tServices('callout.title')}</h4>
              <div className="menu-services-grid">
                <div className="menu-service-item">
                  <CheckCircle className="w-5 h-5" />
                  <span>{tServices('electric.feature1')}</span>
                </div>
                <div className="menu-service-item">
                  <CheckCircle className="w-5 h-5" />
                  <span>{tServices('electric.feature2')}</span>
                </div>
                <div className="menu-service-item">
                  <CheckCircle className="w-5 h-5" />
                  <span>{tServices('electric.feature3')}</span>
                </div>
                <div className="menu-service-item">
                  <CheckCircle className="w-5 h-5" />
                  <span>{tServices('electric.feature4')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: MACHINES THERMIQUES */}
        {/* ============================================ */}
        <section id="thermal" className="menu-section menu-section-alt">
          <div className="container">
            <div className="menu-section-header">
              <div className="menu-section-icon menu-section-icon-rouge">
                <Settings className="w-8 h-8" />
              </div>
              <div>
                <h2 className="menu-section-title">{tServices('thermal.title')}</h2>
                <p className="menu-section-subtitle">{tServices('thermal.description')}</p>
              </div>
            </div>

            <div className="menu-grid menu-grid-2">

              {/* Entretien */}
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{tServices('thermal.serviceTitle')}</h3>
                  <div className="menu-item-price">{tServices('thermal.startingPrice')}</div>
                </div>
                <ul className="menu-item-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('thermal.serviceFeature1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('thermal.serviceFeature2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('thermal.serviceFeature3')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('thermal.serviceFeature4')}</li>
                </ul>
              </div>

              {/* Réparation */}
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{tServices('thermal.repairTitle')}</h3>
                  <div className="menu-item-price">Sur devis</div>
                </div>
                <ul className="menu-item-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('thermal.repairFeature1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('thermal.repairFeature2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('thermal.repairFeature3')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('thermal.repairFeature4')}</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 3: VÉLOS & E-BIKES */}
        {/* ============================================ */}
        <section id="bikes" className="menu-section">
          <div className="container">
            <div className="menu-section-header">
              <div className="menu-section-icon menu-section-icon-teal">
                <Bike className="w-8 h-8" />
              </div>
              <div>
                <h2 className="menu-section-title">{tServices('bikes.title')}</h2>
                <p className="menu-section-subtitle">{tServices('bikes.description')}</p>
              </div>
            </div>

            <div className="menu-grid menu-grid-2">

              {/* Vélos classiques */}
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{tServices('bikes.serviceTitle')}</h3>
                  <div className="menu-item-price">{tServices('bikes.startingPrice')}</div>
                </div>
                <ul className="menu-item-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('bikes.serviceFeature1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('bikes.serviceFeature2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('bikes.serviceFeature3')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('bikes.serviceFeature4')}</li>
                </ul>
              </div>

              {/* E-bikes */}
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{tServices('bikes.electricTitle')}</h3>
                  <div className="menu-item-price">Sur devis</div>
                </div>
                <ul className="menu-item-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('bikes.electricFeature1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('bikes.electricFeature2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('bikes.electricFeature3')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('bikes.electricFeature4')}</li>
                </ul>
              </div>

            </div>

            {/* Note Speedped */}
            <div className="menu-note">
              <p>{tServices('bikes.speedpedNote')}</p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: PROFESSIONNELS */}
        {/* ============================================ */}
        <section id="pro" className="menu-section-dark">
          <div className="container">
            <div className="menu-section-header-dark">
              <span className="menu-pro-badge">
                <Building2 className="w-4 h-4" />
                Professionnels
              </span>
              <h2 className="menu-section-title-dark">{tServices('b2b.title')}</h2>
              <p className="menu-section-subtitle-dark">{tServices('b2b.subtitle')}</p>
            </div>

            <div className="menu-grid">

              {/* Contrats d'entretien */}
              <div className="menu-item-dark">
                <Building2 className="w-8 h-8 menu-item-dark-icon" />
                <h3 className="menu-item-dark-title">{tServices('b2b.contracts.title')}</h3>
                <p className="menu-item-dark-desc">{tServices('b2b.contracts.description')}</p>
                <ul className="menu-item-dark-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.contracts.benefit1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.contracts.benefit2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.contracts.benefit3')}</li>
                </ul>
              </div>

              {/* Construction */}
              <div className="menu-item-dark">
                <Wrench className="w-8 h-8 menu-item-dark-icon" />
                <h3 className="menu-item-dark-title">{tServices('b2b.construction.title')}</h3>
                <p className="menu-item-dark-desc">{tServices('b2b.construction.description')}</p>
                <ul className="menu-item-dark-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.construction.benefit1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.construction.benefit2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.construction.benefit3')}</li>
                </ul>
              </div>

              {/* Paysagistes */}
              <div className="menu-item-dark">
                <TrendingUp className="w-8 h-8 menu-item-dark-icon" />
                <h3 className="menu-item-dark-title">{tServices('b2b.landscaping.title')}</h3>
                <p className="menu-item-dark-desc">{tServices('b2b.landscaping.description')}</p>
                <ul className="menu-item-dark-features">
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.landscaping.benefit1')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.landscaping.benefit2')}</li>
                  <li><CheckCircle className="w-4 h-4" />{tServices('b2b.landscaping.benefit3')}</li>
                </ul>
              </div>

            </div>

            {/* CTA Pro */}
            <div className="menu-cta-dark">
              <a href="tel:0767080308" className="btn-premium-primary">
                <Phone className="w-5 h-5" />
                <span>{tCta('contactB2B')}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA FINAL - Compact */}
        {/* ============================================ */}
        <section className="menu-cta-final">
          <div className="container">
            <div className="menu-cta-final-inner">
              <p className="menu-cta-final-text">{tServices('cta.subtitle')}</p>
              <div className="menu-cta-final-actions">
                <a href="tel:0767080308" className="menu-cta-phone">
                  <Phone className="w-5 h-5" />
                  <span>076 708 03 08</span>
                </a>
                <a href="/contact" className="menu-cta-link">
                  <span>{tCta('findUs')}</span>
                  <ArrowRight className="w-4 h-4" />
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

'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container section">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Column 1 - About */}
          <div>
            <h3 className="text-h4 text-white mb-4">Mecaval</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {locale === 'fr'
                ? "Atelier de réparation de machines électriques, thermiques et vélos à Savièse, Valais."
                : "Reparaturwerkstatt für elektrische und thermische Maschinen sowie Fahrräder in Savièse, Wallis."
              }
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-teal" />
              <span>{t('address')}</span>
            </div>
          </div>

          {/* Column 2 - Quick Navigation */}
          <div>
            <h3 className="text-h4 text-white mb-4">
              {locale === 'fr' ? 'Navigation' : 'Navigation'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-400 hover:text-teal transition-colors text-sm"
                >
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-400 hover:text-teal transition-colors text-sm"
                >
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/atelier`}
                  className="text-gray-400 hover:text-teal transition-colors text-sm"
                >
                  {tNav('atelier')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-400 hover:text-teal transition-colors text-sm"
                >
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-h4 text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                <a
                  href={`tel:${tNav('phone').replace(/\s/g, '')}`}
                  className="text-gray-400 hover:text-teal transition-colors text-sm"
                >
                  {tNav('phone')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                <a
                  href="mailto:info@mecaval.ch"
                  className="text-gray-400 hover:text-teal transition-colors text-sm"
                >
                  info@mecaval.ch
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{t('hours')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {t('copyright')}
            </p>
            <Link
              href={`/${locale}/legal`}
              className="text-sm text-gray-500 hover:text-teal transition-colors"
            >
              {t('legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

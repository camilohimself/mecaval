'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('atelier'), href: `/${locale}/atelier` },
    { name: t('contact'), href: `/${locale}/contact` }
  ];

  const otherLocale = locale === 'fr' ? 'de' : 'fr';
  const currentPath = pathname.replace(`/${locale}`, '');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <img
                src="/mecaval-logo.svg"
                alt="Mecaval"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex gap-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== `/${locale}` && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-teal border-b-2 border-teal pb-1'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Language Switcher */}
            <Link
              href={`/${otherLocale}${currentPath}`}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-all"
            >
              {otherLocale.toUpperCase()}
            </Link>

            {/* Phone CTA */}
            <Button
              variant="primary"
              size="md"
              icon={Phone}
              iconPosition="left"
              href={`tel:${t('phone').replace(/\s/g, '')}`}
            >
              {t('phone')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== `/${locale}` && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-teal bg-teal-light'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Language Switcher Mobile */}
              <Link
                href={`/${otherLocale}${currentPath}`}
                className="text-sm font-medium text-gray-600 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all text-center"
              >
                {otherLocale.toUpperCase()}
              </Link>

              {/* Phone CTA Mobile */}
              <Button
                variant="primary"
                size="md"
                icon={Phone}
                iconPosition="left"
                href={`tel:${t('phone').replace(/\s/g, '')}`}
                fullWidth
              >
                {t('phone')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

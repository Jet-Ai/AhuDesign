import type { Metadata } from 'next';
import { translate, type Locale } from './i18n';

export function siteMetadata(origin: string, locale: Locale): Metadata {
  const base = new URL(origin);
  const url = new URL('/' + locale, base).href;
  const title = translate(locale, 'AHU Design — Interiors & Spaces');
  const description = translate(locale, '15 years of design and renovation experience in Azerbaijan and Türkiye, now in Europe. Professional market, restaurant and office equipment sourcing, supply and installation.');
  const locales = { sk: 'sk_SK', az: 'az_AZ', en: 'en_GB' };
  return {
    metadataBase: base,
    title,
    description,
    applicationName: 'AHU Design',
    alternates: {
      canonical: url,
      languages: {
        sk: new URL('/sk', base).href,
        az: new URL('/az', base).href,
        en: new URL('/en', base).href,
        'x-default': new URL('/sk', base).href,
      },
    },
    openGraph: {
      type: 'website', siteName: 'AHU Design', title, description, url,
      locale: locales[locale],
      alternateLocale: Object.entries(locales).filter(([key]) => key !== locale).map(([, value]) => value),
    },
    twitter: { card: 'summary', title, description },
  };
}

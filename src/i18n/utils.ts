import { languages, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL | string): keyof typeof languages {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const [, lang] = pathname.split('/');
  if (lang && lang in languages) {
    return lang as keyof typeof languages;
  }
  return defaultLang;
}

export function useTranslations<T>(lang: keyof typeof languages, translations: Record<string, T>) {
  return translations[lang] || translations[defaultLang];
}

export function translatePath(path: string, lang: keyof typeof languages): string {
  if (!showDefaultLang && lang === defaultLang) {
    return path.startsWith('/') ? path : `/${path}`;
  }
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

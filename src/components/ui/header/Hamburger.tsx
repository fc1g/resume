import type { Language } from '@/i18n/ui';
import { useTranslations } from '@/i18n/utils';
import { useState } from 'react';
import NavBar from './NavBar';

type HamburgerProps = {
  lang: Language;
  route: string;
};

export default function Hamburger({ lang, route }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(lang);

  return (
    <>
      <button
        aria-label={t('hamburger.label')}
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger z-[10] block sm:hidden ${isOpen ? 'open' : ''}`}
      >
        <span className="hamburger-top" />
        <span className="hamburger-middle" />
        <span className="hamburger-bottom" />
        <span className="sr-only">
          {isOpen ? t('hamburger.close') : t('hamburger.open')}
        </span>
      </button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-0 z-[55] mt-12">
          <NavBar
            className="mt-4 flex flex-col gap-2 border border-border bg-primary-foreground p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse [&>lin]:w-full"
            lang={lang}
            route={route}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
}

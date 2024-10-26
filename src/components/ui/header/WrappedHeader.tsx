import type { Language } from '@/i18n/ui';
import { useState } from 'react';

import DarkMode from './DarkMode';
import Hamburger from './Hamburger';
import LangList from './LangList';
import NavBar from './NavBar';

type WrappedHeaderProps = {
  lang: Language;
  route: string;
};

export default function WrappedHeader({ lang, route }: WrappedHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="flex items-center justify-between p-4 md:p-8">
      <Hamburger lang={lang} isOpen={isOpen} setIsOpen={toggleMenu} />

      <NavBar
        className="hidden items-center justify-center gap-8 sm:flex"
        lang={lang}
        route={route}
      />

      {isOpen ? (
        <div className="absolute inset-x-0 top-0 z-[55] mt-16">
          <NavBar
            className="mt-4 flex flex-col gap-2 border border-border bg-primary-foreground p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse [&>lin]:w-full"
            lang={lang}
            route={route}
          />
        </div>
      ) : (
        ''
      )}

      <div className="flex items-center gap-4">
        <DarkMode lang={lang} />

        <LangList lang={lang} route={route} />
      </div>
    </header>
  );
}

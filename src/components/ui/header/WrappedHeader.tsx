import type { Language } from '@/i18n/ui';
import DarkMode from './DarkMode';
import Hamburger from './Hamburger';
import LangList from './LangList';
import NavBar from './NavBar';

type WrappedHeaderProps = {
  lang: Language;
  route: string;
};

export default function WrappedHeader({ lang, route }: WrappedHeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 md:p-8">
      <Hamburger lang={lang} route={route} />

      <NavBar
        className="hidden items-center justify-center gap-8 sm:flex"
        lang={lang}
        route={route}
      />

      <div className="flex items-center gap-4">
        <DarkMode lang={lang} />

        <LangList lang={lang} route={route} />
      </div>
    </header>
  );
}

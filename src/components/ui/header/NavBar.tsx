import navigation from '@/../data/navigation.json';
import { type Language } from '@/i18n/ui';
import { useTranslatedPath, useTranslations } from '@/i18n/utils';

type NavBarProps = {
  lang: Language;
  route: string;
  className: string;
};

export default function NavBar({ lang, route, className }: NavBarProps) {
  const translatePath = useTranslatedPath(lang);
  const t = useTranslations(lang);

  type Label = keyof typeof navigation;
  const data = Object.entries(navigation).map(([key, label]) => ({
    href: label,
    label: key,
  }));

  return (
    <nav>
      <ul className={className}>
        {data.map(({ href, label }) => {
          const isActive = route === href || (!href && route === '/');
          const linkStyles = `px-2 py-1 ${isActive ? 'rounded bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'}`;

          return (
            <li key={label} className={linkStyles}>
              <a className="focus" href={translatePath(href)}>
                {t(`nav.${label as Label}`)}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

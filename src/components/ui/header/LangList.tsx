import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages, type Language } from '@/i18n/ui';
import { useTranslatedPath, useTranslations } from '@/i18n/utils';
import { useCallback } from 'react';

type LangListProps = {
  lang: Language;
  route: string;
};

export default function LangList({ lang, route }: LangListProps) {
  const translatePath = useTranslatedPath(lang);
  const t = useTranslations(lang);

  const setLocaleHandler = useCallback(
    (newLang: Language) => {
      localStorage.setItem('language', newLang);
      window.location.href = translatePath(route, newLang);
    },
    [route, translatePath],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-haspopup="true"
        className="focus h-9 w-24 border"
      >
        {t(`langList.${lang}`)}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map(
          language =>
            language !== lang && (
              <DropdownMenuItem
                onClick={() => setLocaleHandler(language)}
                key={language}
              >
                {t(`langList.${language}`)}
              </DropdownMenuItem>
            ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

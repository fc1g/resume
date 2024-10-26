import { Moon, Sun } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Language } from '@/i18n/ui';
import { useTranslations } from '@/i18n/utils';

type DarkModeProps = {
	lang: Language;
};

export default function DarkMode({ lang }: DarkModeProps) {
	const t = useTranslations(lang);
	const [theme, setThemeState] = React.useState<
		'theme-light' | 'dark' | 'system'
	>('theme-light');

	React.useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains('dark');
		setThemeState(isDarkMode ? 'dark' : 'theme-light');
	}, []);

	React.useEffect(() => {
		const isDark =
			theme === 'dark' ||
			(theme === 'system' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
	}, [theme]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">{t('darkMode.toggle')}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setThemeState('theme-light')}>
					{t('darkMode.light')}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setThemeState('dark')}>
					{t('darkMode.dark')}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setThemeState('system')}>
					{t('darkMode.system')}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

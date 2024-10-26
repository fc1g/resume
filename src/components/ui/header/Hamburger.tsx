import type { Language } from '@/i18n/ui';
import { useTranslations } from '@/i18n/utils';

type HamburgerProps = {
	isOpen: boolean;
	lang: Language;
	setIsOpen: () => void;
};

export default function Hamburger({ lang, isOpen, setIsOpen }: HamburgerProps) {
	const t = useTranslations(lang);

	return (
		<button
			aria-label={isOpen ? t('hamburger.close') : t('hamburger.open')}
			aria-expanded={isOpen}
			type="button"
			onClick={setIsOpen}
			className={`hamburger z-[10] block sm:hidden ${isOpen ? 'open' : ''}`}
		>
			<span className="hamburger-top" />
			<span className="hamburger-middle" />
			<span className="hamburger-bottom" />
			<span className="sr-only">{t('hamburger.label')}</span>
		</button>
	);
}

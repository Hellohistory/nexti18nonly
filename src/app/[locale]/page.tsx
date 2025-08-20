// src/app/[locale]/page.tsx
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import LocaleSwitcher from './components/LocaleSwitcher';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main style={{padding: 24}}>
      <LocaleSwitcher />
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </main>
  );
}

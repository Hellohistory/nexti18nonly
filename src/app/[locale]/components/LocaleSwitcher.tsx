// src/app/[locale]/components/LocaleSwitcher.tsx
'use client';
import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import type {Locale} from '@/types/i18n';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <label style={{display: 'inline-flex', gap: 8, alignItems: 'center'}}>
      <span>{t('label')}</span>
      <select
        value={locale}
        onChange={(e) => {
          const next = e.target.value as Locale;
          if (next === locale) return;
          router.replace({pathname}, {locale: next});
        }}
      >
        <option value="en">{t('en')}</option>
        <option value="zh">{t('zh')}</option>
      </select>
    </label>
  );
}
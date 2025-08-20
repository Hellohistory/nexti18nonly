// src/app/[locale]/components/LocaleSwitcher.tsx
'use client';
import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname(); // 已是不带语言前缀的“受控”路径类型

  return (
    <label style={{display: 'inline-flex', gap: 8, alignItems: 'center'}}>
      <span>{t('label')}</span>
      <select
        value={locale}
        onChange={(e) => {
          const next = e.target.value as 'en' | 'zh';
          if (next === locale) return;
          // 关键：传对象，让类型系统知道是受控路由
          router.replace({pathname}, {locale: next});
        }}
      >
        <option value="en">{t('en')}</option>
        <option value="zh">{t('zh')}</option>
      </select>
    </label>
  );
}

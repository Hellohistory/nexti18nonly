# i18n-only Template

一个最小化的模板，仅包含国际化（i18n）功能：Next.js App Router + next-intl v4 + TypeScript + ESLint。

## 使用
1. `npm i`
2. `npm run dev`
3. 打开浏览器访问 `/`，它将根据你的语言偏好自动重定向到 `/{locale}` (例如 `/` 或 `/zh`)。

## 约定
- 国际化内容仅维护 `messages/*.json` 与 `src/i18n/*` 目录下的文件。
- 所有新的页面和路由都应放置在 `src/app/[locale]/...` 目录下。
- 记住用户语言：在切换语言时，会将用户的选择写入 `NEXT_LOCALE` cookie。默认语言 `en` 访问时URL不带 `/en` 前缀（`localePrefix: 'as-needed'`）。
- 构建前检查：每次执行 `npm run build` 前，会自动运行 `npm run i18n:check` 脚本来确保所有语言文件的 key 完全一致。
- 长期维护：保持 API 简洁，不在模板内耦合任何具体的业务逻辑，使其能够作为未来十年项目的起点。
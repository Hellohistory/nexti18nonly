import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('messages');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
if (files.length < 2) {
  console.error('需要至少两个语言文件进行对比');
  process.exit(1);
}

const flatten = (obj, prefix = '') => {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(out, flatten(v, key));
    } else {
      out[key] = true;
    }
  }
  return out;
};

const maps = files.map((f) => {
  const json = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  return {name: f.replace(/\.json$/, ''), keys: new Set(Object.keys(flatten(json)))};
});

const union = new Set(maps.flatMap((m) => [...m.keys]));
let ok = true;
for (const m of maps) {
  const missing = [...union].filter((k) => !m.keys.has(k));
  if (missing.length) {
    ok = false;
    console.error(`语言 \"${m.name}\" 缺失以下 key:
- ${missing.join('\n- ')}`);
  }
}

if (!ok) process.exit(2);
console.log('i18n key 校验通过');
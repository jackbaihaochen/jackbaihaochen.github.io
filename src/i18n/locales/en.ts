export default {
  brand: 'Web Toolbox',
  nav: {
    home: 'Home',
    json: 'JSON Formatter',
    jsonyaml: 'JSON ↔ YAML',
    faq: 'FAQ',
    privacy: 'Privacy'
  },
  theme: {
    toLight: 'Switch to Light',
    toDark: 'Switch to Dark'
  },
  lang: {
    zh: '中文',
    en: 'English',
    ja: '日本語'
  },
  home: {
    title: 'Web Toolbox',
    subtitle: 'Front‑end only · Privacy‑friendly · Growing set of tools',
    seoTitle: 'Online Toolbox | JSON Formatter | JSON ↔ YAML Converter | Client‑side only',
    seoDescription: 'Free, privacy‑friendly developer tools: JSON formatting/minify/validation and JSON ↔ YAML conversion. All processing happens locally in your browser — no data collection or uploads.',
    keywords: 'online tools, JSON formatter, JSON minify, JSON validator, JSON beautifier, JSON to YAML, YAML to JSON, developer tools, client‑side only, privacy friendly',
    catalog: 'Tools',
    faqTitle: 'FAQ',
    faqMore: 'Full FAQ',
    tools: {
      json: {
        name: 'JSON Formatter',
        desc: 'Pretty/Minify/Validate/Copy/Download online',
        tagDev: 'Developer',
        tagFmt: 'Format'
      },
      jsonyaml: {
        name: 'JSON ↔ YAML',
        desc: 'Convert both ways · Validate · Copy · Download',
        tagDev: 'Developer',
        tagConv: 'Convert'
      }
    }
  },
  jsonyaml: {
    title: 'JSON ↔ YAML Converter',
    subtitle: 'Runs locally in your browser — no upload',
    seoTitle: 'JSON ↔ YAML Converter | Bidirectional Convert/Validate/Copy/Download | Client‑side only',
    seoDescription: 'Convert JSON and YAML in both directions with validation, copy and download. Processing happens locally in your browser.',
    keywords: 'JSON to YAML, YAML to JSON, JSON YAML converter, JSON YAML validator, online converter',
    jsonInput: 'JSON Input',
    yamlInput: 'YAML Input',
    toYaml: 'JSON → YAML',
    toJson: 'YAML → JSON',
    clear: 'Clear',
    copy: 'Copy',
    downloadYaml: 'Download .yaml',
    downloadJson: 'Download .json',
    ok: 'Done',
    jsonErr: 'JSON syntax error: {{msg}}',
    yamlErr: 'YAML syntax error: {{msg}}',
    jsonPlaceholder: '{"hello":"world"}',
    yamlPlaceholder: 'hello: world',
    note: 'This tool uses native JSON.parse / JSON.stringify and js-yaml to convert both ways locally on your device.'
  },
  json: {
    title: 'JSON Formatter',
    subtitle: 'Pretty, minify, validate, copy and download',
    seoTitle: 'JSON Formatter | Beautify/Minify/Validate/Copy/Download | Client‑side only',
    seoDescription: 'Format and minify JSON online, validate syntax, copy and download — all processed locally in your browser. No uploads.',
    keywords: 'JSON formatter, JSON beautifier, JSON minify, JSON validator, JSON online, JSON lint',
    input: 'Input',
    output: 'Output',
    beautify: 'Pretty',
    minify: 'Minify',
    validate: 'Validate',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download .json',
    ok: 'Done',
    valid: 'Valid JSON',
    placeholder: '{"hello":"world"}',
    note: 'This tool parses and formats JSON locally in your browser using native JSON.parse and JSON.stringify. No data leaves your device.',
    copied: 'Copied',
    downloaded: 'Downloaded',
    syntaxError: 'Syntax error: {{msg}}'
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Privacy, security and roadmap',
    seoTitle: 'FAQ | Online Toolbox',
    seoDescription: 'Common questions: privacy, local processing, roadmap, open source and feedback.',
    keywords: 'FAQ, privacy, local processing, zero upload, security, open source, roadmap',
    q1: 'Why is it privacy‑friendly?',
    a1: 'All tools run entirely in your browser. Data is neither stored nor uploaded.',
    q2: 'Which browsers are supported?',
    a2: 'Recent two major versions of Chrome, Edge, Firefox and Safari; mobile supported as well.',
    q3: 'What tools are coming next?',
    a3: 'JSON↔YAML, Base64, Regex tester, hash/encoding, text and image utilities, etc.',
    q4: 'Is it open source?',
    a4: 'Yes, the frontend is open‑sourced on GitHub. Contributions are welcome.'
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Front‑end only · Zero upload · Privacy‑friendly',
    seoTitle: 'Privacy Policy | Online Toolbox',
    seoDescription: 'Client‑side only, zero upload: tools run locally in your browser; no data collection or persistent storage.',
    keywords: 'privacy policy, data protection, zero upload, client‑side, privacy‑friendly',
    h1: 'How we handle your data',
    p1: 'All tools run locally in your browser. Processing (parse/transform/format) happens in memory on your device.',
    li1: 'No input is collected',
    li2: 'No data is sent to servers',
    li3: 'No persistent storage (unless you download explicitly)',
    h2: 'Cookies and tracking',
    p2: 'No cookies by default; no analytics or ad tracking built‑in.',
    h3: 'Third‑party dependencies',
    p3: 'Current version uses only browser native capabilities; no backend or external APIs.',
    h4: 'Contact us',
    p4: 'Questions? Please open an issue on GitHub.'
  }
};

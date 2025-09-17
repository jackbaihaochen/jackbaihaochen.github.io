export default {
  brand: 'Web Toolbox',
  nav: {
    home: 'Home',
    json: 'JSON Formatter',
    jsonyaml: 'JSON ↔ YAML',
    base64: 'Base64',
    blog: 'Blog',
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
    subtitle: 'Free, privacy-first, multilingual toolbox for developers',
    seoTitle: 'Free Online Developer Toolbox | JSON Formatter | JSON ↔ YAML | Base64 Text & Image Converter',
    seoDescription: 'Free, privacy-friendly developer utilities: JSON formatter/minifier, JSON ↔ YAML converter, Base64 text & image encoder/decoder, plus multilingual blog guides. Everything runs locally in your browser.',
    keywords: 'free developer tools, online JSON formatter, JSON conversion, JSON YAML converter, Base64 image encoder, Base64 decoder, developer blog, client-side tools, privacy-first utilities',
    catalog: 'Tool catalog',
    faqTitle: 'FAQ',
    faqMore: 'Full FAQ',
    blogTitle: 'Latest articles',
    blogIntro: 'Tutorials and explainers to make JSON, YAML, and Base64 workflows easier.',
    blogMore: 'Visit blog',
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
      },
      base64: {
        name: 'Base64',
        desc: 'Convert text & images ↔ Base64 locally (Unicode friendly)',
        tagDev: 'Developer',
        tagEnc: 'Encode',
        tagImg: 'Images'
      }
    }
  },
  blog: {
    title: 'Developer Blog',
    subtitle: 'Actionable guides for privacy-first developer tooling.',
    seoTitle: 'Developer Blog | JSON & Base64 Tutorials | Web Toolbox',
    seoDescription: 'Read multilingual tutorials about JSON, YAML, Base64, and privacy-first workflows. Pair every article with free, client-side tools that keep your data local.',
    keywords: 'developer blog, JSON tutorial, YAML guide, Base64 image converter, free developer tools, privacy-first tooling',
    latest: 'Latest posts',
    readMore: 'Read article',
    tagsLabel: 'Tags',
    publishedLabel: 'Published',
    updatedLabel: 'Updated',
    readingTimeLabel: 'Reading time',
    moreComing: 'More articles are in the works — stay tuned!',
    articles: {
      jsonBasics: {
        slug: 'json-basics',
        title: 'JSON essentials: structure, validation, and workflow tips',
        description: 'Understand JSON structure, avoid common mistakes, and validate payloads quickly with free client-side tools.',
        summary: 'Learn how JSON works, how to avoid common gotchas, and how to validate payloads locally with free tools.',
        tags: ['JSON', 'API', 'Best Practices'],
        published: { iso: '2025-09-17', text: '17 Sep 2025' },
        updated: { iso: '2025-09-17', text: '17 Sep 2025' },
        readingTime: '6 min read',
        heroAlt: 'Illustrated JSON tree made of brackets and nodes'
      }
    }
  },
  articles: {
    jsonBasics: {
      seoTitle: 'JSON Essentials Guide | Web Toolbox Blog',
      seoDescription: 'Master JSON structure, validation, and developer workflows. Includes a pre-flight checklist and privacy-first tooling tips.',
      keywords: 'JSON guide, JSON tutorial, JSON validation, JSON best practices, JSON formatter',
      title: 'JSON essentials: structure, validation, and workflow tips',
      heroIntro: 'JSON shows up in APIs, configuration files, database exports, and analytics pipelines. A solid mental model keeps you fast and accurate.',
      readingTime: '6 min read',
      published: 'Published: 17 Sep 2025',
      updated: 'Updated: 17 Sep 2025',
      sections: [
        {
          heading: 'What problem does JSON solve?',
          paragraphs: [
            'JavaScript Object Notation (JSON) is the lightweight interchange format that nearly every modern API and CLI relies on. It is easy for machines to parse and easy for humans to scan.',
            'Because JSON is plain text, teams across languages can share payloads through version control, docs, or chat without worrying about binary compatibility.'
          ]
        },
        {
          heading: 'Know the building blocks',
          paragraphs: [
            'JSON is built from a short list of shapes: objects (`{}`) for key–value pairs, arrays (`[]`) for ordered collections, and primitives such as strings, numbers, booleans, or `null`.',
            'When you design an API response, you are usually composing these shapes into a predictable schema that clients can rely on.'
          ],
          code: {
            language: 'json',
            caption: 'A compact JSON payload that mirrors common API responses.',
            content: `{
  "id": "toolbox-42",
  "name": "Web Toolbox",
  "features": [
    "JSON formatter",
    "JSON ↔ YAML converter",
    "Base64 (text & images)"
  ],
  "pricing": {
    "plan": "free",
    "limits": null
  },
  "privacyFriendly": true
}`
          }
        },
        {
          heading: 'Frequent mistakes (and easy fixes)',
          paragraphs: [
            'Even experienced teams slip on syntax. Catching the mistakes before they hit production saves hours of debugging.'
          ],
          list: [
            'Trailing commas after the last property or array item',
            'Single quotes instead of double quotes for property names or strings',
            'Comment lines (`//`) or dangling template placeholders',
            'Unescaped newline or quote characters inside strings',
            'Mixing tabs and spaces in a way that confuses reviewers'
          ],
          closing: 'A formatter highlights these issues immediately and stops invalid JSON from shipping.'
        },
        {
          heading: 'Validate faster with local tools',
          paragraphs: [
            'Before you commit or share a payload, run it through a formatter/validator. The syntax check confirms that your JSON is strictly valid while the formatter keeps indentation consistent.',
            'The Web Toolbox JSON Formatter runs entirely in your browser, so you can beautify, minify, and lint payloads without uploading sensitive samples.',
            'If you maintain YAML configs alongside JSON, convert them with the JSON ↔ YAML tool to keep both versions aligned.'
          ]
        }
      ],
      checklist: {
        title: 'Pre-flight checklist for JSON payloads',
        items: [
          'Validate syntax with a formatter or linter before pushing changes',
          'Confirm required keys and data types against your schema',
          'Strip secrets or personal data before sharing sample payloads',
          'Keep a minimal example alongside API or infrastructure docs'
        ]
      },
      tips: {
        title: 'Workflow boosters',
        items: [
          'Automate linting with a pre-commit hook or CI step that uses your formatter of choice.',
          'Store canonical JSON samples in version control so teammates can diff intent instead of formatting.'
        ]
      },
      conclusion: {
        title: 'Keep practicing',
        paragraphs: [
          'The more JSON you read and write, the faster you will spot issues. Lean on tools that preserve privacy while accelerating feedback.',
          'Try the Web Toolbox JSON Formatter or the JSON ↔ YAML converter to keep your payloads clean, then explore the Base64 tool when you need to move binary data as text.'
        ]
      },
      cta: {
        title: 'Continue with these tools',
        jsonFormatter: 'Open JSON Formatter',
        jsonYaml: 'Open JSON ↔ YAML Converter',
        base64: 'Open Base64 Tool'
      }
    }
  },
  jsonyaml: {
    title: 'JSON ↔ YAML Converter',
    subtitle: 'Runs locally in your browser — no upload',
    seoTitle: 'JSON ↔ YAML Converter | Free Bidirectional Convert/Validate | Client-side only',
    seoDescription: 'Convert JSON and YAML in both directions for free with validation, copy, and download options. Processing happens locally in your browser.',
    keywords: 'free JSON to YAML, free YAML to JSON, JSON YAML converter, JSON YAML validator, client-side converter',
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
    seoTitle: 'JSON Formatter | Free Beautify/Minify/Validate | Client-side only',
    seoDescription: 'Free online JSON formatter and minifier with validation, copy, and download. Everything runs locally in your browser — no uploads.',
    keywords: 'free JSON formatter, JSON beautifier, JSON minify, JSON validator, JSON online, JSON lint',
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
  base64: {
    title: 'Base64 Encode & Decode',
    subtitle: 'Convert text and images locally in your browser',
    seoTitle: 'Base64 Encoder & Decoder | Text & Image Base64 Converter | Client-side only',
    seoDescription: 'Convert text and images to and from Base64 for free. Unicode-safe, image-friendly, and fully client-side.',
    keywords: 'Base64 encode, Base64 decode, Base64 image converter, text to Base64, image to Base64, client-side Base64',
    plainTitle: 'Plain text',
    encodedTitle: 'Base64 text',
    plainPlaceholder: 'Hello, 世界',
    encodedPlaceholder: 'SGVsbG8sIOS4lueVjA==',
    encode: 'Encode → Base64',
    decode: 'Decode → Text',
    copy: 'Copy',
    clear: 'Clear',
    encoded: 'Encoded to Base64',
    decoded: 'Decoded to text',
    copied: 'Copied',
    encodeError: 'Encode failed: {{msg}}',
    decodeError: 'Decode failed: {{msg}}',
    note: 'Uses TextEncoder/TextDecoder and browser Base64 APIs locally. Your data never leaves the device.',
    imageCardTitle: 'Image ↔ Base64',
    imageIntro: 'Convert images to Base64 data URLs or render Base64 back into an image — processing stays on this device.',
    imagePlaceholder: 'Paste data:image/... or raw Base64 here',
    imageSelect: 'Select image',
    imageHelper: 'Supports PNG, JPG, GIF, WebP, SVG. Files are never uploaded.',
    imageUnsupported: 'Only image files are supported.',
    imageRender: 'Render Base64 → Image',
    imageDownload: 'Download image',
    imageClear: 'Clear image data',
    imageInfo: 'Current image: {{name}} • {{type}} • {{size}}',
    imagePreviewLabel: 'Preview',
    imageEncoded: 'Image converted to Base64',
    imageDecoded: 'Base64 rendered as image',
    imageEncodeError: 'Image conversion failed: {{msg}}',
    imageDecodeError: 'Unable to render Base64 as image: {{msg}}'
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

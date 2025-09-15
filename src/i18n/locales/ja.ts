export default {
  brand: 'オンラインツールボックス',
  nav: {
    home: 'ホーム',
    json: 'JSON フォーマッタ',
    jsonyaml: 'JSON ↔ YAML 変換',
    faq: 'FAQ',
    privacy: 'プライバシー'
  },
  theme: {
    toLight: 'ライトモードに切替',
    toDark: 'ダークモードに切替'
  },
  lang: {
    zh: '中文',
    en: 'English',
    ja: '日本語'
  },
  home: {
    title: 'オンラインツールボックス',
    subtitle: 'フロントエンドのみ・プライバシー重視・継続拡張',
    seoTitle: 'オンラインツールボックス｜JSON フォーマッタ｜JSON ↔ YAML 変換｜クライアントサイドのみ',
    seoDescription: 'プライバシー重視の開発者向けオンラインツール。JSON の整形/圧縮/検証や JSON ↔ YAML の双方向変換をブラウザ内で処理。データ収集・アップロードなし。',
    keywords: 'オンラインツール, JSON フォーマッタ, JSON 圧縮, JSON 検証, JSON 整形, JSON to YAML, YAML to JSON, 開発者ツール, クライアントサイドのみ, プライバシー重視',
    catalog: 'ツール一覧',
    faqTitle: 'FAQ',
    faqMore: 'FAQ 全文',
    tools: {
      json: {
        name: 'JSON フォーマッタ',
        desc: 'オンラインで整形／圧縮／検証／コピー／ダウンロード',
        tagDev: '開発者',
        tagFmt: '整形'
      },
      jsonyaml: {
        name: 'JSON ↔ YAML 変換',
        desc: '双方向変換・検証・コピー・ダウンロード（フロントのみ）',
        tagDev: '開発者',
        tagConv: '変換'
      }
    }
  },
  jsonyaml: {
    title: 'JSON ↔ YAML 変換',
    subtitle: 'ブラウザ内でローカル処理・アップロードなし',
    seoTitle: 'JSON ↔ YAML 変換｜双方向変換/検証/コピー/ダウンロード｜クライアントサイドのみ',
    seoDescription: 'JSON と YAML を双方向に変換し、検証・コピー・ダウンロードに対応。処理はブラウザ内で完結。',
    keywords: 'JSON to YAML, YAML to JSON, JSON YAML 変換, JSON YAML バリデータ, オンライン変換',
    jsonInput: 'JSON 入力',
    yamlInput: 'YAML 入力',
    toYaml: 'JSON → YAML',
    toJson: 'YAML → JSON',
    clear: 'クリア',
    copy: 'コピー',
    downloadYaml: 'ダウンロード .yaml',
    downloadJson: 'ダウンロード .json',
    ok: '完了',
    jsonErr: 'JSON 構文エラー：{{msg}}',
    yamlErr: 'YAML 構文エラー：{{msg}}',
    jsonPlaceholder: '{"hello":"world"}',
    yamlPlaceholder: 'hello: world',
    note: '本ツールは JSON.parse / JSON.stringify と js-yaml を用いてデバイス上で双方向変換します。'
  },
  json: {
    title: 'JSON フォーマッタ',
    subtitle: '整形・圧縮・検証・コピー・ダウンロード',
    seoTitle: 'JSON フォーマッタ｜整形/圧縮/検証/コピー/ダウンロード｜クライアントサイドのみ',
    seoDescription: 'JSON をオンラインで整形・圧縮し、構文検証、コピー、ダウンロードが可能。処理はブラウザ内で完結、アップロードなし。',
    keywords: 'JSON フォーマッタ, JSON 整形, JSON 圧縮, JSON 検証, JSON オンライン, JSON lint',
    input: '入力',
    output: '出力',
    beautify: '整形',
    minify: '圧縮',
    validate: '検証',
    clear: 'クリア',
    copy: 'コピー',
    download: 'ダウンロード .json',
    ok: '完了',
    valid: '有効な JSON',
    placeholder: '{"hello":"world"}',
    note: '本ツールはブラウザ内で JSON.parse と JSON.stringify を用いてローカルに処理します。データは送信されません。',
    copied: 'コピーしました',
    downloaded: 'ダウンロードしました',
    syntaxError: '構文エラー：{{msg}}'
  },
  faq: {
    title: 'FAQ',
    subtitle: 'プライバシー・セキュリティ・ロードマップ',
    seoTitle: 'FAQ｜オンラインツールボックス',
    seoDescription: 'プライバシー、ローカル処理、ロードマップ、OSS とフィードバックに関するよくある質問。',
    keywords: 'FAQ, プライバシー, ローカル処理, ゼロアップロード, セキュリティ, オープンソース, ロードマップ',
    q1: 'なぜプライバシーに配慮しているのですか？',
    a1: 'すべてのツールはブラウザ内で完結します。データは保存・送信されません。',
    q2: '対応ブラウザは？',
    a2: 'Chrome / Edge / Firefox / Safari の直近2メジャー、モバイルも対応。',
    q3: '今後追加予定のツールは？',
    a3: 'JSON↔YAML、Base64、正規表現テスター、ハッシュ・エンコード、テキスト/画像ユーティリティなど。',
    q4: 'オープンソースですか？',
    a4: 'フロントエンドは GitHub で公開しています。貢献を歓迎します。'
  },
  privacy: {
    title: 'プライバシーポリシー',
    subtitle: 'フロントエンドのみ・ゼロアップロード・プライバシー重視',
    seoTitle: 'プライバシーポリシー｜オンラインツールボックス',
    seoDescription: 'クライアントサイドのみ・ゼロアップロード：ツールはブラウザ内で動作。データ収集や永続保存はありません。',
    keywords: 'プライバシーポリシー, データ保護, ゼロアップロード, クライアントサイド, プライバシー重視',
    h1: 'データの取り扱い',
    p1: '当サイトのツールはすべてブラウザ内で動作し、処理（解析・変換・整形）は端末のメモリ上で行われます。',
    li1: '入力内容は収集しません',
    li2: 'データをサーバーへ送信しません',
    li3: '永続的に保存しません（明示的なダウンロードを除く）',
    h2: 'Cookie とトラッキング',
    p2: 'デフォルトで Cookie を使用せず、解析/広告トラッキングも内蔵していません。',
    h3: 'サードパーティ依存',
    p3: '現行バージョンはブラウザのネイティブ機能のみを使用し、バックエンドや外部 API は不要です。',
    h4: 'お問い合わせ',
    p4: 'ご質問は GitHub の Issue でご連絡ください。'
  }
};

export default {
  brand: 'オンラインツールボックス',
  nav: {
    home: 'ホーム',
    json: 'JSON フォーマッタ',
    jsonyaml: 'JSON ↔ YAML 変換',
    base64: 'Base64 変換',
    blog: 'ブログ',
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
    subtitle: '無料・多言語・フロントエンド完結の開発者向けツールボックス',
    seoTitle: '無料オンライン開発者ツールボックス｜JSON フォーマッタ｜JSON↔YAML｜Base64 テキスト & 画像',
    seoDescription: '無料で使えるプライバシー重視の開発者ツール：JSON 整形/検証、JSON↔YAML 双方向変換、Base64 テキストと画像のエンコード/デコード、多言語ブログ付き。すべてブラウザ内で完結。',
    keywords: '無料開発者ツール, JSON フォーマッタ, JSON 変換, JSON YAML 変換, Base64 画像 変換, 開発者ブログ, クライアントサイド, プライバシー重視',
    catalog: 'ツール一覧',
    faqTitle: 'FAQ',
    faqMore: 'FAQ 全文',
    blogTitle: '最新記事',
    blogIntro: 'JSON・YAML・Base64 のワークフローを楽にする実践的な解説をお届けします。',
    blogMore: 'ブログを見る',
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
      },
      base64: {
        name: 'Base64 変換',
        desc: 'テキストと画像の Base64 相互変換（Unicode 対応）',
        tagDev: '開発者',
        tagEnc: 'エンコード',
        tagImg: '画像'
      }
    }
  },
  blog: {
    title: '開発者ブログ',
    subtitle: 'プライバシー重視の開発ツールに関する実践ガイド。',
    seoTitle: '開発者ブログ｜JSON と Base64 チュートリアル｜オンラインツールボックス',
    seoDescription: 'JSON・YAML・Base64・プライバシー重視のワークフローを多言語で解説。すべての記事が無料のクライアントサイドツールと組み合わせて使えます。',
    keywords: '開発者ブログ, JSON チュートリアル, YAML ガイド, Base64 画像変換, 無料開発者ツール, プライバシー重視',
    latest: '最新記事',
    readMore: '記事を読む',
    tagsLabel: 'タグ',
    publishedLabel: '公開日',
    updatedLabel: '更新日',
    readingTimeLabel: '読了時間',
    moreComing: '今後も記事を追加予定です。お楽しみに！',
    articles: {
      llmBasics: {
        slug: 'llm-intro',
        title: 'LLM入門：基本概念と活用アイデア、導入の第一歩',
        description: 'LLM の仕組みや代表的なユースケース、安全に試すための手順をわかりやすく解説します。',
        summary: 'トークンやコンテキストウィンドウなど必須用語を理解し、小さく始めるためのステップを把握しましょう。',
        tags: ['LLM', 'AI', '入門'],
        published: { iso: '2025-02-14', text: '2025年2月14日' },
        updated: { iso: '2025-02-14', text: '2025年2月14日' },
        readingTime: '約8分で読めます',
        heroAlt: 'テキストを生成する抽象的なニューラルネットワークの図'
      },
      jsonBasics: {
        slug: 'json-basics',
        title: 'JSON 基礎：構造・検証・ワークフロー改善のヒント',
        description: 'JSON の構造を理解し、よくあるミスを避け、無料のクライアントサイドツールで素早く検証する方法をまとめました。',
        summary: 'JSON の仕組みと落とし穴、本番前にローカルで検証する手順を学びましょう。',
        tags: ['JSON', 'API', 'ベストプラクティス'],
        published: { iso: '2025-09-17', text: '2025年9月17日' },
        updated: { iso: '2025-09-17', text: '2025年9月17日' },
        readingTime: '約6分で読めます',
        heroAlt: '括弧とノードで構成された JSON ツリーのイラスト'
      }
    }
  },
  articles: {
    llmBasics: {
      seoTitle: 'LLM入門ガイド｜仕組み・ユースケース・導入チェックリスト',
      seoDescription: '大規模言語モデルの基礎から代表的な活用例、安全な運用ポイントまでをまとめた初心者向けガイド。チェックリスト付き。',
      keywords: 'LLM 入門, 大規模言語モデル, プロンプトエンジニアリング, AI 導入, AI セキュリティ',
      title: 'LLM入門：基本概念と活用アイデア、導入の第一歩',
      heroIntro: 'LLM を導入してみたいけれど何から始めるべきか迷っている方へ。要点を 1 本の記事に凝縮しました。',
      readingTime: '約8分で読めます',
      published: '公開日：2025年2月14日',
      updated: '更新日：2025年2月14日',
      sections: [
        {
          heading: '大規模言語モデルとは？',
          paragraphs: [
            '大規模言語モデル（Large Language Model, LLM）は、膨大なテキストデータで事前学習されたニューラルネットワークで、自然言語を理解・生成できます。',
            '人間のように「理解」しているわけではなく、次に続くトークンを確率的に予測することで、自然な文章や回答を作り出します。'
          ]
        },
        {
          heading: '最低限おさえておきたい用語',
          paragraphs: [
            'ベンダーやチームと会話する際は、以下のキーワードを共有しておくとスムーズです。'
          ],
          list: [
            'トークン：モデルが扱う最小単位。単語または単語の一部で、料金や入力制限はトークン数で計算されます。',
            'コンテキストウィンドウ：モデルが一度に参照できるトークン数。長いウィンドウほど背景情報を多く渡せます。',
            'パラメータ数：モデル規模の目安。大きいほど表現力が高い傾向にありますが、コストと遅延も増えます。',
            '推論とファインチューニング：推論はそのままモデルを呼び出すこと、ファインチューニングは自社データで追加学習させることです。'
          ]
        },
        {
          heading: 'LLMが活躍している代表例',
          paragraphs: [
            '個人の効率化から業務プロセス改善まで、すでに多くの成功例があります。'
          ],
          list: [
            'コンテンツ生成：記事の下書き、マーケティングコピー、商品説明、トレーニング資料。',
            'ナレッジ検索：社内ドキュメントや FAQ と連携したチャットボットや検索体験。',
            '開発支援：サンプルコード生成、エラーメッセージの説明、テストケースの提案。',
            'データ整理：構造化・非構造化データの要約、キーワード抽出、フォーマット変換。'
          ],
          closing: 'まずはリスクが小さく効果が見えやすいシナリオを選び、成果を可視化しながら適用範囲を広げましょう。'
        },
        {
          heading: '小さく始めるための4ステップ',
          list: [
            '解決したい課題と評価指標（例：作業時間削減、回答スピード向上）を明確にする。',
            '適切なモデルと接続方法を選ぶ。まずは公開 API でプロトタイプを作ってみる。',
            '高品質なコンテキストとプロンプト例を用意し、自社の専門用語をしっかり伝える。',
            'フィードバック収集とモニタリングを仕組み化し、出力品質を継続的に改善する。'
          ],
          closing: '検証期間をあらかじめ決め、定期的に成果をレビューすることで、目的のない試行錯誤を防げます。'
        },
        {
          heading: 'セキュリティとガバナンスの注意点',
          paragraphs: [
            'LLM を業務に取り入れるほど、データとコンプライアンスの管理が重要になります。'
          ],
          list: [
            'ISO や GDPR などの認証を確認し、必要に応じてデータ処理契約を締結する。',
            '個人情報や機密情報はアップロード前にマスキングや削除を行う。',
            '重要な出力には必ず人によるレビュー工程を挟み、誤情報の拡散を防ぐ。',
            'プロンプトやモデル設定の変更履歴を残し、問題発生時にすぐ遡れるようにする。'
          ]
        }
      ],
      checklist: {
        title: '導入前チェックリスト',
        items: [
          '目的と KPI を文書化し、期待値をチームで共有する。',
          '少なくとも 10～20 件の実データを用意し、プロンプト検証に使う。',
          '第三者サービスへ渡せるデータ範囲と禁止事項を明確にする。',
          'モデルが使えない場合の代替手順を決め、業務継続性を確保する。'
        ]
      },
      tips: {
        title: '実践のヒント',
        items: [
          'プロンプトはドキュメント化してバージョン管理し、成果をチームで共有する。',
          'テキストだけでなく JSON や YAML など構造化データを併用すると、モデルの理解度が高まります。'
        ]
      },
      conclusion: {
        title: '次のアクション',
        paragraphs: [
          'LLM は万能ではありませんが、適切に使えば知的作業を大きく加速できます。小さな成功事例を積み重ねながらスケールしていきましょう。',
          'コンフィグやフォーマット調整、学習データ作成が必要になったら、Web Toolbox のツールでデータをクリーンに保ってください。'
        ]
      },
      cta: {
        title: 'データ準備を進めよう',
        jsonFormatter: 'JSONを整形する',
        jsonYaml: 'JSON↔YAMLを同期する',
        base64: 'サンプルデータをエンコードする'
      }
    },
    jsonBasics: {
      seoTitle: 'JSON 基礎ガイド｜構造と検証のベストプラクティス',
      seoDescription: 'JSON の構造、典型的な落とし穴、プライバシーを守るローカル検証ワークフローを解説。チェックリストと実践的なコツ付き。',
      keywords: 'JSON ガイド, JSON チュートリアル, JSON 検証, JSON ベストプラクティス, JSON フォーマッタ',
      title: 'JSON 基礎：構造・検証・ワークフロー改善のヒント',
      heroIntro: 'JSON は API レスポンス、設定ファイル、データエクスポート、ログなどあらゆる場面で登場します。概念を押さえておくと作業が格段に速くなります。',
      readingTime: '約6分で読めます',
      published: '公開日：2025年9月17日',
      updated: '更新日：2025年9月17日',
      sections: [
        {
          heading: 'JSON はどんな課題を解決する？',
          paragraphs: [
            'JSON（JavaScript Object Notation）は、ほぼすべてのモダンな API や CLI が採用する軽量なデータ交換フォーマットです。機械にとって解析しやすく、人間にとっても読みやすい形式です。',
            'テキストベースのため、異なる言語やチームでもバージョン管理・ドキュメント・チャットで簡単に共有できます。バイナリ互換性を気にする必要はありません。'
          ]
        },
        {
          heading: '基本の構成要素を押さえる',
          paragraphs: [
            'JSON を構成するのはごく少数の要素です。オブジェクト（`{}`）はキーと値のペア、配列（`[]`）は順序付きコレクション、そして文字列・数値・真偽値・`null` といったプリミティブです。',
            'API レスポンスを設計する際は、これらを組み合わせてクライアントが安心して依存できるスキーマを作ります。'
          ],
          code: {
            language: 'json',
            caption: '一般的な API レスポンスを想定したコンパクトな JSON 例。',
            content: `{
  "id": "toolbox-42",
  "name": "Web Toolbox",
  "features": [
    "JSON フォーマッタ",
    "JSON ↔ YAML 変換",
    "Base64（テキストと画像）"
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
          heading: 'よくあるミスと対処法',
          paragraphs: [
            '経験豊富な開発者でも文法ミスは起こります。早めに気付けばデバッグ時間を大幅に削減できます。'
          ],
          list: [
            '最後のプロパティや配列要素の後に余分なカンマ',
            '文字列やプロパティ名にシングルクォートを使用してしまう',
            'コメント（`//`）や置き換え忘れのテンプレートを書く',
            '文字列内の改行や引用符をエスケープし忘れる',
            'タブとスペースが混在し、レビュー時に読みにくくなる'
          ],
          closing: 'フォーマッタを通せば即座に問題箇所がハイライトされ、不正な JSON の流出を防げます。'
        },
        {
          heading: 'ローカルツールで素早く検証する',
          paragraphs: [
            'コミットや共有の前にフォーマッタ／バリデータに通しましょう。厳密な構文チェックとインデント整形を一度で実行できます。',
            'Web Toolbox の JSON フォーマッタはブラウザ内だけで動作し、機密データをアップロードせずに整形・圧縮・検証できます。',
            'JSON と YAML を併用しているなら、JSON ↔ YAML ツールで双方を同期させるのが安全です。'
          ]
        }
      ],
      checklist: {
        title: '公開前チェックリスト',
        items: [
          'フォーマッタや Lint で構文を検証する',
          'スキーマ通りに必須キーと型が揃っているか確認する',
          'ログやサンプルを共有する前に機密情報を除去する',
          'API やインフラ文書の近くに最小限のサンプルを置く'
        ]
      },
      tips: {
        title: 'ワークフロー向上のヒント',
        items: [
          'プリコミットフックや CI に JSON フォーマット／Lint 処理を組み込む。',
          '正しい JSON サンプルをリポジトリで管理し、レビューでは意図の差分に集中できるようにする。'
        ]
      },
      conclusion: {
        title: '継続的に鍛える',
        paragraphs: [
          'JSON を読む・書く機会を増やすほど、問題点を素早く見抜けるようになります。プライバシーを守るツールでフィードバックサイクルを短縮しましょう。',
          'Web Toolbox の JSON フォーマッタや JSON ↔ YAML 変換ツールでデータを整え、バイナリをテキストで扱う必要があるときは Base64 ツールも試してみてください。'
        ]
      },
      cta: {
        title: '次に試すツール',
        jsonFormatter: 'JSON フォーマッタを開く',
        jsonYaml: 'JSON ↔ YAML 変換ツールを開く',
        base64: 'Base64 ツールを開く'
      }
    }
  },
  jsonyaml: {
    title: 'JSON ↔ YAML 変換',
    subtitle: 'ブラウザ内でローカル処理・アップロードなし',
    seoTitle: 'JSON ↔ YAML 変換｜無料の双方向変換・検証｜クライアントサイドのみ',
    seoDescription: '無料で JSON と YAML を双方向に変換・検証。コピーやダウンロードにも対応し、処理はすべてブラウザ内で完結します。',
    keywords: '無料 JSON to YAML, 無料 YAML to JSON, JSON YAML 変換, JSON YAML 検証, クライアントサイド変換',
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
    seoTitle: 'JSON フォーマッタ｜無料で整形/圧縮/検証｜クライアントサイドのみ',
    seoDescription: '無料の JSON 整形・圧縮ツール。検証・コピー・ダウンロードに対応し、すべてブラウザ内で処理します。',
    keywords: '無料 JSON フォーマッタ, JSON 整形, JSON 圧縮, JSON 検証, JSON オンライン, JSON lint',
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
  base64: {
    title: 'Base64 エンコード／デコード',
    subtitle: 'ブラウザ内でテキストと画像を相互変換',
    seoTitle: 'Base64 エンコード・デコード｜テキスト & 画像変換｜クライアントサイドのみ',
    seoDescription: 'テキストや画像を Base64 と相互変換できる無料ツール。Unicode 対応、画像にも対応、全てローカル処理。',
    keywords: 'Base64 エンコード, Base64 デコード, Base64 画像変換, テキスト Base64, 画像 Base64, クライアントサイド Base64',
    plainTitle: 'プレーンテキスト',
    encodedTitle: 'Base64 テキスト',
    plainPlaceholder: 'Hello, 世界',
    encodedPlaceholder: 'SGVsbG8sIOS4lueVjA==',
    encode: 'エンコード → Base64',
    decode: 'デコード → テキスト',
    copy: 'コピー',
    clear: 'クリア',
    encoded: 'Base64 に変換しました',
    decoded: 'テキストにデコードしました',
    copied: 'コピーしました',
    encodeError: 'エンコードに失敗しました：{{msg}}',
    decodeError: 'デコードに失敗しました：{{msg}}',
    note: 'ブラウザ標準の TextEncoder/TextDecoder と Base64 API を用いてローカルで処理し、画像の Data URL にも対応します。データは送信されません。',
    imageCardTitle: '画像 ↔ Base64',
    imageIntro: '画像を Base64 Data URL に変換したり、Base64 を画像として表示したりできます。処理は端末内で完結します。',
    imagePlaceholder: 'data:image/... もしくは純粋な Base64 を貼り付けてください',
    imageSelect: '画像を選択',
    imageHelper: 'PNG・JPG・GIF・WebP・SVG に対応。ファイルはアップロードされません。',
    imageUnsupported: '画像ファイルのみ対応しています。',
    imageRender: 'Base64 を画像として表示',
    imageDownload: '画像をダウンロード',
    imageClear: '画像データをクリア',
    imageInfo: '現在の画像：{{name}} • {{type}} • {{size}}',
    imagePreviewLabel: 'プレビュー',
    imageEncoded: '画像を Base64 に変換しました',
    imageDecoded: 'Base64 を画像として表示しました',
    imageEncodeError: '画像の変換に失敗しました：{{msg}}',
    imageDecodeError: 'Base64 を画像として表示できません：{{msg}}'
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

export default {
  brand: '在线工具箱',
  nav: {
    home: '首页',
    json: 'JSON 格式化',
    jsonyaml: 'JSON ↔ YAML 转换',
    base64: 'Base64 编解码',
    blog: '博客',
    faq: 'FAQ',
    privacy: '隐私'
  },
  theme: {
    toLight: '切换为浅色',
    toDark: '切换为深色'
  },
  lang: {
    zh: '中文',
    en: 'English',
    ja: '日本語'
  },
  home: {
    title: '在线工具箱',
    subtitle: '免费、多语言、纯前端的开发者工具箱',
    seoTitle: '免费在线开发者工具箱｜JSON 格式化｜JSON↔YAML｜Base64 文本与图片',
    seoDescription: '免费隐私友好的在线开发者工具箱：JSON 格式化/校验、JSON↔YAML 双向转换、Base64 文本与图片编码解码、多语言博客教程，全站纯前端不上传数据。',
    keywords: '免费在线开发者工具, JSON 格式化, JSON 校验, JSON 转 YAML, YAML 转 JSON, Base64 编解码, 图片 Base64, 开发者工具, 纯前端, 隐私友好, 多语言教程',
    catalog: '工具目录',
    faqTitle: '常见问题（FAQ）',
    faqMore: 'FAQ 全文',
    blogTitle: '最新文章',
    blogIntro: '用实用教程帮你更轻松处理 JSON、YAML 与 Base64 工作流。',
    blogMore: '访问博客',
    tools: {
      json: {
        name: 'JSON 格式化',
        desc: '在线美化 / 压缩 / 校验 / 复制 / 下载',
        tagDev: '开发者',
        tagFmt: '格式化'
      },
      jsonyaml: {
        name: 'JSON ↔ YAML 转换',
        desc: '相互转换 / 校验 / 复制 / 下载（纯前端）',
        tagDev: '开发者',
        tagConv: '转换'
      },
      base64: {
        name: 'Base64 编解码',
        desc: '文本与图片 ↔ Base64 本地互转（支持 Unicode）',
        tagDev: '开发者',
        tagEnc: '编码',
        tagImg: '图片'
      }
    }
  },
  blog: {
    title: '开发者博客',
    subtitle: '聚焦隐私友好开发工具的实战指南。',
    seoTitle: '开发者博客｜JSON 与 Base64 教程｜在线工具箱',
    seoDescription: '阅读多语言的 JSON、YAML、Base64 与隐私友好工作流教程，每篇文章都配套免费纯前端工具，数据不离开本地。',
    keywords: '开发者博客, JSON 教程, YAML 指南, Base64 图片转换, 免费开发者工具, 隐私友好',
    latest: '最新文章',
    readMore: '阅读全文',
    tagsLabel: '标签',
    publishedLabel: '发布日期',
    updatedLabel: '更新日期',
    readingTimeLabel: '阅读时长',
    moreComing: '更多文章正在筹备中，敬请期待！',
    articles: {
      llmBasics: {
        slug: 'llm-intro',
        title: 'LLM 入门：基础概念、常见应用与实践建议',
        description: '10 分钟快速了解大语言模型的工作原理、落地场景与部署注意事项。',
        summary: '明白 LLM 如何生成文本、为什么上下文窗口重要，并为团队规划安全的试点项目。',
        tags: ['LLM', 'AI', '入门教程'],
        published: { iso: '2025-02-14', text: '2025 年 2 月 14 日' },
        updated: { iso: '2025-02-14', text: '2025 年 2 月 14 日' },
        readingTime: '约 8 分钟阅读',
        heroAlt: '抽象的神经网络与文本生成流程图'
      },
      jsonBasics: {
        slug: 'json-basics',
        title: 'JSON 基础：结构、校验与效率提升技巧',
        description: '掌握 JSON 数据结构，规避常见错误，并用免费纯前端工具快速完成校验。',
        summary: '了解 JSON 如何工作、常见坑点与本地校验流程，提升团队协作效率。',
        tags: ['JSON', 'API', '最佳实践'],
        published: { iso: '2025-09-17', text: '2025 年 9 月 17 日' },
        updated: { iso: '2025-09-17', text: '2025 年 9 月 17 日' },
        readingTime: '约 6 分钟阅读',
        heroAlt: '由括号和节点构成的 JSON 结构插图'
      }
    }
  },
  articles: {
    llmBasics: {
      seoTitle: '大语言模型（LLM）入门指南｜概念、案例与上手建议',
      seoDescription: '从零认识大语言模型：理解基础概念、主流应用案例、部署与安全注意事项，并附入门清单与实践提示。',
      keywords: 'LLM 入门, 大语言模型 教程, 提示词 工程, 企业 AI 应用, AI 安全',
      title: 'LLM 入门：基础概念、常见应用与实践建议',
      heroIntro: '想利用大语言模型提升效率，却不知道从哪里开始？本篇将用通俗语言带你完成第一次“上手”。',
      readingTime: '约 8 分钟阅读',
      published: '发布日期：2025 年 2 月 14 日',
      updated: '更新日期：2025 年 2 月 14 日',
      sections: [
        {
          heading: '什么是大语言模型？',
          paragraphs: [
            '大语言模型（Large Language Model, LLM）是一类能够理解和生成自然语言的深度学习模型，通过在海量文本上预训练获得通用语言能力。',
            '它们并不是真的“有意识”，而是根据统计概率预测下一个最合适的词，从而完成写作、总结、翻译或问答等任务。'
          ]
        },
        {
          heading: '需要掌握的关键概念',
          paragraphs: [
            '理解几个高频术语可以帮助你更好地与团队或供应商沟通。'
          ],
          list: [
            'Token：模型处理文本的最小单位，通常是一个词或词片段，影响费用与上下文长度。',
            '上下文窗口：模型一次性“看得见”的 token 数，窗口越大，模型能读的背景信息越多。',
            '参数量：模型规模的粗略指标，参数越多通常能力越强，但资源消耗也越大。',
            '推理 / 微调：推理是直接调用模型，微调则是用你自己的数据进一步训练以获得定制化行为。'
          ]
        },
        {
          heading: 'LLM 常见落地场景',
          paragraphs: [
            '从个人效率到企业数字化，LLM 已经有不少成熟的场景可以参考。'
          ],
          list: [
            '内容生成：撰写草稿、营销文案、产品描述或教学材料。',
            '知识问答：基于内网文档或 FAQ 构建智能客服与自助搜索。',
            '代码辅助：自动生成样例代码、解释报错或补全测试。',
            '数据整理：清洗结构化/非结构化数据，提取关键信息或生成摘要。'
          ],
          closing: '入门阶段的目标，是挑选一个低风险、高回报的场景先验证价值，再逐步扩展。'
        },
        {
          heading: '快速上手的 4 个步骤',
          list: [
            '明确业务痛点与成功指标，例如节省撰稿时间或缩短客服响应。',
            '选择合适的模型与接入方式，可先使用公开 API 演示效果。',
            '准备高质量的上下文与示例提示词，确保模型理解你的语境。',
            '建立反馈环与监控，记录输出质量并持续优化提示词或流程。'
          ],
          closing: '试点阶段建议设置时间盒，定期检查投入产出，避免无节制地探索功能。'
        },
        {
          heading: '安全与合规注意事项',
          paragraphs: [
            '随着 LLM 在企业落地，隐私与合规成为不可忽视的议题。'
          ],
          list: [
            '确认供应商的合规资质（如 ISO、GDPR、等级保护），必要时签署数据处理协议。',
            '对敏感数据做脱敏或分类分级，避免将原始客户信息上发送到第三方服务。',
            '建立“人机协作”流程，高风险输出必须经人工审核后再对外发布。',
            '记录模型版本与提示词变更，方便回溯问题与复现结果。'
          ]
        }
      ],
      checklist: {
        title: '上线前检查清单',
        items: [
          '明确目标与评估指标，确保试点项目能量化价值。',
          '准备至少 10~20 组真实样例，以便测试与迭代提示词。',
          '划定数据安全红线，敏感字段必须脱敏或过滤。',
          '确定 fallback 方案，模型输出异常时依旧能保证业务连续性。'
        ]
      },
      tips: {
        title: '实践小贴士',
        items: [
          '把提示词写成文档并版本化，方便团队共享与复盘。',
          '结合结构化数据（JSON/YAML）提供上下文，能显著提升模型理解精准度。'
        ]
      },
      conclusion: {
        title: '下一步怎么做',
        paragraphs: [
          'LLM 并非灵丹妙药，但善用它可以显著加速知识工作。选一个轻量场景开始，让团队快速看到可量化的成果。',
          '当你需要整理配置、转换格式或构建训练样本时，别忘了利用在线工具箱保持数据干净整齐。'
        ]
      },
      cta: {
        title: '准备好训练你的数据',
        jsonFormatter: '清洗 JSON 数据',
        jsonYaml: '保持 JSON/YAML 同步',
        base64: '转码样例数据'
      }
    },
    jsonBasics: {
      seoTitle: 'JSON 基础指南｜结构、校验与高效实践',
      seoDescription: '掌握 JSON 的基本结构、常见错误排查与隐私友好的本地校验流程，附带检查清单与实用技巧。',
      keywords: 'JSON 指南, JSON 教程, JSON 校验, JSON 最佳实践, JSON 格式化',
      title: 'JSON 基础：结构、校验与效率提升技巧',
      heroIntro: 'JSON 几乎出现在所有 API、配置、数据导出与日志中，理解它能让你处理数据更快更稳。',
      readingTime: '约 6 分钟阅读',
      published: '发布日期：2025 年 9 月 17 日',
      updated: '更新日期：2025 年 9 月 17 日',
      sections: [
        {
          heading: 'JSON 为何重要？',
          paragraphs: [
            'JSON（JavaScript Object Notation）是现代 API 和 CLI 最常用的数据交换格式，既易于机器解析，也方便人工阅读。',
            '由于 JSON 天然是纯文本，不同语言和团队可以通过版本控制、文档或聊天工具轻松共享，而无需担心二进制兼容性。'
          ]
        },
        {
          heading: '理解核心构建块',
          paragraphs: [
            'JSON 只有少量结构：对象（`{}`）表示键值对，数组（`[]`）存放有序集合，原始类型包含字符串、数字、布尔值以及 `null`。',
            '设计 API 响应时，你就是在用这些结构组合出可预测的模式，方便客户端依赖。'
          ],
          code: {
            language: 'json',
            caption: '一个紧凑的 JSON 示例，类似常见的 API 响应。',
            content: `{
  "id": "toolbox-42",
  "name": "Web Toolbox",
  "features": [
    "JSON 格式化",
    "JSON ↔ YAML 转换",
    "Base64（文本与图片）"
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
          heading: '常见错误及其快速修复',
          paragraphs: [
            '即便是经验丰富的团队也会在语法上踩坑，提前发现错误可以避免大量调试时间。'
          ],
          list: [
            '最后一个属性或数组项后面多了逗号',
            '属性名或字符串误用了单引号',
            '混入了注释（`//`）或未替换的模板占位符',
            '字符串中未转义的换行符或引号字符',
            '缩进混用了 Tab 与空格，让代码评审难以阅读'
          ],
          closing: '使用格式化工具可以立刻高亮这些问题，杜绝不合法的 JSON 流入线上。'
        },
        {
          heading: '用本地工具更快校验',
          paragraphs: [
            '提交或分享数据前，先跑一遍格式化/校验。语法检查能确认 JSON 严格合法，格式化还能统一缩进。',
            'Web Toolbox 的 JSON 格式化工具完全在浏览器内运行，可一键美化、压缩并校验，无需上传敏感样例。',
            '如果你需要同时维护 JSON 与 YAML 配置，可使用 JSON ↔ YAML 转换器保持两个版本一致。'
          ]
        }
      ],
      checklist: {
        title: '上线前检查清单',
        items: [
          '提交前用格式化或 Lint 工具验证语法',
          '根据 Schema 检查必填字段与数据类型',
          '分享日志或样例前先移除敏感信息',
          '在 API 或基础设施文档旁放置精简示例'
        ]
      },
      tips: {
        title: '工作流加速建议',
        items: [
          '在本地预提交钩子或 CI 中加入 JSON Lint/格式化步骤。',
          '把权威 JSON 示例放进版本库，团队评审时关注业务变化而非格式。'
        ]
      },
      conclusion: {
        title: '继续精进',
        paragraphs: [
          '阅读与书写 JSON 越多，越能快速发现问题。利用隐私友好的工具可以加快反馈速度。',
          '试试 Web Toolbox 的 JSON 格式化与 JSON ↔ YAML 转换工具保持数据干净，如需在文本中传输二进制，也可以打开 Base64 工具。'
        ]
      },
      cta: {
        title: '继续体验这些工具',
        jsonFormatter: '打开 JSON 格式化工具',
        jsonYaml: '打开 JSON ↔ YAML 转换器',
        base64: '打开 Base64 工具'
      }
    }
  },
  jsonyaml: {
    title: 'JSON ↔ YAML 转换',
    subtitle: '本地解析与转换，不上传任何数据',
    seoTitle: 'JSON ↔ YAML 转换｜免费双向转换/校验｜纯前端零上传',
    seoDescription: '免费在线将 JSON 与 YAML 双向转换并校验，支持复制与下载，全程浏览器本地处理，不上传任何数据。',
    keywords: '免费 JSON 转 YAML, 免费 YAML 转 JSON, JSON YAML 转换, JSON YAML 校验, 纯前端转换',
    jsonInput: 'JSON 输入',
    yamlInput: 'YAML 输入',
    toYaml: 'JSON → YAML',
    toJson: 'YAML → JSON',
    clear: '清空',
    copy: '复制',
    downloadYaml: '下载 .yaml',
    downloadJson: '下载 .json',
    ok: '已完成',
    jsonErr: 'JSON 语法错误：{{msg}}',
    yamlErr: 'YAML 语法错误：{{msg}}',
    jsonPlaceholder: '{"hello":"world"}',
    yamlPlaceholder: 'hello: world',
    note: '本工具使用浏览器原生 JSON.parse / JSON.stringify 与 js-yaml 在你的设备本地进行双向转换。'
  },
  json: {
    title: 'JSON 格式化工具',
    subtitle: '一键格式化、压缩、校验、复制与下载',
    seoTitle: 'JSON 格式化｜免费美化/压缩/校验｜纯前端零上传',
    seoDescription: '免费在线 JSON 格式化与压缩，语法校验、复制与下载，全部在浏览器本地完成，不上传任何数据。',
    keywords: '免费 JSON 格式化, JSON 美化, JSON 压缩, JSON 校验, JSON 在线, JSON formatter, JSON beautifier, JSON minify, JSON validator, JSON lint',
    input: '输入',
    output: '输出',
    beautify: '美化',
    minify: '压缩',
    validate: '校验',
    clear: '清空',
    copy: '复制',
    download: '下载 .json',
    ok: '已完成',
    valid: '语法有效',
    placeholder: '{"hello":"world"}',
    note: '本工具在浏览器本地完成 JSON 解析与格式化（调用 JavaScript 原生 JSON.parse 与 JSON.stringify）。不会上传你的数据。',
    copied: '已复制',
    downloaded: '已下载',
    syntaxError: '语法错误：{{msg}}'
  },
  base64: {
    title: 'Base64 编解码工具',
    subtitle: '浏览器本地完成文本与图片的 Base64 互转',
    seoTitle: 'Base64 编解码｜文本与图片 Base64 转换｜纯前端零上传',
    seoDescription: '免费将文本或图片与 Base64 互转，支持 Unicode 与多种图片格式，全部在浏览器本地完成。',
    keywords: 'Base64 编码, Base64 解码, Base64 图片转换, 文本转 Base64, 图片转 Base64, 纯前端 Base64',
    plainTitle: '原始文本',
    encodedTitle: 'Base64 文本',
    plainPlaceholder: 'Hello, 世界',
    encodedPlaceholder: 'SGVsbG8sIOS4lueVjA==',
    encode: '编码 → Base64',
    decode: '解码 → 文本',
    copy: '复制',
    clear: '清空',
    encoded: '已转换为 Base64',
    decoded: '已解码为文本',
    copied: '已复制',
    encodeError: '编码失败：{{msg}}',
    decodeError: '解码失败：{{msg}}',
    note: '转换基于浏览器内置 TextEncoder/TextDecoder 与 Base64 API，并支持图片 Data URL，全程在你的设备本地运行，不会上传数据。',
    imageCardTitle: '图片 ↔ Base64',
    imageIntro: '将图片转换为 Base64 Data URL，或将 Base64 渲染回图片，全程在本地处理。',
    imagePlaceholder: '粘贴 data:image/... 或纯 Base64 字符串',
    imageSelect: '选择图片',
    imageHelper: '支持 PNG、JPG、GIF、WebP、SVG，文件不会上传。',
    imageUnsupported: '仅支持图片文件。',
    imageRender: 'Base64 渲染为图片',
    imageDownload: '下载图片',
    imageClear: '清空图片数据',
    imageInfo: '当前图片：{{name}} • {{type}} • {{size}}',
    imagePreviewLabel: '预览',
    imageEncoded: '图片已转换为 Base64',
    imageDecoded: 'Base64 已渲染为图片',
    imageEncodeError: '图片转换失败：{{msg}}',
    imageDecodeError: '无法将 Base64 渲染为图片：{{msg}}'
  },
  faq: {
    title: '常见问题（FAQ）',
    subtitle: '关于隐私、安全与功能规划',
    seoTitle: '常见问题（FAQ）｜在线工具箱',
    seoDescription: '关于在线工具箱的常见问题：隐私、数据处理、功能路线、开源与反馈等。',
    keywords: 'FAQ, 常见问题, 隐私, 数据处理, 安全, 零上传, 本地处理, 开源, 路线图',
    q1: '为什么说隐私友好？',
    a1: '所有工具均为纯前端实现，数据只在你的浏览器内存中处理，既不存储也不上传。',
    q2: '支持哪些浏览器？',
    a2: '主流现代浏览器（Chrome、Edge、Firefox、Safari）的最近两个大版本均支持，移动端也可正常使用。',
    q3: '后续会增加哪些工具？',
    a3: '路线包含 JSON↔YAML 转换、Base64 编解码、正则测试、哈希/编码工具、文本与图片处理等。',
    q4: '是否开源？',
    a4: '本项目前端代码托管在 GitHub，欢迎贡献 PR 或提出建议。'
  },
  privacy: {
    title: '隐私声明',
    subtitle: '纯前端 · 零数据上传 · 隐私友好',
    seoTitle: '隐私政策｜在线工具箱',
    seoDescription: '纯前端、零上传：所有工具在你的浏览器本地运行，不收集数据，不写入持久存储。',
    keywords: '隐私政策, 数据保护, 零上传, 本地处理, 纯前端, Privacy Policy',
    h1: '我们如何处理你的数据',
    p1: '本网站所有工具均在浏览器本地运行，涉及的数据处理（如解析、转换、格式化等）均发生在你的设备内存中。',
    li1: '不收集任何输入内容',
    li2: '不将数据发送至服务器',
    li3: '不进行持久化存储（除非你主动下载到本地）',
    h2: 'Cookie 与追踪',
    p2: '本站默认不使用 Cookie，不内置第三方分析或广告追踪脚本。',
    h3: '第三方依赖',
    p3: '当前版本仅使用浏览器原生能力，无需任何后端服务或外部 API。',
    h4: '联系我们',
    p4: '如对隐私有进一步疑问或建议，欢迎通过 GitHub 提交 Issue 与我们联系。'
  }
};

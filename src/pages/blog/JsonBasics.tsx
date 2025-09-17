import { Button, Divider, Space, Tag, Typography, theme } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useThemeMode } from '@/theme/ThemeProvider';

const CANONICAL = 'https://jackbaihaochen.github.io/blog/json-basics/';
const LANG_MAP: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en-US',
  ja: 'ja-JP'
};
const OG_LOCALE: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP'
};

type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  code?: {
    language?: string;
    caption?: string;
    content: string;
  };
  closing?: string;
};

type ArticleContent = {
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  title: string;
  heroIntro?: string;
  readingTime?: string;
  published?: string;
  updated?: string;
  sections?: ArticleSection[];
  checklist?: { title: string; items: string[] };
  tips?: { title: string; items: string[] };
  conclusion?: { title: string; paragraphs: string[] };
  cta?: { title: string; jsonFormatter: string; jsonYaml: string; base64: string };
};

type BlogPost = {
  slug: string;
  title: string;
  description?: string;
  summary?: string;
  tags?: string[];
  published?: { iso?: string; text?: string };
  updated?: { iso?: string; text?: string };
  readingTime?: string;
};

function formatMetaItems(items: (string | undefined)[]) {
  return items.filter(Boolean) as string[];
}

export default function JsonBasics() {
  const { t } = useTranslation();
  const { lang } = useThemeMode();
  const { token } = theme.useToken();
  const article = t('articles.jsonBasics', { returnObjects: true }) as ArticleContent;
  const post = t('blog.articles.jsonBasics', { returnObjects: true }) as BlogPost;
  const locale = LANG_MAP[lang] || 'zh-CN';
  const ogLocale = OG_LOCALE[lang] || 'zh_CN';

  const metaItems = formatMetaItems([
    article.published,
    article.updated,
    article.readingTime || post.readingTime
  ]);

  const canonicalWithLang = `${CANONICAL}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: article.seoDescription,
    inLanguage: locale,
    url: CANONICAL,
    datePublished: post.published?.iso,
    dateModified: post.updated?.iso,
    image: 'https://jackbaihaochen.github.io/web-tool-box-icon-512.png',
    author: {
      '@type': 'Organization',
      name: t('brand')
    },
    publisher: {
      '@type': 'Organization',
      name: t('brand'),
      logo: {
        '@type': 'ImageObject',
        url: 'https://jackbaihaochen.github.io/web-tool-box-icon-512.png'
      }
    },
    articleSection: post.tags,
    mainEntityOfPage: CANONICAL
  };

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <HelmetProvider>
        <Helmet>
          <title>{article.seoTitle}</title>
          <meta name="description" content={article.seoDescription} />
          <meta name="keywords" content={article.keywords} />
          <link rel="canonical" href={canonicalWithLang} />
          <link rel="alternate" href={`${CANONICAL}?lang=zh`} hreflang="zh-CN" />
          <link rel="alternate" href={`${CANONICAL}?lang=en`} hreflang="en" />
          <link rel="alternate" href={`${CANONICAL}?lang=ja`} hreflang="ja" />
          <link rel="alternate" href={CANONICAL} hreflang="x-default" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={article.seoTitle} />
          <meta property="og:description" content={article.seoDescription} />
          <meta property="og:url" content={CANONICAL} />
          <meta property="og:site_name" content={t('brand')} />
          <meta property="og:locale" content={ogLocale} />
          <meta property="og:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          {post.published?.iso && (
            <meta property="article:published_time" content={post.published.iso} />
          )}
          {post.updated?.iso && (
            <meta property="article:modified_time" content={post.updated.iso} />
          )}
          {post.tags?.map(tag => (
            <meta property="article:tag" content={tag} key={tag} />
          ))}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={article.seoTitle} />
          <meta name="twitter:description" content={article.seoDescription} />
          <meta name="twitter:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Helmet>
      </HelmetProvider>

      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{article.title}</Typography.Title>
        {article.heroIntro && (
          <Typography.Text type="secondary">{article.heroIntro}</Typography.Text>
        )}
      </div>

      {post.tags && post.tags.length > 0 && (
        <Space size="small" wrap>
          {post.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Space>
      )}

      {metaItems.length > 0 && (
        <Space size="middle" wrap>
          {metaItems.map(item => (
            <Typography.Text type="secondary" key={item}>{item}</Typography.Text>
          ))}
        </Space>
      )}

      {article.sections?.map((section, index) => (
        <section key={`${section.heading || index}`}
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          {section.heading && (
            <Typography.Title level={3} style={{ marginBottom: 0 }}>
              {section.heading}
            </Typography.Title>
          )}
          {section.paragraphs?.map((paragraph, idx) => (
            <Typography.Paragraph key={`${section.heading}-p-${idx}`}>
              {paragraph}
            </Typography.Paragraph>
          ))}
          {section.code && (
            <div>
              {section.code.caption && (
                <Typography.Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
                  {section.code.caption}
                </Typography.Text>
              )}
              <pre
                style={{
                  background: token.colorFillTertiary,
                  color: token.colorTextSecondary,
                  padding: 16,
                  borderRadius: 8,
                  overflowX: 'auto',
                  margin: 0
                }}
              >
                <code>{section.code.content}</code>
              </pre>
            </div>
          )}
          {section.list && (
            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
              {section.list.map(item => (
                <li key={`${section.heading}-li-${item}`} style={{ marginBottom: 6 }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.closing && (
            <Typography.Paragraph>{section.closing}</Typography.Paragraph>
          )}
          {index < (article.sections?.length || 0) - 1 && <Divider />}
        </section>
      ))}

      {article.checklist && (
        <div>
          <Typography.Title level={4}>{article.checklist.title}</Typography.Title>
          <ul style={{ paddingLeft: 20 }}>
            {article.checklist.items.map(item => (
              <li key={`check-${item}`} style={{ marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {article.tips && (
        <div>
          <Typography.Title level={4}>{article.tips.title}</Typography.Title>
          <ul style={{ paddingLeft: 20 }}>
            {article.tips.items.map(item => (
              <li key={`tip-${item}`} style={{ marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {article.conclusion && (
        <div>
          <Typography.Title level={4}>{article.conclusion.title}</Typography.Title>
          {article.conclusion.paragraphs.map((paragraph, idx) => (
            <Typography.Paragraph key={`conclusion-${idx}`}>
              {paragraph}
            </Typography.Paragraph>
          ))}
        </div>
      )}

      {article.cta && (
        <div>
          <Typography.Title level={4}>{article.cta.title}</Typography.Title>
          <Space wrap>
            <Link to={`/json-formatter?lang=${lang}`}>
              <Button type="primary">{article.cta.jsonFormatter}</Button>
            </Link>
            <Link to={`/json-yaml?lang=${lang}`}>
              <Button>{article.cta.jsonYaml}</Button>
            </Link>
            <Link to={`/base64?lang=${lang}`}>
              <Button>{article.cta.base64}</Button>
            </Link>
          </Space>
        </div>
      )}
    </Space>
  );
}

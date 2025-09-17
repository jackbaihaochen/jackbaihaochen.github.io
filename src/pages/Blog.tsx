import { Card, List, Space, Tag, Typography } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useThemeMode } from '@/theme/ThemeProvider';

const CANONICAL = 'https://jackbaihaochen.github.io/blog/';
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

type BlogPost = {
  slug: string;
  title: string;
  description?: string;
  summary?: string;
  tags?: string[];
  published?: { iso?: string; text?: string };
  updated?: { iso?: string; text?: string };
  readingTime?: string;
  heroAlt?: string;
};

export default function Blog() {
  const { t } = useTranslation();
  const { lang } = useThemeMode();
  const posts = Object.values(t('blog.articles', { returnObjects: true }) as Record<string, BlogPost>);
  const locale = LANG_MAP[lang] || 'zh-CN';
  const ogLocale = OG_LOCALE[lang] || 'zh_CN';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    inLanguage: locale,
    name: t('blog.title'),
    description: t('blog.subtitle'),
    url: CANONICAL,
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://jackbaihaochen.github.io/blog/${post.slug}/`,
      datePublished: post.published?.iso,
      dateModified: post.updated?.iso,
      inLanguage: locale
    }))
  };

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <HelmetProvider>
        <Helmet>
          <title>{t('blog.seoTitle')}</title>
          <meta name="description" content={t('blog.seoDescription')} />
          <meta name="keywords" content={t('blog.keywords')} />
          <link rel="canonical" href={CANONICAL} />
          <link rel="alternate" href={`${CANONICAL}?lang=zh`} hreflang="zh-CN" />
          <link rel="alternate" href={`${CANONICAL}?lang=en`} hreflang="en" />
          <link rel="alternate" href={`${CANONICAL}?lang=ja`} hreflang="ja" />
          <link rel="alternate" href={CANONICAL} hreflang="x-default" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={t('blog.seoTitle')} />
          <meta property="og:description" content={t('blog.seoDescription')} />
          <meta property="og:url" content={CANONICAL} />
          <meta property="og:site_name" content={t('brand')} />
          <meta property="og:locale" content={ogLocale} />
          <meta property="og:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={t('blog.seoTitle')} />
          <meta name="twitter:description" content={t('blog.seoDescription')} />
          <meta name="twitter:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Helmet>
      </HelmetProvider>

      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('blog.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('blog.subtitle')}</Typography.Text>
      </div>

      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2 }}
        dataSource={posts}
        renderItem={(post) => (
          <List.Item key={post.slug}>
            <Link to={`/blog/${post.slug}?lang=${lang}`}>
              <Card hoverable title={post.title}>
                <Space direction="vertical">
                  {(post.description || post.summary) && (
                    <Typography.Paragraph style={{ marginBottom: 0 }}>
                      {post.description || post.summary}
                    </Typography.Paragraph>
                  )}
                  <Typography.Text type="secondary">
                    {t('blog.publishedLabel')}: {post.published?.text || '--'}
                  </Typography.Text>
                  {post.updated?.text && (
                    <Typography.Text type="secondary">
                      {t('blog.updatedLabel')}: {post.updated.text}
                    </Typography.Text>
                  )}
                  {post.readingTime && (
                    <Typography.Text type="secondary">
                      {t('blog.readingTimeLabel')}: {post.readingTime}
                    </Typography.Text>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div>
                      {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                    </div>
                  )}
                  <Typography.Link>{t('blog.readMore')}</Typography.Link>
                </Space>
              </Card>
            </Link>
          </List.Item>
        )}
      />

      <Typography.Paragraph type="secondary">{t('blog.moreComing')}</Typography.Paragraph>
    </Space>
  );
}

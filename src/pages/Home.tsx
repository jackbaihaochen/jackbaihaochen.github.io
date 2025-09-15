import { Card, List, Typography, Space, Tag } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useThemeMode } from '@/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const { lang } = useThemeMode();
  const tools = [
    {
      key: 'json-formatter',
      name: t('home.tools.json.name'),
      desc: t('home.tools.json.desc'),
      path: '/json-formatter',
      tags: [t('home.tools.json.tagDev'), t('home.tools.json.tagFmt')]
    },
    {
      key: 'json-yaml',
      name: t('home.tools.jsonyaml.name'),
      desc: t('home.tools.jsonyaml.desc'),
      path: '/json-yaml',
      tags: [t('home.tools.jsonyaml.tagDev'), t('home.tools.jsonyaml.tagConv')]
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <HelmetProvider>
        <Helmet>
          <title>{t('home.title')}｜{t('home.tools.json.name')}｜{t('home.tools.jsonyaml.name')}｜纯前端不上传</title>
          <meta name="description" content={
            '免费隐私友好的在线开发者工具：JSON 格式化/压缩/校验与 JSON ↔ YAML 双向转换等，所有处理在浏览器本地完成，不收集不上传你的数据。'
          } />
          <meta name="keywords" content={
            '在线工具, 在线 JSON 工具, JSON 格式化,在线 JSON 格式化, JSON 校验, JSON 压缩, JSON 美化, JSON 转 YAML, YAML 转 JSON, JSON to YAML, YAML to JSON, 开发者工具, 纯前端, 零上传, 隐私友好'
          } />
          <link rel="canonical" href="https://jackbaihaochen.github.io/" />
          {/* Open Graph / Twitter */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${t('home.title')}｜${t('home.tools.json.name')}｜${t('home.tools.jsonyaml.name')}`} />
          <meta property="og:description" content={'免费隐私友好的在线开发者工具：JSON 格式化/压缩/校验与 JSON ↔ YAML 双向转换等，所有处理在浏览器本地完成，不收集不上传你的数据。'} />
          <meta property="og:url" content="https://jackbaihaochen.github.io/" />
          <meta property="og:site_name" content={t('brand')} />
          <meta property="og:locale" content="zh_CN" />
          <meta property="og:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('home.title')}｜${t('home.tools.json.name')}｜${t('home.tools.jsonyaml.name')}`} />
          <meta name="twitter:description" content={'免费隐私友好的在线开发者工具：JSON 格式化/压缩/校验与 JSON ↔ YAML 双向转换等，所有处理在浏览器本地完成，不收集不上传你的数据。'} />
          <meta name="twitter:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: t('home.title'),
              url: 'https://jackbaihaochen.github.io/',
              about: t('home.subtitle')
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: t('home.title'),
              url: 'https://jackbaihaochen.github.io/'
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('home.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('home.subtitle')}</Typography.Text>
      </div>

      <div>
        <Typography.Title level={3}>{t('home.catalog')}</Typography.Title>
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2 }}
          dataSource={tools}
          renderItem={(item) => (
            <List.Item key={item.key}>
              <Link to={`${item.path}?lang=${lang}`}>
                <Card hoverable title={item.name}>
                  <Space direction="vertical">
                    <div>{item.desc}</div>
                    <div>
                      {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
                    </div>
                  </Space>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </div>

      <div>
        <Typography.Title level={3}>{t('home.faqTitle')}</Typography.Title>
        <Typography.Paragraph type="secondary">
          <Link to={`/faq?lang=${lang}`}>{t('home.faqMore')}</Link>
        </Typography.Paragraph>
      </div>
    </Space>
  );
}

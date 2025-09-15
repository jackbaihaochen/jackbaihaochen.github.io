import { Collapse, Typography } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();
  const items = [
    { key: '1', label: t('faq.q1'), children: <p>{t('faq.a1')}</p> },
    { key: '2', label: t('faq.q2'), children: <p>{t('faq.a2')}</p> },
    { key: '3', label: t('faq.q3'), children: <p>{t('faq.a3')}</p> },
    { key: '4', label: t('faq.q4'), children: <p>{t('faq.a4')}</p> },
  ];

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{t('faq.title')}｜{t('brand')}</title>
          <meta name="description" content="关于在线工具箱的常见问题：隐私、数据处理、功能路线、开源与反馈等。" />
          <meta name="keywords" content="FAQ, 常见问题, 隐私, 数据处理, 安全, 零上传, 本地处理, 开源, 路线图" />
          <link rel="canonical" href="https://jackbaihaochen.github.io/faq.html" />
          {/* Open Graph / Twitter */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${t('faq.title')}｜${t('brand')}`} />
          <meta property="og:description" content="关于在线工具箱的常见问题：隐私、数据处理、功能路线、开源与反馈等。" />
          <meta property="og:url" content="https://jackbaihaochen.github.io/faq.html" />
          <meta property="og:site_name" content={t('brand')} />
          <meta property="og:locale" content="zh_CN" />
          <meta property="og:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('faq.title')}｜${t('brand')}`} />
          <meta name="twitter:description" content="关于在线工具箱的常见问题：隐私、数据处理、功能路线、开源与反馈等。" />
          <meta name="twitter:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: '为什么说隐私友好？', acceptedAnswer: { '@type': 'Answer', text: '所有操作均在浏览器本地完成，不上传你的数据。' } },
                { '@type': 'Question', name: '支持哪些浏览器？', acceptedAnswer: { '@type': 'Answer', text: '现代浏览器（Chrome、Edge、Firefox、Safari）最新两个大版本均可。' } }
              ]
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('faq.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('faq.subtitle')}</Typography.Text>
      </div>
      <Collapse items={items} defaultActiveKey={["1"]} />
    </div>
  );
}

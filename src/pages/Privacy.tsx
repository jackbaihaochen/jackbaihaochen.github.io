import { Typography } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{t('privacy.title')}｜{t('brand')}</title>
          <meta name="description" content={t('privacy.subtitle')} />
          <meta name="keywords" content="隐私政策, 数据保护, 零上传, 本地处理, 纯前端, Privacy Policy" />
          <link rel="canonical" href="https://jackbaihaochen.github.io/privacy.html" />
          {/* Open Graph / Twitter */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${t('privacy.title')}｜${t('brand')}`} />
          <meta property="og:description" content={t('privacy.subtitle')} />
          <meta property="og:url" content="https://jackbaihaochen.github.io/privacy.html" />
          <meta property="og:site_name" content={t('brand')} />
          <meta property="og:locale" content="zh_CN" />
          <meta property="og:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('privacy.title')}｜${t('brand')}`} />
          <meta name="twitter:description" content={t('privacy.subtitle')} />
          <meta name="twitter:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'PrivacyPolicy',
              name: t('privacy.title'),
              url: 'https://jackbaihaochen.github.io/privacy.html',
              description: t('privacy.subtitle')
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('privacy.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('privacy.subtitle')}</Typography.Text>
      </div>

      <div className="box">
        <Typography.Title level={3}>{t('privacy.h1')}</Typography.Title>
        <Typography.Paragraph>
          {t('privacy.p1')}
        </Typography.Paragraph>
        <ul>
          <li>{t('privacy.li1')}</li>
          <li>{t('privacy.li2')}</li>
          <li>{t('privacy.li3')}</li>
        </ul>
      </div>

      <div className="box">
        <Typography.Title level={3}>{t('privacy.h2')}</Typography.Title>
        <Typography.Paragraph>{t('privacy.p2')}</Typography.Paragraph>
      </div>

      <div className="box">
        <Typography.Title level={3}>{t('privacy.h3')}</Typography.Title>
        <Typography.Paragraph>{t('privacy.p3')}</Typography.Paragraph>
      </div>

      <div className="box">
        <Typography.Title level={3}>{t('privacy.h4')}</Typography.Title>
        <Typography.Paragraph>{t('privacy.p4')}</Typography.Paragraph>
      </div>
    </div>
  );
}

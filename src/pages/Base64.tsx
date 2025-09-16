import { useState } from 'react';
import { Alert, Button, Card, Col, Input, Row, Space, Typography, message } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useThemeMode } from '@/theme/ThemeProvider';

const { TextArea } = Input;

function encodeBase64(input: string) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(input);
  let binary = '';
  bytes.forEach(b => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

function decodeBase64(input: string) {
  const cleaned = input.replace(/\s+/g, '');
  const binary = atob(cleaned);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  const decoder = new TextDecoder();
  return decoder.decode(bytes);
}

export default function Base64() {
  const { t } = useTranslation();
  const { lang } = useThemeMode();
  const [plain, setPlain] = useState('');
  const [encoded, setEncoded] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const onEncode = () => {
    try {
      if (!plain) {
        setEncoded('');
        setError(null);
        setOk(null);
        return;
      }
      const result = encodeBase64(plain);
      setEncoded(result);
      setError(null);
      setOk(t('base64.encoded'));
    } catch (e: any) {
      setError(t('base64.encodeError', { msg: e?.message || String(e) }));
      setOk(null);
    }
  };

  const onDecode = () => {
    try {
      if (!encoded.trim()) {
        setPlain('');
        setError(null);
        setOk(null);
        return;
      }
      const result = decodeBase64(encoded);
      setPlain(result);
      setError(null);
      setOk(t('base64.decoded'));
    } catch (e: any) {
      setError(t('base64.decodeError', { msg: e?.message || String(e) }));
      setOk(null);
    }
  };

  const onClear = () => {
    setPlain('');
    setEncoded('');
    setError(null);
    setOk(null);
  };

  const copyPlain = async () => {
    if (!plain) return;
    await navigator.clipboard.writeText(plain);
    message.success(t('base64.copied'));
  };

  const copyEncoded = async () => {
    if (!encoded) return;
    await navigator.clipboard.writeText(encoded);
    message.success(t('base64.copied'));
  };

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <HelmetProvider>
        <Helmet>
          <title>{t('base64.seoTitle')}</title>
          <meta name="description" content={t('base64.seoDescription')} />
          <meta name="keywords" content={t('base64.keywords')} />
          <link rel="canonical" href="https://jackbaihaochen.github.io/tools/base64/" />
          <link rel="alternate" href={`https://jackbaihaochen.github.io/tools/base64/?lang=zh`} hreflang="zh-CN" />
          <link rel="alternate" href={`https://jackbaihaochen.github.io/tools/base64/?lang=en`} hreflang="en" />
          <link rel="alternate" href={`https://jackbaihaochen.github.io/tools/base64/?lang=ja`} hreflang="ja" />
          <link rel="alternate" href={`https://jackbaihaochen.github.io/tools/base64/`} hreflang="x-default" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={t('base64.seoTitle')} />
          <meta property="og:description" content={t('base64.seoDescription')} />
          <meta property="og:url" content="https://jackbaihaochen.github.io/tools/base64/" />
          <meta property="og:site_name" content={t('brand')} />
          <meta property="og:locale" content={{ zh: 'zh_CN', en: 'en_US', ja: 'ja_JP' }[lang as 'zh' | 'en' | 'ja'] || 'zh_CN'} />
          <meta property="og:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={t('base64.seoTitle')} />
          <meta name="twitter:description" content={t('base64.seoDescription')} />
          <meta name="twitter:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: t('base64.title'),
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              url: 'https://jackbaihaochen.github.io/tools/base64/'
            })}
          </script>
        </Helmet>
      </HelmetProvider>

      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('base64.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('base64.subtitle')}</Typography.Text>
      </div>

      {error && <Alert type="error" showIcon message={error} />}
      {ok && <Alert type="success" showIcon message={ok} />}

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title={t('base64.plainTitle')}>
            <TextArea
              value={plain}
              onChange={e => setPlain(e.target.value)}
              placeholder={t('base64.plainPlaceholder')}
              autoSize={{ minRows: 12 }}
              spellCheck={false}
            />
            <div style={{ marginTop: 8 }}>
              <Space wrap>
                <Button type="primary" onClick={onEncode}>{t('base64.encode')}</Button>
                <Button onClick={copyPlain}>{t('base64.copy')}</Button>
                <Button danger onClick={onClear}>{t('base64.clear')}</Button>
              </Space>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title={t('base64.encodedTitle')}>
            <TextArea
              value={encoded}
              onChange={e => setEncoded(e.target.value)}
              placeholder={t('base64.encodedPlaceholder')}
              autoSize={{ minRows: 12 }}
              spellCheck={false}
            />
            <div style={{ marginTop: 8 }}>
              <Space wrap>
                <Button type="primary" onClick={onDecode}>{t('base64.decode')}</Button>
                <Button onClick={copyEncoded}>{t('base64.copy')}</Button>
                <Button danger onClick={onClear}>{t('base64.clear')}</Button>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>

      <Typography.Paragraph>{t('base64.note')}</Typography.Paragraph>
    </Space>
  );
}

import { useMemo, useState } from 'react';
import { Button, Col, Input, Row, Space, Typography, message, Alert, Card } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const { TextArea } = Input;

export default function JsonFormatter() {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const parsed = useMemo(() => {
    try {
      if (!input.trim()) return null;
      const val = JSON.parse(input.trim());
      setError(null);
      return val;
    } catch (e: any) {
      setError(e.message);
      return null;
    }
  }, [input]);

  const onFormat = () => {
    if (parsed === null) return;
    setOutput(JSON.stringify(parsed, null, 2));
    setOk(t('json.ok'));
  };

  const onMinify = () => {
    if (parsed === null) return;
    setOutput(JSON.stringify(parsed));
    setOk(t('json.ok'));
  };

  const onValidate = () => {
    if (parsed !== null) {
      message.success(t('json.valid'));
      setOk(null);
    }
  };

  const onClear = () => {
    setInput('');
    setOutput('');
    setError(null);
    setOk(null);
  };

  const onCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    message.success(t('json.copied'));
  };

  const onDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'application/json;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'formatted.json';
    a.click();
    URL.revokeObjectURL(a.href);
    message.success(t('json.downloaded'));
  };

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <HelmetProvider>
        <Helmet>
          <title>{t('json.title')}｜在线美化/压缩/校验/复制/下载｜纯前端零上传</title>
          <meta name="description" content={'在线 JSON 格式化与压缩，语法校验、复制与下载，全部在浏览器本地完成，不上传任何数据。'} />
          <meta name="keywords" content={'JSON 格式化, JSON 美化, JSON 压缩, JSON 校验, JSON 在线, JSON formatter, JSON beautifier, JSON minify, JSON validator, JSON lint'} />
          <link rel="canonical" href="https://jackbaihaochen.github.io/tools/json-formatter/" />
          {/* Open Graph / Twitter */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${t('json.title')}｜${t('json.subtitle')}`} />
          <meta property="og:description" content={'在线 JSON 格式化与压缩，语法校验、复制与下载，全部在浏览器本地完成，不上传任何数据。'} />
          <meta property="og:url" content="https://jackbaihaochen.github.io/tools/json-formatter/" />
          <meta property="og:site_name" content={t('brand')} />
          <meta property="og:locale" content="zh_CN" />
          <meta property="og:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('json.title')}｜${t('json.subtitle')}`} />
          <meta name="twitter:description" content={'在线 JSON 格式化与压缩，语法校验、复制与下载，全部在浏览器本地完成，不上传任何数据。'} />
          <meta name="twitter:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: t('json.title'),
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              url: 'https://jackbaihaochen.github.io/tools/json-formatter/'
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('json.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('json.subtitle')}</Typography.Text>
      </div>

      {error && <Alert type="error" showIcon message={t('json.syntaxError', { msg: error })} />}
      {ok && <Alert type="success" showIcon message={ok} />}

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title={t('json.input')}>
            <TextArea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={t('json.placeholder')}
              autoSize={{ minRows: 16 }}
              spellCheck={false}
            />
            <div style={{ marginTop: 8 }}>
              <Space wrap>
                <Button type="primary" onClick={onFormat}>{t('json.beautify')}</Button>
                <Button onClick={onMinify}>{t('json.minify')}</Button>
                <Button onClick={onValidate}>{t('json.validate')}</Button>
                <Button danger onClick={onClear}>{t('json.clear')}</Button>
              </Space>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title={t('json.output')}>
            <TextArea value={output} readOnly autoSize={{ minRows: 16 }} spellCheck={false} />
            <div style={{ marginTop: 8 }}>
              <Space wrap>
                <Button onClick={onCopy}>{t('json.copy')}</Button>
                <Button onClick={onDownload}>{t('json.download')}</Button>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>

      <Typography.Paragraph>{t('json.note')}</Typography.Paragraph>
    </Space>
  );
}

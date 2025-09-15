import { useState } from 'react';
import { Button, Col, Input, Row, Space, Typography, message, Alert, Card } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import * as yaml from 'js-yaml';

const { TextArea } = Input;

export default function JsonYaml() {
  const { t } = useTranslation();
  const [jsonText, setJsonText] = useState('');
  const [yamlText, setYamlText] = useState('');
  const [jsonErr, setJsonErr] = useState<string | null>(null);
  const [yamlErr, setYamlErr] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const toYaml = () => {
    try {
      if (!jsonText.trim()) return;
      const data = JSON.parse(jsonText);
      const dumped = yaml.dump(data, { noRefs: true, lineWidth: 120 });
      setYamlText(dumped);
      setJsonErr(null);
      setOk(t('jsonyaml.ok'));
    } catch (e: any) {
      setJsonErr(e.message);
      setOk(null);
    }
  };

  const toJson = () => {
    try {
      if (!yamlText.trim()) return;
      const data = yaml.load(yamlText) as any;
      const dumped = JSON.stringify(data, null, 2);
      setJsonText(dumped);
      setYamlErr(null);
      setOk(t('jsonyaml.ok'));
    } catch (e: any) {
      setYamlErr(e.message);
      setOk(null);
    }
  };

  const onClear = () => {
    setJsonText('');
    setYamlText('');
    setJsonErr(null);
    setYamlErr(null);
    setOk(null);
  };

  const copyJson = async () => {
    if (!jsonText) return;
    await navigator.clipboard.writeText(jsonText);
    message.success(t('jsonyaml.copy'));
  };

  const copyYaml = async () => {
    if (!yamlText) return;
    await navigator.clipboard.writeText(yamlText);
    message.success(t('jsonyaml.copy'));
  };

  const download = (content: string, filename: string, mime: string) => {
    if (!content) return;
    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
    message.success(filename.endsWith('.json') ? t('jsonyaml.downloadJson') : t('jsonyaml.downloadYaml'));
  };

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <HelmetProvider>
        <Helmet>
          <title>{t('jsonyaml.title')}｜双向转换/校验/复制/下载｜纯前端零上传</title>
          <meta name="description" content={'JSON 与 YAML 在线双向转换与校验，支持复制和下载，处理全在浏览器本地完成，不上传任何数据。'} />
          <meta name="keywords" content={'JSON 转 YAML, YAML 转 JSON, JSON to YAML, YAML to JSON, JSON YAML 在线转换, JSON YAML validator, JSON YAML converter'} />
          <link rel="canonical" href="https://jackbaihaochen.github.io/tools/json-yaml/" />
          {/* Open Graph / Twitter */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${t('jsonyaml.title')}｜${t('jsonyaml.subtitle')}`} />
          <meta property="og:description" content={'JSON 与 YAML 在线双向转换与校验，支持复制和下载，处理全在浏览器本地完成，不上传任何数据。'} />
          <meta property="og:url" content="https://jackbaihaochen.github.io/tools/json-yaml/" />
          <meta property="og:site_name" content={t('brand')} />
          <meta property="og:locale" content="zh_CN" />
          <meta property="og:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('jsonyaml.title')}｜${t('jsonyaml.subtitle')}`} />
          <meta name="twitter:description" content={'JSON 与 YAML 在线双向转换与校验，支持复制和下载，处理全在浏览器本地完成，不上传任何数据。'} />
          <meta name="twitter:image" content="https://jackbaihaochen.github.io/web-tool-box-icon-512.png" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: t('jsonyaml.title'),
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              url: 'https://jackbaihaochen.github.io/tools/json-yaml/'
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('jsonyaml.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('jsonyaml.subtitle')}</Typography.Text>
      </div>

      {jsonErr && <Alert type="error" showIcon message={t('jsonyaml.jsonErr', { msg: jsonErr })} />}
      {yamlErr && <Alert type="error" showIcon message={t('jsonyaml.yamlErr', { msg: yamlErr })} />} 
      {ok && <Alert type="success" showIcon message={ok} />}

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title={t('jsonyaml.jsonInput')}>
            <TextArea
              value={jsonText}
              onChange={e => setJsonText(e.target.value)}
              placeholder={t('jsonyaml.jsonPlaceholder')}
              autoSize={{ minRows: 16 }}
              spellCheck={false}
            />
            <div style={{ marginTop: 8 }}>
              <Space wrap>
                <Button type="primary" onClick={toYaml}>{t('jsonyaml.toYaml')}</Button>
                <Button onClick={copyJson}>{t('jsonyaml.copy')}</Button>
                <Button onClick={() => download(jsonText, 'data.json', 'application/json')}>{t('jsonyaml.downloadJson')}</Button>
                <Button danger onClick={onClear}>{t('jsonyaml.clear')}</Button>
              </Space>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title={t('jsonyaml.yamlInput')}>
            <TextArea
              value={yamlText}
              onChange={e => setYamlText(e.target.value)}
              placeholder={t('jsonyaml.yamlPlaceholder')}
              autoSize={{ minRows: 16 }}
              spellCheck={false}
            />
            <div style={{ marginTop: 8 }}>
              <Space wrap>
                <Button type="primary" onClick={toJson}>{t('jsonyaml.toJson')}</Button>
                <Button onClick={copyYaml}>{t('jsonyaml.copy')}</Button>
                <Button onClick={() => download(yamlText, 'data.yaml', 'text/yaml')}>{t('jsonyaml.downloadYaml')}</Button>
                <Button danger onClick={onClear}>{t('jsonyaml.clear')}</Button>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>

      <Typography.Paragraph>{t('jsonyaml.note')}</Typography.Paragraph>
    </Space>
  );
}

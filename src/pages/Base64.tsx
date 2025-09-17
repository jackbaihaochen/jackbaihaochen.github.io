import { ChangeEvent, useRef, useState } from 'react';
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

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

type NormalizedBase64 = {
  dataUrl: string;
  mime: string;
  rawData: string;
};

function normalizeBase64Input(value: string): NormalizedBase64 {
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Error('Empty input');
  }
  if (trimmed.startsWith('data:')) {
    const commaIdx = trimmed.indexOf(',');
    if (commaIdx === -1) {
      throw new Error('Invalid data URL');
    }
    const header = trimmed.slice(0, commaIdx);
    const data = trimmed.slice(commaIdx + 1).replace(/\s+/g, '');
    const mimeMatch = header.match(/^data:([^;]+);base64$/i);
    const mime = mimeMatch ? mimeMatch[1] : 'image/png';
    return { dataUrl: `data:${mime};base64,${data}`, mime, rawData: data };
  }
  const cleaned = trimmed.replace(/\s+/g, '');
  return {
    dataUrl: `data:image/png;base64,${cleaned}`,
    mime: 'image/png',
    rawData: cleaned
  };
}

function base64ToUint8Array(data: string) {
  const binary = atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

type ImageInfo = {
  name: string;
  type: string;
  size: string;
};

export default function Base64() {
  const { t } = useTranslation();
  const { lang } = useThemeMode();
  const [plain, setPlain] = useState('');
  const [encoded, setEncoded] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError(t('base64.imageEncodeError', { msg: t('base64.imageUnsupported') }));
      setOk(null);
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) {
        setError(t('base64.imageEncodeError', { msg: t('base64.imageUnsupported') }));
        setOk(null);
        event.target.value = '';
        return;
      }
      setImageBase64(result);
      setImagePreview(result);
      setImageInfo({ name: file.name, type: file.type || 'image/*', size: formatSize(file.size) });
      setError(null);
      setOk(t('base64.imageEncoded'));
      event.target.value = '';
    };
    reader.onerror = () => {
      const msgText = reader.error?.message || t('base64.imageUnsupported');
      setError(t('base64.imageEncodeError', { msg: msgText }));
      setOk(null);
      event.target.value = '';
    };
    reader.readAsDataURL(file);
  };

  const copyImageBase64 = async () => {
    if (!imageBase64.trim()) return;
    await navigator.clipboard.writeText(imageBase64);
    message.success(t('base64.copied'));
  };

  const renderImage = () => {
    try {
      if (!imageBase64.trim()) {
        setImagePreview(null);
        setImageInfo(null);
        setError(null);
        setOk(null);
        return;
      }
      const normalized = normalizeBase64Input(imageBase64);
      const bytes = base64ToUint8Array(normalized.rawData);
      const blob = new Blob([bytes], { type: normalized.mime });
      const ext = normalized.mime.split('/')[1] || 'png';
      setImagePreview(normalized.dataUrl);
      setImageInfo(prev => ({
        name: prev?.name || `from-base64.${ext}`,
        type: normalized.mime,
        size: formatSize(blob.size)
      }));
      setError(null);
      setOk(t('base64.imageDecoded'));
    } catch (e: any) {
      const rawMessage = e?.message || String(e);
      const fallback = ['Empty input', 'Invalid data URL'].includes(rawMessage)
        ? t('base64.imageUnsupported')
        : rawMessage;
      setError(t('base64.imageDecodeError', { msg: fallback }));
      setOk(null);
    }
  };

  const downloadImage = () => {
    if (!imagePreview) return;
    const link = document.createElement('a');
    link.href = imagePreview;
    link.download = imageInfo?.name || 'base64-image';
    link.click();
  };

  const clearImage = () => {
    setImageBase64('');
    setImagePreview(null);
    setImageInfo(null);
    setError(null);
    setOk(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onImageInputChange = (value: string) => {
    setImageBase64(value);
    setError(null);
    setOk(null);
    if (!value.trim()) {
      setImagePreview(null);
      setImageInfo(null);
    }
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
              rows={12}
              style={{ maxHeight: 260, overflow: 'auto' }}
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

      <Card title={t('base64.imageCardTitle')}>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Typography.Paragraph style={{ marginBottom: 0 }}>{t('base64.imageIntro')}</Typography.Paragraph>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <Space wrap>
            <Button type="primary" onClick={triggerFileSelect}>{t('base64.imageSelect')}</Button>
            <Button onClick={copyImageBase64} disabled={!imageBase64.trim()}>{t('base64.copy')}</Button>
            <Button onClick={renderImage} type="dashed" disabled={!imageBase64.trim()}>{t('base64.imageRender')}</Button>
            <Button onClick={downloadImage} disabled={!imagePreview}>{t('base64.imageDownload')}</Button>
            <Button danger onClick={clearImage} disabled={!imageBase64 && !imagePreview}>{t('base64.imageClear')}</Button>
          </Space>
          <Typography.Text type="secondary">{t('base64.imageHelper')}</Typography.Text>
          <TextArea
            value={imageBase64}
            onChange={e => onImageInputChange(e.target.value)}
            placeholder={t('base64.imagePlaceholder')}
            rows={8}
            style={{ maxHeight: 220, overflow: 'auto' }}
            spellCheck={false}
          />
          {imageInfo && (
            <Typography.Text type="secondary">
              {t('base64.imageInfo', { name: imageInfo.name, type: imageInfo.type, size: imageInfo.size })}
            </Typography.Text>
          )}
          {imagePreview && (
            <div>
              <Typography.Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
                {t('base64.imagePreviewLabel')}
              </Typography.Text>
              <img
                src={imagePreview}
                alt={t('base64.imagePreviewLabel')}
                style={{ maxWidth: '100%', borderRadius: 8 }}
              />
            </div>
          )}
        </Space>
      </Card>

      <Typography.Paragraph>{t('base64.note')}</Typography.Paragraph>
    </Space>
  );
}

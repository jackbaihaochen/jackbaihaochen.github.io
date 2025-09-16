import { Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import Home from './pages/Home';
import JsonFormatter from './pages/JsonFormatter';
import JsonYaml from './pages/JsonYaml';
import Base64 from './pages/Base64';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/json-formatter" element={<JsonFormatter />} />
        <Route path="/json-yaml" element={<JsonYaml />} />
        <Route path="/base64" element={<Base64 />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}

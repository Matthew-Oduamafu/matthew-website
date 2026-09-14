import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Certificates from '@/pages/Certificates';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

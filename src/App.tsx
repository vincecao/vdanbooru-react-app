import React, { ReactElement, useContext } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Nav from './components/layout/nav/Nav';
import Footer from './components/layout/footer/Footer';
import Index from './pages/index/Index';
import Tag from './pages/tag/Tag';
import { LightBoxContext } from './contexts/lightBoxContext';
import FeatureImageProvider from './contexts/featureImageContext';
import { ThemeContext } from './contexts/themeContext';

const ROUTER_BASENAME = process.env.REACT_APP_ROUTER_BASENAME || '/';

export default function App(): ReactElement {
  const { theme } = useContext(ThemeContext);
  const { isLightBoxMode } = useContext(LightBoxContext);
  return (
    <div className={`flex min-h-screen ${theme === 'dark' && 'bp3-dark'}`}>
      <BrowserRouter basename={ROUTER_BASENAME}>
        <div className={`flex-1 flex flex-col ${isLightBoxMode ? 'filter-blur' : 'filter-none'}`}>
          <FeatureImageProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tags/:key" element={<Tag />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </FeatureImageProvider>
        </div>
      </BrowserRouter>
    </div>
  );
}

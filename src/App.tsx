import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';
import SustainabilityPage from './pages/SustainabilityPage';
import WholesalePage from './pages/WholesalePage';
import ContactPage from './pages/ContactPage';
import './i18n'; // Initialize i18n
import './App.css';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Function to handle language direction changes
    const handleLanguageChange = (lng: string) => {
      const isRTL = lng === 'ar';
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', lng);
      
      // Force a re-render by updating the body class
      document.body.className = document.body.className.replace(/lang-\w+/g, '');
      document.body.classList.add(`lang-${lng}`);
      
      // Set font family based on language
      if (lng === 'ar') {
        document.body.style.fontFamily = '"Cairo", "Arial", sans-serif';
      } else {
        document.body.style.fontFamily = '';
      }
    };

    // Set initial direction and language
    handleLanguageChange(i18n.language);
    
    // Listen for language changes
    i18n.on('languageChanged', handleLanguageChange);
    
    // Cleanup listener on component unmount
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
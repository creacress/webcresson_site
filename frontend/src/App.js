import React from 'react';
import { Helmet } from 'react-helmet';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import RPA from './pages/RPA/RPA';
import DataEngineering from './pages/DataEngineering/DataEngineering';
import Consulting from './pages/Consulting/Consulting';
import CustomSoftware from './pages/CustomSoftware/CustomSoftware';
import SiteCreation from './pages/Création de Site/SiteCreation';
import SEOOptimization from './pages/Optimisations SEO/SEOOptimization';
import SiteRenovation from './pages/Reprise de Site Web/SiteRenovation';
import Hosting from './pages/Hébergement/Hosting';

function App() {
  return (
    <Router>
       <Helmet>
        <title>WebCressonTech</title>
        <meta name="description" content="WebCressonTech - Consultation et services en automatisation, ingénierie des données, et développement web." />
        <meta name="keywords" content="RPA, ingénierie des données, développement web, consultation, automatisation, SEO, hébergement" />
        <meta property="og:title" content="WebCressonTech" />
        <meta property="og:description" content="WebCressonTech - Consultation et services en automatisation, ingénierie des données, et développement web." />
        <meta property="og:image" content="http://webcressontech.com/images/default.jpg" />
        <meta property="og:url" content="http://webcressontech.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebCressonTech" />
        <meta name="twitter:description" content="WebCressonTech - Consultation et services en automatisation, ingénierie des données, et développement web." />
        <meta name="twitter:image" content="http://webcressontech.com/images/default.jpg" />
      </Helmet>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rpa" element={<RPA />} />
          <Route path="/data-engineering" element={<DataEngineering />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/custom-software" element={<CustomSoftware />} />
          <Route path="/frontend" element={<SiteCreation />} />
          <Route path="/seo-optimization" element={<SEOOptimization />} />
          <Route path="/site-renovation" element={<SiteRenovation />} />
          <Route path="/hosting" element={<Hosting />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

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
import SiteCreation from './pages/CreationDeSite/SiteCreation';
import SEOOptimization from './pages/SEOOptimisation/SEOOptimization';
import SiteRenovation from './pages/SiteRenovation/SiteRenovation';
import Hosting from './pages/Hosting/Hosting';

ReactGA.initialize('G-Q7CQNCMT3V');

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
};

function App() {
  usePageTracking();

  return (
    <div>
      <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWB1S3BY2Q"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWB1S3BY2Q');
          `}
        </script>
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
    </div>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;

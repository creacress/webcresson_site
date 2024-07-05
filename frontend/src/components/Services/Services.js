import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';
import { FaRobot, FaDatabase, FaCogs, FaCode, FaServer, FaLaptopCode, FaSearch, FaRedo, FaCloud } from 'react-icons/fa';
import Helmet from 'react-helmet';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const services = {
    frontend: [
      {
        icon: <FaLaptopCode className="service-icon" />,
        title: 'Création de site',
        description: 'Je conçois et développe des sites web modernes et performants.',
        link: '/frontend',
      },
      {
        icon: <FaSearch className="service-icon" />,
        title: 'Optimisations SEO',
        description: 'J\'optimise votre site pour les moteurs de recherche afin d\'améliorer votre visibilité en ligne.',
        link: '/seo-optimization',
      },
      {
        icon: <FaRedo className="service-icon" />,
        title: 'Reprise de site web',
        description: 'Je modernise et optimise les sites web existants pour améliorer les performances et l\'expérience utilisateur.',
        link: '/site-renovation',
      },
      {
        icon: <FaCloud className="service-icon" />,
        title: 'Hébergement',
        description: 'Je propose des solutions d\'hébergement fiables et sécurisées pour vos sites web.',
        link: '/hosting',
      },
    ],
    backend: [
      {
        icon: <FaRobot className="service-icon" />,
        title: 'Développement RPA',
        description: 'Je développe des solutions RPA pour automatiser vos processus métiers et améliorer votre efficacité opérationnelle.',
        link: '/rpa',
      },
      {
        icon: <FaDatabase className="service-icon" />,
        title: 'Ingénierie de Données',
        description: 'Je conçois et mets en œuvre des pipelines de données robustes pour gérer et exploiter vos données de manière optimale.',
        link: '/data-engineering',
      },
      {
        icon: <FaServer className="service-icon" />,
        title: 'Développement Backend',
        description: 'Je développe des APIs et des systèmes back-end performants en utilisant des technologies comme Node.js et Python.',
        link: '/backend',
      },
      {
        icon: <FaCogs className="service-icon" />,
        title: 'Consultation en Automatisation',
        description: 'Je fournis des conseils experts pour identifier et automatiser vos processus les plus critiques.',
        link: '/consulting',
      },
      {
        icon: <FaCode className="service-icon" />,
        title: 'Solutions Logiciels Sur Mesure',
        description: 'Je développe des solutions logicielles sur mesure pour répondre à vos besoins spécifiques et améliorer votre productivité.',
        link: '/custom-software',
      },
    ],
  };

  return (
    <section className="services">
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
    <title>Mes Services - WebCressonTech</title>
    <meta name="description" content="Découvrez les services que j'offre, allant du développement front-end à l'ingénierie de données et l'automatisation des processus." />
    <meta name="keywords" content="services, développement, RPA, ingénierie des données, automatisation, front-end, back-end, WebCressonTech" />
    <meta property="og:title" content="Mes Services - WebCressonTech" />
    <meta property="og:description" content="Découvrez les services que j'offre, allant du développement front-end à l'ingénierie de données et l'automatisation des processus." />
    <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
    <meta property="og:url" content="http://webcressontech.com/services" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Mes Services - WebCressonTech" />
    <meta name="twitter:description" content="Découvrez les services que j'offre, allant du développement front-end à l'ingénierie de données et l'automatisation des processus." />
    <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
  </Helmet>
      <h2>Mes Services</h2>
      <div className="services-categories">
        <button className={`category-button ${selectedCategory === 'backend' ? 'active' : ''}`} onClick={() => setSelectedCategory('backend')}>
          Back-end
        </button>
        <button className={`category-button ${selectedCategory === 'frontend' ? 'active' : ''}`} onClick={() => setSelectedCategory('frontend')}>
          Front-end
        </button>
      </div>
      <div className="services-list">
        {services[selectedCategory].map((service, index) => (
          <div key={index} className="service-item">
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="more-info-button">En savoir plus</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

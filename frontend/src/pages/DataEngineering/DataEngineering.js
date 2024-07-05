import React, { useState } from 'react';
import './DataEngineering.scss';
import { Helmet } from 'react-helmet';

const DataEngineering = () => {
  const [isSectionVisible, setIsSectionVisible] = useState({ section1: false, section2: false, section3: false });

  const toggleSectionVisibility = (section) => {
    setIsSectionVisible({ ...isSectionVisible, [section]: !isSectionVisible[section] });
  };

  return (
    <section className="service-details">
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
        <title>Ingénierie de Données - WebCressonTech</title>
        <meta name="description" content="Je conçois et mets en œuvre des pipelines de données robustes pour gérer et exploiter vos données de manière optimale." />
        <meta name="keywords" content="ingénierie de données, collecte de données, transformation de données, stockage de données, analyse de données, WebCressonTech" />
        <meta property="og:title" content="Ingénierie de Données - WebCressonTech" />
        <meta property="og:description" content="Je conçois et mets en œuvre des pipelines de données robustes pour gérer et exploiter vos données de manière optimale." />
        <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
        <meta property="og:url" content="http://webcressontech.com/data-engineering" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ingénierie de Données - WebCressonTech" />
        <meta name="twitter:description" content="Je conçois et mets en œuvre des pipelines de données robustes pour gérer et exploiter vos données de manière optimale." />
        <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
      </Helmet>
      <div className="hero">
        <h1>Ingénierie de Données</h1>
        <p>
          Je conçois et mets en œuvre des pipelines de données robustes pour gérer et exploiter vos données de manière optimale.
        </p>
      </div>

      <div className="schema">
        <h2>Comment se déroule l'ingénierie de données ?</h2>
        <div className="schema-container">
          <div className="schema-step">
            <div className="schema-icon">1</div>
            <p>Collecte des données</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">2</div>
            <p>Transformation des données</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">3</div>
            <p>Stockage des données</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">4</div>
            <p>Analyse des données</p>
          </div>
        </div>
        <p>
          Nos services d'ingénierie de données assurent une gestion efficace et une exploitation optimale de vos données grâce à des pipelines robustes et fiables.
        </p>
      </div>

      <div className="accordion services">
        <h2>Nos Services d'Ingénierie de Données</h2>
        <ul>
          <li>
            <button onClick={() => toggleSectionVisibility('section1')} className="accordion-button">
              {isSectionVisible.section1 ? 'Collecte des Données ▲' : 'Collecte des Données ▼'}
            </button>
            {isSectionVisible.section1 && (
              <div className="accordion-content">
                <p>
                  Nous collectons les données à partir de diverses sources pour garantir une base de données complète et précise.
                </p>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleSectionVisibility('section2')} className="accordion-button">
              {isSectionVisible.section2 ? 'Transformation des Données ▲' : 'Transformation des Données ▼'}
            </button>
            {isSectionVisible.section2 && (
              <div className="accordion-content">
                <p>
                  Nous transformons et nettoyons les données pour les rendre exploitables et prêtes pour l'analyse.
                </p>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleSectionVisibility('section3')} className="accordion-button">
              {isSectionVisible.section3 ? 'Stockage des Données ▲' : 'Stockage des Données ▼'}
            </button>
            {isSectionVisible.section3 && (
              <div className="accordion-content">
                <p>
                  Nous stockons les données de manière sécurisée et optimisée pour un accès rapide et facile.
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DataEngineering;

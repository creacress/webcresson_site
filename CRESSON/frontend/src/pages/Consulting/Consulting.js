import React, { useState } from 'react';
import './Consulting.scss';
import { Helmet } from 'react-helmet';

const Consulting = () => {
  const [isSectionVisible, setIsSectionVisible] = useState({ section1: false, section2: false, section3: false });

  const toggleSectionVisibility = (section) => {
    setIsSectionVisible({ ...isSectionVisible, [section]: !isSectionVisible[section] });
  };

  return (
    <section className="service-details">
      <Helmet>
        <title>Consultation en Automatisation - WebCressonTech</title>
        <meta name="description" content="Nos services de consultation en automatisation vous aident à identifier les opportunités d'amélioration et à mettre en œuvre des solutions efficaces pour optimiser vos processus métiers." />
        <meta name="keywords" content="consultation en automatisation, optimisation des processus, WebCressonTech, RPA, amélioration des processus" />
        <meta property="og:title" content="Consultation en Automatisation - WebCressonTech" />
        <meta property="og:description" content="Nos services de consultation en automatisation vous aident à identifier les opportunités d'amélioration et à mettre en œuvre des solutions efficaces pour optimiser vos processus métiers." />
        <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
        <meta property="og:url" content="http://webcressontech.com/consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consultation en Automatisation - WebCressonTech" />
        <meta name="twitter:description" content="Nos services de consultation en automatisation vous aident à identifier les opportunités d'amélioration et à mettre en œuvre des solutions efficaces pour optimiser vos processus métiers." />
        <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
      </Helmet>
      <div className="hero">
        <h1>Consultation en Automatisation</h1>
        <p>
          Je fournis des conseils experts pour identifier et automatiser vos processus les plus critiques.
        </p>
      </div>

      <div className="schema">
        <h2>Comment se déroule la consultation ?</h2>
        <div className="schema-container">
          <div className="schema-step">
            <div className="schema-icon">1</div>
            <p>Évaluation des besoins</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">2</div>
            <p>Analyse des processus</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">3</div>
            <p>Recommandations</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">4</div>
            <p>Mise en œuvre</p>
          </div>
        </div>
        <p>
          Nos services de consultation en automatisation vous aident à identifier les opportunités d'amélioration et à mettre en œuvre des solutions efficaces pour optimiser vos processus métiers.
        </p>
      </div>

      <div className="accordion services">
        <h2>Nos Services de Consultation</h2>
        <ul>
          <li>
            <button onClick={() => toggleSectionVisibility('section1')} className="accordion-button">
              {isSectionVisible.section1 ? 'Évaluation des Besoins ▲' : 'Évaluation des Besoins ▼'}
            </button>
            {isSectionVisible.section1 && (
              <div className="accordion-content">
                <p>
                  Nous analysons vos besoins spécifiques pour comprendre les défis et les opportunités de votre entreprise.
                </p>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleSectionVisibility('section2')} className="accordion-button">
              {isSectionVisible.section2 ? 'Analyse des Processus ▲' : 'Analyse des Processus ▼'}
            </button>
            {isSectionVisible.section2 && (
              <div className="accordion-content">
                <p>
                  Nous examinons vos processus actuels pour identifier les domaines où l'automatisation peut apporter le plus de valeur.
                </p>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleSectionVisibility('section3')} className="accordion-button">
              {isSectionVisible.section3 ? 'Recommandations ▲' : 'Recommandations ▼'}
            </button>
            {isSectionVisible.section3 && (
              <div className="accordion-content">
                <p>
                  Nous fournissons des recommandations détaillées et un plan d'action pour l'automatisation de vos processus.
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Consulting;

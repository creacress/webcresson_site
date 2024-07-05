import React, { useState } from 'react';
import './CustomSoftware.scss';
import { Helmet } from 'react-helmet';

const CustomSoftware = () => {
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
        <title>Solutions Logiciels Sur Mesure - WebCressonTech</title>
        <meta name="description" content="Je développe des solutions logicielles sur mesure pour répondre à vos besoins spécifiques et améliorer votre productivité." />
        <meta name="keywords" content="solutions logicielles sur mesure, développement de logiciels, WebCressonTech, productivité, logiciels personnalisés" />
        <meta property="og:title" content="Solutions Logiciels Sur Mesure - WebCressonTech" />
        <meta property="og:description" content="Je développe des solutions logicielles sur mesure pour répondre à vos besoins spécifiques et améliorer votre productivité." />
        <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
        <meta property="og:url" content="http://webcressontech.com/custom-software" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solutions Logiciels Sur Mesure - WebCressonTech" />
        <meta name="twitter:description" content="Je développe des solutions logicielles sur mesure pour répondre à vos besoins spécifiques et améliorer votre productivité." />
        <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
      </Helmet>
      <div className="hero">
        <h1>Solutions Logiciels Sur Mesure</h1>
        <p>
          Je développe des solutions logicielles sur mesure pour répondre à vos besoins spécifiques et améliorer votre productivité.
        </p>
      </div>

      <div className="schema">
        <h2>Comment nous développons des solutions sur mesure ?</h2>
        <div className="schema-container">
          <div className="schema-step">
            <div className="schema-icon">1</div>
            <p>Compréhension des besoins</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">2</div>
            <p>Conception et planification</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">3</div>
            <p>Développement</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">4</div>
            <p>Tests et déploiement</p>
          </div>
        </div>
        <p>
          Nous suivons une approche structurée pour développer des solutions logicielles sur mesure, en nous assurant que chaque étape est bien exécutée pour répondre à vos attentes et améliorer votre productivité.
        </p>
      </div>

      <div className="accordion services">
        <h2>Nos Services de Développement</h2>
        <ul>
          <li>
            <button onClick={() => toggleSectionVisibility('section1')} className="accordion-button">
              {isSectionVisible.section1 ? 'Compréhension des Besoins ▲' : 'Compréhension des Besoins ▼'}
            </button>
            {isSectionVisible.section1 && (
              <div className="accordion-content">
                <p>
                  Nous travaillons en étroite collaboration avec vous pour comprendre vos besoins spécifiques et définir les objectifs du projet.
                </p>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleSectionVisibility('section2')} className="accordion-button">
              {isSectionVisible.section2 ? 'Conception et Planification ▲' : 'Conception et Planification ▼'}
            </button>
            {isSectionVisible.section2 && (
              <div className="accordion-content">
                <p>
                  Nous concevons une solution adaptée à vos besoins et planifions chaque étape du développement pour assurer une mise en œuvre réussie.
                </p>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleSectionVisibility('section3')} className="accordion-button">
              {isSectionVisible.section3 ? 'Développement ▲' : 'Développement ▼'}
            </button>
            {isSectionVisible.section3 && (
              <div className="accordion-content">
                <p>
                  Nos développeurs créent le logiciel en suivant les meilleures pratiques et en utilisant les technologies les plus adaptées.
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CustomSoftware;

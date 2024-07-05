import React, { useState } from 'react';
import './RPA.scss';
import { Helmet } from 'react-helmet';


const RPA = () => {
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
        <title>Développement RPA - WebCressonTech</title>
        <meta name="description" content="Je développe des solutions RPA pour automatiser vos processus métiers et améliorer votre efficacité opérationnelle, en utilisant les meilleures pratiques et technologies." />
        <meta name="keywords" content="RPA, automatisation des processus, efficacité opérationnelle, développement RPA, WebCressonTech" />
        <meta property="og:title" content="Développement RPA - WebCressonTech" />
        <meta property="og:description" content="Je développe des solutions RPA pour automatiser vos processus métiers et améliorer votre efficacité opérationnelle, en utilisant les meilleures pratiques et technologies." />
        <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
        <meta property="og:url" content="http://webcressontech.com/rpa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Développement RPA - WebCressonTech" />
        <meta name="twitter:description" content="Je développe des solutions RPA pour automatiser vos processus métiers et améliorer votre efficacité opérationnelle, en utilisant les meilleures pratiques et technologies." />
        <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
      </Helmet>
      <div className="hero">
        <h1>Développement RPA</h1>
        <p>
          Je développe des solutions RPA pour automatiser vos processus métiers et améliorer votre efficacité opérationnelle.
        </p>
      </div>

      <div className="schema">
        <h2>Comment fonctionne le RPA ?</h2>
        <div className="schema-container">
          <div className="schema-step">
            <div className="schema-icon">1</div>
            <p>Analyse des processus</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">2</div>
            <p>Conception de la solution</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">3</div>
            <p>Développement et tests</p>
          </div>
          <div className="schema-arrow">→</div>
          <div className="schema-step">
            <div className="schema-icon">4</div>
            <p>Déploiement et maintenance</p>
          </div>
        </div>
        <p>
          Le RPA (Robotic Process Automation) utilise des logiciels pour automatiser les tâches répétitives, permettant aux entreprises de se concentrer sur des tâches à plus forte valeur ajoutée.
        </p>
      </div>

      <div className="accordion services">
        <h2>Découvrez mes services</h2>
        <ul>
          <li>
            <button onClick={() => toggleSectionVisibility('section1')} className="accordion-button">
              {isSectionVisible.section1 ? 'Introduction au RPA ▲' : 'Introduction au RPA ▼'}
            </button>
            {isSectionVisible.section1 && (
              <div className="accordion-content">
                <p>
                  Le RPA (Robotic Process Automation) permet d'automatiser les tâches répétitives et chronophages, améliorant ainsi l'efficacité des entreprises.
                </p>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleSectionVisibility('section2')} className="accordion-button">
              {isSectionVisible.section2 ? 'Avantages du RPA ▲' : 'Avantages du RPA ▼'}
            </button>
            {isSectionVisible.section2 && (
              <div className="accordion-content">
                <p>
                  Le RPA réduit les erreurs humaines, augmente la vitesse des processus, et permet aux employés de se concentrer sur des tâches à plus haute valeur ajoutée.
                </p>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleSectionVisibility('section3')} className="accordion-button">
              {isSectionVisible.section3 ? 'Comment je travaille ▲' : 'Comment je travaille ▼'}
            </button>
            {isSectionVisible.section3 && (
              <div className="accordion-content">
                <p>
                  J'analyse vos besoins, conçois des solutions sur mesure, et implémente des scripts RPA robustes pour automatiser vos processus métiers de manière efficace.
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="examples">
        <h2>Exemples concrets de gains de temps grâce au RPA</h2>
        <div className="example-item">
          <h4>Automatisation de la saisie de données</h4>
          <p>
            En automatisant la saisie de données, une entreprise a pu réduire le temps de traitement de 5 heures par jour à seulement 30 minutes, permettant aux employés de se concentrer sur des tâches plus stratégiques.
          </p>
        </div>
        <div className="example-item">
          <h4>Traitement des factures</h4>
          <p>
            Le RPA a permis de traiter les factures 80% plus rapidement, réduisant les délais de paiement et améliorant la gestion de la trésorerie.
          </p>
        </div>
        <div className="example-item">
          <h4>Support client automatisé</h4>
          <p>
            Grâce à l'automatisation des réponses aux questions fréquentes, le temps de réponse a été réduit de 60%, améliorant la satisfaction client.
          </p>
        </div>
        <div className="example-item">
          <h4>Mise en qualité des données</h4>
          <p>
            En utilisant le RPA pour la mise en qualité des données, une entreprise a pu corriger et standardiser 95% de ses données en moins d'une semaine, alors que cela prenait auparavant plusieurs mois.
          </p>
        </div>
        <div className="example-item">
          <h4>Scraping de données web</h4>
          <p>
            Le RPA a été utilisé pour scraper des données depuis plusieurs sites web, réduisant le temps nécessaire pour collecter ces informations de plusieurs jours à quelques heures.
          </p>
        </div>
        <div className="example-item">
          <h4>Saisie massive de données</h4>
          <p>
            Pour une entreprise devant saisir des milliers de lignes de données sur une plateforme interne, le RPA a réduit le temps de saisie de 3 jours à quelques heures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RPA;

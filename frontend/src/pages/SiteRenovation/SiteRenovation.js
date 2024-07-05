import React from 'react';
import './SiteRenovation.scss';
import { Helmet } from 'react-helmet';

const SiteRenovation = () => (
  <section className="service-detail">
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
    <title>Reprise de Site Web - WebCressonTech</title>
    <meta name="description" content="Je modernise et optimise les sites web existants pour améliorer les performances et l'expérience utilisateur, en utilisant les dernières technologies et meilleures pratiques." />
    <meta name="keywords" content="reprise de site web, modernisation de site web, optimisation de site web, SEO, WebCressonTech, design web" />
    <meta property="og:title" content="Reprise de Site Web - WebCressonTech" />
    <meta property="og:description" content="Je modernise et optimise les sites web existants pour améliorer les performances et l'expérience utilisateur, en utilisant les dernières technologies et meilleures pratiques." />
    <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
    <meta property="og:url" content="http://webcressontech.com/site-renovation" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Reprise de Site Web - WebCressonTech" />
    <meta name="twitter:description" content="Je modernise et optimise les sites web existants pour améliorer les performances et l'expérience utilisateur, en utilisant les dernières technologies et meilleures pratiques." />
    <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
  </Helmet>
    <h1>Reprise de Site Web</h1>
    <p>Je modernise et optimise les sites web existants pour améliorer les performances et l'expérience utilisateur.</p>
    
    <div className="improvements">
      <h2>Aspects de la Modernisation</h2>
      <ul>
        <li>Refonte du design pour un look moderne</li>
        <li>Amélioration de la vitesse de chargement</li>
        <li>Mise à jour du contenu et des médias</li>
        <li>Optimisation pour les appareils mobiles</li>
        <li>Mise en place des meilleures pratiques de SEO</li>
        <li>Amélioration de l'accessibilité</li>
      </ul>
    </div>

    <div className="technology">
      <h2>Technologies Utilisées</h2>
      <ul>
        <li>React</li>
        <li>Vue.js</li>
        <li>Angular</li>
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>WordPress</li>
        <li>GreenCode</li>
      </ul>
    </div>

    <div className="benefits">
      <h2>Avantages pour les Clients</h2>
      <p>En travaillant avec moi, vous bénéficierez de :</p>
      <ul>
        <li>Un site web moderne et attractif</li>
        <li>Amélioration de la vitesse et des performances</li>
        <li>Meilleure expérience utilisateur</li>
        <li>Optimisation SEO pour un meilleur classement</li>
        <li>Compatibilité avec les appareils mobiles</li>
      </ul>
    </div>

    <div className="projects">
      <h2>Exemples de Projets Réalisés</h2>
      <ul>
        <li>Refonte et Modernisation d'un site de réfléxologie</li>
      </ul>
    </div>
  </section>
);

export default SiteRenovation;

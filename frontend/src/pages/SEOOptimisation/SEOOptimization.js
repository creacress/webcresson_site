import React from 'react';
import './SEOOptimization.scss';
import { Helmet } from 'react-helmet';

const SEOOptimization = () => (
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
    <title>Optimisations SEO - WebCressonTech</title>
    <meta name="description" content="J'optimise votre site pour les moteurs de recherche afin d'améliorer votre visibilité en ligne, en utilisant des techniques avancées et les meilleurs outils disponibles." />
    <meta name="keywords" content="optimisation SEO, référencement, visibilité en ligne, SEO technique, WebCressonTech" />
    <meta property="og:title" content="Optimisations SEO - WebCressonTech" />
    <meta property="og:description" content="J'optimise votre site pour les moteurs de recherche afin d'améliorer votre visibilité en ligne, en utilisant des techniques avancées et les meilleurs outils disponibles." />
    <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
    <meta property="og:url" content="http://webcressontech.com/seo-optimization" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Optimisations SEO - WebCressonTech" />
    <meta name="twitter:description" content="J'optimise votre site pour les moteurs de recherche afin d'améliorer votre visibilité en ligne, en utilisant des techniques avancées et les meilleurs outils disponibles." />
    <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
  </Helmet>
    <h1>Optimisations SEO</h1>
    <p>J'optimise votre site pour les moteurs de recherche afin d'améliorer votre visibilité en ligne.</p>
    
    <div className="techniques">
      <h2>Techniques d'Optimisation</h2>
      <ul>
        <li>Recherche de mots-clés</li>
        <li>Optimisation du contenu</li>
        <li>Optimisation des balises méta</li>
        <li>Amélioration de la structure des URLs</li>
        <li>Optimisation des images</li>
        <li>Amélioration de la vitesse du site</li>
        <li>SEO technique</li>
      </ul>
    </div>

    <div className="tools">
      <h2>Outils et Technologies Utilisés</h2>
      <ul>
        <li>Google Analytics</li>
        <li>Google Search Console</li>
        <li>Ahrefs</li>
        <li>SEMrush</li>
        <li>Yoast SEO</li>
        <li>GTmetrix</li>
        <li>PageSpeed Insights</li>
      </ul>
    </div>

    <div className="benefits">
      <h2>Avantages pour les Clients</h2>
      <p>En travaillant avec moi, vous bénéficierez de :</p>
      <ul>
        <li>Augmentation du trafic organique</li>
        <li>Meilleure visibilité sur les moteurs de recherche</li>
        <li>Amélioration de l'expérience utilisateur</li>
        <li>Temps de chargement des pages réduit</li>
        <li>Contenu optimisé pour les moteurs de recherche</li>
      </ul>
    </div>

  </section>
);

export default SEOOptimization;

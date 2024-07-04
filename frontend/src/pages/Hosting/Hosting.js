import React from 'react';
import './Hosting.scss';
import { Helmet } from 'react-helmet';

const Hosting = () => (
  <section className="service-detail">
    <Helmet>
    <title>Hébergement - WebCressonTech</title>
    <meta name="description" content="Je propose des solutions d'hébergement fiables et sécurisées pour vos sites web, incluant hébergement partagé, serveurs dédiés, VPS, et hébergement cloud." />
    <meta name="keywords" content="hébergement web, hébergement sécurisé, serveurs dédiés, VPS, hébergement cloud, WebCressonTech" />
    <meta property="og:title" content="Hébergement - WebCressonTech" />
    <meta property="og:description" content="Je propose des solutions d'hébergement fiables et sécurisées pour vos sites web, incluant hébergement partagé, serveurs dédiés, VPS, et hébergement cloud." />
    <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
    <meta property="og:url" content="http://webcressontech.com/hosting" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Hébergement - WebCressonTech" />
    <meta name="twitter:description" content="Je propose des solutions d'hébergement fiables et sécurisées pour vos sites web, incluant hébergement partagé, serveurs dédiés, VPS, et hébergement cloud." />
    <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
  </Helmet>
    <h1>Hébergement</h1>
    <p>Je propose des solutions d'hébergement fiables et sécurisées pour vos sites web.</p>
    
    <div className="hosting-types">
      <h2>Types de Solutions d'Hébergement</h2>
      <ul>
        <li>Hébergement partagé</li>
        <li>Serveurs dédiés</li>
        <li>Hébergement VPS (Virtual Private Server)</li>
        <li>Hébergement cloud</li>
        <li>Hébergement WordPress</li>
      </ul>
    </div>

    <div className="technology">
      <h2>Technologies et Outils Utilisés</h2>
      <ul>
        <li>NGINX</li>
        <li>Apache</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>cPanel / Plesk</li>
        <li>Cloudflare</li>
      </ul>
    </div>

    <div className="benefits">
      <h2>Avantages pour les Clients</h2>
      <p>En choisissant mes services d'hébergement, vous bénéficierez de :</p>
      <ul>
        <li>Sécurité renforcée avec des certificats SSL gratuits</li>
        <li>Performance élevée avec des temps de chargement rapides</li>
        <li>Sauvegardes régulières pour protéger vos données</li>
        <li>Support technique 24/7</li>
        <li>Scalabilité pour accompagner la croissance de votre site</li>
      </ul>
    </div>
  </section>
);

export default Hosting;

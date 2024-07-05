import React from 'react';
import './SiteCreation.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const SiteCreation = () => (
  <section className="service-detail">
    <Helmet>
      <title>Création de Site - WebCressonTech</title>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWB1S3BY2Q"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWB1S3BY2Q');
          `}
        </script>
      <meta name="description" content="Je conçois et développe des sites web modernes et performants, optimisés pour le SEO et avec un design personnalisé." />
      <meta name="keywords" content="création de site web, développement web, SEO, design web, WebCressonTech, GreenCode" />
      <meta property="og:title" content="Création de Site - WebCressonTech" />
      <meta property="og:description" content="Je conçois et développe des sites web modernes et performants, optimisés pour le SEO et avec un design personnalisé." />
      <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
      <meta property="og:url" content="http://webcressontech.com/site-creation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Création de Site - WebCressonTech" />
      <meta name="twitter:description" content="Je conçois et développe des sites web modernes et performants, optimisés pour le SEO et avec un design personnalisé." />
      <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
    </Helmet>
    <h1>Création de Site</h1>
    <p>Je conçois et développe des sites web modernes et performants.</p>

    <div className="technology">
      <h2>Technologies Utilisées</h2>
      <ul>
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Sass / SCSS</li>
        <li>GreenCode</li>
      </ul>
    </div>

    <div className="benefits">
      <h2>Avantages pour les Clients</h2>
      <p>En travaillant avec moi, vous bénéficierez de :</p>
      <ul>
        <li>Sites web modernes et réactifs</li>
        <li>Optimisation pour les moteurs de recherche (SEO)</li>
        <li>Performance améliorée pour des temps de chargement rapides</li>
        <li>Designs personnalisés et adaptés à votre marque</li>
        <li>Support et maintenance continus</li>
        <li>Développement suivant les réglementations GreenCode</li>
      </ul>
    </div>

    <div className="projects">
      <h2>Exemples de Projets Réalisés</h2>
      <ul>
        <li>Site vitrine pour une entreprise de technologie</li>
        <li>Blog personnel optimisé pour le SEO</li>
        <li>Portfolio professionnel</li>
      </ul>
    </div>

    <div className="green-code">
      <h2>Développement Durable avec GreenCode</h2>
      <p>Je suis engagé dans le développement durable en suivant les réglementations GreenCode. Cela inclut :</p>
      <ul>
        <li>Optimisation de la taille des images en utilisant des formats comme WebP</li>
        <li>Minimisation des ressources et des scripts pour réduire les temps de chargement</li>
        <li>Utilisation de techniques de programmation efficaces pour réduire l'empreinte énergétique</li>
        <li>Promotion des pratiques de codage éco-responsables</li>
      </ul>
    </div>
    <div className="cta">
      <h3>Prêt à avoir votre propre image sur le web ?</h3>
      <p>Contactez-moi dès aujourd'hui pour commencer!</p>
      <Link to="/contact" className="cta-button">Contactez Moi</Link>
    </div>
  </section>
);

export default SiteCreation;

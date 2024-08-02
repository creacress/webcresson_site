import React from 'react';
import Services from '../Services/Services';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './Home.scss';
import PageWrapper from '../PageWrapper/PageWrapper';


const Home = () => (
  <section className="home">
    <PageWrapper />
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
      <title>WebCressonTech - Accueil</title>
      <meta name="description" content="Je propose des services de consultation de premier ordre pour automatiser et rationaliser vos processus métier grâce à des solutions RPA et d'ingénierie des données." />
      <meta name="keywords" content="RPA, ingénierie des données, automatisation, consultation, WebCressonTech" />
      <meta property="og:title" content="WebCressonTech - Accueil" />
      <meta property="og:description" content="Je propose des services de consultation de premier ordre pour automatiser et rationaliser vos processus métier grâce à des solutions RPA et d'ingénierie des données." />
      <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
      <meta property="og:url" content="http://webcressontech.com/home" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="WebCressonTech - Accueil" />
      <meta name="twitter:description" content="Je propose des services de consultation de premier ordre pour automatiser et rationaliser vos processus métier grâce à des solutions RPA et d'ingénierie des données." />
      <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
    </Helmet>
    <div className="hero">
      <h1>Bienvenue dans mon univers</h1>
      <p>Ce site web me permet de vous présentez mes compétences et d'interagir avec vous.</p>
    </div>
    <Services />
    <div className="cta">
      <h3>Prêt à Transformer Votre Entreprise?</h3>
      <p>Contactez-moi dès aujourd'hui pour commencer!</p>
      <p>"Les secrets les mieux gardés sont ceux qui se cachent à la vue de tous."</p>
      <p>Ne laissez pas l'attente d'un élément vous freiner, pas besoin d'un input quand on a un clavier</p>
      <p>-.. --. ... .</p>
      

      <Link to="/contact" className="cta-button">Contactez Moi</Link>
    </div>
  </section>
);

export default Home;

import React, { useEffect } from 'react';
import Services from '../Services/Services';

import './Home.scss';

const Home = () => (
  <section className="home">
    <Helmet>
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
      <h1>Bienvenue chez WebCressonTech</h1>
      <p>Je propose des services de consultation de premier ordre pour automatiser et rationaliser vos processus métier grâce à des solutions RPA et d'ingénierie des données.</p>
    </div>
    <Services />
    <div className="cta">
      <h3>Prêt à Transformer Votre Entreprise?</h3>
      <p>Contactez-moi dès aujourd'hui pour commencer!</p>
      <Link to="/contact" className="cta-button">Contactez Moi</Link>
    </div>
  </section>
);

export default Home;
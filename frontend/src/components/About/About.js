import React from 'react';
import { Helmet } from 'react-helmet';
import './About.scss';
import PortraitCRESSON from '../../assets/cresson.webp';

const About = () => (
  <section className="about">
    <Helmet>
      <title>À Propos de Moi - WebCressonTech</title>
      <meta name="description" content="Je suis un ingénieur de données expérimenté, spécialisé dans l'automatisation des processus robotiques (RPA) et l'optimisation des opérations des entreprises." />
      <meta name="keywords" content="ingénieur de données, RPA, automatisation, WebCressonTech, traitement des données, React, Python" />
      <meta property="og:title" content="À Propos de Moi - WebCressonTech" />
      <meta property="og:description" content="Découvrez mon parcours en tant qu'ingénieur de données spécialisé dans l'automatisation des processus robotiques (RPA) et l'optimisation des opérations des entreprises." />
      <meta property="og:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
      <meta property="og:url" content="http://webcressontech.com/about" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="À Propos de Moi - WebCressonTech" />
      <meta name="twitter:description" content="Découvrez mon parcours en tant qu'ingénieur de données spécialisé dans l'automatisation des processus robotiques (RPA) et l'optimisation des opérations des entreprises." />
      <meta name="twitter:image" content="https://www.canva.com/design/DAFN5s5-hjk/view" />
    </Helmet>
    <h2>À Propos de Moi</h2>
    <div className="about-content">
      <img src={PortraitCRESSON} alt="Mon portrait" className="team-photo" />
      <div className="about-text">
        <p>
          Je suis un ingénieur de données expérimenté, spécialisé dans l'automatisation des processus robotiques (RPA).
          Ma mission est d'aider les entreprises à optimiser leurs opérations et à atteindre une efficacité maximale grâce à des solutions avancées de traitement des données.
        </p>
        <p>
          Avec plusieurs années d'expérience, j'ai commencé par le développement front-end, où j'ai acquis une expertise en React.
          Par la suite, je me suis spécialisé en back-end, découvrant la puissance de Python. J'ai aidé de nombreuses entreprises à transformer leurs processus métier,
          réduire les coûts et améliorer la productivité. Je crois fermement en l'innovation et j'utilise les dernières technologies pour offrir des solutions sur mesure adaptées aux besoins spécifiques de chaque client.
        </p>
        <p>
          Que ce soit pour la mise en qualité des données, l'automatisation de la saisie de données ou le scraping web, je suis passionné par la création de solutions qui apportent une valeur réelle et tangible. 
          Mon objectif est de permettre à mes clients de se concentrer sur leurs activités principales en laissant les tâches répétitives aux robots logiciels.
        </p>
      </div>
    </div>
  </section>
);

export default About;

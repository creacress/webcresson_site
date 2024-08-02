import React, { useContext, useEffect, useState } from 'react';
import './IntelligenceSection.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const IntelligenceSection = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isNightMode, setIsNightMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/'); // Rediriger vers la page d'accueil si non authentifié
    }
  }, [isAuthenticated, navigate]);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  if (!isAuthenticated) {
    return <p>Redirecting...</p>; // Afficher un message de redirection temporaire si non authentifié
  }

  return (
    <div className={`intelligence-section ${isNightMode ? 'night-mode' : ''}`}>
      <button onClick={toggleNightMode}>
        {isNightMode ? 'Désactiver le mode nuit' : 'Activer le mode nuit'}
      </button>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Passer en français' : 'Switch to English'}
      </button>
      <h2>{language === 'en' ? 'Intelligence Reports' : 'Rapports de renseignement'}</h2>
      <div className="report">
        <h3>{language === 'en' ? 'The Dangers of Cookies on the Web' : 'Les dangers des cookies sur le web'}</h3>
        <p>
          {language === 'en'
            ? 'Cookies are small pieces of data stored on your computer by websites you visit. While they can be useful for remembering login information and preferences, they also pose privacy risks. Tracking cookies can monitor your browsing habits, leading to targeted ads and potential data breaches.'
            : 'Les cookies sont de petits morceaux de données stockés sur votre ordinateur par les sites Web que vous visitez. Bien qu\'ils puissent être utiles pour se souvenir des informations de connexion et des préférences, ils présentent également des risques pour la vie privée. Les cookies de suivi peuvent surveiller vos habitudes de navigation, entraînant des publicités ciblées et des violations potentielles de données.'}
        </p>
        <Link to="/cookie-dangers">
          {language === 'en' ? 'Read Full Report' : 'Lire le rapport complet'}
        </Link>
      </div>

      <div className="report">
        <h3>{language === 'en' ? 'Types of Cookies and Their Uses' : 'Types de cookies et leurs utilisations'}</h3>
        <p>
          {language === 'en'
            ? 'Learn about different types of cookies, including session cookies, persistent cookies, and third-party cookies. Understand their purposes, such as session management, personalization, and tracking.'
            : 'Découvrez les différents types de cookies, y compris les cookies de session, les cookies persistants et les cookies tiers. Comprenez leurs objectifs, tels que la gestion de session, la personnalisation et le suivi.'}
        </p>
        <a href="path/to/full-report-cookies-types.pdf" target="_blank" rel="noopener noreferrer">
          {language === 'en' ? 'Read Full Report' : 'Lire le rapport complet'}
        </a>
      </div>

      <div className="report">
        <h3>{language === 'en' ? 'How to Protect Your Privacy' : 'Comment protéger votre vie privée'}</h3>
        <p>
          {language === 'en'
            ? 'Discover methods to protect your privacy from invasive cookies, including adjusting browser settings, using private browsing modes, and installing privacy-focused browser extensions.'
            : 'Découvrez des méthodes pour protéger votre vie privée des cookies intrusifs, y compris en ajustant les paramètres du navigateur, en utilisant les modes de navigation privée et en installant des extensions de navigateur axées sur la confidentialité.'}
        </p>
        <a href="path/to/full-report-cookies-protection.pdf" target="_blank" rel="noopener noreferrer">
          {language === 'en' ? 'Read Full Report' : 'Lire le rapport complet'}
        </a>
      </div>

      <div className="report">
        <h3>{language === 'en' ? 'Case Studies on Cookie Misuse' : 'Études de cas sur l\'abus de cookies'}</h3>
        <p>
          {language === 'en'
            ? 'Read detailed case studies on how cookies have been misused to track users without their consent, leading to privacy violations and legal actions.'
            : 'Lisez des études de cas détaillées sur la manière dont les cookies ont été utilisés abusivement pour suivre les utilisateurs sans leur consentement, entraînant des violations de la vie privée et des actions en justice.'}
        </p>
        <a href="path/to/full-report-cookies-cases.pdf" target="_blank" rel="noopener noreferrer">
          {language === 'en' ? 'Read Full Report' : 'Lire le rapport complet'}
        </a>
      </div>
    </div>
  );
};

export default IntelligenceSection;

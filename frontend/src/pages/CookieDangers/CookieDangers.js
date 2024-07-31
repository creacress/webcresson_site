import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CookieDangers.scss';

const CookieDangers = () => {
  const [cookies, setCookies] = useState([]);
  const [summary, setSummary] = useState({ 'Élevée': 0, 'Moyenne': 0, 'Faible': 0 });
  const [siteUrl, setSiteUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [instanceId, setInstanceId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const startInstance = async (url) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://api.webcresson.com/api/start-instance', { url });

      const result = response.data;
      setInstanceId(result.instanceId);
      toast.success('Instance started. Navigate the website and click "Terminer" when done.', {
        position: "top-center",
        autoClose: 8000,
        closeButton: false,
        hideProgressBar: true
      });
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 8000,
        closeButton: false,
        hideProgressBar: true
      });
    } finally {
      setLoading(false);
    }
  };

  const extractCookies = async () => {
    if (!instanceId) {
      toast.warning('No instance running.', {
        position: "top-center",
        autoClose: 8000,
        closeButton: false,
        hideProgressBar: true
      });
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://api.webcresson.com/api/extract-cookies', { instanceId });

      const result = response.data;

      if (result.status === 'success') {
        const sortedCookies = result.cookies.sort((a, b) => {
          const dangerLevels = { 'Élevée': 3, 'Moyenne': 2, 'Faible': 1 };
          return dangerLevels[b.danger] - dangerLevels[a.danger];
        });
        setCookies(sortedCookies.map(cookie => ({
          name: cookie.name,
          value: cookie.value,
          description: cookie.description,
          danger: cookie.danger,
          tracking: cookie.tracking,
        })));
        setSummary(result.summary);
        toast.success('Cookies extracted successfully.', {
          position: "top-center",
          autoClose: 8000,
          closeButton: false,
          hideProgressBar: true
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 8000,
        closeButton: false,
        hideProgressBar: true
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    startInstance(siteUrl);
  };

  return (
    <div className="cookie-dangers">
      <ToastContainer />
      <div className="content">
        <h1>Définition de cookie</h1>
        <p>
          Un cookie est un fichier texte déposé sur votre ordinateur lors de la visite d'un site. Il permet de conserver des données utilisateur afin de faciliter la navigation et de permettre certaines fonctionnalités. Source : <a href="https://www.cnil.fr/fr/definition/cookie" target="_blank" rel="noopener noreferrer">CNIL</a>
        </p>
        <h4>Internet Security</h4>
        <p>
          La sécurité sur Internet est essentielle pour protéger vos informations personnelles et éviter les cybermenaces. Les cookies peuvent collecter des données sur vos habitudes de navigation, alors comprenez leur fonctionnement et apprenez à les gérer.
        </p>
        <h5>Types de Cookies</h5>
        <ul className="cookie-list">
          <li>
            <div className="icon">🔒</div>
            <div className="text">
              <strong>Cookies de session</strong>
              <p>Utilisés pour suivre vos actions lors d'une session de navigation.</p>
            </div>
          </li>
          <li>
            <div className="icon">🔒</div>
            <div className="text">
              <strong>Cookies persistants</strong>
              <p>Restent sur votre appareil après la fermeture de votre navigateur et sont utilisés pour se souvenir de vos préférences.</p>
            </div>
          </li>
          <li>
            <div className="icon">🔒</div>
            <div className="text">
              <strong>Cookies tiers</strong>
              <p>Déposés par des sites Web autres que celui que vous visitez, souvent utilisés pour le suivi et la publicité.</p>
            </div>
          </li>
        </ul>
        <h5>Simulation : Suivi des Cookies</h5>
        <div className="simulation">
          <button className="link-button" onClick={handleOpen}>Explication du fonctionnement de la simulation</button>
          <form onSubmit={handleUrlSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Entrez l'URL du site"
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                className="styled-input"
                required
              />
              <button type="submit" className="styled-button">Démarrer l'Instance</button>
            </div>
          </form>
          <div className="cookie_button">
            <button onClick={extractCookies} disabled={loading} className="styled-button">
              Terminer
            </button>
          </div>
          {loading && <div className="loader"></div>}
          {error && <p className="error">{error}</p>}
          <p>
            Après avoir visité ces sites, des annonceurs peuvent utiliser ces cookies pour vous suivre et cibler des publicités spécifiques en fonction de vos habitudes de navigation.
          </p>
          <button className="styled-button download-button">Télécharger</button>
        </div>
      </div>
      <div className="cookie-jar">
        <div className="card-content">
          <h5>Cookies Déposés</h5>
          <ul className="cookie-list">
            {cookies.map((cookie, index) => (
              <li key={index}>
                <div className="icon">👁️</div>
                <div className="text">
                  <strong>{cookie.name}</strong>
                  <p>{cookie.value}</p>
                  <p>{cookie.description}</p>
                  <p className="danger-level"><strong>Dangerosité:</strong> {cookie.danger}</p>
                  <p className="danger-level"><strong>Niveau de Traçage:</strong> {cookie.tracking}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cookie-summary">
        <div className="card-content">
          <h5>Résumé des Cookies</h5>
          <ul>
            <li><p><strong>Élevée:</strong> {summary['Élevée']}</p></li>
            <li><p><strong>Moyenne:</strong> {summary['Moyenne']}</p></li>
            <li><p><strong>Faible:</strong> {summary['Faible']}</p></li>
          </ul>
        </div>
      </div>
      {open && (
        <div className="modal">
          <div className="modal-box">
            <h6 id="modal-title">Explication du Fonctionnement de la Simulation</h6>
            <p id="modal-description">
              1. Entrez l'URL du site Web que vous souhaitez analyser dans le champ prévu à cet effet et cliquez sur "Démarrer l'Instance". <br />
              2. Une instance sera démarrée, vous permettant de naviguer sur le site comme d'habitude. Pendant ce temps, les cookies seront collectés. <br />
              3. Une fois que vous avez fini de naviguer, cliquez sur "Terminer" pour extraire et afficher les cookies collectés. <br />
              4. Les cookies seront affichés dans la section "Cookies Déposés" avec des détails sur leur dangerosité et niveau de traçage. <br />
              5. Un résumé des cookies sera également présenté, indiquant le nombre de cookies à danger élevé, moyen et faible.
            </p>
            <button onClick={handleClose} className="styled-button close-button">Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieDangers;

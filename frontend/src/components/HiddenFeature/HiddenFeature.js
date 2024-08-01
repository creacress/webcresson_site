import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MatrixAnimation.scss';
import './HiddenFeature.scss';
import MatrixCanvas from './MatrixCanvas';
import { AuthContext } from '../../context/AuthContext';

const HiddenFeature = () => {
  const { login } = useContext(AuthContext);
  const [activateMatrix, setActivateMatrix] = useState(false);
  const [showSecretDiv, setShowSecretDiv] = useState(false);
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const inputSequenceRef = useRef('');
  const secretDivRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activateMatrix) {
      const timer = setTimeout(() => {
        setActivateMatrix(false);
        login(); // Définir l'utilisateur comme authentifié
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activateMatrix, login]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      inputSequenceRef.current += e.key;
      if (inputSequenceRef.current.includes(secretKey)) {
        setShowSecretDiv(true);
        inputSequenceRef.current = ''; // Réinitialiser la séquence après une correspondance réussie
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [secretKey]);

  useEffect(() => {
    if (showSecretDiv && secretDivRef.current) {
      secretDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showSecretDiv]);

  const handleConfirmation = () => {
    setShowSecretDiv(false); // Masquer la div après la confirmation
    setActivateMatrix(true);

    fetch('http://localhost:5000/grant-access', { method: 'POST', credentials: 'include' })
      .then(response => {
        if (response.ok) {
          setTimeout(() => {
            navigate('/intelligence-section'); // Rediriger vers la section Intelligence après l'animation
          }, 3000); // Délai correspondant à la durée de l'animation Matrix
        } else {
          setTimeout(() => {
            navigate('/'); // Rediriger vers la page d'accueil en cas d'accès refusé
          }, 3000); // Délai correspondant à la durée de l'animation Matrix
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="hidden-feature">
      {activateMatrix && <MatrixCanvas />}
      {showSecretDiv && (
        <div className="secret-content" ref={secretDivRef}>
          <div className="puzzle">
            <h2> .. -.-. .. / -.-. . / -.-. .- -.-. .... . / ..- -. . / .--. .- .-. - .. . </h2>
            <h2>Verification</h2>
            <p>Êtes-vous sûr de vouloir entrer dans mon dark site ?</p>
            <button onClick={handleConfirmation}>Oui</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenFeature;

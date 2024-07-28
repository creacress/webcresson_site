import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MatrixAnimation.scss';
import './IncognitoMode.scss';
import MatrixCanvas from './MatrixCanvas';
import { IncognitoContext } from '../../App';

const HiddenFeature = () => {
  const { setIncognito } = useContext(IncognitoContext);
  const [activateMatrix, setActivateMatrix] = useState(false);
  const [showSecretDiv, setShowSecretDiv] = useState(false);
  const secretKey = 'DGSE';
  const inputSequenceRef = useRef('');
  const secretDivRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activateMatrix) {
      const timer = setTimeout(() => {
        setActivateMatrix(false);
        setIncognito(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activateMatrix, setIncognito]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      inputSequenceRef.current += e.key;
      if (inputSequenceRef.current.includes(secretKey)) {
        setShowSecretDiv(true);
        inputSequenceRef.current = ''; // Reset sequence after successful match
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
    setTimeout(() => {
      navigate('/intelligence-section'); // Rediriger vers la section Intelligence après l'animation
    }, 3000); // Délai correspondant à la durée de l'animation Matrix
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

import React, { useEffect } from 'react';
import './animations.scss'; // Import des styles globaux

const PageWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll en haut de la page lors de l'arrivée
  }, []);

  return <div className="page-enter">{children}</div>;
};

export default PageWrapper;

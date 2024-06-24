import React from 'react';
import './Trusted.scss';
import LogoPoste from "../../assets/logo_poste.webp"

const Trusted = () => {
  const companies = [
    { name: 'La Poste', logo: LogoPoste}
    // Ajoute plus d'entreprises si nécessaire
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-hero">
        <h2>Ils me font confiance</h2>
        <p>
          J'ai eu le plaisir de travailler avec de nombreuses entreprises pour automatiser leurs processus métiers et améliorer leur efficacité.
        </p>
      </div>
      <div className="companies">
        <ul>
          {companies.map((company, index) => (
            <li key={index}>
              <img src={company.logo} alt={`Logo de ${company.name}`} />
              <span>{company.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Trusted;

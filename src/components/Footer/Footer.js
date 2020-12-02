import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="escuela">
        <div className="logos-cetis">
          <img
            src="/logoCetis.svg"
            alt="Logo Cetis"
            className="cetis-logo-footer"
          />
        </div>
        <div className="info-cetis-footer">
          <h4>CETIS 30</h4>
          <h5>
            {' '}
            Centro de Estudios Tecnológicos industrial y de servicios No. 30
            "Emiliano Zapata"
          </h5>
          <h6>
            Unidad de Educación Media Superior Tecnológica Industrial y de
            Servicios
          </h6>
          <a href="/aviso.pdf" target="_blank" rel="noreferrer">
            Aviso de privacidad
          </a>
        </div>
      </div>
      <div className="desarrollador">
        <div className="info-desarrollo">
          <h4>Desarolló Z - 3</h4>
          <h5>
            Negtune Services<small> &copy;</small>
          </h5>
          <p>Equipo 5</p>
        </div>
        <img
          src="/ElMariachi.svg"
          alt="Desarrollador Logo"
          className="mariachi-logo-footer"
        />
      </div>
    </footer>
  );
};

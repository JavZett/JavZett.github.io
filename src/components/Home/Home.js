import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import './Home.css';
import { Mapa } from './Mapa';

export const Home = () => {
  return (
    <>
      <a
        href="https://www.facebook.com/dgeticetis030"
        data-tip
        data-for="cetis30-facebook"
        rel="noreferrer"
        target="_blank"
        className="a-facebook"
      >
        <FaFacebook className="cetis-facebook" />
      </a>
      <ReactTooltip
        id="cetis30-facebook"
        place="top"
        type="info"
        effect="float"
      >
        Siguenos en facebook
      </ReactTooltip>
      <section className="banner-cetis-30 animate__animated  animate__fadeIn">
        <div className="banner-img">
          <img
            src="/banner-cetis-30.svg"
            alt="Cetis-30 banner"
            className="cetis-banner"
          />
        </div>
        <div className="banner-titulo">
          <h3>Bienvenido a tu nuevo portal</h3>
          <p>
            Decidimos mejorar nuestro portal web para una mejor experiencia de
            usario.
          </p>
        </div>
      </section>
      <section className="info-cetis animate__animated  animate__fadeIn">
        <div className="educacion-cetis">
          <h3>Nuestro nivel educativo</h3>
          <p>
            Ocupamos el tercer lugar en educaión a nivel nacional y segundo
            lugar de todos los Cetis.
          </p>
        </div>
        <div className="educacion-img">
          <img
            src="/educacion.svg"
            alt="nivel-educativo cetis-educaion"
            className="cetis-banner"
          />
        </div>
      </section>
      <section className="cetis-mapa-direccion">
        <h3>Localízanos fácilmente</h3>
        <Mapa />
      </section>
    </>
  );
};

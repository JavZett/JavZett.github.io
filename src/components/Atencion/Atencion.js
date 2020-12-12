import React from 'react';
import 'animate.css';
import './Atencion.css';
import { Helmet } from 'react-helmet';
import { Docentes } from './Docentes';
import { Quejas } from './Quejas';

export const Atencion = () => {
  return (
    <div className="atencion-cetis animate__animated  animate__fadeIn">
      <Helmet>
        <title>CETIS 30 | Atención</title>
      </Helmet>
      <div className="atencion-cetis__info">
        <h2>Bienvenido a la página de atención</h2>
        <p>
          Aqui podrás recibir atención por parte del personal administrativo así
          como consultar infomación acerca del personal docente.
        </p>
      </div>
      <Docentes />
      <Quejas />
    </div>
  );
};

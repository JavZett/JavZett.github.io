import React from 'react';
import 'animate.css';
import './Atencion.css';
import { Docentes } from './Docentes';
import { Quejas } from './Quejas';

export const Atencion = () => {
  return (
    <div className="atencion-cetis animate__animated  animate__fadeIn">
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

import React from 'react';

export const Quejas = () => {
  return (
    <div className="atencion-quejas">
      <h3>¿Tienes alguna queja?</h3>
      <p>
        Haznola saber. Puedes escribir a los siguientes correos{' '}
        <span className="atencion-queja__correo">correo@correo.com</span> o
        bien, puedes contactarnos vía telefónica{' '}
        <span className="atencion-queja__telefono">656532132</span>.
      </p>
    </div>
  );
};

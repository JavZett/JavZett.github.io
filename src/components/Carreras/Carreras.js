import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import './Carreras.css';
import 'animate.css';
import { Imagen } from './Imagen';

export const Carreras = () => {
  const { loading, data } = useFetch(
    'https://api-proyecto-escuela.herokuapp.com/carreras'
  );
  const { carreras } = !!data && data;
  console.log(carreras);

  return (
    <div className="carreras-cetis-30 ">
      <div className="carreras-cetis-30__header animate__animated  animate__fadeIn ">
        <img src="/carreras.svg" alt="Carreras Cetis 30 " />
        <div className="carreras-cetis-30__header-text">
          {' '}
          <h3>Nuestras carreras</h3>
          <p>
            Aquí podrás encontrar las carreras que tenemos disponibles por el
            momento.
          </p>
        </div>
      </div>
      <div className="carreras-cetis-30__grid animate__animated  animate__fadeIn">
        {loading && <div className="cargando">Cargando</div>}
        {!loading &&
          carreras.map((carrera, index) => (
            <div className="carrera" key={carrera._id}>
              <Imagen className="grid-no-imagen-Cetis" />
              <h2 key={index + 1}>{carrera.nombre}</h2>
              <p key={index + 2}>{carrera.descripcion}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

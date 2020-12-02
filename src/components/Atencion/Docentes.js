import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const Docentes = () => {
  const { loading, data } = useFetch(
    'https://api-proyecto-escuela.herokuapp.com/docentes?limite=30'
  );

  const { docentes } = !!data && data;

  return (
    <div className="docentes">
      <h3>Nuestros docentes</h3>
      <div className="docentes-cetis-scroll">
        <table className="docentes-tabla">
          <thead>
            <tr>
              <th className="docente-info orilla-iz docente-cetis-nombre">
                Nombre
              </th>
              <th className="docente-cetis-materias">Asignaturas impartidas</th>
              <th className="docente-info orilla-de docente-cetis-correo">
                Correo electrónico
              </th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="3">Cargando...</td>
              </tr>
            )}
            {!loading &&
              docentes.map((docente, index) => (
                <tr key={index + 3}>
                  <td key={index + 1} className="docente-cetis-nombre">
                    {docente.nombre}
                  </td>
                  <td key={index + 5} className="docente-cetis-materias">
                    {docente.materias}
                  </td>
                  <td key={index + 2} className="docente-cetis-correo">
                    {docente.correo}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

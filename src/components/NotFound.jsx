import React from 'react';
import imageNotFound from '../assets/images/imageNotFound.gif'
const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={imageNotFound} alt="Dragon Ball Z Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <h2>¡Página no encontrada!</h2>
      <p>¡Oh no! Parece que te has aventurado a un lugar desconocido. ¿Estás seguro de que no te teletransportaste a otro planeta?</p>
      <p>Vuelve a la Tierra y sigue explorando.</p>
    </div>
  );
}

export default NotFound;

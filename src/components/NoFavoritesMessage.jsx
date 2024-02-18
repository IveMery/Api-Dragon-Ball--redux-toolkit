import React from 'react';
import { Alert } from 'react-bootstrap';

const NoFavoritesMessage = () => {
  return (
    <Alert variant="info" className="text-center mt-3">
      Aún no has agregado ningún personaje a favoritos.
    </Alert>
  );
};

export default NoFavoritesMessage;

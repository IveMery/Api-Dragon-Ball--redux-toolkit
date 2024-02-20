import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites, setDeleteFavorites, openModal } from '../redux/charactersSlice';
import { truncate } from '../constants';
import { decrement, increment } from '../redux/counterSlice';

const Characters = ({ character, fav }) => {
  const { id, name, description, image, ki } = character;;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.characters.favorites);
  const isFavorite = favorites.some(char => char.id === id);
  const [added, setAdded] = useState(isFavorite);
  const isModalOpen = useSelector(state => state.characters.isModalOpen);

  const handleAddToFavorites = () => {
    dispatch(setFavorites(character));
    dispatch(increment());
    setAdded(true);
  };

  const handleDeleteFavorite = () => {
    dispatch(setDeleteFavorites(character));
    dispatch(decrement());
  };

  const handleModal = () => {
    dispatch(openModal(character))
    console.log("hice click para abrir el modal", isModalOpen);
    console.log("hice click en el character: ", character);
  }

  return (
    <Card style={{ width: '19rem', height: '30rem' }} className='m-2 d-flex flex-column justify-content-between'>
      <Card.Img style={{ width: '100%', height: '50%', objectFit: 'cover', objectPosition: 'top' }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {truncate(description, 100)}
        </Card.Text>
        {fav ? (
          <Button onClick={handleDeleteFavorite} variant="danger">Eliminar de favoritos</Button>
        ) : (
          <Button onClick={handleAddToFavorites} variant="danger" disabled={added}>Agregar a favoritos</Button>
        )}

       {!fav && <Button className='mx-1' onClick={handleModal}>Ver Mas</Button>}

      </Card.Body>
    </Card>
  );
};

export default Characters;

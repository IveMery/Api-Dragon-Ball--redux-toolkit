import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Characters from '../components/Characters';
import NoFavoritesMessage from '../components/NoFavoritesMessage';

const FavoriteCharacters = () => {
    const [fav, setFav] = useState(true)
    const favorites = useSelector(state => state.characters.favorites)

    return (
        <div>
            <h2 className='text-center'>Favorite Characters</h2>
            {
                favorites.length > 0 ?

                    <div className='d-flex justify-content-center flex-wrap'>
                        {
                            favorites.map(character => (
                                <Characters key={character.id} character={character} fav={fav} />
                            ))
                        }

                    </div> : <NoFavoritesMessage />}
        </div>
    )
}

export default FavoriteCharacters
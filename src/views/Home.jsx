import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../redux'
import Characters from '../components/Characters'
import { setCurrentPage } from '../redux'
import PageNavigation from '../components/PageNavigation'
import Loader from '../components/Loader'
import CharacterDetailsModal from '../components/CharactersDetailsModal'

const Home = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.list)
    const isLoading = useSelector(state => state.characters.isLoading)
    const error = useSelector(state => state.characters.error)
    const currentPage = useSelector(state => state.pagination.currentPage)
    const totalPage = useSelector(state => state.pagination.totalPage)
    const isModalOpen = useSelector(state => state.characters.isModalOpen);

    const onPageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPage) {
            dispatch(setCurrentPage(newPage));
        }
    };

    useEffect(() => {
        dispatch(getCharacters(currentPage))
    }, [currentPage, dispatch])

    return (
        <>
            <div>
                <h1>Dragon Ball Legends</h1>
            </div>
            <div>
                {isLoading && <Loader />}
                {error && <p>Error:{error}</p>}
                {!isLoading && !error && (
                    <div className='d-flex justify-content-center flex-wrap'>
                        {characters.items?.map(character => (
                            <Characters key={character.id} character={character} />

                        ))}
                    </div>
                )}
            </div>

            <PageNavigation currentPage={currentPage} onPageChange={onPageChange} totalPage={totalPage} />
            {isModalOpen && <CharacterDetailsModal />}
        </>
    )
}

export default Home
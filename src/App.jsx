import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import FavoriteCharacters from './views/FavoriteCharacters'
import Nabvar from './components/Nabvar'
import NotFound from './components/NotFound'

const App = () => {

  return (
    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavoriteCharacters' element={<FavoriteCharacters />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

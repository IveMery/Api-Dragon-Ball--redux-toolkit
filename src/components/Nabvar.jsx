import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nabvar = () => {
    const counter = useSelector(state => state.counter)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/'>INICIO</Link>
                </div>
                <div className="navbar-nav">
                    <Link to='/FavoriteCharacters' className="nav-item nav-link" href="#">FAVORITOS {counter}</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nabvar
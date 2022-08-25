import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to='/'> 
                <img src='./extrusor.png' width='50' alt='logo maxirest'/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to= '/paginas/'>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to= '/#'>Nueva Carga</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to= '/#'>Archivo</Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <CartWidget/>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
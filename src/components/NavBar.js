import React from "react";

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand title"  href="#"> TANKY SOLUCIONES  </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">INICIO</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PARTNERS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TIENDA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;
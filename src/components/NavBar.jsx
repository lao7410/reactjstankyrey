import React from "react";

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-bar">
                <li className="logo">
                    <a href="/" className="nav-link">
                        <span className="link-text logo-text">TANKY SOLUCIONES</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fa-solid fa-house" />
                        <span className="link-text">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/Nosotros" className="nav-link">
                        <i className="fa-solid fa-building" />
                        <span className="link-text">Nosotros</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/Servicios" className="nav-link">
                        <i className="fa-solid fa-cloud" />
                        <span className="link-text">Servicios</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/Contacto" className="nav-link">
                        <i className="fa-solid fa-address-book" />
                        <span className="link-text">Contacto</span>
                    </a>
                </li>
                
                <li className="nav-item">
                    <a href="/tienda" className="nav-link">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span className="link-text">Tienda</span>
                        
                    </a>
                </li>
                
            </ul>
        </div>
    );
};

export default NavBar;

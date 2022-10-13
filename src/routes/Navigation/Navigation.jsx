import React from "react";
import { Link, Outlet } from "react-router-dom";
import imgLogo from '../../assets/Bootstrap_logo.svg.png';
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={imgLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Bootstrap
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <div className="navbar-text p-2">
                        <Link className="nav-link" to="/clima/create">Nueva Ubicación</Link>
                    </div>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </form>            
                </div>
            </div>
        </nav>

        <Outlet/>

    </>
  );
};

export default Navigation;

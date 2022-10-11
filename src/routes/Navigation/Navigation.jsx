import React from "react";
import { Link, Outlet } from "react-router-dom";
import imgLogo from '../../assets/Bootstrap_logo.svg.png';
import "./Navigation.css";

const Navigation = () => {
  return (
    <div >

        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={imgLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                Bootstrap
            </a>
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
                <a className="nav-link" href="#">Nueva Ubicación</a>
            </div>
            <form class="d-flex" role="search">
                <button class="btn btn-outline-success" type="submit">Login</button>
            </form>
            
            </div>
        </div>
        </nav>

        <Outlet/>

    </div>
  );
};

export default Navigation;

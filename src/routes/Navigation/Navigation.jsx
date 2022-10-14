import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import imgLogo from '../../assets/Bootstrap_logo.svg.png';
import { UserContext } from "../../context/UserContext";
import "./Navigation.css";

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);    

    useEffect(() => {
      const userStored = localStorage.getItem('currentUser')
      console.log({userStored})
      if (userStored) {
        setCurrentUser(JSON.parse(userStored))
      }
    }, [])
  
    const handleSignOut = () => {       
        localStorage.setItem('currentUser', null) 
        setCurrentUser(null);
    };

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

                    { (currentUser) && (
                            <div className="navbar-text p-2">
                                <Link className="nav-link" to="/clima/create">Nueva Ubicación</Link>
                            </div>
                        )
                    }
                    
                    {currentUser ? (
                        <span className='btn btn-outline-danger' onClick={handleSignOut}>
                        Cerrar Sesión
                        </span>
                    ) : (
                        <Link className='btn btn-outline-success' to='/login'>
                        Iniciar Sesión
                        </Link>
                    )}            
                </div>
            </div>
        </nav>

        <Outlet/>

    </>
  );
};

export default Navigation;

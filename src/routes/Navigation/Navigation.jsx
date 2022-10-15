import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Navigation.css";
import { WiDayCloudyWindy } from "react-icons/wi";
import { FaUserAlt } from "react-icons/fa";

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);    

    useEffect(() => {
      const userStored = localStorage.getItem('currentUser')
      if (userStored) {
        setCurrentUser(JSON.parse(userStored))
      }
    },[])
  
    const handleSignOut = () => {       
        localStorage.setItem('currentUser', null) 
        setCurrentUser(null);
    };

  return (
    <>
    <div className="container mt-2 shadow mb-4 rounded">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand mb-2" to="/">
                    <i className="icon-climapp"><WiDayCloudyWindy /></i>
                    ClimaApp
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        { (currentUser) && (
                            <div >
                                <Link className="btn btn-outline-primary" to="/clima/create">Nueva Ubicación</Link>
                            </div>
                        )
                    }
                        </li>
                    </ul>

                    { (currentUser) && (
                            <div>
                                <FaUserAlt/>
                                <span className="mx-2">{currentUser.username}</span>
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
        </div>
        <Outlet/>

    </>
  );
};

export default Navigation;

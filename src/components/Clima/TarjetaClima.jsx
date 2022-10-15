import React, { useContext } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { WiDaySunny, WiCloud } from "react-icons/wi";
import { ClimaContext } from '../../context/ClimaContext';
import { UserContext } from '../../context/UserContext';
import './TarjetaClima.css';

const TarjetaClima = ({clima}) => {

    const { climas, setClimas } = useContext(ClimaContext);
    const { id, name, latitude, longitude, temperature, windspeed, time, weathercode } = clima
    const fecha = new Date(time);
    const { currentUser } = useContext(UserContext);    
    
    const handleDeleteClima = () => {
    
        setClimas(
          climas.filter((card) => card.id !== id )
        );        
      }

    return (
        <>
        <div className='col'>
            <div className="card border-0 shadow-lg p-3 mb-5 bg-body rounded efectoHover" >
            <div className="card-body">
                <div className='card-text'>
                    <div className='card-top'>
                        <h5 className="card-title">{name}</h5>
                        {(currentUser)&&(
                                <div className='fav'  onClick={handleDeleteClima}>
                                    <FaTrashAlt />
                                </div>
                            )
                        }
                    </div>
                    <p className='card-time'>{fecha.toLocaleString()}</p>
                    { weathercode === 3 ? (
                        <WiDaySunny className='weather-icon wisunny'/>
                    ) : (
                        <WiCloud className='weather-icon wicloud'/>
                    )}
                    
                    <p className='card-temp'>{temperature} °C</p>
                    <div className='row'>
                        <div className='col card-description'>
                            <p className='mb-2 name-atribute'>Latitud</p>
                            <p className='mb-2'>{latitude}</p>
                        </div>
                        <div className='col card-description'>
                            <p className='mb-2 name-atribute'>Longitud</p>
                            <p className='mb-2'>{longitude}</p>
                        </div>
                        <div className='col card-description'>
                            <p className='mb-2 name-atribute'>Viento</p>
                            <p className='mb-2'>{windspeed} km/h</p>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default TarjetaClima;

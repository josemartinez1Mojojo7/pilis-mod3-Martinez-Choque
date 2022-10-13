import React from 'react';
import './TarjetaClima.css';

const TarjetaClima = ({clima}) => {
    const { name, latitude, longitude, url, temperature, windspeed } = clima
    return (
        <>
        <div className='col'>
            <div className="card" >
            <img src={url} className="card-img-top" alt="foto"></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <br/>
                <h6 className="card-subtitle mb-2 text-muted">Latitude: {latitude}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Longitude: {longitude}</h6>
                <br/>
                <p className="card-text">Temp: {temperature} °C</p>
                <p className="card-text">V/Viento: {windspeed} km/h</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
            </div>
        </div>
        </>
    );
}

export default TarjetaClima;

import React from 'react';
import TarjetaClima from './TarjetaClima';
import './tarjetasClima.css';

const TarjetasClima = ({list}) => {
    return (
        <>
            <div className='container '>
            <div className='row p-4 row-cols-2 g-2 g-lg-3'>
            
                {list.map((clima) => (
                    <TarjetaClima key={clima.id} clima={clima} />
                ))}
            
            </div>
            </div>
            
        </>
    );
}

export default TarjetasClima;

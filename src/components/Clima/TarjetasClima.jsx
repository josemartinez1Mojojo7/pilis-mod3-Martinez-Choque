import React from 'react';
import TarjetaClima from './TarjetaClima';
import './tarjetasClima.css';

const TarjetasClima = ({list}) => {
    return (
        <>
            <div className='container '>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    list.length === 0 ? (
                        <span className='mb-4'>No hay ubicaciones para mostrar...</span>
                    ):(
                        list.map((clima) => (
                            <TarjetaClima key={clima.id} clima={clima} />
                        ))
                    )
                }
            </div>
            </div>
            
        </>
    );
}

export default TarjetasClima;

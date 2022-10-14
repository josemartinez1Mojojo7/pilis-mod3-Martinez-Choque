import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ClimaContext } from '../../context/ClimaContext';
import { getClima } from '../../service';
import './TarjetaClimaCreation.css';

const TarjetaClimaCreation = () => {

    const {climas, setClimas, id, setId} = useContext(ClimaContext);
    const {register,handleSubmit,formState: { errors },} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {

        const climaNew = {
            id: id,
            name: data.nombreUbicacion,
            latitude: data.latitud,
            longitude: data.longitud,            
            temperature:null,
            windspeed:null,
            time: new Date(),
            weathercode:null
        }
        getClima(data.latitud,data.longitud).then((climaData) => {
            console.log(climaData)
            climaNew.temperature=climaData.current_weather.temperature;
            climaNew.windspeed=climaData.current_weather.windspeed;
            climaNew.weathercode=climaData.current_weather.weathercode;
            
            setClimas([...climas, climaNew])
            setId(id+1);

            navigate('/')
        }).catch((err) => console.log(err));    
    }

    return (
        <>
           <div className='container '>
            <div className='row p-4'>
            <div className='col'>
            <div className="card" >
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="nombre" placeholder='Nombre de Ubicación'
                                {...register('nombreUbicacion', {
                                    required: 'Debe ingresar un nombre de ubicación',
                                })}                                
                            />
                            <p>{errors.nombreUbicacion?.message}</p>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="latitud" placeholder='Latitud'
                                {...register('latitud', {
                                    required: 'Debe ingresar una latitud',
                                })}
                            />
                            <p>{errors.latitud?.message}</p>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="longitud" placeholder='Longitud'
                                {...register('longitud', {
                                    required: 'Debe ingresar una longitud',
                                })}
                            />
                            <p>{errors.longitud?.message}</p>
                        </div>
                        <button type="submit" className="btn btn-primary">Crear Tarjeta de Clima</button>
                    </form>
                 </div>
             </div>             
             </div>
             </div>
            </div>
        </>
    );
}

export default TarjetaClimaCreation;

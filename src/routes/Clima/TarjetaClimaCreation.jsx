import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getClima } from '../../service';
import './TarjetaClimaCreation.css';

const TarjetaClimaCreation = () => {

    const {register,handleSubmit,formState: { errors },} = useForm();
    const navigate = useNavigate();
    var list=[];
    const onSubmit = (data) => {
        console.log("Form "+data.nombreUbicacion);
        const climaStored = localStorage.getItem('tarjetasClima')
        console.log("LocalStored "+JSON.parse(climaStored))
        if (climaStored) {
            list=JSON.parse(climaStored);
        }
        const climaNew = {
            id: list.length + 1,
            name: data.nombreUbicacion,
            latitude: data.latitud,
            longitude: data.longitud,
            url: data.img,
            temperature:null,
            windspeed:null
        }
        getClima(data.latitud,data.longitud).then((climaData) => {
            climaNew.temperature=climaData.current_weather.temperature;
            climaNew.windspeed=climaData.current_weather.windspeed;
            list.push(climaNew);
            localStorage.setItem("tarjetasClima", JSON.stringify(list));
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
                        <div className="mb-3">
                            <input type="text" className="form-control" id="img" placeholder='Url de una imagen'
                                {...register('img', {
                                    required: 'Debe ingresar una url de una imagen',
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

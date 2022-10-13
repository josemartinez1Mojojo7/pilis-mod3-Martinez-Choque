import React, { useEffect, useState } from 'react';
import TarjetasClima from '../../components/Clima/TarjetasClima';
import './Home.css';

const Home = () => {

    const [listClima, setListClima] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("tarjetasClima");
        if (data) {
          setListClima(JSON.parse(data));
        }
    }, []);

    return (
        <div >
            <div className='container'>
                <h1>Home</h1>
                <TarjetasClima list={listClima}/>
            </div>
        </div>
    );
}

export default Home;

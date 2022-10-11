import React from 'react';
import TarjetasClima from '../../components/Clima/TarjetasClima';
import './Home.css';

const Home = () => {
    return (
        <div >
            <div className='container'>
                <h1>Home</h1>
                <TarjetasClima/>
            </div>
        </div>
    );
}

export default Home;

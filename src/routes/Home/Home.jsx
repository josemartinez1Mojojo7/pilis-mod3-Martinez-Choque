import { useContext } from 'react';
import TarjetasClima from '../../components/Clima/TarjetasClima';
import { ClimaContext } from '../../context/ClimaContext';
import './Home.css';

const Home = () => {

    const {climas} = useContext(ClimaContext)    
        
    return (
        <div >
            <div className='container'>
                <h1>Ciudades</h1>
                <TarjetasClima list={climas}/>
            </div>
        </div>
    );
}

export default Home;

import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

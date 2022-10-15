import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import TarjetaClimaCreation from "./routes/Clima/TarjetaClimaCreation";
import Login from "./routes/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="clima/create" element={<TarjetaClimaCreation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

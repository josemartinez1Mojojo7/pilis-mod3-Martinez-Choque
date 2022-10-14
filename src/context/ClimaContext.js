import { createContext, useState, useEffect } from "react";

function getInitialStateClima() {
  const climas = localStorage.getItem("tarjetasClima");
  return climas ? JSON.parse(climas) : [];
}

function getInitialStateId() {
  const id = localStorage.getItem("idCard");
  return id ? JSON.parse(id) : 1;
}

export const ClimaContext = createContext({
  climas: [],
  setClimas: () => {},
  id: 1,
  setId: () => {},
});

export const ClimaProvider = ({ children }) => {
  const [climas, setClimas] = useState(getInitialStateClima);
  const [id, setId] = useState(getInitialStateId);
  const value = { climas, setClimas, id, setId };

  useEffect(() => {
    localStorage.setItem("tarjetasClima", JSON.stringify(climas));
    localStorage.setItem("idCard", JSON.stringify(id));
  }, [climas]);

  return (
    <ClimaContext.Provider value={value}>{children}</ClimaContext.Provider>
  );
};

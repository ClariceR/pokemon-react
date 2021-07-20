// import './App.css';
import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
    setPokemon(res.data.results.map(p => p.name)) 
  })
  }, [])
  
  return (
    <PokeList pokemon={pokemon}/>
  );
}

export default App;

import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch'

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch name="John" numberOfPokemons={5}/>
    </div>
  );
}

export default App;

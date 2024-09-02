import React, { useState, useEffect } from "react";
import "./App.css";

const PokemonCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error:", error));
  }, [url]);

  if (!pokemon) {
    return <div className="card">Loading...</div>;
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={pokemon.sprites.front_default} alt={name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.types[0].type.name}</p>
      <div>
        <h3>Attacks:</h3>
        <ul>
          {pokemon.moves.slice(0, 3).map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PaginationComponent = ({ pageCount, onPageChange, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <button onClick={() => onPageChange(0)} disabled={currentPage === 0}>
        First
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number - 1)}
          className={`page-item ${currentPage === number - 1 ? "active" : ""}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(pageCount - 1)}
        disabled={currentPage === pageCount - 1}
      >
        Last
      </button>
    </div>
  );
};

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pokemonsPerPage = 10;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Error:", error));
  }, []);

  const lastPokemon = (currentPage + 1) * pokemonsPerPage;
  const firstPokemon = lastPokemon - pokemonsPerPage;
  const currentPokemon = pokemons.slice(firstPokemon, lastPokemon);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app">
      <h1>Pokemon App</h1>
      <div className="pokemoninfo">
        {currentPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
      <PaginationComponent
        pageCount={pokemons.length / pokemonsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;

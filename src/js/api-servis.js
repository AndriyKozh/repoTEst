const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemonId(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response => {
    return response.json();
  });
}

export default { fetchPokemonId };

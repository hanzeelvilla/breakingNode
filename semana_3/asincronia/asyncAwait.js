async function buscarPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/snorlax"
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

buscarPokemon();
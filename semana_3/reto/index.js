async function buscarPokemon(pokemon) {
	const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon; 
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	}
	catch (err) {
		console.error("Error al buscar el Pokémon:", err.message);
    return null;
	}
};

const argumentos = process.argv;
if (argumentos.length < 3){
	console.log("Debes ingresar el nombre de un pokemon 👻");
	process.exit(1);
}
else if (argumentos.length > 3) {
	console.log("Nombras un pokemon pa 🤡");
	process.exit(1);
}
else {
	const pokemon = process.argv[2];
	const pokemonData = await buscarPokemon(pokemon);
	if (pokemonData) {
		const pokemonTable = {
			nombre: pokemonData.name,
			altura: pokemonData.height,
			peso: pokemonData.weight,
			habilidades: pokemonData.abilities.map(ability => ability.ability.name).join(", "),
			tipos: pokemonData.types.map(type => type.type.name).join(", ")
		}
		console.table(pokemonTable);
	}
}
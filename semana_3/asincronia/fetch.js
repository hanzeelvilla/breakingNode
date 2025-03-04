const url = "https://pokeapi.co/api/v2/pokemon/snorlax"

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) 

// data.abilities[2].is_hidden
// data.heigth
// data.stats[5].base_stat
// data.weight
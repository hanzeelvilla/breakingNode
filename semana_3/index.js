const url = 'https://pokeapi.co/api/v2/pokemon/gengar';

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
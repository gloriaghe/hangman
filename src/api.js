import axios from "axios";

const api = async (apiChoice) => {

    let apiInput    = '';
    let apiPokemon  = 'https://pokeapi.co/api/v2/pokemon/';
    let apiStarWars = 'https://swapi.dev/api/people/';
    const randomNum = Math.floor(Math.random() * 83);

    if (apiChoice == 'Pokemon'){
        apiInput = apiPokemon
    } else if (apiChoice == 'Star Wars'){
        apiInput = apiStarWars
    } else {
        alert('Seleziona Pokemon o Star Wars')
    }

    let data = await axios.get(apiInput + randomNum);
    console.log(data)
    
    return data;
};

export {
    api
};

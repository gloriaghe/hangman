import axios from "axios";

const getWord = async (apiChoice) => {

    let apiInput    = '';
    const apiPokemon  = 'https://pokeapi.co/api/v2/pokemon/';
    const apiStarWars = 'https://swapi.dev/api/people/';
    const randomNum = Math.floor(Math.random() * 83);

    if (apiChoice === 'Pokemon'){
        apiInput = apiPokemon
    } else if (apiChoice === 'Star Wars'){
        apiInput = apiStarWars
    } 

    let data = await axios.get(apiInput + randomNum);
    console.log(data);
    
    return data;
};

export {
    getWord
};

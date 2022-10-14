import axios from "axios";

export default function api (apiChoice) {

    let apiInput    = '';
    let apiPokemon  = 'https://pokeapi.co/api/v2/pokemon/';
    let apiStarWars = 'https://swapi.dev/api/people/';
    const randomNum = Math.floor(Math.random() * 83);

    var responses = '';

            if (apiChoice == 'Pokemon'){
                apiInput = apiPokemon
            } else if (apiChoice == 'Star Wars'){
                apiInput = apiStarWars
            } else {
                alert('seleziona Pokemon o Star Wars')
                return console.log('errore')
            }

            axios.get(apiInput + randomNum)
            .then((response) => {
                response.data.name;
                console.log( 'name: ' + response.data.name);
                responses = response.data.name;
            })
                // segnala errori api
            .catch((error) => {
                console.log("Errore", error);
            })

            return responses;
}

export {
    api
}
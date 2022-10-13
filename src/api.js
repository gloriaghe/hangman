import axios from "axios";

export default function api (apiChoice, responses) {

    let apiInput    = '';
    let apiPokemon  = 'https://pokeapi.co/api/v2/pokemon/';
    let apiStarWars = 'https://swapi.dev/api/people/';
    const randomNum = Math.floor(Math.random() * 83);

            if(apiChoice == 'Pokemon'){
                apiInput = apiPokemon
            }else if(apiChoice == 'Star Wars'){
                apiInput = apiStarWars
            } else {
                alert('seleziona Pokemon o Star Wars')
                return console.log('errore')
            }

             axios.get(apiInput + randomNum)
                .then((response) => {
                    responses = response.data.name
                  return responses
                // nameForGame = result.data.name;
                // return result.data.name;
                
            })
            //segnala errori api
            .catch((error) => {
                console.log("Errore", error);
            })
            
}


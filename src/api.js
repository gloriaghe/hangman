import axios from "axios";

let transformArray  = [];
let apiChoice = ''
let api = (apiChoice, transformArray) => {
    console.log('qui'+apiChoice);

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
                .then((result) => {

                const wordResult = result.data;
                console.log(wordResult.name);
                arrToString(wordResult.name, transformArray);

                })
                    //segnala errori api
                .catch((error) => {
                    console.log("Errore", error);
                })
            
};

const arrToString = (nome, transformArray) => {
    const name = nome.trim().toUpperCase();
        transformArray = name.split("");
        transformArray.forEach((element, i) => {
            if(element == " "){
                transformArray.splice(i, 1)                    
            }
            if(element == "-"){
                transformArray.splice(i, 1)                    
            }
        });
        // //emit to App.vue
        // this.$emit('start', this.transformArray);
}

export default api(apiChoice, transformArray);
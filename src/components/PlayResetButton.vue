<template>
    <div class="text-center">
        <button id="btn-start" @click="startButton()" class="btn btn-outline-primary my-4 mx-3">START</button>
        <button id="reset" @click="resetButton" class="btn btn-outline-danger my-4">RESET</button>
        <h4>{{loading}}</h4>
        <h2 class="message">{{result}}</h2>
        <h2 class="message">{{scoreTotal}}</h2>
        <h2 class="message">{{errors}}</h2>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "PlayResetButton",
    props: {
        arrayPoint: Array,
        api: String
    },
    data() {
        return{
            transformArray: [],
            loading: "",
            apiPokemon: 'https://pokeapi.co/api/v2/pokemon/',
            apiStarWars: 'https://swapi.dev/api/people/'
        }
    },
    computed: {
        strike: function(){
            return this.arrayPoint[0]
        },   
        result: function(){
            return this.arrayPoint[1] 
        },
        errors: function(){
            return this.arrayPoint[2]
        },
        score: function(){
            return this.arrayPoint[3]
        },
        scoreTotal: function(){
            return this.arrayPoint[4]
        },
       
    },
    methods: {
        //function string to name
        arrToString(nome){
            const name = nome.trim().toUpperCase();
                this.transformArray = name.split("");
                this.transformArray.forEach((element, i) => {
                    if(element == " "){
                        this.transformArray.splice(i, 1)                    
                    }
                    if(element == "-"){
                        this.transformArray.splice(i, 1)                    
                    }
                });
                //emit to App.vue
                this.$emit('start', this.transformArray);
        },
        startButton(){
            this.transformArray = [];

            const randomNum = Math.floor(Math.random() * 83);

            let apiInput = '';

            if(this.api == 'Pokemon'){
                apiInput = this.apiPokemon
            }else if(this.api == 'Star Wars'){
                apiInput = this.apiStarWars
            } else {
                alert('seleziona Pokemon o Star Wars')
                return console.log('errore')
            }

            axios.get(apiInput + randomNum)
                .then((result) => {

                const wordResult = result.data;
                console.log(wordResult.name);
                this.arrToString(wordResult.name);

                })
                    //segnala errori api
                .catch((error) => {
                    console.log("Errore", error);
                })
            
            this.loading= "Loading...";

            setTimeout(this.noneButton, 4000)

            const start = document.getElementById('btn-start');
            start.disabled= true;
        },
        noneButton(){
            const noneButton = document.getElementById('containerButton');
            noneButton.classList.remove('d-none');
            noneButton.classList.add('d-flex');
            this.loading= "";
        },
        resetButton(){
            const start = document.getElementById('btn-start');
            const lettera = document.querySelectorAll('.letter');
            const noneButton = document.getElementById('containerButton');
            document.querySelectorAll('.message').forEach(element => {
                element.classList.add('d-none')
            });
     

            start.disabled= false;
            lettera.forEach((element) => {
            element.disabled = false
            });
            this.transformArray = [];
            noneButton.classList.add('d-none');
        }
    }
}
</script>

<style lang="scss">

</style>
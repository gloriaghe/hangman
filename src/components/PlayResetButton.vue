<template>
    <div class="text-center">
        <button id="btn-start" @click="startButton()" class="btn btn-outline-primary my-4 mx-3">START</button>
        <button id="reset" @click="resetButton" class="btn btn-outline-danger my-4">RESET</button>
        <h4>{{loading}}</h4>
        <h2>{{result}}</h2>
        <h2>{{errors}}</h2>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "PlayResetButton",
    props: {
        arrayPoint: Array,
    },
    data() {
        return{
            transformArray: [],
            score: 0,
            strike: 0,
            result: "", 
            errors: "",
            loading: "",
        }
    },
    computed: {
          function2(){
            this.function()
            return console.log('cazzo')
            //   this.strike = this.arrayPoint[0];
            //   this.result = this.arrayPoint[1]; 
            //   this.errors = this.arrayPoint[2];
            //   this.score  = this.arrayPoint[3];
          }
            //  if(this.arrayPoint == []){
            //     console.log('uguale'+ this.arrayPoint)
                
            // } else  {
            //     console.log('diverso'+ this.arrayPoint)
                // }
         
    },
    methods: {
        function(){
            console.log(this.arrayPoint+ 'hello')
        },
        startButton(){
            const randomNum = Math.floor(Math.random() * 83);
                // TODO:api diverse? (MENù A TENDINA)
            axios.get('https://swapi.dev/api/people/'+ randomNum)
                .then((result) => {

                // TODO:separare codice
                const wordResult = result.data;
                console.log(wordResult.name);
                const name = wordResult.name.trim().toUpperCase();
                this.transformArray = name.split("");
                this.transformArray.forEach((element, i) => {
                    if(element == " "){
                        this.transformArray.splice(i, 1)                    
                    }
                    if(element == "-"){
                        this.transformArray.splice(i, 1)                    
                    }
                });
                console.log(this.transformArray);
                this.$emit('start', this.transformArray);

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

            start.disabled= false;
            lettera.forEach((element) => {
            element.disabled = false
            });
            this.result= '';
            this.errors= '';
            this.score = 0;
            this.strike = 0;
            this.transformArray = [];
            noneButton.classList.add('d-none');
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="text-center">
        <button id="btn-start" :disabled="btDisabled" @click="startButton()" class="btn btn-outline-primary my-4 mx-3">START</button>
        <button id="reset" @click="resetButton" class="btn btn-outline-danger my-4">RESET</button>
        <h4>{{loading}}</h4>
        <div :class="reset? 'd-none' : ''" v-if="resetButtonComponent? !reset: reset">
            <h2>{{scoreTotal}}</h2>
            <h2>{{errors}}</h2>
        </div>
        <div v-else>            
            <h2>{{result}}</h2>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
import { api } from "../api.js";

export default {
    name: "PlayResetButton",
    props: {
        arrayPoint: Array,
        apiChose: String
    },
    data() {
        return{
            transformArray: [],
            loading: "",
            reset: false,
            btDisabled: false,
            noneButton0o1: false,
            nameForGame: '',
        }
    },
    computed: {
        strike: function(){
            return this.arrayPoint[0];
        },   
        result: function(){
            if(this.arrayPoint[1] != '' && this.arrayPoint[5] != 1 && this.arrayPoint[5] != undefined){
                alert(this.arrayPoint[1])
            } 
            return '';
        },
        errors: function(){
            return this.arrayPoint[2];
        },
        score: function(){
            return this.arrayPoint[3];
        },
        scoreTotal: function(){
            return this.arrayPoint[4];
        },
        resetButtonComponent: function(){
            return this.arrayPoint[5];
        },

    },
    methods: {
        // function string to name
        arrToString(nameGame){
            const name = nameGame.trim().toUpperCase();
                this.transformArray = name.split("");
                this.transformArray.forEach((element, i) => {
                    if(element == " "){
                        this.transformArray.splice(i, 1)                    
                    }
                    if(element == "-"){
                        this.transformArray.splice(i, 1)                    
                    }
                });
                // emit to App.vue
                this.$emit('start', this.transformArray);
        },
        startButton(){
            console.log(this.result)
            this.result = '';
            console.log(this.result)

            // display none on message
            this.reset = false;
            this.transformArray = [];
            console.log(api(this.apiChose))
            // api(this.apiChose).then(response => {
            //     this.nameForGame = response;
            //     console.log(response)
                
            // });
            this.arrToString(this.nameForGame);
            // console.log( api(this.apiChose, prova).then(result => this.nameForGame = result))
            
            this.loading= "Loading...";
            setTimeout(this.noneButton, 4000)
            this.btDisabled = true;
            
            // //emit to App.vue
            this.$emit('start', this.transformArray);

        },
        noneButton(){
            this.noneButton0o1 = true;
            this.loading= "";
            this.$emit('noneButton', this.noneButton0o1);
            
        },
        resetButton(){
            this.noneButton0o1 = false;
            this.$emit('noneButton', this.noneButton0o1);

           // display none on message
            this.reset = true;
            this.btDisabled = false;
            this.transformArray = [];
        },
        
    }
}
</script>

<style lang="scss">

</style>
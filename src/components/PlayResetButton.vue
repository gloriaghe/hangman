<template>
    <div class="text-center">
        <button id="btn-start" :disabled="btDisabled" @click="startButton()"
            class="btn btn-outline-success my-4 mx-3">START</button>
        <button id="reset" @click="resetButton" class="btn btn-outline-danger my-4">RESET</button>
        <h2>{{error}}</h2>
        <h4>{{loading}}</h4>
        <div :class="reset? 'd-none' : ''" v-if="resetButtonComponent? !reset: reset">
            <h2>Il nome da indovinare è: <span class="text-uppercase">{{word}}</span></h2>
        </div>
        <h2>{{scoreTotal}}</h2>
        <h2>{{errors}}</h2>
        <h2>{{result}}</h2>
    </div>
</template>

<script>
import { getWord } from "../api.js";

export default {
    name: "PlayResetButton",
    props: {
        arrayPoint: Array,
        apiChose: String
    },
    data() {
        return {
            transformArray: [],
            loading: "",
            reset: false,
            btDisabled: false,
            noneButton0o1: false,
            saveName: '',
            error: '',
        }
    },
    computed: {
        strike: function () {
            return this.arrayPoint[0];
        },
        result: function () {
            if (this.arrayPoint[1] === '' || this.arrayPoint[5] === 1 || this.arrayPoint[5] === undefined || this.arrayPoint[7] !== this.saveName) {
                return ''
            }
            return this.arrayPoint[1];
        },
        errors: function () {
            return this.reset === true ? this.arrayPoint[2] : '';
        },
        score: function () {
            return this.arrayPoint[3];
        },
        scoreTotal: function () {
            return this.reset === true ? this.arrayPoint[4] : '';
        },
        resetButtonComponent: function () {
            return this.arrayPoint[5];
        },
        word: function () {
            return this.arrayPoint[7] === this.saveName ? this.arrayPoint[6] : '_____';
        },
    },
    methods: {
        // function string to name
        arrToString(nameGame) {
            const name = nameGame.trim().toUpperCase();
            this.transformArray = name.split("");
            this.transformArray.forEach((element, i) => {
                if (element === " " || element === "-") {
                    this.transformArray.splice(i, 1)
                }

            });
            // emit to App.vue
            this.$emit('start', [nameGame, this.transformArray]);
        },
        startButton() {
            // display none on message
            this.reset = false;
            this.transformArray = [];

            if (this.apiChose !== '') {
                this.error = '';
                getWord(this.apiChose).then(resp => {

                    console.log(resp.data.name)
                    this.saveName = resp.data.name;
                    this.arrToString(resp.data.name);
                })


                this.loading = "Loading...";
                setTimeout(this.noneButton, 4000)
                this.btDisabled = true;

                // //emit to App.vue
                this.$emit('start', this.transformArray);
            } else {
                this.error = 'Hai dimenticato di selezionare Pokemon o Star Wars!!!';
            }

        },
        noneButton() {
            this.noneButton0o1 = true;
            this.loading = "";
            this.$emit('noneButton', this.noneButton0o1);

        },
        resetButton() {
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
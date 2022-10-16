<template>
  <section class="container">
    <div class="align-self-center container" id="containerButton" :class="noneButton == false? 'd-none': 'd-flex'">
      <div class="d-flex flex-wrap justify-content-center">
        <button :disabled="!noneButton" @click="letterChoice(element)" v-for="(element, i) in letters" :key="i"
          :id="element" class="letter btn btn-primary mx-2 my-2" :value="element">{{element}}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    arrayModify: Array,
    noneButton: Boolean,
  },
  data() {
    return {
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      correct: false,
      score: 0,
      strike: 0,
      result: "",
      errors: "",
      scoreTotal: "",
      resetButtonComponent: 1,
      arrLetter: [],
    }
  },
  computed: {
    buttonNone: function(){
     
      console.log('qui' + this.noneButton)
      return this.noneButton;
    },  
  }, 
  methods: {
    letterChoice(element) {
      this.check(element, this.arrayModify[0], this.arrayModify[1], this.correct);
    },
    toStart(){
      console.log('diverso')
      this.score = 0;
      this.strike = 0;
      this.result = "";
      this.errors = "";
      this.scoreTotal = "";
    },
    lettercomparison(arrayToModify, arrLetter){
      //letter comparison 
      arrayToModify.forEach(element => {
        if (arrLetter.includes(element)) {
          let index = arrayToModify.indexOf(element);
          arrayToModify.splice(index, 1)
        }
      });
    },
    check(letter, name, arrayToModify, correct) {
      if (this.result != "") {
        this.toStart();
      }
      
      document.getElementById(letter).disabled = true;

      this.resetButtonComponent = 1;

      arrayToModify.forEach(elemento => {
        //correct
        if (elemento == letter) {
          //compose name
          this.arrLetter.push(letter);

          if (this.arrLetter != []) {
            this.lettercomparison(arrayToModify, this.arrLetter);
          }

          correct = true;
          ++this.score;
          this.scoreTotal = 'Hai indovinato ' + this.score + ' lettere';
        }
      });

      //replace letter
      arrayToModify.forEach(element => {
        name = name.toUpperCase().replace(element, "_")
      });
      
      if (!name.includes('_')) {
        this.result = 'HAI VINTO!!! Il nome era ' + name.toUpperCase();
        this.resetButtonComponent = 0;
      }

      //error
      if (correct == false) {
        this.strike += 1;
        this.errors = 'Hai fatto ' + this.strike + ' errori';
        let arrayName
        if (this.strike >= 10) {
          arrayName = name.split("")
          let counter = -1;
        
          //full name without "_"
          arrayName.forEach((element, index)=> {
            if(element == '_'){
             ++counter
             arrayName.splice(index, 1, arrayToModify[counter])
           }
            });
            
          this.result = 'HAI PERSO!!! Il nome era ' + arrayName.join("").toUpperCase();
          this.resetButtonComponent = 0;

        }
      }

      //emit to App.vue
      this.$emit('point', [this.strike, this.result, this.errors, this.score, this.scoreTotal, this.resetButtonComponent, name]);
    },
  }
}
</script>

<style lang="scss">
  #containerButton {
    width: 60%;
  }
</style>
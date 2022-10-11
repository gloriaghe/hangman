<template>
  <section class="container">
    <div class="d-none align-self-center container" id="containerButton">
      <div class="d-flex flex-wrap justify-content-center">
          <button @click="letterChoice(element)" v-for="(element, i) in letters" :key="i" :id="element" class="letter btn btn-primary mx-2 my-2" :value="element">{{element}}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'ButtonComponent',
props: {
  arrayModify: Array,
},
data() {
    return {
        letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        correct: false,
        score: 0,
        strike: 0,
        result: "", 
        errors: "",
    }
},
methods: {
    letterChoice (element){
          console.log(element);
          this.check(element, this.arrayModify, this.correct);

      },
      check (letter, arrayModify, correct) {
          const totalLetter = arrayModify.length;
          document.getElementById(letter).disabled= true;

          arrayModify.forEach(elemento =>  {

              if(elemento == letter){
                  correct = true;
                  ++ this.score;
                  console.log(this.score)
                  if(this.score == totalLetter){
                      this.result= 'hai vinto';
                      console.log("hai vinto")
                  }
              } 

          });
          if(correct == false) {
              this.strike += 1 ;
              this.errors= 'Hai fatto ' + this.strike + ' errori';
              console.log("hai fatto " + this.strike +  "errori")

              if(this.strike == 5){
                  this.result= 'hai perso';
                  console.log("hai perso")

              }
          }
          this.$emit('point', [this.strike, this.result, this.errors, this.score]);

      },
}
}
</script>

<style lang="scss">
  #containerButton{
    width: 60%;
  }
</style>
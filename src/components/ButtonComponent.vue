<template>
  <section class="container">
    <div class="align-self-center container" id="containerButton" :class="noneButton == false? 'd-none': 'd-flex'">
      <div class="d-flex flex-wrap justify-content-center">
        <button :disabled="!noneButton || element.active" @click="letterChoice(element.nameLetter)"
          v-for="(element, i) in arrletters" :key="i" :id="element" class="letter btn btn-primary mx-2 my-2"
          :value="element.nameLetter">{{element.nameLetter}}</button>
      </div>
      <!-- <div>{{array}}</div> -->
      <!-- check for function tostart() -->
      <div>{{buttonNone}}</div>
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
      arrletters: [
        {
          'nameLetter': "A",
          'active': false
        },
        {
          'nameLetter': "B",
          'active': false
        },
        {
          'nameLetter': "C",
          'active': false
        },
        {
          'nameLetter': "D",
          'active': false
        },
        {
          'nameLetter': "E",
          'active': false
        },
        {
          'nameLetter': "F",
          'active': false
        },
        {
          'nameLetter': "G",
          'active': false
        },
        {
          'nameLetter': "H",
          'active': false
        }, {
          'nameLetter': "I",
          'active': false
        },
        {
          'nameLetter': "J",
          'active': false
        },
        {
          'nameLetter': "K",
          'active': false
        },
        {
          'nameLetter': "L",
          'active': false
        }, {
          'nameLetter': "M",
          'active': false
        },
        {
          'nameLetter': "N",
          'active': false
        },
        {
          'nameLetter': "O",
          'active': false
        },
        {
          'nameLetter': "P",
          'active': false
        }, {
          'nameLetter': "Q",
          'active': false
        },
        {
          'nameLetter': "R",
          'active': false
        },
        {
          'nameLetter': "S",
          'active': false
        },
        {
          'nameLetter': "T",
          'active': false
        },
        {
          'nameLetter': "U",
          'active': false
        },
        {
          'nameLetter': "V",
          'active': false
        },
        {
          'nameLetter': "W",
          'active': false
        },
        {
          'nameLetter': "X",
          'active': false
        },
        {
          'nameLetter': "Y",
          'active': false
        },
        {
          'nameLetter': "Z",
          'active': false
        },
      ],
      correct: false,
      score: 0,
      strike: 0,
      result: "",
      errors: "",
      scoreTotal: "",
      resetButtonComponent: 1,
      arrLetter: [],
      buttonDiasabled: false,
      arrClick: []
    }
  },
  computed: {
    // array: function () {
    //   if (this.arrayModify === []) {

    //     return '';
    //   }
    //   return '';
    // },
    buttonNone: function () {
      if (this.noneButton == false) {
        this.toStart();
      }
      return '';
    },
  },
  methods: {
    letterChoice(element) {
      this.check(element, this.arrayModify[0], this.arrayModify[1], this.correct, this.arrayModify[0]);
    },
    toStart() {
      console.log('diverso')
      this.score = 0;
      this.strike = 0;
      this.result = "";
      this.errors = "";
      this.scoreTotal = "";
      this.arrLetter = [];
      this.arrClick= [];
      this.arrletters.forEach(element => {

        element.active = false;

      });
    },
    lettercomparison(arrayToModify, arrLetter) {
      //letter comparison 
      arrayToModify.forEach(element => {
        if (arrLetter.includes(element)) {
          let index = arrayToModify.indexOf(element);
          arrayToModify.splice(index, 1)
        }
      });
    },
    check(letter, name, arrayToModify, correct, nameCorrect) {

      this.arrClick.push(letter);

      if (this.arrayModify === []) {
        this.arrLetter = [];
      }

      if (this.result != "") {
        this.toStart();

      }

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
          arrayName.forEach((element, index) => {
            if (element == '_') {
              ++counter
              arrayName.splice(index, 1, arrayToModify[counter])
            }
          });

          this.result = 'HAI PERSO!!! Il nome era ' + arrayName.join("").toUpperCase();
          this.resetButtonComponent = 0;

        }
      }
      this.arrletters.forEach(element => {
        if (this.arrClick.includes(element.nameLetter)) {
          element.active = true;
        }
      });

      //emit to App.vue
      this.$emit('point', [this.strike, this.result, this.errors, this.score, this.scoreTotal, this.resetButtonComponent, name, nameCorrect]);
    },
  }
}
</script>

<style lang="scss">
#containerButton {
  width: 60%;
}
</style>
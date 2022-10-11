<template>
  <div id="app">
    <h1 class="my-4 text-center" style="color:blue">INDOVINA IL NOME DEL PERSONAGGIO:</h1>
    <PlayResetButton @start="arrayName"/>
    <ButtonComponent :prova2="transformArray"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue'
import PlayResetButton from './components/PlayResetButton.vue';

export default {
  name: 'App',
  components: {
    ButtonComponent,
    PlayResetButton
  },
  data(){
    return{
      transformArray: []
    }
  },
  methods: {
    arrayName(el){
      this.transformArray = el;
      console.log(this.transformArray)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

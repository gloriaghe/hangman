<template>
  <div id="app">
    <NavBar @choice="api"/>
    <div id="containerGame" class="d-flex justify-content-center flex-column">
      <h1 class="text-center">INDOVINA IL NOME DEL PERSONAGGIO:</h1>
      <PlayResetButton @start="arrayName" :arrayPoint="pointTotal" :api="apiChoice"/>
      <ButtonComponent :arrayModify="transformArray" @point="point"/>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';
import PlayResetButton from './components/PlayResetButton.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    ButtonComponent,
    PlayResetButton,
    FooterComponent
  },
  data(){
    return{
      transformArray: [],
      pointTotal: [],
      apiChoice: ''
    }
  },
  methods: {
    arrayName(el){
      this.transformArray = el;
      console.log(this.transformArray)
    },
    point(el){
       this.pointTotal = el;
       console.log(el)
    },
    api(el){
      this.apiChoice = el;
      console.log(this.apiChoice)

    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #2c3e50;
  color: white;
  width: 100vw;
  height: 100vh;

  #containerGame{
    height: calc(100vh - 120px);
  }

}
</style>

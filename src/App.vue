<template>
  <div id="app" class="d-flex justify-content-center flex-column">
    <h1 class="text-center">INDOVINA IL NOME DEL PERSONAGGIO:</h1>
    <PlayResetButton @start="arrayName" :arrayPoint="pointTotal"/>
    <ButtonComponent :arrayModify="transformArray" @point="point"/>
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
      transformArray: [],
      pointTotal: []
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
}
</style>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">HANGMAN</a>
            <div class="d-flex justify-content-between">
                <h6 class="nav-link" href="#">Seleziona Pokemon o Star Wars</h6>
                <select class="form-select" v-model="inputApi" @change="$emit('choice', inputApi)" aria-label="Default select example">
                    <option value="Pokemon">Pokemon</option>
                    <option value="Star Wars">Star Wars</option>
                </select>
            </div>
                
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
    return {
      inputApi: "",
    }
  },
}
</script>

<style lang="scss">
nav{
    height: 70px;

    .form-select{
        width: 150px;
    }
}
</style>
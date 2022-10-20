<template>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <a class="logo navbar-brand" href="#">HANGMAN</a>
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="mx-3" href="#">Seleziona Pokemon o Star Wars</h6>
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
    background-color: #008f80;
    .form-select{
        width: 150px;
    }
    .logo{
        color: white;
        font-weight: bolder;
    }
}

</style>
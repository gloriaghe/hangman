<template>
    <img :src="'https://www.oligalma.com/downloads/images/hangman/hangman/'+strikes+'.jpg'" :alt="'hangman'">
</template>

<script>
export default {
    name: 'HangMan',
    props: {
        strike: Number,
    },
    computed: {
        strikes: function () {
            return this.strike;
        },
    },
}
</script>

<style lang="scss">
img {
    max-width: 150px;
    max-height: 230px;
    border-radius: 20px;
    object-fit: cover;
    margin-top: 50px;
}
</style>
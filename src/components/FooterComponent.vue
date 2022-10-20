<template>
     <footer>
        <div class="">
            <div class="d-flex justify-content-end">
                <span id="made" class="mx-3">© 2022 Made with Love</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style lang="scss">
    footer{
            height: 50px;

            #made{
                padding-top: 10px;
                color: #0f7e72;
            }
        }
</style>
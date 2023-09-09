<script>
export default {
    name: 'NotFound',

    props: {
        title: {
            type: String,
            default: 'BoolBnB'
        },
        logo: {
            type: String,
            default: 'src/assets/logo/Bool BnB_Black.png'
        },
    },

    data() {
        return {
            //
        }
    },
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex flex-column justify-content-end align-items-center text-center p-2 cursor-pointer">
                <h1 class="mt-5">Errore 404!</h1>
                <h2>Pagina non trovata</h2>
                <font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="my_color_red" />
                <p class="mt-3 my_color">Errore! La pagina che stai cercando non è stata trovata!</p>
               
                <img :src="logo" alt="logo">
            
                <router-link :to="{ name: 'home' }" class="d-flex justify-content-between text-decoration-none gap-4 mb-5">
                    <button type="button" class="btn btn-lg my_btn">Torna alla home</button>
                </router-link>
            </div>
        </div>
    </div>     
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';
@import '../styles/partials/_variables.scss';

.my_btn {
    background-color: $color-primary;
    transition: all 0.3s;

    &:hover {
        background-color: $color-primary;
        color: $bg-light;
    }
}

img {
    width: 200px;
    height: 200px;
}

.my_color_red {
    color: $color-primary;
}

</style>
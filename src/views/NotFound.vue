<script>
export default {
    name: 'NotFound',
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-column justify-content-end align-items-center text-center text-white">
                <!--qui img logo grande -->
                <img src="logo" alt="logo" class="img-fluid" width="100px">
                <h1 class="mt-5">Error 404</h1>
                <h2>Page not found</h2>
                <p>Errore! La pagina che stai cercando non è stata trovata!</p>

                <router-link :to="{ name: 'home' }" class="align-items-center h100 d-flex">
                    <div>
                        <button type="button" class="btn btn-lg text-white">Torna alla home</button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';
@import '../styles/partials/_variables.scss';

.btn {
    background-color: $color-primary;
}
</style>
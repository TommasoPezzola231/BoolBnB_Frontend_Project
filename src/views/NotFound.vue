<script>
export default {
  name: 'NotFound',
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>404</h1>
                <h2>Page not found</h2>
                <p>Errore! La pagina che stai cercando non è stata trovata!</p>
                <!-- img logo boolbnb  -->
                <img src="logo" alt="logo" class="img-fluid" width="100px">
                <router-link :to="{ name: 'home' }" class="align-items-center h100 d-flex text-decoration-none">
                    <div>
                        <h4>Torna alla home</h4>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
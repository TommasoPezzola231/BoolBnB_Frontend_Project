<script>

import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue'
import FooterApp from '../components/footer/FooterApp.vue'

export default {
    name: 'ApartmentShow',
    components: {
        HeaderApp,
        FooterApp,
    },

    data () {
        return {
            // 
        };
    },
}
</script>

<template>
   <section>
        <h1>Apartments Show</h1>
        <h2>visualizza il sigolo appartamento con tutti i dati, immagini, mappa della posizione dell'appartamento</h2>
        <h2>form per contattare lo user proprietario dell'appartamento</h2>
   </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

section {
    padding: 2rem;
    // giusto per staccare dai bordi
}
</style>
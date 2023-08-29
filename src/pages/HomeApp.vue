<script>

import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue'
import FooterApp from '../components/footer/FooterApp.vue'
export default {
    name: 'HomeApp',
    components: {
        HeaderApp,
        FooterApp
    },
    data () {
        return {
        }
    },
}
</script>

<template>
   <section>
        <h1>Home Page</h1>
        <h2>Mappa</h2>
        <h2>appartamenti in evidenza</h2>
        <h2>altri appartamenti?</h2>
        <h2>about</h2>
        <h2>altro ecc</h2>
   </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

section {
    padding: 2rem;
    // giusto per staccare dai bordi
}

</style>
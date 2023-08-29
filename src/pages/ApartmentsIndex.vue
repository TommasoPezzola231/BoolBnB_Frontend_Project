<script>

import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue'
import FooterApp from '../components/footer/FooterApp.vue'

export default {
    name: 'ApartmentsIndex',
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
        <h1>Apartments Index</h1>
        <h2>ricerca un appartamento</h2>
   </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

section {
    padding: 2rem;
    // giusto per staccare dai bordi
}
</style>
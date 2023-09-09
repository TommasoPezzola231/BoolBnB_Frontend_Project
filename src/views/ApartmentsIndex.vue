<script>

import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue';
import FooterApp from '../components/footer/FooterApp.vue';
import SearchPlus from '../components/main/search-apartments/SearchPlus.vue';
import ResultApartments from '../components/main/search-apartments/ResultApartments.vue';

export default {
    name: 'ApartmentsIndex',
    components: {
        HeaderApp,
        SearchPlus,
        ResultApartments,
        FooterApp,
    },

    data () {
        return {
            open: false,
            selectedServices: [],
        };
    },
    methods: {
    }
}
</script>

<template>
   <section>
      <!-- ricerca avanzata -->
      <SearchPlus />
      <!-- risultati apartamenti -->
      <ResultApartments />
   </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';



</style>
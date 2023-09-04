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
            services: [
                "Wi-Fi",
                "Piscina",
                "Palestra",
                "Sauna",
                "Vista Mare",
                "Posto Auto",
                "Aria Condizionata",
                "Riscaldamento",
                "colazione",
                "TV",
                "Cucina",
                "Lavatrice",
                "Ferro da stiro",
                "Asciugacapelli",
                "Fumo permesso",
                "Kit di pronto soccorso",
                "Animali domestici ammessi",
                "Camino"
            ],
            selectedServices: [],
        };
    },
    methods: {
    }
}
</script>

<template>
   <section class="min-vh-100-md p-5">
      <!-- ricerca avanzata -->
      <SearchPlus />
      <!-- risultati apartamenti -->
      <ResultApartments />
   </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

section {
    padding: 2rem;
    // giusto per staccare dai bordi
}

</style>
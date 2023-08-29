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

    // methods: { prova per far funzioanre api key tom tom dal file .env
    //     getTomTom() {
    //         const apiKey = process.env.VUE_APP_TOMTOM_API_KEY;
    //         const url = `https://api.tomtom.com/search/2/search/roma.json?key=${apiKey}&countrySet=IT&lat=41.9109&lon=12.4818&limit=1`;
    //         axios.get(url)
    //         .then(response => {
    //             console.log(response.data.results);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //     }
    // },
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
<script>
import { store } from '../store.js';
import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue';
import FooterApp from '../components/footer/FooterApp.vue';
import SearchLocation from '../components/main/homepage/SearchLocation.vue';
import SponsoredApartments from '../components/main/homepage/SponsoredApartments.vue';
import AboutBoolBnB from '../components/main/homepage/AboutBoolBnB.vue';
import NavLinkFooter from '../components/footer/NavLinkFooter.vue';

export default {
    name: 'HomeApp',
    components: {
        HeaderApp,
        SearchLocation,
        SponsoredApartments,
        AboutBoolBnB,
        NavLinkFooter,
        FooterApp,
    },

    props: {
        title: {
            type: String,
            default: 'BoolBnB',
        },
    },

    data() {
        return {
            store,
            apartments: [],
        }
    },
    methods: {

        getProjects() {
            axios.get(`${this.store.baseUrl}${this.store.apiEndpoint}/apartments`)
                .then(result => {
                    this.apartments = result.data.apartments;
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },

    mounted() {
        this.getProjects();
    },
}
</script>

<template>
    <section class=" bg d-flex align-items-center min-vh-100-md">
        <div class="container-fluid">
            <!-- benvenuto -->
            <!--<div class="row title mt-5">
                <div class="col-12 text-center">
                    <h1>Benvenuto su {{ title }}</h1>
                    <p class="lead text-black">Trova un appartamento per le tue vacanze o per un soggiorno di lavoro</p>
                    <hr class="border border-bottom">
                </div>
            </div>-->
            <!-- cerca citta -->
            <SearchLocation />
            <!-- appartamenti in evidenza -->
            <SponsoredApartments :apartments="apartments" />
            <!-- about -->
            <AboutBoolBnB />
            <!-- nav link footer -->
            <NavLinkFooter />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';
@import '../styles/partials/_variables.scss';

// .bg {
//     background-color: #4158D0;
//     background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
// }

.title h1 {
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 1px 4px 2px #ebc3f1;

}

.title p {
    font-size: 2.5rem;
}
</style>
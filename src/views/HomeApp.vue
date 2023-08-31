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
                    this.apartments = result.data.apartments.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },

        // getImageUrl(imagePath) {
        //     return imagePath
        //     ? `${this.store.storageUrl}${imagePath}`
        //     : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png';
        // },        
    },

    mounted() {
        this.getProjects();
    },
}
</script>

<template>
    <section class="d-flex align-items-center min-vh-100-md p-5">
        <div class="container-fluid">
            <!-- benvenuto -->
            <div class="row">
                <div class="col-12">
                    <h1>Benvenuto su {{ title }}</h1>
                    <p class="lead text-white">Trova un appartamento per le tue vacanze o per un soggiorno di lavoro</p>
                </div>
            </div>
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
</style>
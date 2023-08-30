<script>
import { store } from '../store.js';
import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue'
import FooterApp from '../components/footer/FooterApp.vue'
import SearchCity from '../components/main/homepage/SearchCity.vue'
import SponsoredApartments from '../components/main/homepage/SponsoredApartments.vue'
import AboutBoolBnB from '../components/main/homepage/AboutBoolBnB.vue';

export default {
    name: 'HomeApp',
    components: {
        HeaderApp,
        SearchCity,
        SponsoredApartments,
        AboutBoolBnB,
        FooterApp,
    },

    props: {
        title: {
            type: String,
            default: 'BoolBnB',
        },
    },

    data () {
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

        getImageUrl(imagePath) {
            return imagePath
            ? `${this.store.baseUrl}${this.store.storageUrl}${imagePath}`
            : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png';
        },        
    },

    mounted () {
        this.getProjects();
    },
}
</script>

<template>
   <section class="d-flex align-items-center min-vh-100-md p-4">
        <div class="container">
            <!-- benvenuto -->
            <div class="row">
                <div class="col-12">
                    <h1>Benvenuto su {{ title }}</h1>
                    <p class="lead text-white">Trova un appartamento per le tue vacanze o per un soggiorno di lavoro</p>
                </div>
            </div>
            <!-- cerca citta -->
            <SearchCity />
            <!-- appartamenti in evidenza -->
            <SponsoredApartments :apartments="apartments" :getImageUrl="getImageUrl" />
            <!-- about -->
            <AboutBoolBnB />
        </div>
   </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

</style>
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
            ApiUrl: "http://localhost:8000/api",
            apartments: [],
            currentPage: 0,
            lastPage: 0,
        }
    },
    methods: {
        getProjects(number) {
            axios.get(this.ApiUrl + "/apartments", {
                params: {
                    page: number
                },
            }).then(result =>{
                this.apartments = result.data.apartments.data,
                this.currentPage = result.data.apartments.current_page,
                this.lastPage = result.data.apartments.last_page
                //this.loading = false
            }).catch(err => {
                //this.$router.push( { name: "not-found" } )
            })
        },
        nextPage(){
            let pageNumber = this.currentPage + 1

            if( pageNumber > 0 && pageNumber <= this.lastPage ) {

                this.getProjects(pageNumber)

            }
        },
        previousPage() {
            let pageNumber = this.currentPage - 1

            if( pageNumber > 0 && pageNumber <= this.lastPage ) {

                this.getProjects(pageNumber)

            }
        }

    },
    mounted () {
        this.getProjects(this.currentPage)
    }
}

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

</script>

<template>
   <section class="d-flex align-items-center min-vh-100-md p-4">
        <div class="container">
            <!-- benvenuto -->
            <div class="row">
                <div class="col-12">
                    <h1>Benvenuto su BoolBnB</h1>
                    <p class="lead text-white">Trova un appartamento per le tue vacanze o per un soggiorno di lavoro</p>
                </div>
            </div>
            <!-- cerca citta -->
            <div class="row">
                <div class="p-5 mb-4 text-light rounded-3 my_bg-jumbo">
                    <div class="container-fluid py-5">
                        <h1 class="display-5 fw-bold">Cerca il tuo prossimo soggiorno</h1>
                        <p class="col-md-8 fs-4 mt-3">Inserisci il nome della città</p>
                        <form>
                            <div class="form-floating mb-3 col-md-8 col-lg-5">
                                <input type="text" class="form-control text-dark" id="floatingInput" placeholder="Roma">
                                <label for="floatingInput">Città</label>
                            </div>
                            <!-- bottone cerca -->
                            <router-link :to="{ name: 'apartments-index' }" class="btn btn-lg my_btn">
                                Cerca
                            </router-link>
                        </form>
                    </div>
                </div>
            </div>
            <!-- appartamenti in evidenza -->
            <div class="row ">
                <div class="col-12 position-relative">
                    <h2 class="display-2">Appartamenti in evidenza</h2>

                    <button class="btn btn-primary position-absolute top-50 start-0" @click="previousPage()">Ind</button>
                    <button class="btn btn-primary position-absolute top-50 end-0" @click="nextPage()">-></button>

                    <div class="row d-flex justify-content-evenly mt-5">
                        <template v-for="apartment in apartments">
                            <div class="card col-2">
                                <img class="" :src="apartment.principal_image ? 'http://localhost:8000/storage/' + apartment.principal_image : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png'">
                                <div class="card-body">
                                    <h5 class="card-title">{{apartment.title}}</h5>
                                </div>
                            </div>
                        </template>
                    </div>

                </div>
            </div>
        </div>
   </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

.my_bg-jumbo {
    background-color: $bg-color-dark;

    .my_btn {
        background-color: $color-primary;
        border-color: $color-primary;
        border: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: $color-primary;
            border-color: $color-primary;
            border: none;
        }
    }
}

</style>
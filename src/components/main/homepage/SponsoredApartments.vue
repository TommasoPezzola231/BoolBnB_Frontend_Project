<script>
import { store } from '../../../store.js';
import axios from 'axios';

export default {
    name: 'SponsoredApartments',

    /* props: {
        apartments: {
            type: Array,
            required: true,
        },
    }, */  

    data() {
        return {
            store,
            imagesLoaded: false,
        };
    },

    created () {
        setTimeout(() => {
            this.imagesLoaded = true;
        }, 2000);
    },
    methods: {
        
        getapartments(number) {
            this.imagesLoaded = false
            axios.get(`${this.store.baseUrl}${this.store.apiEndpoint}/apartments`, {
                params: {
                    page: number
                },
            }).then(result =>{
                console.log(result.data.apartments.data)
                store.apartmentsSponsor.push(...result.data.apartments.data),
                store.currentPage = result.data.apartments.current_page,
                store.lastPage = result.data.apartments.last_page

                setTimeout(() => {
                    this.imagesLoaded = true;
                }, 2000);
            }).catch(err => {
                this.$router.push( { name: "not-found" } )
                console.log(err)
            })
        },

        loadMore() {
            let pageNumber = store.currentPage + 1

            if( pageNumber > 0 && pageNumber <= store.lastPage ) {

                this.getapartments(pageNumber)

                
            }
        }
    },
}
</script>

<template>
    <section class="mt-5">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center position-relative">
                    Appartamenti in evidenza
                    <span class="sottolineatura mt-2 position-absolute top-100 start-50 translate-middle rounded"></span>
                </h2>
                <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
                    <template v-if="imagesLoaded">
                        <!-- Show actual content -->
                        <template v-for="apartment in store.apartmentsSponsor" :key="apartment.id">
                            <div class="col col-md-6 col-lg-4 col-xxl-3">
                                <div class="card text-white bg-dark h-100 d-flex align-items-stretch">
                                    <div class="my_card_img">
                                        <img :src="(apartment.full_path_principal_image ? apartment.full_path_principal_image : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png')" class="card-img-top" :alt="apartment.title">
                                    </div>
                                    <div class="card-body">
                                        <p class="card-title"><strong>{{ apartment.title }}</strong></p>
                                        <p class="card-text">{{ apartment.price }} € <small> • per notte</small></p>
                                        <p class="card-text">{{ apartment.city }}</p>
                                        <p class="card-text">{{ apartment.country }}</p>
                                    </div>
                                    <router-link :to="{ name: 'apartment-show', params: { id: apartment.id } }" class="stretched-link"></router-link>
                                </div>
                            </div>
                        </template>

                        
                        <div v-if="store.lastPage > store.currentPage" class="row mt-3 mx-auto">
                            <div class="d-flex align-items-center justify-content-center">
                                <button class="btn my_btn col-md-4 col-lg-6 mx-md-auto" @click="loadMore">Carica altro</button>
                            </div>
                        </div>
                    </template>

                    <template v-else>
                        <!-- placeholder card -->
                        <div v-for="index in store.apartmentsSponsor.length" :key="index" class="col col-md-6 col-lg-4 col-xxl-3">
                            <div class="card text-white bg-dark h-100 d-flex align-items-stretch placeholder-card" aria-hidden="true">
                                <span class="card-img-top placeholder-image" style="background-color: rgb(171, 173, 173);"></span>
                                <div class="card-body">
                                    <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                    </h5>
                                    <div class="card-text placeholder-glow">
                                        <p class="placeholder col-7"></p>
                                        <p class="placeholder col-4"></p>
                                        <p class="placeholder col-4"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h2{
    color: $color-primary;
}

.sottolineatura {
    width: 20%;
    height: 2px;
    background-color: $color-primary;
}
.card {
    transition: transform 0.3s ease-in-out;
}

.my_card_img {
    width: 100%;
    height: 400px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center-top;
        aspect-ratio: 16/9;
    }
}

// placeholder card
.placeholder-card {
    background-color: rgb(171, 173, 173);
    animation: placeholderShimmer 1s linear infinite forwards;

    .placeholder-image {
        width: 100%;
        height: 200px;
        display: block;
    }

    .placeholder-glow {
        position: relative;
        animation: placeholderGlow 1s ease-in-out infinite;
    }

    .placeholder {
        display: inline-block;
        height: 1em;
        width: 100%;
        border-radius: 4px;
        background-color: #a15d5d;
        position: relative;
        overflow: hidden;
    } 
}


</style>
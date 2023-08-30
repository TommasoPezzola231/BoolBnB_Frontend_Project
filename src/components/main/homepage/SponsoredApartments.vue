<script>

export default {
    name: 'SponsoredApartments',

    props: {
        apartments: {
            type: Array,
            required: true,
        },
        getImageUrl: {
            type: Function,
            required: true,
        },
    },  

    data() {
        return {
            imagesLoaded: false,
        };
    },

    created () {
        setTimeout(() => {
            this.imagesLoaded = true;
        }, 3000);
    },
}
</script>

<template>
    <div class="row">
        <div class="col-12">
            <h2>Appartamenti in evidenza</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
                <template v-if="imagesLoaded">
                    <!-- Show actual content -->
                    <template v-for="apartment in apartments" :key="apartment.id">
                        <div class="col col-md-6 col-lg-4 col-xl-3">
                            <div class="card text-white bg-dark h-100 d-flex align-items-stretch">
                                <img :src="getImageUrl(apartment.principal_image)" class="card-img-top" alt="Apartment Image">
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
                </template>
                <template v-else>
                    <!-- placeholder card -->
                    <div v-for="index in apartments.length" :key="index" class="col col-md-6 col-lg-4 col-xl-3">
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
                                    <p class="placeholder col-6"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card {
    transition: transform 0.3s ease-in-out;
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
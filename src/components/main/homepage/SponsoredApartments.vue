<script>

export default {
    name: 'SponsoredApartments',

    props: {
        apartments: {
            type: Array,
            required: true,
        },
        // getImageUrl: {
        //     type: Function,
        //     required: true,
        // },
    },

    data() {
        return {
            imagesLoaded: false,
        };
    },

    created() {
        setTimeout(() => {
            this.imagesLoaded = true;
        }, 2000);
    },
}
</script>

<template>
    <section class="mt-5 text-center align-items-center d-flex">
        <div class=" row">
            <div class="col-12 my-5">
                <h2>Appartamenti in evidenza</h2>


                <div class="row row-cols-1 row-cols-md-2 g-4 my-5 justify-content-center">
                    <template v-if="imagesLoaded">
                        <!-- Show actual content -->
                        <template v-for="apartment in apartments" :key="apartment.id">
                            <div class="col col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                                <div class="card text-white bg-dark h-100 d-flex align-items-stretch">
                                    <!-- <img :src="getImageUrl(apartment.principal_image)" class="card-img-top" alt="Apartment Image"> -->
                                    <img :src="(apartment.full_path_principal_image ? apartment.full_path_principal_image : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png')"
                                        class="card-img-top" :alt="apartment.title">
                                    <div class="card-body">
                                        <p class="card-title"><strong>{{ apartment.title }}</strong></p>
                                        <p class="card-text">{{ apartment.price }} € <small> • per notte</small></p>
                                        <p class="card-text">{{ apartment.city }}</p>
                                        <p class="card-text">{{ apartment.country }}</p>
                                    </div>
                                    <router-link :to="{ name: 'apartment-show', params: { id: apartment.id } }"
                                        class="stretched-link"></router-link>
                                </div>
                            </div>
                        </template>
                    </template>
                    <template v-else>
                        <!-- placeholder card -->
                        <div v-for="index in apartments.length" :key="index" class="col col-md-6 col-lg-4 col-xl-3">
                            <div class="card text-white bg-dark h-100 d-flex align-items-stretch placeholder-card"
                                aria-hidden="true">
                                <span class="card-img-top placeholder-image"
                                    style="background-color: rgb(171, 173, 173);"></span>
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
.card {
    &:hover {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
    }
}

h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: $color-primary;

    // text-shadow: 1px 4px 2px #ebc3f1;
    &:after {
        content: ' ';
        display: block;
        border: 1px solid $color-primary;
        width: 35%;
        border-radius: 4px;
        margin: 1rem 0 0 485px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
        -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
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
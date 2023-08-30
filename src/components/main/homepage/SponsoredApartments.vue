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
}
</script>

<template>
    <div class="row ">
        <div class="col-12">
            <h2>Appartamenti in evidenza</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
                <template v-for="apartment in apartments" :key="apartment.id">
                    <div class="col col-md-6 col-lg-4 col-xl-3">
                        <div class="card text-white bg-dark h">
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
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card {
    transition: transform 0.3s ease-in-out;
}

</style>
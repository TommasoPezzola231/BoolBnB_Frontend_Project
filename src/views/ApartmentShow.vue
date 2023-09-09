<script>

import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue'
import FooterApp from '../components/footer/FooterApp.vue'
import ContactAparment from '../components/main/messageForm/ContactAparment.vue';
import MapSingle from '../components/main/maps/MapSingle.vue';

export default {
    name: 'ApartmentShow',

    components: {
        HeaderApp,
        ContactAparment,
        MapSingle,
        FooterApp,
    },

    beforeRouteEnter(to, from, next) {
        const { id } = to.params;
        // Check if 'id' is a valid integer (you can customize the validation logic)
        if (!Number.isInteger(parseInt(id))) {
            next({ name: 'not-found' }); // Redirect to 404 error page
        } else {
            next();
        }
    },

    data() {
        return {
            ApiUrl: "http://localhost:8000/api/apartments/",
            apartment: [],
        };
    },

    methods: {
        getProject() {
            axios.get(this.ApiUrl + this.$route.params.id)
                .then((result) => {
                    this.apartment = result.data.apartment;
                })
                .catch((error) => {
                    console.error('Error fetching apartment data:', error);
                    this.$router.push({ name: 'not-found' });
                });
        },
    },

    created() {
        this.getProject();
    },

    mounted() {
        axios
            .get("https://api.ipify.org?format=json")
            .then((response) => {
                const ipAddress = response.data.ip;

                axios
                    .post("http://localhost:8000/api/view/store", {
                        apartment_id: this.apartment.id,
                        ip_address: ipAddress,
                    })
                    .then((response) => {
                        if (response.data.success) {
                            console.log("View has been registered.");
                        } else {
                            console.log("Error: " + response.data.message);
                        }
                    })
                    .catch((error) => {
                        console.error("Error while storing view: " + error);
                    });
            })
            .catch((error) => {
                console.error("Error while fetching IP address: " + error);
            });
    },


}
</script>

<template>
    <div class="container-fluid">

        <div class="row d-flex justify-content-center">
            <div class="col-lg-8 col-md-10 col-sm-12 p-2">
                <h1 class="mb-2 mt-3">{{ apartment.title }}</h1>
            </div>
            <div class="col-lg-8 col-md-10 col-sm-12 p-2">
                <img class="big-img shadow-lg"
                    :src="apartment.principal_image ? 'http://localhost:8000/storage/' + apartment.principal_image : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png'">
                <div class="mt-3 ">
                    <p class="fs-3">{{ apartment.address }}, {{ apartment.city }}, {{ apartment.country }}</p>
                </div>
                <hr>
            </div>
            <div class="col-lg-8 col-md-10 col-sm-12 p-2 d-lg-flex d-md-flex">
                <div class="fs-4 me-5">
                    <font-awesome-icon :icon="['fas', 'house']" class="me-2 mb-2" />
                    {{ apartment.num_rooms }} stanze
                </div>
                <div class="fs-4 me-5"><font-awesome-icon :icon="['fas', 'toilet']" class="me-3 mb-2" />{{
                    apartment.num_bathrooms }} bagni
                </div>
                <div class="fs-4 me-5">
                    <font-awesome-icon :icon="['fas', 'ruler-combined']" class="me-2 mb-2" />
                    {{ apartment.square_meters }} metri quadri
                </div>
            </div>
            <div class="col-lg-8 col-md-10 col-sm-12 p-2 mt-3">
                <div class="fs-3 color-primary">Descrizione appartamento</div>
                <p class="fs-5">{{ apartment.description }}</p>
            </div>
            <div class="col-lg-8 col-md-10 col-sm-12 p-2">
                <div class="fs-3 color-primary">Servizi presenti:</div>
            </div>
            <div class="col-lg-8 col-md-10 col-sm-12 p-2 d-lg-flex d-md-flex flex-wrap">
                <template v-for="service in apartment.services" :key="service">
                    <div class="m-2 p-2 d-flex service">
                        <div class="me-2">{{ service.name_service }}</div>
                        <font-awesome-icon :icon="service.icon_service" />
                    </div>
                </template>
            </div>
            <div class="col-lg-8 col-md-10 col-sm-12 p-2">
                <hr>
                <h3 class="mt-4 color-primary">Contatta {{ apartment.user.name }} {{ apartment.user.surname }} per
                    l'appartamento</h3>
                <div class="my_form">
                    <!-- <ContactAparment /> -->
                    <ContactAparment :apartment="apartment" />
                </div>
                <hr>
            </div>
            <div class="col-lg-8 col-md-10 col-sm-12 p-2">
                <div class="fs-3 color-primary">Siamo qui</div>
                <MapSingle :apartemnt="apartment" class=" map w-100 w-sm-75 w-md-50 w-lg-25" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';
@import '../styles/partials/variables';

h1 {
    color: $color-primary;
}

.big-img {
    width: 100%;
    height: 70vh;
    border-radius: 20px;
}

.map {
    height: 500px;
}

.service {
    border: 1px solid gray;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }
}
</style>
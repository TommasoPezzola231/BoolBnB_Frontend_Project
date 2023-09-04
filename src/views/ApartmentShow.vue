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
            
            // Include logic to check if the same IP address has viewed the apartment in the last 24 hours
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
    <section>
        <div class="container-fluid container-img">
            <div class="row">
                <div class="col">
                    <h1>{{ apartment.title }}</h1>
                    <div class="d-flex">{{ apartment.address }}</div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 mt-2">
                    <img class="big-img-placeholder" :src="apartment.principal_image ?  'http://localhost:8000/storage/' + apartment.principal_image : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png'">
                </div>
                <div class="col-6 mt-2">
                    <div class="row">
                        <div class="col-6 d-flex">
                            <div class="small-img-placeholder">Placeholder principal image</div>
                        </div>
                        <div class="col-6">
                            <div class="small-img-placeholder">Placeholder principal image</div>
                        </div>
                        <div class="col-6">
                            <div class="small-img-placeholder">Placeholder principal image</div>
                        </div>
                        <div class="col-6">
                            <div class="small-img-placeholder">Placeholder principal image</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <!-- mappa -->
                    <MapSingle :apartemnt="apartment" />
                    <!--------------------------------------------->
                    <p class="mt-4 py-5 border-top border-bottom">{{ apartment.description }}</p>
                    <template v-for="service in apartment.services">
                        <span class="m-2 p-2 service ">
                            <span class="me-2">{{ service.name_service }}</span>
                            <font-awesome-icon :icon="service.icon_service" />
                        </span>
                    </template>
                </div>
                <div class="col-6">
                    <!-- form ivio messaggio -->
                    <h3 class="mx-auto mt-3">Contatta {{ apartment.user.name }} {{ apartment.user.surname }} per l'appartamento</h3>
                    <div class="my_form">
                        <!-- <ContactAparment /> -->
                        <ContactAparment :apartment="apartment" />
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';
@import '../styles/partials/variables';

*{
    color: lightgray;
}

section {
    padding: 2rem;
    // giusto per staccare dai bordi
}

// placheholder debugging

.container-img {
    height: 400px;
}

.big-img-placeholder {
    width: 100%;
    background-color: bisque;
    height: 400px;
    border-radius: 20px;
}

.small-img-placeholder {
    width: 100%;
    background-color: bisque;
    height: 200px;
    border-radius: 20px;
}

.fa-solid {
    font-size: 15px;
    color: white;
    background-color: red;
}
.my_form {
    margin-bottom: 100px;
    width: 400px;
}

.service {
    border: 1px solid gray;
    border-radius: 10px;
    color: lightgray;

    :hover{
        cursor: pointer;
    }
}
</style>
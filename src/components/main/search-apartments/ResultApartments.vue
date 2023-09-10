<script>
import { store } from "../../../store"


export default {
    name: 'ResultApartments',

    data() {
        return {
            store,
            loading: false,
            apartments: [],
        };
    },

    watch: {
        'store.apartments': {
            immediate: true,
            handler: function () {
                this.loading = false;
            },
        }
    },
}
</script>

<template>

    <div class="row mb-4 w-100 mx-auto">
        <button type="button" class="btn btnCustom" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Ricerca Avanzata
        </button>
        <h2 class="text-center mt-5">Risultati ricerca</h2>
        <p class="text-center mt-3">Numero di risultati: {{ store.apartments.length }}</p>

        <!-- Show loading spinner when loading is true -->
        <div v-if="loading" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

        <div v-else>
            <!-- nessun risultato -->
            <div v-if="store.apartments.length === 0" class="d-flex flex-column align-items-center justify-content-center p-2">
                <div class="alert alert-dark shadow" role="alert">
                    <h3 class="text-center">Nessun appartamento trovato!</h3>
                    <p class="text-center">Riprova con altri parametri di ricerca</p>
                </div>
            </div>

            <!-- risultati -->
            <div v-else class="row p-2">
                <div v-for="apartment in store.apartments" :key="apartment.id" class="col-12 col-md-6 col-xl-6 col-xxl-4 g-4 mb-5">   
                    <router-link class="" :to="{ name: 'apartment-show', params: { id: apartment.id } }">
                        <div class="card-apartment d-flex flex-column shadow p-1 rounded my-3 text-center h-100">
                            <div class="px-2 flex-grow-1">
                                <div class="my_card_img">
                                    <img class="w-100 rounded-4 p-2" :src="apartment.principal_image ?  'http://localhost:8000/storage/' + apartment.principal_image : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png'">
                                </div>
                                <h3 class="mt-3">{{ apartment.title }}</h3>
                                <p>{{ apartment.address }} {{ apartment.city }}</p>
        
                                <div class="row">
                                    <div class="d-flex justify-content-between">
                                        <p class="col-4 text-center"><font-awesome-icon :icon="['fas', 'toilet']" /> {{ apartment.num_bathrooms }}</p>
                                        <p class="col-4 text-center"><font-awesome-icon :icon="['fas', 'house']" /> {{ apartment.num_rooms }}</p>
                                        <p class="col-4 text-center"><font-awesome-icon :icon="['fas', 'ruler-combined']" /> {{ apartment.square_meters }} metri quadri</p>
                                    </div>
                                </div>
                        
                                <ul class="d-flex flex-wrap gap-2 p-2 justify-content-center">
                                    <template v-for="service in apartment.services" :key="service">
                                        <li class="my_badge shadow">
                                            <div class="d-flex align-items-center gap-2">
                                                {{ service.name_service }}
                                                <font-awesome-icon :icon="service.icon_service" />
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </div>

                            <div class="text-end my-2 pe-3 pb-3 align-end ">
                                <div>
                                    Prezzo: {{ apartment.price }}€
                                </div>
                            </div>
                            
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.btnCustom{    
    background-color: $color-primary;
    border: none;
    border-radius: 0%;
   
    &:hover{
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.158);
    }
}

a {
    text-decoration: none;
    color: black;
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

.my_badge {
    background-color: $color-primary;
    border: none;
    border-radius: 5%;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0.2rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.158);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
}

.card-apartment{
    background-color: white;
}
</style>
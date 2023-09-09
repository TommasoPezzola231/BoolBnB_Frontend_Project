<script>
import { store } from "../../../store"


export default {
    name: 'ResultApartments',

    data() {
        return {
            store,
            loading: false,
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

        <!-- Show loading spinner when loading is true -->
        <div v-if="loading" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

        <div v-else>
            <div v-if="store.apartments.length === 0">
                <p class="position-absolute top-50 start-50 translate-middle fs-1">Nessun appartamento trovato</p>
            </div>

            <div v-else class="row p-2">
                <div v-for="apartment in store.apartments" :key="apartment.id" class="col-12 col-md-6 col-xl-4 col-xxl-3 g-4 mb-5">
                        
                <router-link class="" :to="{ name: 'apartment-show', params: { id: apartment.id } }">
                    <div class="card-apartment shadow p-1 rounded my-3 text-center h-100">
                    
                        <img class="w-100 rounded-4 p-2" :src="apartment.principal_image ?  'http://localhost:8000/storage/' + apartment.principal_image : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png'">
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
                        <p class="text-end mt-2">
                            <div>
                                Prezzo: {{ apartment.price }}€
                            </div>
                        </p>
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
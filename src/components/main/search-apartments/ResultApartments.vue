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
        <h2 class="text-center">Risultati ricerca</h2>
        <button type="button" class="btn btnCustom" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Ricerca Avanzata
        </button>

        <!-- Show loading spinner when loading is true -->
        <div v-if="loading" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

        <div v-else>
            <div v-if="store.apartments.length === 0">
                <p class="position-absolute top-50 start-50 translate-middle fs-1">Nessun appartamento trovato</p>
            </div>

            <div v-else class="row p-2">
                <div v-for="apartment in store.apartments" :key="apartment.id" class="col-lg-4 col-md-6 col-sm-12">
                    
                    
                <router-link class="" :to="{ name: 'apartment-show', params: { id: apartment.id } }">
                    <div class="card-apartment shadow p-1 rounded-4 my-3">
                        <!-- Visualizza le informazioni dell'appartamento -->
                    
                        <img class="w-100 rounded" :src="apartment.principal_image ?  'http://localhost:8000/storage/' + apartment.principal_image : 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png'">
                        <h3>{{ apartment.title }}</h3>
                        <p>{{ apartment.address }} {{ apartment.city }}</p>
                        <div class="row">
                            <p class="col-4 text-center"><font-awesome-icon :icon="['fas', 'toilet']" /> {{ apartment.num_bathrooms }}</p>
                            <p class="col-4 text-center"><font-awesome-icon :icon="['fas', 'house']" /> {{ apartment.num_rooms }}</p>
                            <p class="col-4 text-center"><font-awesome-icon :icon="['fas', 'ruler-combined']" /> {{ apartment.square_meters }} metri quadri</p>

                        </div>
                        <ul>
                            <template v-for="service in apartment.services" :key="service">
                                <li class="badge text-bg-info prova me-2">
                                    {{ service.name_service }}
                                    <font-awesome-icon :icon="service.icon_service" />
                                </li>
                            </template>
                        </ul>
                        <p class="text-end me-2">
                            <span>
                                Prezzo: {{ apartment.price }}€
                            </span>
                        </p>
                    </div>
                </router-link>

                </div>
            </div>
        </div>
    </div>
        
</template>

<style lang="scss" scoped>
.prova{
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.btnCustom{    
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    color: white;
    &:hover{
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
        background-color: #3a4fba;
    }
}

a{
    text-decoration: none;
    color: black;
}

.card-apartment{
    background-color: white;
}
</style>
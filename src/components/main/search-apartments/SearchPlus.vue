<script>
import axios from 'axios';
import { store } from "../../../store"

export default {
    name: 'SearchPlus',

    data() {
        return {
            store,
            open: false,
            city: store.city,
            radius: "20",
            num_rooms: "",
            num_bathrooms: "",
            square_meters: "",
            price: "",
            selectedServices: [],
            loading: false,
            menuVisible: false,
        };
    },

    computed: {
        watchFields: function () {
            return [
                this.city,
                this.radius,
                this.num_rooms,
                this.num_bathrooms,
                this.square_meters,
                this.price,
                this.selectedServices,
            ];
        },
    },

    watch: {
        watchFields: {
            handler: function () {
                this.searchAdvancedApartment();
            },
            deep: true,
        },
    },

    methods: {
        async searchAdvancedApartment() {
            try {
                console.log(this.store.services)
                this.loading = true; // Show loading indicator
                const response = await axios.get(`http://localhost:8000/api/ricercaAvanzata`, {
                    params: {
                        city: this.city,
                        radius: this.radius,
                        num_rooms: this.num_rooms,
                        num_bathrooms: this.num_bathrooms,
                        square_meters: this.square_meters,
                        price: this.price,
                        serviceID: this.selectedServices,
                    },
                });
                console.log(this.selectedServices)
                console.log(response)
                
                // Chiamata alla mutazione per salvare i risultati nello store
                this.store.apartments = response.data;
                console.log(this.store.apartments);

            } catch (error) {
                console.error('Errore durante la ricerca:', error);
            } finally {
                this.loading = false;
            }
        },        
        mostraMenu(){
            if (this.store.menuVisible) {
                // Nascondi il menu
                this.store.menuVisible = false;
            } else {
                // Mostra il menu
                this.store.menuVisible = true;
            }
        }
    },
}
</script>

<template>
    
    
    
    

    <div id="ricerca" class="container-form ps-3 col-12 ricercaAvanzata position-relative z-1" :class="{ 'slide-down': store.menuVisible, 'slide-up': !menuVisible }">

        
        <div class="menuContainer">
            <div class="row mb-1">
                <div class="container">


                    <form @submit.prevent="searchAdvancedApartment()" method="get">
                        <div class="row my-3 p-2">

                            <div class="col-lg-2 col-md-6 col-sm-12 p-2">
                                <label for="radius" class="form-label">Imposta raggio di ricerca</label>
                                <input type="range" class="form-range" v-model="radius" id="radius" name="radius" required min="0" max="50">
                                <div class="text-center mx-auto">
                                    <span class="border rounded p-1">{{radius}}  Km</span>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-6 col-sm-12 p-2">
                                <label for="city" class="form-label">Città <font-awesome-icon :icon="['fas', 'location-dot']" /></label>
                                <input type="text" class="form-control" v-model="city" id="city" name="city" required>
                            </div>
                            
                            
                            <div class="col-lg-2 col-md-6 col-sm-12 p-2">
                                <label for="num_rooms" class="form-label">Numero Stanze <font-awesome-icon :icon="['fas', 'house']" /></label>
                                <input type="number" class="form-control" v-model="num_rooms" id="num_rooms" name="num_rooms"
                                min="1" max="15">
                            </div>
                            
                            <div class="col-lg-2 col-md-6 col-sm-12 p-2">
                                <label for="num_bathrooms" class="form-label">Numero Bagni <font-awesome-icon :icon="['fas', 'toilet']" /></label>
                                <input type="number" class="form-control" v-model="num_bathrooms" id="num_bathrooms"
                                name="num_bathrooms" min="1" max="7">
                            </div>

                            
                            <div class="col-lg-2 col-md-6 col-sm-12 p-2">
                                <label for="square_meters" class="form-label">Metri quadri <font-awesome-icon :icon="['fas', 'ruler-combined']" /></label>
                                <input type="number" class="form-control" v-model="square_meters" id="square_meters"
                                name="square_meters" min="1" max="400">
                            </div>
                            
                            <div class="col-lg-2 col-md-6 col-sm-12 p-2">
                                <label for="price" class="form-label">Prezzo <font-awesome-icon :icon="['fas', 'euro-sign']" /></label>
                                <input type="number" class="form-control" v-model="price" id="price" name="price">
                            </div>
                            
                            

                        </div>


                        <div class="row my-3">

                            
                                
                            <div v-for="(service, index) in this.store.services" class="col-lg-3 col-md-6 col-sm-12 p-2">
                                <label  :key="index + 1" class="dropdown-item service">

                                    <input class="d-none" type="checkbox" :value="index + 1" v-model="selectedServices" name="serviceID">
                                    <span class="p-2 border rounded" :class="{ 'selected-service': selectedServices.includes(index + 1) }">
                                        <font-awesome-icon :icon="service.icon_service" /> {{ service.name_service }}
                                    </span>
                                </label>
                            </div>

                        </div>
                        
                    </form>
                </div>
            </div>
        </div>

    </div>
    <button type="button" class="btn mt-1 btnCustom w-100" @click="mostraMenu()">
            Ricerca Avanzata
    </button>

    

    
</template>

<style lang="scss" scoped>

.btnCustom{    
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    color: white;
    &:hover{
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
        background-color: #3a4fba;
    }
}

#ricerca{
    background-color: yellow;
    max-width: 100vw;
}
.service{
  cursor: pointer;
}
.selected-service {
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.closebtn {
  cursor: pointer;
  font-size: 36px;
    &:hover{
        color: red;
    }
}


//prova
/* styles.css */
#ricerca.slide-up {
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

#ricerca.slide-down {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

@keyframes slide-down {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes slide-up {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100%);
    }
}
</style>
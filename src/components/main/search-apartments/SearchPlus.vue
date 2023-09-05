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
        };
    },

    computed: {
        watchFields: function() {
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
            handler: function() {
                this.searchAdvancedApartment();
            },
            deep: true,
        },
    },

    methods: {
       async searchAdvancedApartment() {
            try {
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

            this.store.apartments = response.data;
            } catch (error) {
                console.error('Errore durante la ricerca:', error);
            } finally {
                this.loading = false; 
            }
        },
    }
}
</script>

<template>
    <div class="row mb-4">
        <h2 class="ms-4">Ricerca Avanzata</h2>
    
        <form @submit.prevent="searchAdvancedApartment()" method="get">
            <div class="row">
    
                <div class="col-3 p-2">
                    <label for="radius" class="form-label">Imposta raggio di ricerca</label>
                    <input type="number" class="form-control" v-model="radius" id="radius" name="radius" required>
                </div>
    
                <div class="col-3 p-2">
                    <label for="city" class="form-label">Città</label>
                    <input type="text" class="form-control" v-model="city" id="city" name="city" required>
                </div>
    
                <div class="col-3 p-2">
                    <label for="num_rooms" class="form-label">Numero Stanze</label>
                    <input type="number" class="form-control" v-model="num_rooms" id="num_rooms" name="num_rooms" min="1" max="15">
                </div>
    
                <div class="col-3 p-2">
                    <label for="num_bathrooms" class="form-label">Numero Bagni</label>
                    <input type="number" class="form-control" v-model="num_bathrooms" id="num_bathrooms" name="num_bathrooms" min="1" max="7">
                </div>
    
            </div>
    
    
            <div class="row">
    
                <div class="col-3 p-2">
                    <label for="square_meters" class="form-label">Metri quadri</label>
                    <input type="number" class="form-control" v-model="square_meters" id="square_meters" name="square_meters" min="1" max="400">
                </div>
    
                <div class="col-3 p-2">
                    <label for="price" class="form-label">Prezzo</label>
                    <input type="number" class="form-control" v-model="price" id="price" name="price">
                </div>
    
                <div class="col-3 p-2">
    
                    <label v-for="(service, index) in this.store.services" :key="index + 1" class="dropdown-item">
                        <input type="checkbox" :value="index + 1" v-model="selectedServices" name="serviceID">
                        {{ service.name_service }}
                    </label>
                </div>
    
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>
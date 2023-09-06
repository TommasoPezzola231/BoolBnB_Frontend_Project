<script>
import axios from 'axios';
import { store } from "../../../store"

export default {
    name: 'SearchPlus',
    data() {
        return {
            store,
            open: false,
            /*services: [
                "Wi-Fi",
                "Piscina",
                "Palestra",
                "Sauna",
                "Vista Mare",
                "Posto Auto",
                "Aria Condizionata",
                "Riscaldamento",
                "colazione",
                "TV",
                "Cucina",
                "Lavatrice",
                "Ferro da stiro",
                "Asciugacapelli",
                "Fumo permesso",
                "Kit di pronto soccorso",
                "Animali domestici ammessi",
                "Camino"
            ],*/
            city: store.city,
            radius: "20",
            num_rooms: "",
            num_bathrooms: "",
            square_meters: "",
            price: "",
            selectedServices: [],
        };
    },
    methods: {
        async searchAdvancedApartment() {
            try {
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
            }

        }
    }
}
</script>

<template>
    <div class="container-form">


        <div class="row mb-4">
            <h2 class="ms-4">Ricerca Avanzata</h2>
            <div class="container">


                <form @submit.prevent="searchAdvancedApartment()" method="get">
                    <div class="row flex-column">

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
                            <input type="number" class="form-control" v-model="num_rooms" id="num_rooms" name="num_rooms"
                                min="1" max="15">
                        </div>

                        <div class="col-3 p-2">
                            <label for="num_bathrooms" class="form-label">Numero Bagni</label>
                            <input type="number" class="form-control" v-model="num_bathrooms" id="num_bathrooms"
                                name="num_bathrooms" min="1" max="7">
                        </div>

                    </div>


                    <div class="row flex-column">

                        <div class="col-3 p-2">
                            <label for="square_meters" class="form-label">Metri quadri</label>
                            <input type="number" class="form-control" v-model="square_meters" id="square_meters"
                                name="square_meters" min="1" max="400">
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
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
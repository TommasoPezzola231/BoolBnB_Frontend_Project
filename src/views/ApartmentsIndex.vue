<script>

import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue'
import FooterApp from '../components/footer/FooterApp.vue'

export default {
    name: 'ApartmentsIndex',
    components: {
        HeaderApp,
        FooterApp
    },
    data () {
        return {
            open: false,
            services: [
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
            ],
            selectedServices: [],
        };
    },
    methods: {
    }
}
</script>

<template>
   <section>
        <h2 class="ms-4">Ricerca Avanzata</h2>

        <form action="http://localhost:8000/api/apartments/search" method="get">
            <div class="row">

                <div class="col-3 p-2">
                    <label for="radius" class="form-label">Imposta raggio di ricerca</label>
                    <input type="number" class="form-control" id="radius" name="radius" value="20">
                </div>

                <div class="col-3 p-2">
                    <label for="country" class="form-label">Paese</label>
                    <input type="text" class="form-control" id="country" name="country">
                </div>

                <div class="col-3 p-2">
                    <label for="num_rooms" class="form-label">Numero Stanze</label>
                    <input type="number" class="form-control" id="num_rooms" name="num_rooms" min="1" max="15">
                </div>

                <div class="col-3 p-2">
                    <label for="num_bathrooms" class="form-label">Numero Stanze</label>
                    <input type="number" class="form-control" id="num_bathrooms" name="num_bathrooms" min="1" max="7">
                </div>

            </div>


            <div class="row">

                <div class="col-3 p-2">
                    <label for="square_meters" class="form-label">Metri quadri</label>
                    <input type="number" class="form-control" id="square_meters" name="square_meters" min="1" max="400">
                </div>

                <div class="col-3 p-2">
                    <label for="price" class="form-label">Prezzo</label>
                    <input type="number" class="form-control" id="price" name="price">
                </div>

                <div class="col-3 p-2">

                    <label v-for="(service, index) in services" :key="index" class="dropdown-item">
                        <input type="checkbox" :value="service" v-model="selectedServices" name="serviceID">
                        {{ service }}
                    </label>
                    <input type="hidden" :name="'serviceID[]'" v-for="service in selectedServices" :value="service">
                </div>

            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
   </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

section {
    padding: 2rem;
    // giusto per staccare dai bordi
}

</style>
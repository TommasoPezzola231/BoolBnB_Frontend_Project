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

        <form action="DaInserire" method="get">
            <div class="row">

                <div class="col-3 p-2">
                    <label for="raggioRicerca" class="form-label">Imposta raggio di ricerca</label>
                    <input type="number" class="form-control" id="raggioRicerca" name="raggioRicerca" value="20">
                </div>

                <div class="col-3 p-2">
                    <label for="paese" class="form-label">Paese</label>
                    <input type="text" class="form-control" id="paese" name="paese">
                </div>

                <div class="col-3 p-2">
                    <label for="numeroStanze" class="form-label">Numero Stanze</label>
                    <input type="number" class="form-control" id="numeroStanze" name="numeroStanze" min="1" max="15">
                </div>

                <div class="col-3 p-2">
                    <label for="numeroBagni" class="form-label">Numero Stanze</label>
                    <input type="number" class="form-control" id="numeroBagni" name="numeroBagni" min="1" max="7">
                </div>

            </div>


            <div class="row">

                <div class="col-3 p-2">
                    <label for="metriQuadri" class="form-label">Metri quadri</label>
                    <input type="number" class="form-control" id="metriQuadri" name="metriQuadri" min="1" max="400">
                </div>

                <div class="col-3 p-2">
                    <label for="prezzo" class="form-label">Prezzo</label>
                    <input type="number" class="form-control" id="prezzo" name="prezzo">
                </div>

                <div class="col-3 p-2">

                    <label v-for="service in services" :key="service" class="dropdown-item">
                        <input type="checkbox" :value="service" v-model="selectedServices">
                        {{ service }}
                    </label>
                      
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
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
            handler: function() {
                this.loading = false;
            },
        }
    },
}
</script>

<template>
<<<<<<< HEAD
    <div class="row mb-4">
        <div class="col-7">


            <h2 class="ms-4">Risultati ricerca</h2>
            <p>Appartamenti</p>

            <div v-if="store.apartments.length === 0">
                <p>Nessun appartamento trovato.</p>
            </div>

=======
     <div class="row mb-4">
        <h2 class="ms-4">Risultati ricerca</h2>
        <p>Appartamenti</p>

        <!-- Show loading spinner when loading is true -->
        <div v-if="loading" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

        <div v-else>
            <div v-if="store.apartments.length === 0">
                <p>Nessun appartamento trovato.</p>
            </div>
    
>>>>>>> 21bf3de42197f238e90344497789cf757ccd82d7
            <div v-else>
                <div v-for="apartment in store.apartments" :key="apartment.id" class="mb-3 card col-10 mx-auto">
                    <!-- Visualizza le informazioni dell'appartamento -->
                    <h3>{{ apartment.title }}</h3>
                    <small>{{ apartment.city }}</small>
                    <p>{{ apartment.description }}</p>
                    <p>{{ apartment.address }}</p>
                    <p>Numero bagni: {{ apartment.num_bathrooms }}</p>
<<<<<<< HEAD
                    <p>Numero stanze:{{ apartment.num_rooms }}</p>
                    <p>{{ apartment.square_meters }} metri quadri</p>
                    <ul>
                        <template v-for="service in apartment.services" :key="service">
=======
                    <p>Numero stanze: {{ apartment.num_rooms }}</p>
                    <p>{{ apartment.square_meters }} metri quadri</p>
                    <ul>
                        <template v-for="service in apartment.services">
>>>>>>> 21bf3de42197f238e90344497789cf757ccd82d7
                            <li class="badge text-bg-info me-2">{{ service.name_service }}</li>
                        </template>
                    </ul>
                    <p>Prezzo: {{ apartment.price }}€</p>
                    <!-- ... altri dettagli dell'appartamento ... -->
<<<<<<< HEAD
                    <router-link :to="{ name: 'apartment-show', params: { id: apartment.id } }"
                        class="stretched-link"></router-link>
=======
                    <router-link :to="{ name: 'apartment-show', params: { id: apartment.id } }" class="stretched-link"></router-link>
>>>>>>> 21bf3de42197f238e90344497789cf757ccd82d7
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
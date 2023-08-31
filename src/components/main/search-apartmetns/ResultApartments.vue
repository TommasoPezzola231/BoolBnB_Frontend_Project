<script>
import { store } from "../../../store"


export default {
    name: 'ResultApartments',
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <div class="row mb-4">
        <h2 class="ms-4">Risultati ricerca</h2>
        <p>Appartamenti</p>

        <div v-if="store.apartments.length === 0">
          <p>Nessun appartamento trovato.</p>
        </div>
    
        <div v-else>
          <div v-for="apartment in store.apartments" :key="apartment.id" class="mb-3 card col-10 mx-auto">
            <!-- Visualizza le informazioni dell'appartamento -->
            <h3>{{ apartment.title }}</h3>
            <small>{{ apartment.city }}</small>
            <p>{{ apartment.description }}</p>
            <!-- ... altri dettagli dell'appartamento ... -->
          </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
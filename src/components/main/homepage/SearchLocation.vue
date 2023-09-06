<script>
import { store } from '../../../store.js';
import axios from 'axios';


export default {
    name: 'SearchLocation',

    data() {
        return {
            store,
            open: false,
            apartments: [],
        };
    },

    methods: {
        async searchApartment(city) {
            try {
                const response = await axios.get(`http://localhost:8000/api/ricerca`, {
                    params: {
                        city: city,
                    },
                });
                console.log(response)
                // Chiamata alla mutazione per salvare i risultati nello store
                this.store.apartments = response.data;
                this.store.city = city,
                    console.log(this.store.apartments),

                    // Reindirizzamento
                    this.$router.push({ name: 'apartments-index' });
            } catch (error) {
                console.error('Errore durante la ricerca:', error);
            }

        }
    },
}

</script>

<template>
    <!-- cerca citta -->
    <section class=" jumbo mt-5 py-5 ">
        <div class="row d-flex">
            <div class=" form col-6 col-md-6 col-lg-5  col-xl-4 mb-3 h-100">
                <div class=" p-4 m-4 text-light rounded-5 my_bg-jumbo">
                    <div class="">
                        <h1 class="display-5 fw-bold">Cerca il tuo prossimo soggiorno</h1>
                        <p class="col-md-8 fs-4 mt-3">Inserisci il nome della città</p>
                        <form @submit.prevent="searchApartment($event.target.city.value)">
                            <div class="form-floating mb-3 col-md-8 col-lg-5">
                                <input type="text" class="form-control text-dark" id="city" placeholder="Roma" name="city">
                                <label name="city" class="text-dark" for="floatingInput">Città</label>
                            </div>
                            <!-- bottone cerca -->
                            <input type="submit" value="Cerca" class="btn btn-lg my_btn">
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-6 d-flex justify-content-start">
                <img src="/src/assets/img/Appartamento-elegante.jpg" class="lounge" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.my_bg-jumbo {
    background-color: $bg-color-dark;

    .my_btn {
        background-color: $color-primary;
        border-color: $color-primary;
        border: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: $color-primary;
            border-color: $color-primary;
            border: none;
        }
    }
}

.lounge {
    position: relative;
    width: 900px;
    height: 500px;
    border-radius: 40px;
    z-index: 1;
    margin-left: 350px;
}

.form {
    position: absolute;
    margin-left: 180px;
    z-index: 2;
    height: 200px;
    width: 400px;
}
</style>
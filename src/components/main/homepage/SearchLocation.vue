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
    <section class="mt-5">
        <div class="row d-lg-flex align-items-center justify-content-center">
            <div class="col-11 col-md-10 col-lg-4 col-xl-4 mb-3 z-1 marginCustom">
                <div class="p-xl-5 p-lg-3 text-light rounded-4 my_bg-jumbo w-100">
                    <div class="">
                        <h1 class="display-5 fw-bold text-center text-lg-start pt-3">Cerca il tuo prossimo soggiorno</h1>
                        <p class="col-10 col-sm-6 col-lg-8 fs-4 mt-3 mx-auto ms-lg-0 text-center text-lg-start">Inserisci il nome della città</p>
                        <form @submit.prevent="searchApartment($event.target.city.value)">
                            <div class="form-floating mb-3 col-5 col-lg-8 mx-auto ms-lg-0">
                                <input type="text" class="form-control text-dark" id="city" placeholder="Roma" name="city">
                                <label name="city" class="text-dark" for="floatingInput">Città</label>
                            </div>
                            <!-- bottone cerca -->
                            <div class="d-flex d-lg-block justify-content-center py-2 py-lg-0">
                                <input type="submit" value="Cerca" class="mx-md-auto btn btn-lg my_btn">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-9 col-xl-8 mb-3 rounded-4 z-0 marginCustomImg">
                <img src="https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1" class="rounded-4 w-100" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.marginCustom {
    margin-top: 4rem;
    margin-right: -15rem;
}

@media (max-width: 991px) {
    .marginCustom {
        margin-right: 0;
        margin-top: 0;
    }
    .marginCustomImg{
        margin-top: -12rem;
    }
}

@media (max-width: 576px) {
    .marginCustom {
        margin-right: 0;
        margin-top: 0;
    }
    .marginCustomImg{
        margin-top: -5rem;
    }
}
.marginCustomImg {
}

.my_bg-jumbo {
    background: #355C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


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
</style>
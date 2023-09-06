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
    <section class=" jumbo mt-5 py-5">
        <div class="row d-flex">
            <div class=" form col-6 col-md-6 col-lg-5  col-xl-4 mb-3 h-100">
                <div class=" form-body p-4 m-4 text-light rounded-5 my_bg-jumbo">
                    <div class="">
                        <h1 class="display-5 fw-bold">Cerca il tuo prossimo soggiorno</h1>
                        <p class="col-md-8 fs-4 mt-3">Inserisci il nome della città</p>
                        <form @submit.prevent="searchApartment($event.target.city.value)">
                            <div class="form-floating mb-3 col-md-8 col-lg-5">
                                <input type="text" class="form-control" id="city" placeholder="Cerca..." name="city">
                                <label name="city" class="text-dark" for="floatingInput">Cerca..</label>
                            </div>
                            <!-- bottone cerca -->
                            <input type="submit" value="Cerca" class="btn btn-lg">
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

    .btn {
        width: 150px;
        font-size: 1.2rem;
        background: transparent;
        color: lightslategray;
        border: 1px solid $headerLinks;
        border-radius: 10px;
        margin: 1rem;
        background: transparent;


        &:hover {
            background-color: $bg-light-pink;
            color: $headerLinks;
            outline-color: $headerLinks;
            transform: scale(1.2);
            transition: 0.3s;
        }

        &:active {
            background-color: transparent;
            color: $headerLinks;
            box-shadow: 3px 6px 8px 1px rgba(149, 103, 176, 0.9);
            transform: translateY(4px);
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
    margin-top: -110px;
    z-index: 2;
    height: 200px;
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;


    .form-body {

        background-color: $bg-color-light;

        h1 {
            font-size: 2.2rem;
        }

        h1,
        p {

            color: lightslategray;
        }
    }
}
</style>
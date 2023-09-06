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
    <section class=" jumbo mt-4">
        <div class="row d-flex">
            <div class=" form col-6 col-md-6 col-lg-5  col-xl-4 mb-3 h-100">
                <div class=" form-body p-4 m-4 text-light rounded-5 my_bg-jumbo">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h1 class="display-5 fw-bold text-black">Cerca il tuo prossimo soggiorno</h1>
                        <p class="col-md-8 fs-4 mt-3">Inserisci il nome della città</p>
                        <form @submit.prevent="searchApartment($event.target.city.value)">
                            <div class="InputContainer form-floating mb-3 col-md-8 col-lg-5">
                                <input placeholder="Inserisci la città..." type="text" class="form-control input" id="city"
                                    name="city">
                                <label name="city" class="text-dark" for="floatingInput">Inserisci la città...</label>
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
@import '../../../styles/main.scss';

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


    @include flex(center, center, center); // display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;


    .form-body {

        background-color: $bg-color-light;
        border: 2px solid $bg-light-pink;

        h1 {
            font-size: 2.2rem;
        }

        h1,
        p {

            color: lightslategray;
        }
    }

    .InputContainer {
        width: 210px;
        height: 50px;
        // background: linear-gradient(to bottom, rgb(227, 213, 255), rgb(255, 231, 231));
        border-radius: 30px;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
        @include flex(center, center, center);
    }

    .input {
        width: 200px;
        height: 40px;
        border: none;
        outline: none;
        // caret-color: rgb(255, 81, 0);
        // background-color: rgb(255, 255, 255);
        border-radius: 30px;
        padding-left: 15px;
        letter-spacing: 0.8px;
        color: rgb(19, 19, 19);
        font-size: 13.4px;
    }
}
</style>
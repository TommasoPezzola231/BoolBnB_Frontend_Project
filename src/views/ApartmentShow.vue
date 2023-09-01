<script>

import axios from 'axios';
import HeaderApp from '../components/header/HeaderApp.vue'
import FooterApp from '../components/footer/FooterApp.vue'
import ContactAparment from '../components/main/messageForm/ContactAparment.vue';

export default {
    name: 'ApartmentShow',
    components: {
        HeaderApp,
        ContactAparment,
        FooterApp,

    },

    data() {
        return {
            // 
        };
    },
}
</script>

<template>
    <section>
        <div class="container-fluid container-img">
            <div class="row">
                <div class="col">
                    <h1>Titolo appartamento</h1>
                    <div class="d-flex">Posizione</div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 mt-2">
                    <div class="big-img-placeholder">Placeholder principal image</div>
                </div>
                <div class="col-6 mt-2">
                    <div class="row">
                        <div class="col-6 d-flex">
                            <div class="small-img-placeholder">Placeholder principal image</div>
                        </div>
                        <div class="col-6">
                            <div class="small-img-placeholder">Placeholder principal image</div>
                        </div>
                        <div class="col-6">
                            <div class="small-img-placeholder">Placeholder principal image</div>
                        </div>
                        <div class="col-6">
                            <div class="small-img-placeholder">Placeholder principal image</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p class="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae corporis est,
                        expedita vel
                        commodi eveniet, maxime doloribus temporibus saepe laboriosam enim rem, molestias ea. Fuga, earum?
                        Minus culpa ipsa ducimus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
                        impedit illo, aut laudantium, deleniti porro, assumenda quasi cumque explicabo repudiandae at
                        voluptatibus hic quo fuga tempore. Numquam non ad aut.
                    </p>
                </div>
                

            </div>
        </div>
        <!-- form ivio messaggio -->
        <div class="my_form">
            <ContactAparment />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';
@import '../styles/partials/variables';

section {
    padding: 2rem;
    // giusto per staccare dai bordi
}

// placheholder debugging

.container-img {
    height: 400px;
}

.big-img-placeholder {
    width: 100%;
    background-color: bisque;
    height: 400px;
    border-radius: 20px;
}

.small-img-placeholder {
    width: 100%;
    background-color: bisque;
    height: 200px;
    border-radius: 20px;
}

.my_form {
    margin-top: 400px;
    width: 400px;
}
</style>
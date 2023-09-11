<script>
import axios from 'axios';

export default {
    name: 'ApartmentShow',

    props: {
        apartment: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            ApiUrl: "http://localhost:8000/api/messages/store",
            name_sender: "",
            surname_sender: "",
            email_sender: "",
            message_object: "",
            message_text: "",
            apartment_id: [],
            loading: false,
        };
    },

    methods: {

        SendRequest() {

            this.loading = true

            let data = {
                name_sender: this.name_sender,
                surname_sender: this.surname_sender,
                email_sender: this.email_sender,
                message_object: this.message_object,
                message_text: this.message_text,
                apartment_id: this.apartment.id,
            }

            axios.post(this.ApiUrl, data).then((result) => {
                console.log(result);

                this.loading = false
                this.name_sender = ""
                this.surname_sender = ""
                this.email_sender = ""
                this.message_object = ""
                this.message_text = ""
                this.apartment_id = ""
                alert("Messaggio inviato con successo")

            }).catch((err) => {
                console.log('axios error:', err);
                this.loading = false
                alert("Errore nell'invio del messaggio")
            })
        },
    },
}

</script>

<template>
    <div class="row p-3 p-lg-0">
        <div class="col">

            <form @submit.prevent="SendRequest()" class="col-12 mx-auto">

                <div class="mb-3">
                    <label for="name_sender" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="name_sender" v-model="name_sender">
                </div>

                <div class="mb-3">
                    <label for="surname_sender" class="form-label">Cognome</label>
                    <input type="text" class="form-control" id="surname_sender" v-model="surname_sender">
                </div>

                <div class="mb-3">
                    <label for="email_sender" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email_sender" v-model="email_sender">
                </div>

                <div class="mb-3">
                    <label for="message_object" class="form-label">Oggetto</label>
                    <input type="text" class="form-control" id="message_object" v-model="message_object">
                </div>

                <div class="mb-3">
                    <label for="message_text" class="form-label">Messaggio</label>
                    <textarea class="form-control" name="message_text" id="message_text" v-model="message_text"></textarea>
                </div>

                <input type="hidden" name="apartment_id" v-model="apartment.id">
                <div class="d-flex align-itemse-center justify-content-center justify-content-lg-start">
                    <button type="submit" class="btn my_btn mb-3" :disabled="loading"> {{ loading ? "Invio in corso.." : "Contatta host" }} </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

</script>

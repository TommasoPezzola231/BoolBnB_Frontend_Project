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
            errors: [],
            successModalVisible: false,
            errorModalVisible: false,
        };
    },

    methods: {

        showErrorModal(message) {
            this.errorMessage = message;
            $('#errorModal').modal('show');
        },

        SendRequest() {

            this.loading = true
            this.errors = []

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

                let success = result.data.success;

                if(!success) {
                    console.error("Ci sono stati errori", result.data.errors);
                    this.errors = result.data.errors;
                    this.loading = false
                } else {
                    this.loading = false
                    this.name_sender = ""
                    this.surname_sender = ""
                    this.email_sender = ""
                    this.message_object = ""
                    this.message_text = ""
                    this.apartment_id = ""
                    // alert('Messaggio inviato con successo')
                // Show success modal
                this.successModalVisible = true;
                setTimeout(() => {
                    this.successModalVisible = false;
                }, 3000);
                }

                
            }).catch((err) => {
                console.log('axios error:', err);
                this.loading = false
                // alert('Errore durante l\'invio del messaggio')
                // Show error modal
                this.errorModalVisible = true;
                setTimeout(() => {
                    this.successModalVisible = false;
                }, 3000);
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
                    <label for="name_sender" class="form-label" >Nome</label>
                    <input type="text" class="form-control" id="name_sender" v-model="name_sender" >
                    <p v-for="error in errors.name_sender" class="bg-danger-subtle rounded ps-1">{{ error }}</p>
                </div>

                <div class="mb-3">
                    <label for="surname_sender" class="form-label" >Cognome</label>
                    <input type="text" class="form-control" id="surname_sender" v-model="surname_sender" >
                    <p v-for="error in errors.surname_sender" class="bg-danger-subtle rounded ps-1">{{ error }}</p>
                </div>

                <div class="mb-3">
                    <label for="email_sender" class="form-label" >Email</label>
                    <input type="email" class="form-control" id="email_sender" v-model="email_sender" >
                    <p v-for="error in errors.email_sender" class="bg-danger-subtle rounded ps-1">{{ error }}</p>
                </div>

                <div class="mb-3">
                    <label for="message_object" class="form-label" >Oggetto</label>
                    <input type="text" class="form-control" id="message_object" v-model="message_object" >
                    <p v-for="error in errors.message_object" class="bg-danger-subtle rounded ps-1">{{ error }}</p>
                </div>

                <div class="mb-3">
                    <label for="message_text" class="form-label" >Messaggio</label>
                    <textarea class="form-control" name="message_text" id="message_text" v-model="message_text" ></textarea>
                    <p v-for="error in errors.message_text" class="bg-danger-subtle rounded ps-1">{{ error }}</p>
                </div>

                <input type="hidden" name="apartment_id" v-model="apartment.id">
                <div class="d-flex align-itemse-center justify-content-center justify-content-lg-start">
                    <button type="submit" class="btn my_btn mb-3" :disabled="loading"> {{ loading ? "Invio in corso.." : "Contatta host" }} </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal successo -->
    <div v-if="successModalVisible" class="modal-overlay d-block shadow p-2">
        <div class="modal-dialog my_success shadow modal-dialog-centered">
            <div class="modal-content text-center">
                <div class="">
                    <div>
                        <font-awesome-icon :icon="['fas', 'envelope-circle-check']" class="my_color_green"/>
                    </div>
                    <h3 class="modal-title">Messaggio inviato!</h3>
                </div>
                <div class="modal-body">
                    <p class="text-success m-0">L'Host ti contattera a breve.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal error -->
    <div v-if="errorModalVisible" class="modal-overlay d-block shadow p-2">
        <div class="modal-dialog my_error shadow modal-dialog-centered">
            <div class="modal-content text-center">
                <div class="modal-header d-flex align-itmes-center">
                    <div>
                        <font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="my_color_red" />
                    </div>
                    <h3 class="modal-title">Errore nell'invio del messaggio!</h3>
                </div>
                <div class="modal-body">
                    <p class="text-danger">Ritenta l'invio, controlla che i dati inseriti siano esatti.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.my_color_green {
    color: $color-success;
}

.my_color_red {
    color: $color-primary;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(68, 67, 67, 0.575);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;

        h2 {
            font-size: 1.5rem;
            font-weight: bold;
            color: $color-primary;
        }
    }

    .modal-body {
        margin-bottom: 1.25rem;

    }

    .modal-dialog {
        background-color:$bg-light;
        border-radius: 10px;
        max-width: 25rem;
        padding: 1.25rem;
        text-align: center;
    }

    .my_error {
        border: 2px solid $color-primary;
    }

    .my_success {
        border: 2px solid $color-success;
    }
}

</style>

import { reactive } from 'vue'

import axios from 'axios';

export const store = reactive({
    // path - api
    serverPath: 'http://localhost:8000',
    serverApartmentsPath: 'http://localhost:8000/api/apartments',
    // map - geo location
    lat: '',
    lon: '',
    address: '',
    range: 20,
});
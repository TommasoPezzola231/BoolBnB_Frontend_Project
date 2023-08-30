import { reactive } from 'vue'

import axios from 'axios';

export const store = reactive({
    // url per axios
    url: 'http://localhost:8000/',
    // apiUrl per axios
    apiUrl : 'http://localhost:8000/api/',
    // storageUrl per axios
    storageUrl : 'http://localhost:8000/storage/',
    // map - geo location
    lat: '',
    lon: '',
    address: '',
    range: 20,
});
import { reactive } from 'vue'

import axios from 'axios';

export const store = reactive({
    // path - api
    serverPath: 'http://localhost:8000',
    
    // map - geo location
    lat: '',
    lon: '',
    address: '',
    range: 20,
    apiKey: process.env.VUE_APP_TOMTOM_API_KEY,
});
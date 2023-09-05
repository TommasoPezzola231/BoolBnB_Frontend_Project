import { reactive } from 'vue'

import axios from 'axios';

export const store = reactive({
    // url per axios
    baseUrl: 'http://localhost:8000',
    // apiUrl per axios
    apiEndpoint: '/api',
    // storageUrl per axios
    storageUrl: 'http://localhost:8000/storage/',
    // map - geo location
    lat: '',
    lon: '',
    address: '',
    range: 20,
    city: "",
    apartments: [],
    services: [],
    // key tom tom 
    TOMTOM_API_KEY:'nkr5gnmh40fpVDC8AD8yeyHG6DnNrhZT',
});
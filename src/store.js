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
    menuVisible: false,
    currentPage: 0,
    lastPage: 0,
    apartmentsSponsor: [],
    // key tom tom 
    TOMTOM_API_KEY:'J7Pg0CIa2F4S6QGKj0csMy00adFLdu3Q',
    // nkr5gnmh40fpVDC8AD8yeyHG6DnNrhZT

    imageArray:[
        {
            "image": "Appartamento-elegante.jpg"
        },
        {
            "image": "Appartamento.jpg"
        },
        {
            "image": "Camera-da-lettojpg"
        },
        {
            "image": "Campagna.jpg"
        },
        {
            "image": "casa sul mare.jpg"
        },
        {
            "image": "Casa-in-montagna.jpg"
        },
        {
            "image": "Mare.jpg"
        },
        
    ]
});
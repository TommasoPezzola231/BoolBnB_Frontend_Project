<script>
import tt from '@tomtom-international/web-sdk-maps';
import { store } from '../../../store.js';

export default {
    name: 'MapSingle',

    props: {
        apartemnt: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
            store,
        };
    },

    methods: {

        getSignleMap() {
            let map = null;

            map = tt.map({
                key: this.store.TOMTOM_API_KEY,
                container: 'map',
                center: [this.apartemnt.longitude, this.apartemnt.latitude],
                zoom: 15,
                radius: 20000,
            });

            new tt.Marker().setLngLat([this.apartemnt.longitude, this.apartemnt.latitude]).addTo(map);
           
            map.addControl(new tt.NavigationControl());

            return map;
        },
    },

    mounted() {
        this.getSignleMap();
    },
}
</script>

<template>
    <div id="map" class="map"></div>
</template>

<style lang="scss" scoped>


.map {
    width: 50px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-top: 20px;
}

@media (max-width: 576px) {
    #map{
        width: 100px;
    }
}
@media (max-width: 768px) {
    #map{
        width: 200px;
    }
}

@media (max-width: 992px) {
    #map{
        width: 300px;
    }
}

@media (max-width: 1200px) {
    #map{
        width: 400px;
    }
}
@media (min-width: 1200px) {
    #map{
        width: 400px;
    }
}



</style>
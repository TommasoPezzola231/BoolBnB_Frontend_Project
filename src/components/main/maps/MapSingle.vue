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
    width: 100%;
    height: 400px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-top: 20px;
}

</style>
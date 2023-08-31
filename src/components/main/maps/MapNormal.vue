<script>
import tt from '@tomtom-international/web-sdk-maps';
// import { defineComponent } from 'vue';
import { store } from '../../../store.js';
// import { onMounted } from 'vue';

export default {
    name: 'MapNormal',
    props: {
        lat: {
            type: Number,
            required: true
        },
        lon: {
            type: Number,
            required: true
        },
        TOMTOM_API_KEY: {
            type: String,
            required: true
        },
        apartments: {
            type: Array,
            required: true
        },
    },

    data () {
        return {
            store,
        }
    },

    methods: {
        getMap() {
            let map = null;

            if (this.TOMTOM_API_KEY) {
                map = tt.map({
                    key: this.TOMTOM_API_KEY,
                    container: 'map',
                    center: [this.lon, this.lat],
                    zoom: 15,
                    radius: 20000,
                });

                this.apartments.forEach(apartment => {
                    const marker = new tt.Marker({ element: this.createMarkerElement(apartment.price)})
                        .setLngLat([apartment.longitude, apartment.latitude])
                    marker.addTo(map);

                    marker.setPopup(new tt.Popup().setHTML( `<h6>${apartment.title}</h6><p>${apartment.address}</p>`));
                });

                map.addControl(new tt.NavigationControl(
                    { 
                        showCompass: false, 
                        showZoom: true,
                    }
                ));
                map.addControl(new tt.ScaleControl(
                    { 
                        position: 'bottom-left',
                        maxWidth: 80,
                        unit: 'metric',
                    }
                ));          
                map.addControl(new tt.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true,
                    },
                    trackUserLocation: true
                }));
                map.keyboard.enable(
                    { 
                        pan: true,
                        zoom: true,
                    }
                );

                return { map };

            } else {
                console.log('API key is not defined');
            }
        },

        createMarkerElement(text) {
            const element = document.createElement('div');
            element.className = 'marker';
            element.innerHTML = text + `€`;
            return element;
        },
    },

    mounted() {
        this.getMap();
    },
}
</script>

<template>
    <div id="map" class="my_map_normal"></div>
</template>

<style lang="scss" scoped>

.my_map_normal {
    width: 100%;
    position: relative;
    height: 25rem;
    cursor: pointer;

    .marker {
        background-color: $color-white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(199, 91, 91);
    }
}
</style>
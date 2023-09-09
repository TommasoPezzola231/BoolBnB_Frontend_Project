import { createApp } from 'vue'
import App from './App.vue';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// style
import './styles/main.scss';
// router
import { router } from './router';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// icone
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faHotTubPerson } from "@fortawesome/free-solid-svg-icons";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faSoap } from "@fortawesome/free-solid-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSmoking } from "@fortawesome/free-solid-svg-icons";
import { faKitMedical } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faToilet } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';


library.add(faGithub);
library.add(faChevronDown);
library.add(faWifi);
library.add(faPersonSwimming);
library.add(faDumbbell);
library.add(faHotTubPerson);
library.add(faSquareParking);
library.add(faFan);
library.add(faTemperatureArrowUp);
library.add(faMugSaucer);
library.add(faTv);
library.add(faKitchenSet);
library.add(faSoap);
library.add(faShirt);
library.add(faWind);
library.add(faSmoking);
library.add(faKitMedical);
library.add(faDog);
library.add(faFire);
library.add(faWater);
library.add(faXmark);
library.add(faToilet);
library.add(faHouse);
library.add(faRulerCombined);
library.add(faEuroSign);
library.add(faLocationDot);
library.add(faTriangleExclamation);




createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

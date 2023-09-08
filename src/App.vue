<script>
import { store } from "./store.js"
import axios from 'axios';

import HeaderApp from './components/header/HeaderApp.vue'
import FooterApp from './components/footer/FooterApp.vue'

export default {
  name: 'App',

  components: {
    HeaderApp,
    FooterApp,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getServices() {
      axios.get('http://localhost:8000/api/allServices')
        .then((result) => {
          this.store.services = result.data.services;
          console.log(this.store.services)
        })
    },
  },

  mounted() {
    this.getServices()
  },

}

</script>

<template>
  <header>
    <HeaderApp />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <FooterApp />
  </footer>
</template>

<style lang="scss" scoped>
@import './styles/main.scss';

header {
  height: 5rem;
  background-color: $color-white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

main {
  margin-top: 5rem;
  margin-bottom: 5rem;
  min-height: calc(100vh - 10rem);
  background: #ADA996;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

footer {
  height: 5rem;
  background-color: $color-white;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}

@media (max-width: 992px) {
    footer{
      display: none;
    }
}

</style>

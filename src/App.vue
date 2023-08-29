<script>
import { store } from "./store.js"
import axios from 'axios';

import HeaderApp from './components/header/HeaderApp.vue'
import FooterApp from './components/footer/FooterApp.vue'

export default {
  name: 'App',

  components: {
    HeaderApp,
    FooterApp
  },

  data () {
    return {
      store,
    }
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
  background-color: $primary-color;
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
  background-color: $color-black;
}

footer {
  height: 5rem;
  background-color: $primary-color;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}
</style>

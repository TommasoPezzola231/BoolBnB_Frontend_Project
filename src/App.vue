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

</style>

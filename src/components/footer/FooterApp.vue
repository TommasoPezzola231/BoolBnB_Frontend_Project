<script>

export default {
  name: 'FooterApp',

  props: {
    title: {
      type: String,
      default: 'BoolBnB'
    }
  },
  data() {
    return {
    }
  },
}

</script>

<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- <hr class="border border-dark border-1"> -->
          <div class="d-flex justify-content-between align-items-center justify-content-center ">
            <img src="/src/assets/logo/Bool BnB_Black.png" class="logo " alt="">
            <div class="">{{ title }}</div>
            <div class="my_nav_link col-6 d-flex gap-2 justify-content-center">
              <router-link to="/about">About</router-link>
              <router-link to="/contact">Contact</router-link>
              <router-link to="/privacy">Privacy</router-link>
              <router-link to="/terms">Terms</router-link>
            </div>

            <span class=" col-4 d-flex flex-wrap gap-2 justify-content-center">
              <div>Realizzato da</div>
              <span>
                <font-awesome-icon :icon="['fab', 'github']" />
              </span>
              <a class="text-decoration-none text-black" href="https://github.com/MarikaDiGirolamo" target="_blank"
                rel="noopener noreferrer">Marika</a>
              <a class="text-decoration-none text-black" href="https://github.com/valeriobilli" target="_blank"
                rel="noopener noreferrer">Valerio</a>
              <a class="text-decoration-none text-black" href="https://github.com/TommasoPezzola231" target="_blank"
                rel="noopener noreferrer">Tommaso</a>
              <a class="text-decoration-none text-black" href="https://github.com/LorenzoSeverini" target="_blank"
                rel="noopener noreferrer">Lorenzo</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.logo {
  height: 50px;
  width: 50px;
}

.my_nav_link {
  background-color: transparent;

  a {
    color: black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $color-primary;
      text-decoration: none;
    }
  }
}
</style>
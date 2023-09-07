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
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-12 h-100">
          <!-- <hr class="border border-dark border-1"> -->
          <div class="d-flex justify-content-between align-items-center justify-content-center ">
            <a href="" class="mt-4"><img src="/src/assets/logo/Bool BnB_Black.png" class="logo " alt=""></a>
            <a href="" class="title mt-4"> &#169;2023 {{ title }}</a>
            <div class="my_nav_link col-4 d-flex gap-3 mt-4 justify-content-center">
              <a href=""><router-link to="/about">About</router-link></a>
              <a href=""><router-link to="/contact">Contact</router-link></a>
              <a href=""><router-link to="/privacy">Privacy</router-link></a>
              <a href=""><router-link to="/terms">Terms</router-link></a>
            </div>

            <span class=" col-4 d-flex flex-wrap gap-2 justify-content-center">
              <div class="team mt-4" id="">Realizzato da</div>
              <span>
                <font-awesome-icon class="mt-4" :icon="['fab', 'github']" />
              </span>
              <a class="text-decoration-none mt-4" href="https://github.com/MarikaDiGirolamo" target="_blank"
                rel="noopener noreferrer">Marika</a>
              <a class="text-decoration-none mt-4" href="https://github.com/valeriobilli" target="_blank"
                rel="noopener noreferrer">Valerio</a>
              <a class="text-decoration-none mt-4" href="https://github.com/TommasoPezzola231" target="_blank"
                rel="noopener noreferrer">Tommaso</a>
              <a class="text-decoration-none mt-4" href="https://github.com/LorenzoSeverini" target="_blank"
                rel="noopener noreferrer">Lorenzo</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.container-fluid {
  -webkit-box-shadow: 0px -4px 10px -5px #000000;
  box-shadow: 0px -4px 10px -5px #000000;

  @include linkFooter;

}

.logo {
  height: 50px;
  width: 50px;
  margin-top: -10px;

}

.title {
  margin-left: -30px;
}

.my_nav_link {
  margin-left: 250px;
}

.team {
  font-size: 1rem;
  margin-left: 100px;
  color: $color-lavander;
}
</style>
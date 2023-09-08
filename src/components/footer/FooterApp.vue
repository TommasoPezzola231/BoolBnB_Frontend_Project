<script>

export default {
  name: 'FooterApp',

  props: {
    title: {
      type: String,
      default: 'BoolBnB'
    }
  },
  data () {
    return {
    }
  },
}

</script>

<template>
  <section>
    <div class="container-fluid">
      <div class="row">
          <hr class="border border-dark border-1">
            <div class="d-flex justify-content-between align-items-center ">
              <!-- <div class="col-lg-1 col-xl-3 linkFooter fontCustom d-none d-xl-block">{{ title }}</div> -->

              <div class="col-lg-5 d-flex justify-content-evenly align-items-center text-center">
                <router-link to="/about" class="linkFooter fontCustom">About</router-link>
                <router-link to="/contact" class="linkFooter fontCustom">Contact</router-link>
                <router-link to="/privacy" class="linkFooter fontCustom">Privacy</router-link>
                <router-link to="/terms" class="linkFooter fontCustom">Terms</router-link>
              </div>

              <span class="col-lg-6 col-xl-5 d-flex justify-content-evenly align-items-center gap-2 text-center">
                <div class="me-3 fontCustom">Realizzato da <font-awesome-icon :icon="['fab', 'github']" class="me-3" /></div>
              
                <a class="text-decoration-none linkFooter fontCustom me-3" href="https://github.com/MarikaDiGirolamo" target="_blank" rel="noopener noreferrer">Marika</a> 
                <a class="text-decoration-none linkFooter fontCustom me-3" href="https://github.com/valeriobilli" target="_blank" rel="noopener noreferrer">Valerio</a>
                <a class="text-decoration-none linkFooter fontCustom me-3" href="https://github.com/TommasoPezzola231" target="_blank" rel="noopener noreferrer">Tommaso</a>
                <a class="text-decoration-none linkFooter fontCustom me-3" href="https://github.com/LorenzoSeverini" target="_blank" rel="noopener noreferrer">Lorenzo</a>
              </span>
          </div>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@include linkFooter;
.titolo {
  color: $color-primary;
}
  .linkFooter {
      cursor: pointer;
      color: $color-black;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      line-height: normal;

      &:hover {
          color: $color-primary;
          text-decoration: none;
      }
  }

</style>
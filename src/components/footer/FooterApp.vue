<script>
export default {
  name: 'FooterApp',

  props: {
    title: {
      type: String,
      default: 'BoolBnB'
    },
    logo: {
      type: String,
      default: 'src/assets/logo/Bool_BnB_Black.png'
    },
  },
  data () {
    return {
      title: 'BoolBnB'
    }
  },
}

</script>

<template>
  <section class="h-100 d-flex align-items-center justify-content-center"> 
    <div class="container-fluid">
      <div class="row d-flex align-items-center flex-lg-nowrap gap-2 py-4">
        <!-- sinistra -->
        <div class="col-12 col-lg-6 px-0">
          <div class="d-lg-flex gap-3">
            <div class="d-lg-flex align-items-center">
              <div class="d-flex justify-content-center align-items-center">
                <!-- <img src="../../assets/logo/Bool BnB_Black.png" class="my_logo" alt="Logo"> -->
                <!-- use import logo from '@/assets/logo/Bool BnB_Black.png'; -->
              <img src="/src/assets/logo/Bool_BnB_Black.png" class="my_logo" alt="Logo">


              </div>
              <h1 class="m-0 py-2 py-lg-0 text-center my_color_footer_header">{{ title }}</h1>
            </div>
            <div class="d-flex align-items-center justify-content-center gap-2 mb-2 mb-lg-0">
              <a href="#" class="text-decoration-none linkFooter">About</a>
              <a href="#" class="text-decoration-none linkFooter">Contact</a>
              <a href="#" class="text-decoration-none linkFooter">Privacy</a>
              <a href="#" class="text-decoration-none linkFooter">Terms</a>
            </div>
          </div>
        </div>
        <!-- destra -->
        <div class="col-12 col-lg-6">
          <div class="d-md-flex align-items-center justify-content-md-center justify-content-lg-end me-lg-3 gap-2">
            <div class="cursor-pointer text-center">Realizzato da <font-awesome-icon :icon="['fab', 'github']"/></div>
            <div class="d-flex gap-2 justify-content-center mt-3 mt-md-0">
              <a class="text-decoration-none linkFooter" href="https://github.com/MarikaDiGirolamo" target="_blank" rel="noopener noreferrer">Marika</a> 
              <a class="text-decoration-none linkFooter" href="https://github.com/valeriobilli" target="_blank" rel="noopener noreferrer">Valerio</a>
              <a class="text-decoration-none linkFooter" href="https://github.com/TommasoPezzola231" target="_blank" rel="noopener noreferrer">Tommaso</a>
              <a class="text-decoration-none linkFooter" href="https://github.com/LorenzoSeverini" target="_blank" rel="noopener noreferrer">Lorenzo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@include linkFooter;

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

.my_logo {
    width: 6.25rem;
    height: 6.25rem;
}

.my_color_footer_header {
    color: $color-primary;
}

</style>
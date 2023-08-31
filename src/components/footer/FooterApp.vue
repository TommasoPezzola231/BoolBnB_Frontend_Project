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
        <div class="col-12">
          <hr class="border border-dark border-1">
            <div class="d-flex justify-content-between align-items-center gap-2 ">
              <div class="">{{ title }}</div>
              <span class="d-flex flex-wrap gap-2">
                <div>Realizzato da</div>
              <span>
                <font-awesome-icon :icon="['fab', 'github']" />
              </span>
                <a class="text-decoration-none text-primary" href="https://github.com/MarikaDiGirolamo" target="_blank" rel="noopener noreferrer">Marika</a> 
                <a class="text-decoration-none text-primary" href="https://github.com/valeriobilli" target="_blank" rel="noopener noreferrer">Valerio</a>
                <a class="text-decoration-none text-primary" href="https://github.com/TommasoPezzola231" target="_blank" rel="noopener noreferrer">Tommaso</a>
                <a class="text-decoration-none text-primary" href="https://github.com/LorenzoSeverini" target="_blank" rel="noopener noreferrer">Lorenzo</a>
              </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
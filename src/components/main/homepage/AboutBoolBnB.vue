<script>

export default {
    name: 'AboutBoolBnB',

    data () {
        return { 
            title : 'BoolBnB',
        }
    },
}
</script>

<template>
  <section class="mt-5">
    <div class="row">
      <div class="col-lg-6">
        <h2 class="text-center position-relative fs-1 fw-bold">
          About BoolBnB
          <span class="sottolineatura position-absolute top-100 start-50 translate-middle rounded"></span>
        </h2>
      </div>
    </div>
    <div class="row py-3 mb-5">
      <div class="col-12 col-lg-6 d-flex align-items-start align-items-lg-center">
        <div class="p-2 text-center">
          <p class="lead mb-4 text-dark">BoolBnB è un'app che ti permette di trovare l'appartamento ideale per le tue vacanze o per un viaggio di lavoro in Italia. Con una vasta selezione di appartamenti, puoi trovare la soluzione perfetta per ogni occasione.</p>
          <p class="text-dark">Scopri i nostri appartamenti di alta qualità, con una varietà di opzioni in diverse città italiane. Sia che tu stia cercando una vacanza rilassante o un soggiorno di lavoro comodo, BoolBnB ha quello che fa per te.</p>
        </div>
      </div>
      <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center mx-auto py-4">
        <div id="carouselExampleSlidesOnly" class="carousel slide dimensioni_img object-fit-cover" data-bs-ride="carousel">
          <div class="carousel-inner rounded shadow">
            <div class="carousel-item active">
              <img src="../../../assets/img/r-architecture-KpMj15W7otY-unsplash.jpg" class="d-block w-100 h-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../../assets/img/robin-van-geenen-YBcjvOiwMXM-unsplash.jpg" class="d-block w-100 h-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../../assets/img/r-architecture-wot0Q5sg91E-unsplash.jpg" class="d-block w-100 h-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../../assets/img/zac-gudakov-mw_mj-noYHM-unsplash.jpg" class="d-block w-100 h-100" alt="...">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h2{
  color: $color-primary;
}

.dimensioni_img{
  max-width: 43.125rem;
  max-height: 400px;
}

.sottolineatura {
    width: 20%;
    height: 2px;
    background-color: $color-primary;
}
</style>
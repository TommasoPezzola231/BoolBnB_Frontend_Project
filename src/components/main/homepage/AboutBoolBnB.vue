<script>

export default {
  name: 'AboutBoolBnB',

  data() {
    return {
      title: 'BoolBnB',
    }
  },
}
</script>

<template>
  <section class="mt-5">
    <div class="row">
      <div class="col-lg-6 mb-3">
        <h2 class="mb-4 text-center">About BoolBnB</h2>
        <p class="lead mb-4 text-black">BoolBnB è un'app che ti permette di trovare l'appartamento ideale per le tue
          vacanze o per un viaggio di lavoro in Italia. Con una vasta selezione di appartamenti, puoi trovare la soluzione
          perfetta per ogni occasione.</p>
        <p class="text-black">Scopri i nostri appartamenti di alta qualità, con una varietà di opzioni in diverse città
          italiane. Sia che tu stia cercando una vacanza rilassante o un soggiorno di lavoro comodo, BoolBnB ha quello che
          fa per te.</p>
      </div>
      <div class="col-lg-6 d-flex align-items-center">
        <img src="https://dummyimage.com/640x360/fff/aaa" class="img-fluid rounded" alt="BoolBnB Image">
      </div>
    </div>
    <hr class="border border-dark border-1 mt-5">
  </section>
</template>

<style lang="scss" scoped>
img {
  border: 1px solid black;
}
</style>
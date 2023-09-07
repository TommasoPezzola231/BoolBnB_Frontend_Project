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
    <h2 class="mb-5 text-center" id="about">About BoolBnB</h2>
    <div class="container pt-4">
      <div class="row">
        <div class="col-lg-6 mb-3 mt-4">
          <div class="description mt-5">
            <p align="justify" class="lead mx-3 text-black"> <span>BoolBnB</span> è un'app che ti permette di trovare
              l'appartamento
              ideale per
              le tue
              vacanze o per un viaggio di lavoro in Italia. Con una <span>vasta selezione di appartamenti</span>, puoi
              trovare la
              soluzione
              perfetta per ogni occasione. Scopri i nostri appartamenti di <span>alta qualità</span>, con una varietà di
              opzioni in
              diverse città
              italiane. Sia che tu stia cercando una vacanza rilassante o un soggiorno di lavoro comodo,
              <span>BoolBnB</span> ha quello
              che
              fa per te.
            </p>
          </div>

        </div>
        <div class="col-lg-6 d-flex align-items-center">
          <img src="https://dummyimage.com/640x360/fff/aaa" class="img-fluid rounded" alt="BoolBnB Image">
        </div>
      </div>
      <!-- <hr class="border border-dark border-1 mt-5"> -->

    </div>
  </section>
</template>

<style lang="scss" scoped>
// @import '../../../styles/main.scss';
// @use '../../../styles/partials/_mixins.scss' as *;
// @use '../../../styles/partials/_variables.scss' as *;

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: $color-lavander;

  // text-shadow: 1px 4px 2px #ebc3f1;
  &:after {
    content: ' ';
    display: block;
    border: 1px solid $color-lavander;
    width: 25%;
    border-radius: 4px;
    margin: 1rem 0 0 560px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
  }
}

p {
  font-size: 1.3rem;
}

span {
  color: $headerLinks;
  font-weight: bold;
}



img {
  border: 1px solid black;
}

.row::after {
  content: ' ';
  display: block;
  border: 1px solid $color-lavander;
  width: 100%;
  border-radius: 4px;
  margin: 5rem 0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
</style>
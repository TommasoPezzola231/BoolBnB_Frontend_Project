<script>

export default {
  name: 'HeaderApp',

  data () {
    return {
        navLinks: [
            { routeName: '/', label: 'Home'},
            { routeName: '/apartments', label: 'Apartments'}
        ]
    }
  },
}

</script>

<template>
   <section>
        <h1>Header</h1>

        <template v-for="item in navLinks">
            <router-link class="btn btn-secondary ms-3" :to="item.routeName">{{item.label}}</router-link>
        </template>
   </section>
</template>

<style lang="scss" scoped>

</style>
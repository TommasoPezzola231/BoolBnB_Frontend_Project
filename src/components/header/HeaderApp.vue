<script>

export default {
  name: 'HeaderApp',

  data () {
    return { 
      title : 'BoolBnB',
    }
  },
}

</script>

<template>
  <!-- header using bootstrap  -->
  <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col d-flex justify-content-center justify-content-sm-between align-items-center h-100">
          <router-link :to="{ name: 'home' }" class="align-items-center h-100 d-flex text-decoration-none">
            <div class="h100">
              <img src="logo" alt="logo" class="img-fluid" width="100px">
            </div>
            <div>
              <h1>{{ title }}</h1>
            </div>
          </router-link>

          <div class="d-flex justify-content-end gap-3">
            <router-link :to="{ name: 'home' }" class="align-items-center h100 d-flex text-decoration-none">
              <div>
                <h4>Home</h4>
              </div>
            </router-link>
  
            <router-link :to="{ name: 'apartments-index' }" class="align-items-center h100 d-flex text-decoration-none">
              <div>
                <h4>Vai alla ricerca</h4>
              </div>
            </router-link>
  
            <!-- <router-link :to="{ name: 'login' }" class="align-items-center h100 d-flex">
              <div>
                <h4>Login</h4>
              </div>
            </router-link> -->
  
            <!-- <router-link :to="{ name: 'register' }" class="align-items-center h100 d-flex">
              <div>
                <h4>Register</h4>
              </div>
            </router-link> -->
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/main.scss';



</style>
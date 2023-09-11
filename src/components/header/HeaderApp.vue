<script>
import { store } from '../../store';

export default {
  name: 'HeaderApp',

  props: {
    name: {
      type: String,
      default: 'home'
    },
    
    logo: {
      type: String,
      default: 'src/assets/logo/Bool BnB_Black.png'
    },
  },

  data() {
    return {
      title: 'BoolBnB',
      store,
    }
  },
  
  methods: {
    // 
  },

  mounted() {
    // 
  },
}

</script>

<template>
  <div class="container-fluid">
    <div class="row h-100">
      <div
        class="nav col d-flex justify-content-center justify-content-between align-items-center">
        <router-link :to="{ name }" class="align-items-center h-100 d-flex text-decoration-none gap-2">
          <div class="logo align-items-center h-100 d-flex">
            <img :src="logo" class="logo img-fluid" alt="Logo">
          </div>
          <div>
            <h1 class="my_title_color_text m-0">{{ title }}</h1>
          </div>
        </router-link>
        <!-- xl - lg desktop -->
        <div class="d-flex justify-content-end d-none d-lg-inline">
          <div class="d-flex justify-content-center align-content-center gap-3">
            <router-link :to="{ name }"
              class="my_header_color_text align-items-center h100 d-flex text-decoration-none">
              <div>
                <a href="" class="my_header_color_text">Home</a>
              </div>
            </router-link>

            <router-link :to="{ name: 'apartments-index' }"
              class="my_header_color_text align-items-center h100 d-flex text-decoration-none">
              <div>
                <a href="" class="my_header_color_text">Ricerca</a>
              </div>
            </router-link>

            <div class="d-flex gap-3">
              <a href="http://localhost:8000/login" class="align-items-center d-flex text-decoration-none my_header_color_text">Accedi</a>
              <!-- <div class="account align-items-center h-100 d-flex">
                <a href="#"><img src="/src/assets/img/pngwing.com.png" class="account"></a>
              </div> -->
            </div>
          </div>
        </div>

        <!-- tablet - mobile  -->
        <div class="d-flex justify-content-end d-lg-none">
          <div class="dropdown">
            <button class="my_btn_dropdown rounded d-flex align-content-center align-items-center gap-2 p-2" type="button"
              id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span><strong>Menu</strong></span>
              <font-awesome-icon :icon="['fa-solid', 'chevron-down']" size="sm" />
            </button>
            <ul class="dropdown-menu mt-2 p-1 my_dropdown_style" aria-labelledby="dropdownMenuButton1">
              <li>
                <router-link :to="{ name: 'home' }" class="align-items-center h100 d-flex text-decoration-none">
                  <a class="my_header_color_text">Home</a>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'apartments-index' }" class="align-items-center h100 d-flex text-decoration-none">
                  <a class="my_header_color_text">Ricerca</a>
                </router-link>
              </li>
              <li>
                <div class="align-items-center h100 d-flex text-decoration-none">
                  <a href="http://localhost:8000/login" class="my_header_color_text">Accedi</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.my_title_color_text {
  font-size: 2rem;
  font-weight: bold;
  margin-left: -10px;
  @include title;

  &:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
}

.my_header_color_text {
  color: $color-black;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: $color-primary;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
}

.logo {
  height: 80px;
  width: 80px;
  margin-top: -2px;
}

.account {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: -2px;
}

.my_btn_dropdown {
  background-color: $color-primary;
  width: 100%;
  height: 1.875rem;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: $color-primary;
    transition: all 0.3s ease-in-out;
  }
}

.my_dropdown_style {
  background-color: $bg-color-dark;
  border-color: $color-black;
  width: 100%;
  border-radius: 5%;
  transition: all 0.3s ease-in-out;

  li {
    transition: all 0.3s ease-in-out;
    border-radius: 5%;
    padding: .3125rem;

    a {
      transition: all 0.3s ease-in-out;
      color: $color-white;
      border: none;

      &:hover {
        transition: all 0.3s ease-in-out;
        color: $color-primary;
      }
    }
  }
}
</style>
<script>
import { store } from '../../store';

export default {
  name: 'HeaderApp',

  data() {
    return {
      title: 'BoolBnB',
      store
    }
  },
  mounted() {

  }
}

</script>

<template>
  <!-- header using bootstrap  -->
  <div class="container-fluid">
    <div class="row h-100">
      <div
        class=" navi col d-flex justify-content-center justify-content-between align-items-center justify-content-between">
        <router-link :to="{ name: 'home' }" class="align-items-center h-100 d-flex text-decoration-none gap-2">
          <div class="logo align-items-center h-100 d-flex">
            <!--percorso immagine-->
            <a href=""><img src="/src/assets/logo/Bool BnB_Black.png" class="logo img-fluid" alt="Logo"></a>
          </div>
          <div>
            <h1 class="my_title_color_text">{{ title }}</h1>
          </div>
        </router-link>
        <!-- xl - lg desktop -->
        <div class="d-flex justify-content-end d-none d-lg-inline">
          <div class="d-flex justify-content-center align-content-center gap-3">
            <router-link :to="{ name: 'home' }"
              class=" my_header_color_text align-items-center h100 d-flex text-decoration-none">
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

            <div class="align-items-center h100 d-flex">
              <a href="#about" class="my_header_color_text">About</a>
            </div>

            <div class="align-items-center h100 d-flex">
              <a href="#team" class="my_header_color_text">Team</a>
            </div>
            <!-- login href = localhost:8000/login -->
            <a href="http://localhost:8000/login"
              class="align-items-center d-flex text-decoration-none my_header_color_text">Accedi</a>
            <div class="account align-items-center h-100 d-flex">
              <a href=""><img src="/src/assets/img/account-icon.jpg" class="account"></a>
            </div>
          </div>
        </div>

        <!-- tablet - mobile  -->
        <div class="d-flex justify-content-end d-lg-none">
          <div class="dropdown">
            <button class="my_btn_dropdown d-flex align-content-center align-items-center gap-2 p-2" type="button"
              id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span><strong>Menu</strong></span>
              <font-awesome-icon :icon="['fa-solid', 'chevron-down']" size="sm" />
            </button>
            <ul class="dropdown-menu mt-2 p-1 my_dropdown_style" aria-labelledby="dropdownMenuButton1">
              <li>
                <router-link :to="{ name: 'home' }" class="align-items-center h100 d-flex text-decoration-none">
                  <div>
                    <h4 class="my_header_color_text">Home</h4>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'apartments-index' }"
                  class="align-items-center h100 d-flex text-decoration-none">
                  <div>
                    <h4 class="my_header_color_text">Vai alla ricerca</h4>
                  </div>
                </router-link>
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

.container-fluid {
  box-shadow: 0px 4px 10px -5px #000000;
}

.my_title_color_text {
  font-size: 2rem;
  font-weight: bold;
  margin-left: -10px;
  @include title;

  &:hover {
    // color: $bg-light-pink;

    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
}

.my_header_color_text {
  color: $color-black;
  text-decoration: none;

  &:hover {
    color: $color-primary;
    transform: scale(1.2);
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
  border-color: $color-black;
  width: 100%;
  height: 1.875rem;
  border-radius: 5%;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: $color-white;
    transition: all 0.3s ease-in-out;
  }
}

.my_dropdown_style {
  background-color: $color-secondary;
  border-color: $color-black;
  width: 12.5rem;
  border-radius: 5%;
  transition: all 0.3s ease-in-out;

  li {
    transition: all 0.3s ease-in-out;
    border-radius: 5%;
    padding: .3125rem;

    div h4 {
      transition: all 0.3s ease-in-out;
      color: $color-text-primary;
      border: none;

      &:hover {
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
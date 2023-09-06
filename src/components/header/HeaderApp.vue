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
            <router-link :to="{ name: 'home' }" class="align-items-center h100 d-flex text-decoration-none">
              <div>
                <h4 class="my_header_color_text">Home</h4>
              </div>
            </router-link>

            <router-link :to="{ name: 'apartments-index' }" class="align-items-center h100 d-flex text-decoration-none">
              <div>
                <h4 class="my_header_color_text">Ricerca</h4>
              </div>
            </router-link>

            <div class="align-items-center h100 d-flex">
              <h4 class="my_header_color_text" id="about">About</h4>
            </div>

            <div class="align-items-center h100 d-flex">
              <h4 class="my_header_color_text" id="team">Team</h4>
            </div>

            <!-- login href = localhost:8000/login -->
            <a href="http://localhost:8000/login" class="align-items-center d-flex text-decoration-none">
              <div>
                <h4 class="my_header_color_text">Accedi</h4>
              </div>
              <div class="account align-items-center h-100 d-flex">
                <a href=""><img src="/src/assets/img/account-icon.jpg" class="account"></a>
              </div>
            </a>
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



.my_title_color_text {
  font-weight: bold;
  background: #E7C2E5;
  background: linear-gradient(to left, #E7C2E5 0%, #F802E4 55%, #7A02FA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    // color: $bg-light-pink;
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
}

.my_header_color_text {
  color: $headerLinks;

  &:hover {
    color: $bg-light-pink;
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
}

.logo {
  height: 100px;
  width: 100px;
  margin-top: -7px;
}

.account {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: -7px;
}

.my_btn_dropdown {
  background-color: $color-secondary;
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
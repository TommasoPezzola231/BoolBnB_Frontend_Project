<script>

export default {
  name: 'HeaderApp',

  data() {
    return {
      title: 'BoolBnB',
    }
  },
}

</script>

<template>
  <!-- header using bootstrap  -->
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col d-flex justify-content-center justify-content-between align-items-center h-100">
        <router-link :to="{ name: 'home' }" class="align-items-center h-100 d-flex text-decoration-none gap-2">
          <div class="logo">
            <!--percorso immagine-->
            <img src="/src/assets/logo/Bool BnB_Black.png" class="logo img-fluid" alt="Logo">
          </div>
          <div>
            <h1 class="my_title_color_text">{{ title }}</h1>
          </div>
        </router-link>
          <!-- xl - lg desktop -->
          <div class="d-flex justify-content-end d-none d-lg-inline">
            <div class="d-flex justify-content-center gap-3">
              <router-link :to="{ name: 'home' }" class="align-items-center h100 d-flex text-decoration-none">
                <div>
                  <h4 class="my_header_color_text">Home</h4>
                </div>
              </router-link>
    
              <router-link :to="{ name: 'apartments-index' }" class="align-items-center h100 d-flex text-decoration-none">
                <div>
                  <h4 class="my_header_color_text">Vai alla ricerca</h4>
                </div>
              </router-link>

              <!-- login href = localhost:8000/login -->
              <a href="http://localhost:8000/login" class="align-items-center h100 d-flex text-decoration-none">
                <div>
                  <h4 class="my_header_color_text">Accedi</h4>
                </div>
              </a>
            </div>
          </div>
          <!-- tablet - mobile  -->
          <div class="d-flex justify-content-end d-lg-none">
            <div class="dropdown">
              <button class="my_btn_dropdown d-flex align-content-center align-items-center gap-2 p-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                  <router-link :to="{ name: 'apartments-index' }" class="align-items-center h100 d-flex text-decoration-none">
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
  color: $color-text-primary;
}

.my_header_color_text {
  color: $color-text-primary;

  &:hover {
    color: $color-white;
    transition: all 0.3s ease-in-out;
  }
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
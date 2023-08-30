<script>

export default {
    name: 'SearchCity',
}

</script>

<template>
    <!-- cerca citta -->
    <div class="row mb-4">
        <div class="col col-lg-6 d-flex flex-column flex-lg-row gap-3 w-100">
            <div class="p-5 mb-4 text-light rounded-3 my_bg-jumbo flex-grow-1">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Cerca il tuo prossimo soggiorno</h1>
                    <p class="col-md-8 fs-4 mt-3">Inserisci il nome della città</p>
                    <form>
                        <div class="form-floating mb-3 col-md-8 col-lg-5">
                            <input type="text" class="form-control text-dark" id="floatingInput" placeholder="Roma">
                            <label class="text-dark" for="floatingInput">Città</label>
                        </div>
                        <!-- bottone cerca -->
                        <router-link :to="{ name: 'apartments-index' }" class="btn btn-lg my_btn">
                            Cerca
                        </router-link>
                    </form>
                </div>
            </div>
            <div class="img">
                <img src="https://www.ncgtp.com/NCGTP_Map_Images/map-main-placeholder.jpg" class="img-fluid rounded" alt="Responsive image">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.my_bg-jumbo {
    background-color: $bg-color-dark;

    .my_btn {
        background-color: $color-primary;
        border-color: $color-primary;
        border: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: $color-primary;
            border-color: $color-primary;
            border: none;
        }
    }
}
</style>


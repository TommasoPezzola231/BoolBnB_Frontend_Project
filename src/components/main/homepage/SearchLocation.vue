<script>

export default {
    name: 'SearchLocation',
}

</script>

<template>
    <!-- cerca citta -->
    <section class="mt-5">
        <div class="row">
            <div class="col col-lg-6 d-flex flex-column flex-lg-row gap-5 w-100">
                <div class="p-5 mb-4 text-light rounded-3 my_bg-jumbo">
                    <div class="py-5">
                        <h1 class="display-5 fw-bold">Cerca il tuo prossimo soggiorno</h1>
                        <p class="col-md-8 fs-4 mt-3">Inserisci il nome della città</p>
                        <form action="http://localhost:8000/api/apartments/search">
                            <div class="form-floating mb-3 col-md-8 col-lg-5">
                                <input type="text" class="form-control text-dark" id="city" placeholder="Roma" name="city">
                                <label name="city" class="text-dark" for="floatingInput">Città</label>
                            </div>
                            <!-- bottone cerca -->
                            <input type="submit" value="Cerca" class="btn btn-lg my_btn">
                        </form>
                    </div>
                </div>
                <div class="img">
                    <img src="https://www.ncgtp.com/NCGTP_Map_Images/map-main-placeholder.jpg" class="img-fluid rounded" alt="Responsive image">
                </div>
            </div>
        </div>
    </section>
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


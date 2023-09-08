<script>

export default {
    name: 'NavLinkFooter',
}
</script>

<template><!-- 
    <section class="mt-5 my_nav_link">
        <div class="row">
            <div class="col-12 d-flex gap-2">
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link to="/privacy">Privacy</router-link>
                <router-link to="/terms">Terms</router-link>
            </div>
        </div>
    </section>   -->  
</template>

<style lang="scss" scoped>
.my_nav_link {
    background-color: $color-primary;
    a {
        color: $color-primary;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: $color-primary;
            text-decoration: none;
        }
    }
}
</style>
<template>
    <div class='view-movies-main-div' v-if='!loadingStatus'>
        <hero-header
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/ViewMovies/jonathan-daniels-CdVG9f96kyg-unsplash.jpg'
            headerText='View Movies'
        />
        <h1>Movies Screen</h1>
    </div>
    <div class='loading-div' v-else>
        <vue-spinner />
    </div>
</template>

<script>
import HeroHeader from '../components/HeroHeader.vue'
import Spinner from 'vue-simple-spinner'

export default {
    components: {
        heroHeader: HeroHeader,
        vueSpinner: Spinner
    },
    mounted () {
        this.$store.dispatch('getMovies')
    },
    computed: {
        loadingStatus () {
            return this.$store.getters.loadingStatus
        }
    }
}
</script>

<style scoped lang='scss'>
div.view-movies-main-div {
    width: 100%;
    height: 1000px;
}
</style>
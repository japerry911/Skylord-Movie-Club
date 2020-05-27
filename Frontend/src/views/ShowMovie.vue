<template>
    <div class='show-movie-main-div' v-if='!loadingStatus'>
        <hero-header
            headerText='Some Movie'
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/ShowMovie/peter-lewicki-Wfh650C1OHU-unsplash.jpg'
        />
        <h1>Show Movie: {{ movie.id }}</h1>
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
        this.$store.dispatch('getMovie', this.$route.params.id)
    },
    computed: {
        movie () {
            return this.$store.getters.showMovie
        },
        loadingStatus () {
            return this.$store.getters.loadingStatus
        }
    }
}
</script>

<style scoped lang='scss'>
div.show-movie-main-div {
    min-height: 1000px;
    width: 100%;
    background-color: $accentLightGray;
}
</style>
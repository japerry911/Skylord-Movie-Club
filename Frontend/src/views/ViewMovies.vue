<template>
    <div class='view-movies-main-div' v-if='!loadingStatus'>
        <hero-header
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/ViewMovies/jonathan-daniels-CdVG9f96kyg-unsplash.jpg'
            headerText='View Movies'
        />
        <h1 class='view-movies-h1'>All Movies</h1>
        <div class='movie-cards-div'>
            <movie-card v-for='movieObject in movies' :key='movieObject.id' :movieObject='movieObject' />
        </div>
    </div>
    <div class='loading-div' v-else>
        <vue-spinner />
    </div>
</template>

<script>
import HeroHeader from '../components/HeroHeader.vue'
import Spinner from 'vue-simple-spinner'
import MovieCard from '../components/MovieCard.vue'

export default {
    components: {
        heroHeader: HeroHeader,
        vueSpinner: Spinner,
        movieCard: MovieCard
    },
    mounted () {
        this.$store.dispatch('getMovies')
    },
    computed: {
        loadingStatus () {
            return this.$store.getters.loadingStatus
        },
        movies () {
            console.log(this.$store.getters.movies)
            return this.$store.getters.movies
        }
    }
}
</script>

<style scoped lang='scss'>
div.view-movies-main-div {
    width: 100%;
    min-height: 1000px;
    background-color: $accentLightGray;
    display: flex;
    flex-direction: column;
    align-items: center;

    .view-movies-h1 {
        color: $primaryOrange;
        margin-top: 1rem;
    }

    .movie-cards-div {
        display: flex;
        width: 90%;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
}
</style>
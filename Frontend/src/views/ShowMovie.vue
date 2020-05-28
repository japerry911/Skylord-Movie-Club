<template>
    <div class='show-movie-main-div' v-if='!loadingStatus'>
        <hero-header
            :headerText='movie.title'
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/ShowMovie/peter-lewicki-Wfh650C1OHU-unsplash.jpg'
        />
        <div class='movie-content-div'>
            <h1>{{ movie.title }}</h1>
            <figure>
                <img
                    alt='movie cover'
                    :src='movie.img_url'
                />
            </figure>
            <div v-if='movie.reviews.length > 0'>
                <h4>Reviews & Ratings</h4>
                <div class='reviews-div'>
                    <review-block v-for='reviewObject in movie.reviews' :key='reviewObject.id' :reviewObject='reviewObject' />
                </div>
            </div>
            <div v-else>
                <h4>No Reviews Currently.</h4>
            </div>
        </div>
    </div>
    <div class='loading-div' v-else>
        <vue-spinner />
    </div>
</template>

<script>
import HeroHeader from '../components/HeroHeader.vue'
import Spinner from 'vue-simple-spinner'
import ReviewBlock from '../components/ReviewBlock.vue'

export default {
    components: {
        heroHeader: HeroHeader,
        vueSpinner: Spinner,
        reviewBlock: ReviewBlock
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;

    .movie-content-div {
        margin-top: 3rem;
        width: 50%;
        min-height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $accentLightOrange;
        border-radius: 12pt;
        border: 2pt solid $accentMedGray;
        padding: 2rem 0;

        h1 {
            font-size: 2rem;
            padding-bottom: 1rem;
        }

        figure {
            width: 300px;
            height: auto;

            img {
                width: 100%;
                height: auto;
                border-radius: 12pt;
            }
        }

        h4 {
            font-size: 1.25rem;
            padding: 1rem 0;
        }

        .reviews-div {
            width: 70%;
        }
    }
}
</style>
<template>
    <div class='dashboard-main-div' v-if='!loadingStatus'>
        <div class='recent-reviews-master-div'>
            <h1 class='recent-reviews-h1'>Recent Reviews</h1>
            <div class='recent-reviews-div'>
                <recent-review-card v-for='reviewObject in mostRecentReviews' :key='reviewObject.id' :reviewObject='reviewObject' />
            </div>
        </div>
        <div class='movie-options-div'>
            <h1 class='movies-options-h1'>Movie Options</h1>
            <div class='img-btns-div'>
                <router-link
                    class='view-movies-btn'
                    tag='div'
                    to='/view-movies'
                >
                    <h6 class='div-header-h6'>
                        View Movies
                    </h6>
                </router-link>
                <router-link
                    class='add-new-movie-btn'
                    tag='div'
                    to='/add-review'
                >
                    <h6 class='div-header-h6'>
                        Add New Review
                    </h6>
                </router-link>
            </div>
        </div>
    </div>
    <div class='loading-div' v-else>
        <vue-spinner />
    </div>
</template>

<script>
import Spinner from 'vue-simple-spinner'
import RecentReviewCard from '../components/RecentReviewCard.vue'

export default {
    components: {
        vueSpinner: Spinner,
        recentReviewCard: RecentReviewCard
    },
    mounted () {
        this.$store.dispatch('getMostRecentReviews')
    },
    computed: {
        loadingStatus () {
            return this.$store.getters.loadingStatus
        },
        mostRecentReviews () {
            return this.$store.getters.mostRecentReviews
        }
    }
}
</script>

<style scoped lang='scss'>
div.dashboard-main-div {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://skylord-movie-club.s3.us-east-2.amazonaws.com/Dashboard/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg');
    background-position: center;
    background-attachment: fixed;
    min-height: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .recent-reviews-master-div {
        width: 100%;
        min-height: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 4rem;

        .recent-reviews-h1 {
            color: #fff;
            text-align: center;
        }

        .recent-reviews-div {
            width: 85%;
            min-height: 200px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }

    .movie-options-div {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-bottom: 4rem;

        .movies-options-h1 {
            color: #fff;
            text-align: center;
            margin-bottom: 2rem;
        }

        .img-btns-div {
            width: 90%;
            height: 300px;
            display: flex;
            justify-content: space-around;

            .view-movies-btn, .add-new-movie-btn {
                width: 40%;
                height: 100%;
                background-position: center;
                background-size: cover;
                border-radius: 12pt;
                border: 1pt solid #fff;
                transition: transform 1s;
                display: flex;
                justify-content: center;
                align-items: center;

                .div-header-h6 {
                    color: #fff;
                    font-size: 2rem;
                }
            }

            .view-movies-btn {
                background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('https://skylord-movie-club.s3.us-east-2.amazonaws.com/Dashboard/jakob-owens-vxONRGhM094-unsplash.jpg');
            }

            .add-new-movie-btn {
                background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('https://skylord-movie-club.s3.us-east-2.amazonaws.com/Dashboard/jakob-owens-CiUR8zISX60-unsplash.jpg');
            }

            .view-movies-btn:hover, .add-new-movie-btn:hover {
                transform: scale(1.1);
                border: 1pt solid $primaryOrange;
                cursor: pointer;

                .div-header-h6 {
                    color: $primaryOrange;
                }
            }
        }
    }
}

@media screen and (max-width: 649px) {
    div.dashboard-main-div {

        .recent-reviews-master-div {

            .recent-reviews-div {
                justify-content: center;
            }
        }

        .movie-options-div {

            .img-btns-div {
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                height: 600px;

                .view-movies-btn, .add-new-movie-btn {
                    height: 40%;
                    width: 90%;

                    .div-header-h6 {
                        text-align: center;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
}
</style>
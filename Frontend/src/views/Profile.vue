<template>
    <div class='profile-main-div'>
        <hero-header
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Profile/sinitta-leunen-0-pooc5p5i8-unsplash.jpg'
            :headerText='`Hello ${username}!`'
            imagePosition='0 55%'
        />
        <div class='content-div'>
            <h1>{{ username }}'s Reviews:</h1>
            <hr>
            <div class='reviews-div'>
                <user-review-block
                    v-for='reviewObject in userReviews'
                    :key='reviewObject.id'
                    :reviewObject='reviewObject'
                />
            </div>
        </div>
    </div>
</template>

<script>
import HeroHeader from '../components/HeroHeader.vue'
import UserReviewBlock from '../components/UserReviewBlock.vue'

export default {
    components: {
        heroHeader: HeroHeader,
        userReviewBlock: UserReviewBlock
    },
    mounted () {
        this.$store.dispatch('getUserReviews', this.userId)
    },
    computed: {
        username () {
            return this.$store.getters.username
        },
        userId () {
            return this.$store.getters.userId
        },
        userReviews () {
            return this.$store.getters.userReviews
        }
    }
}
</script>

<style scoped lang='scss'>
div.profile-main-div {
    min-height: 1000px;
    width: 100%;
    background-color: $accentLightGray;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-div {
        width: 90%;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        hr {
            width: 100%;
        }

        .reviews-div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
}
</style>
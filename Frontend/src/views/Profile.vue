<template>
    <div class='profile-main-div'>
        <hero-header
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Profile/sinitta-leunen-0-pooc5p5i8-unsplash.jpg'
            :headerText='`Hello ${username}!`'
            imagePosition='0 55%'
        />
        <div class='content-div'>
            <h1>{{ username }}'s Information:</h1>
        </div>
    </div>
</template>

<script>
import HeroHeader from '../components/HeroHeader.vue'

export default {
    components: {
        heroHeader: HeroHeader
    },
    computed: {
        username () {
            return this.$store.getters.username
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
}
</style>
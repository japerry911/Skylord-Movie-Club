<template>
    <div>
        <hero-header
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/SignIn/emerson-peters-oBCT3obZ6OY-unsplash.jpg'
            headerText='Sign In'
        />
    </div>
</template>

<script>
import HeroHeader from '../components/HeroHeader.vue'

export default {
    components: {
        heroHeader: HeroHeader
    }
}
</script>

<style scoped lang='scss'>
</style>
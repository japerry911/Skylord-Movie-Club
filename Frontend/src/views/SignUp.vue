<template>
    <div class='main-div-sign-up'>
        <hero-header
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/SignUp/matt-benson-18LuuKeU__s-unsplash.jpg'
            headerText='Sign Up'
            imagePosition='0 20%'
        />
        <div class='form-div'>
            <form>
            </form>
        </div>
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
div.main-div-sign-up {
    min-height: 100%;
    width: 100%;

    .form-div {
        height: 1000px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $accentLightGray;

        form {
            width: 75%;
            height: 90%;
            margin: 5rem;
            background-color: $accentLightOrange;
            border-radius: 12pt;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            border: 1pt solid $primaryOrange;
        }
    }
}
</style>
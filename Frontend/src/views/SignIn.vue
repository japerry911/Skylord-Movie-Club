<template>
    <div class='main-sign-in-div'>
        <hero-header
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/SignIn/emerson-peters-oBCT3obZ6OY-unsplash.jpg'
            headerText='Sign In'
        />
        <div class='form-div'>
            <form>
                <div class='greeting-div'>
                    <h3 class='form-title'>
                        User Sign In Portal
                    </h3>
                    <p>Sign in or Create a New Account</p>
                </div>
                <div class='form-input'>
                    <label for='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                    >
                </div>
                <div class='form-input'>
                    <label for='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                    >
                </div>
                <div class='btns-div'>
                    <button class='sign-in-btn'>Sign In</button>
                    <button class='create-btn'>Sign Up</button>
                </div>
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
div.main-sign-in-div {
    height: 100%;
    width: 100%;

    .form-div {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        form {
            width: 75%;
            height: 90%;
            margin: 5rem;
            background-color: lightgray;
            border-radius: 12pt;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .greeting-div {
                display: flex;
                height: 10%;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                .form-title {
                    font-size: 2.5rem;
                    color: #F67743;
                }

                p {
                    font-size: 1.25rem;
                }
            }

            .form-input {
                display: flex;
                flex-direction: column;
                height: 10%;
                width: 50%;

                label {
                    font-size: 1.15rem;
                    font-weight: bold;
                }

                input {
                    border-radius: 12pt;
                    height: 50%;
                    padding-left: 1rem;
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>
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
                    <figure>
                        <img
                            alt='Skylord Movie Club Logo'
                            src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/dark_logo_transparent_background.png'
                        />
                    </figure>
                    <p>Sign in or Create a New Account</p>
                </div>
                <div class='form-input'>
                    <label for='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        v-model='username'
                    >
                </div>
                <div class='form-input'>
                    <label for='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        v-model='password'
                    >
                </div>
                <div class='btns-div'>
                    <button @click='navigateSignUp'>Sign Up</button>
                    <button @click.prevent='onSubmit'>Sign In</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import HeroHeader from '../components/HeroHeader.vue'

export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    components: {
        heroHeader: HeroHeader
    },
    methods: {
        navigateSignUp () {
            this.$router.push('/sign-up')
        },
        onSubmit () {
            this.$store.dispatch('login', { username: this.username, password: this.password }).then(authed => {
                if (authed) {
                    this.$router.push('/')
                } else {
                    alert('Invalid Credentials!')
                    this.username = ''
                    this.password = ''
                }
            })
        }
    }
}
</script>

<style scoped lang='scss'>
div.main-sign-in-div {
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

            .greeting-div {
                display: flex;
                height: 10%;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                .form-title {
                    font-size: 2.5rem;
                    color: #000;
                }

                p {
                    font-size: 1.25rem;
                }

                figure {
                    width: 15%;
                    height: auto;

                    img {
                        width: 100%;
                        height: auto;
                    }
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

            .btns-div {
                width: 75%;
                display: flex;
                justify-content: space-evenly;

                button {
                    width: 14rem;
                    height: 5rem;
                    font-size: 1.5rem;
                    background-color: $primaryOrange;
                    border: 1pt solid #000;
                    border-radius: 12pt;
                    color: #000;
                    cursor: pointer;
                    transition: 250ms ease-in;
                }

                button:hover {
                    background-color: $accentLightGray;
                    border: 1pt solid $primaryOrange;
                    color: $primaryOrange;
                }
            }
        }
    }
}
</style>
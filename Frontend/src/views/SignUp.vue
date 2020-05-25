<template>
    <div class='main-div-sign-up'>
        <hero-header
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/SignUp/matt-benson-18LuuKeU__s-unsplash.jpg'
            headerText='Sign Up'
            imagePosition='0 20%'
        />
        <div class='form-div'>
            <form>
                <div class='greeting-div'>
                    <h3 class='form-title'>
                        Account Sign Up
                    </h3>
                    <figure>
                        <img
                            alt='Skylord Movie Club Logo'
                            src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/dark_logo_transparent_background.png'
                        />
                    </figure>
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
                <div class='form-input'>
                    <label for='confirm-password'>Confirm Password</label>
                    <input
                        type='password'
                        id='confirm-password'
                        v-model='confirmPassword'
                    >
                </div>
                <div class='btn-div'>
                    <button :disabled='!validate' @click.prevent='onSubmit'>Create Account</button>
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
    },
    data () {
        return {
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
        validate () {
            return this.username !== '' && this.password !== '' && this.password === this.confirmPassword
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('signUp', { username: this.username, password: this.password }).then(authed => {
                if (authed) {
                    this.$router.push('/')
                } else {
                    alert('Sign Up failed, please try again.')
                    this.username = ''
                    this.password = ''
                    this.confirmPassword = ''
                }
            })
        }
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

            .btn-div {
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

                button:hover:enabled {
                    background-color: $accentLightGray;
                    border: 1pt solid $primaryOrange;
                    color: $primaryOrange;
                }

                button:hover:disabled {
                    background-color: red;
                }
            }
        }
    }
}
</style>
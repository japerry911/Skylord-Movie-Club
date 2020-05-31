<template>
    <div class='main-div-contact'>
        <form>
            <div class='greeting-div'>
                <h3 class='form-title'>
                    Contact Skylord Movie Club
                </h3>
                <figure>
                    <img
                        alt='Skylord Movie Club Logo'
                        src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/dark_logo_transparent_background.png'
                    />
                </figure>
            </div>
            <div class='inputs-div'>
                <div class='form-input'>
                    <label for='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        v-model='email'
                    >
                </div>
                <div class='form-input'>
                    <label for='subject'>Subject</label>
                    <input
                        type='text'
                        id='subject'
                        v-model='subject'
                    >
                </div>
                <div class='description-div'>
                    <label for='description'>Message:</label>
                    <textarea rows='4' class='text-area-description' placeholder='Description' v-model='descriptionInput' />
                </div>
                <div class='submit-btn-div'>
                    <input type='submit' class='submit-btn' placeholder='Submit Review' @click.prevent='formSubmit' />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import railsServer from '../api/railsServer'

export default {
    data () {
        return {
            email: '',
            subject: '',
            descriptionInput: ''
        }
    },
    methods: {
        formSubmit () {
            const emailOptions = { email: this.email, subject: this.subject, message: this.descriptionInput, date: new Date() }

            railsServer.post('/contact-send-email', { email_options: { ...emailOptions } }).then(this.$router.push('/'))
        }
    }
}
</script>

<style scoped lang='scss'>
div.main-div-contact {
    height: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://skylord-movie-club.s3.us-east-2.amazonaws.com/Contact/jf-brou-915UJQaxtrk-unsplash+(1).jpg');
    background-position: right;
    background-attachment: fixed;

    form {
        height: 80%;
        width: 50%;
        background-color: $accentLightOrange;
        border-radius: 12pt;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 1pt solid $primaryOrange;

        .greeting-div {
            display: flex;
            height: 10%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-top: 2rem;

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

        .inputs-div {
            margin-top: 3rem;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            .form-input {
                display: flex;
                flex-direction: column;
                height: 10%;
                width: 60%;

                label {
                    font-size: 1.15rem;
                    font-weight: bold;
                    text-align: center;
                }

                input {
                    border-radius: 12pt;
                    height: 50%;
                    padding-left: 1rem;
                    font-size: 1rem;
                }
            }

            .description-div {
                width: 60%;
                display: flex;
                flex-direction: column;
                align-items: center;

                label {
                    font-weight: bold;
                    font-size: 1.15rem;
                }

                .text-area-description {
                    width: 100%;
                    border-radius: 12pt;
                    padding-left: 1rem;
                }
            }
        }

        .submit-btn-div {
            width: 90%;
            display: flex;
            justify-content: center;

            .submit-btn {
                width: 25%;
                height: 70px;
                background-color: $primaryOrange;
                border: 1pt solid #fff;
                color: #fff;
                font-size: 1.5rem;
                cursor: pointer;
                border-radius: 12pt;
                font-weight: bold;
                transition: 0.25s ease-in;
            }

            .submit-btn:hover {
                background-color: $accentLightGray;
                color: $primaryOrange;
                border-color: #000;
            }
        }
    }
}
</style>
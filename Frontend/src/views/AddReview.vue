<template>
    <div class='add-review-main-div'>
        <hero-header
            headerText='Add a Review'
            headerImageUrl='https://skylord-movie-club.s3.us-east-2.amazonaws.com/AddReview/markus-winkler--fRAIQHKcc0-unsplash.jpg'
            imagePosition='0 20%'
        />
        <div class='form-div'>
            <form>
                <div class='greeting-div'>
                    <h3 class='form-title'>
                        Add a Review
                    </h3>
                    <figure>
                        <img
                            alt='Skylord Movie Club Logo'
                            src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/dark_logo_transparent_background.png'
                        />
                    </figure>
                </div>
                <div class='select-or-create-movie'>
                    <div class='select-input'>
                        <label for='movies'>Choose a Movie:</label>
                        <select name="movies" id="movies" v-model='movieSelected' :disabled='newMovieBool'>
                            <option
                                v-for='movieObject in movies'
                                :key='movieObject.id'
                                :value='movieObject.id'
                            >
                                {{ movieObject.title }}
                            </option>
                        </select>
                    </div>
                    <div class='new-movie-input'>
                        <div class='new-movie-checkbox-div'>
                            <input type='checkbox' id='newMovie' name='newMovie' v-model='newMovieBool' @change='resetMovie' />
                            <label for='newMovie'>Add New Movie</label>
                        </div>
                        <div class='input-box-new-movie'>
                            <label for='movieInput'>Movie Name</label>
                            <input type='text' id='movieInput' name='movieInput' :disabled='!newMovieBool' v-model='movieSelected' />
                        </div>
                    </div>
                    <div class='genre-input'>
                        <label for='genre'>Select a Genre:</label>
                        <select name='genre' id='genre' v-model='genreSelected' :disabled='!newMovieBool'>
                            <option
                                v-for='genreObject in genre'
                                :key='genreObject.id'
                                :value='genreObject.id'
                            >
                                {{ genreObject.name }}
                            </option>
                        </select>
                    </div>
                    <div class='img-div'>
                        <label for='img-url'>Image URL:</label>
                        <input type='text' id='img-url' v-model='imgUrl' class='img-input' :disabled='!newMovieBool' />
                    </div>
                    <div class='rating-div'>
                        <label for='rating'>Star Rating:</label>
                        <star-rating v-model='rating' id='rating' :star-size='20' />
                    </div>
                    <div class='description-div'>
                        <label for='description'>Description:</label>
                        <textarea rows='4' class='text-area-description' placeholder='Description' v-model='descriptionInput' />
                    </div>
                </div>
                <div class='submit-btn-div'>
                    <input type='submit' class='submit-btn' placeholder='Submit Review' @click.prevent='submitForm' />
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
            newMovieBool: false,
            movieSelected: '',
            genreSelected: '',
            imgUrl: '',
            descriptionInput: '',
            rating: 0
        }
    },
    components: {
        heroHeader: HeroHeader
    },
    mounted () {
        this.$store.dispatch('getMovies')
        this.$store.dispatch('getGenre')
    },
    computed: {
        movies () {
            return this.$store.getters.movies
        },
        genre () {
            return this.$store.getters.genre
        }
    },
    methods: {
        resetMovie () {
            this.movieSelected = ''
        },
        async submitForm () {
            let movieId

            if (this.newMovieBool) {
                const movieData = { title: this.movieSelected, genre: this.genreSelected, img_url: this.imgUrl }
                movieId = await this.$store.dispatch('createMovie', movieData)
            } else {
                movieId = this.movieSelected
            }

            const reviewData = { movie_id: movieId, user_id: this.$store.getters.userId, rating: this.rating, description: this.descriptionInput }

            await this.$store.dispatch('createReview', reviewData)

            this.$router.push('/dashboard')
        }
    }
}
</script>

<style scoped lang='scss'>
div.add-review-main-div {
    height: 1400px;
    width: 100%;
    background-color: $accentLightGray;

    .form-div {
        height: 1000px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

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

            .select-or-create-movie {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .select-input {
                    width: 90%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    select {
                        width: 60%;
                    }

                    label {
                        font-weight: bold;
                        padding-bottom: 1rem;
                    }
                }

                .new-movie-input {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem 0;
                    width: 90%;

                    .new-movie-checkbox-div {
                        display: flex;
                        flex-direction: row-reverse;
                        align-items: center;
                        padding-top: 1rem;

                        label {
                            font-weight: bold;
                            padding-right: 1rem;
                        }
                    }

                    .input-box-new-movie {
                        margin-top: 2rem;
                        display: flex;
                        flex-direction: column;
                        width: 60%;

                        label {
                            font-weight: bold;
                            text-align: center;
                        }
                    }
                }
            }

            .genre-input {
                width: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 1rem;

                select {
                    width: 60%;
                }

                label {
                    font-weight: bold;
                }
            }

            .img-div {
                width: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 2rem;

                label {
                    font-weight: bold;
                }

                .img-input {
                    width: 60%;
                }
            }

            .rating-div {
                width: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 2rem;

                label {
                    font-weight: bold;
                }
            }

            .description-div {
                width: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 2rem;

                label {
                    font-weight: bold;
                }

                .text-area-description {
                    width: 60%;
                    border-radius: 12pt;
                    padding-left: 0.5rem;
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
}

@media screen and (min-width: 650px) and (max-width: 768px) {
    div.add-review-main-div {

        .form-div {

            form {

                .greeting-div {

                    figure {
                        width: 30%;
                    }
                }

                .submit-btn-div {

                    .submit-btn {
                        width: 40%;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 649px) {
    div.add-review-main-div {
        .form-div {

            form {
                min-width: 80%;

                label {
                    font-size: 0.8rem;
                }

                .greeting-div {

                    .form-title {
                        font-size: 1.5rem;
                    }

                    figure {
                        width: 60%;
                    }
                }

                .select-or-create-movie {

                    .select-input {

                        select {
                            width: 80%;
                        }
                    }

                    .new-movie-input {

                        .input-box-new-movie {
                            width: 80%;
                        }
                    }
                }

                .genre-input {

                    select {
                        width: 80%;
                    }
                }

                .img-div {

                    .img-input {
                        width: 80%;
                    }
                }

                .rating-div {
                    width: 50%;
                }

                .description-div {

                    .text-area-description {
                        width: 80%;
                    }
                }

                .submit-btn-div {

                    .submit-btn {
                        width: 75%;
                        height: 40px;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
</style>
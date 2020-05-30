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
                        <select name="movies" id="movies">
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
                            <input type='checkbox' id='newMovie' name='newMovie' v-model='newMovieBool' />
                            <label for='newMovie'>Add New Movie</label>
                        </div>
                        <div class='input-box-new-movie'>
                            <label for='movieInput'>Movie Name</label>
                            <input type='text' id='movieInput' name='movieInput' :disabled='!newMovieBool' />
                        </div>
                    </div>
                    <div class='genre-input'>
                        <label for='genre'>Select a Genre:</label>
                        <select name='genre' id='genre'>
                            <option
                                v-for='genreObject in genre'
                                :key='genreObject.id'
                                :value='genreObject.id'
                            >
                                {{ genreObject.name }}
                            </option>
                        </select>
                    </div>
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
            newMovieBool: false
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
    }
}
</script>

<style scoped lang='scss'>
div.add-review-main-div {
    height: 1000%;
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
                        padding-top: .75rem;
                        display: flex;
                        flex-direction: column;
                        width: 60%;

                        label {
                            font-weight: bold;
                        }
                    }
                }

                .genre-input {
                    width: 90%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    select {
                        width: 60%;
                    }

                    label {
                        font-weight: bold;
                        padding: 1rem 0;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class='movie-card-main-div'>
        <h1>{{ movieObject.title }}</h1>
        <figure>
            <img
                alt='Movie Cover'
                :src='movieObject.img_url'
            />
        </figure>
        <h6>Genre: {{ movieObject.genre.name }}</h6>
        <h6>Average Rating: {{ calcAvgRating(movieObject.reviews) }}</h6>
        <p>Number of Ratings: {{ movieObject.reviews.length }}</p>
        <hr>
    </div>
</template>

<script>
export default {
    props: {
        movieObject: Object
    },
    methods: {
        calcAvgRating (reviewsArray) {
            if (reviewsArray.length > 0) {
                return (reviewsArray.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0) / reviewsArray.length).toFixed(2)
            } else {
                return 'N/A'
            }
        }
    }
}
</script>

<style scoped lang='scss'>
div.movie-card-main-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin: 1rem;
    border: 2pt solid $accentMedGray;
    border-radius: 12pt;
    background-color: #fff;
    padding: 1rem;

    h1 {
        color: $primaryOrange;
        font-size: 1.2rem;
        padding-bottom: 1rem;
        text-align: center;
    }

    figure {
        width: 125px;
        height: 200px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    h6 {
        color: $primaryOrange;
        font-size: 1rem;
        text-align: center;
        padding-top: 1rem;
    }

    hr {
        width: 80%;
        margin: 0.5rem 0;
    }

    p {
        color: $primaryOrange;
        font-size: 1rem;
        text-align: center;
        padding-top: 1rem;
    }
}
</style>
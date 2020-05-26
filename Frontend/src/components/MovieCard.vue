<template>
    <div class='movie-card-main-div'>
        <h1>{{ reviewObject.movie }}</h1>
        <figure>
            <img
                alt='Movie Cover'
                :src='reviewObject.image'
            />
        </figure>
        <h6>Genre: {{ reviewObject.genre }}</h6>
        <h6>Rating: {{ reviewObject.rating }}</h6>
        <hr />
        <p>Reviewed by: {{ reviewObject.username }}</p>
        <p>{{ reviewObject.date.substring(0, 10) || null }}</p>
    </div>
</template>

<script>
export default {
    props: {
        reviewObject: Object
    }
}
</script>

<style scoped lang='scss'>
div.movie-card-main-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #fff;
        font-size: 1.1rem;
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
        color: #fff;
        font-size: 1rem;
    }

    hr {
        width: 100%;
        margin: 1rem 0;
    }

    p {
        color: #fff;
        font-size: 1rem;
    }
}
</style>
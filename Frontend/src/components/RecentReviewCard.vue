<template>
    <router-link
        tag='div'
        class='recent-review-card-main-div'
        :to='`/view-movies/${reviewObject.movie_id}`'
    >
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
    </router-link>
</template>

<script>
export default {
    props: {
        reviewObject: Object
    }
}
</script>

<style scoped lang='scss'>
div.recent-review-card-main-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 350px;
    width: 250px;

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

div.recent-review-card-main-div:hover {
    border: 1pt solid #fff;
    cursor: pointer;
    opacity: 0.5;
}
</style>
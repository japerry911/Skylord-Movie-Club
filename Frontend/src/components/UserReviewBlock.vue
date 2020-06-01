<template>
    <router-link
        tag='div'
        :to='`/view-movies/${reviewObject.movie_id}`'
        class='user-review-block-main-div'
    >
        <h6><strong>Title:</strong> {{ reviewObject.movie.title }}</h6>
        <figure>
            <img
                alt='Movie Cover'
                :src='reviewObject.movie.img_url'
            />
        </figure>
        <hr>
        <h6><strong>Rating:</strong> {{ reviewObject.rating }} / 5</h6>
        <hr>
        <h6><strong>Description:</strong> {{ reviewObject.description || 'N/A' }}</h6>
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
div.user-review-block-main-div {
    min-height: 100px;
    width: 300px;
    background-color: $accentLightGray;
    margin: 1rem 0;
    border-radius: 12pt;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2pt solid $accentMedGray;

    h6 {
        font-size: 1rem;
        font-weight: normal;
    }

    figure {
        width: 125px;
        height: 200px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

div.user-review-block-main-div:hover {
    cursor: pointer;
    border: 2pt solid $primaryOrange;
    opacity: 0.5;
}
</style>
<template>
    <div class='user-review-block-main-div'>
        <router-link
            tag='div'
            :to='`/view-movies/${reviewObject.movie_id}`'
            class='user-review-block-sub-main-div'
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
        <figure>
            <svg @click='deleteReview' class="bi bi-trash svg-clickable" width="2em" height="2em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
            </svg>
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        reviewObject: Object,
        userId: Number
    },
    methods: {
        deleteReview () {
            this.$store.dispatch('destroyReview', this.reviewObject.id).then(
                this.$store.dispatch('getUserReviews', this.userId))
        }
    }
}
</script>

<style scoped lang='scss'>
div.user-review-block-main-div {
    min-height: 100px;
    width: 300px;
    background-color: $accentLightGray;
    margin: 1rem 1rem;
    border-radius: 12pt;
    padding: 1rem;
    border: 2pt solid $accentMedGray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .user-review-block-sub-main-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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

    figure {
        display: flex;
        justify-content: center;

        svg:hover {
            border: 2pt solid $primaryOrange;
            cursor: pointer;
        }
    }
}

div.user-review-block-main-div {
    .user-review-block-sub-main-div:hover {
        cursor: pointer;
        border: 2pt solid $primaryOrange;
        opacity: 0.5;
    }
}
</style>
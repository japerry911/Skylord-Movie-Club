<template>
    <div class='review-block-main-div'>
        <h6><strong>Rating:</strong> {{ reviewObject.rating }} / 5</h6>
        <hr>
        <h6><strong>Description:</strong> {{ reviewObject.description || 'N/A' }}</h6>
        <hr>
        <h6><strong>Written By:</strong> {{ reviewObject.user.username }}</h6>
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
div.review-block-main-div {
    min-height: 100px;
    width: 100%;
    background-color: $accentLightGray;
    margin: 1rem 0;
    border-radius: 12pt;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2pt solid $accentMedGray;

    h6 {
        font-size: 1rem;
        font-weight: normal;
    }
}
</style>
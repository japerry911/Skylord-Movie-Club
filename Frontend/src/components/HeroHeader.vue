<template>
    <div class='main-div-hero-header' :style='cssProps'>
        <h1 class='hero-header-h1'>
            {{ headerText }}
        </h1>
    </div>
</template>

<script>
export default {
    props: {
        headerText: String,
        headerImageUrl: String,
        imagePosition: String
    },
    computed: {
        cssProps () {
            return {
                '--image-url': `url(${this.headerImageUrl})`,
                '--image-position': this.imagePosition || 'center'
            }
        }
    }
}
</script>

<style scoped lang='scss'>
div.main-div-hero-header {
    height: 20rem;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--image-url);
    background-size: cover;
    background-position: var(--image-position);
    display: flex;
    align-items: center;

    .hero-header-h1 {
        color: #fff;
        font-size: 3rem;
        padding-left: 5rem;
    }
}
</style>
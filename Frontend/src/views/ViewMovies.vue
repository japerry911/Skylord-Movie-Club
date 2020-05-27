<template>
    <h1>Movies</h1>
</template>

<script>
export default {
    mounted () {
        this.$store.dispatch('getMovies')
    }
}
</script>

<style scoped lang='scss'>
</style>
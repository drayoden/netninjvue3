<template>
    <div class="results">Reaction time: {{ score }} ms</div>
    <div class="rank">You're a {{ rank }}</div>
</template>

<script>
export default {
    props: ['score'], 
    data() {
        return {
            rank: null
        }
    }, 
    mounted() {
        let s = this.score
        if (s < 150) {this.rank = "ninja cat"}
        if (s > 150 && s < 200) {this.rank = "snake cat"}
        if (s > 200 && s < 300) {this.rank = "forrest cat"}
        if (s > 300 && s < 400) {this.rank = "stormy cat"}
        if (s > 400) {this.rank = "sloth cat"}
    },
}
</script>

<style>
    .results {
        font-size: 20px;
        padding: 30px;
        text-align: center;
        color: red;
    }
</style>



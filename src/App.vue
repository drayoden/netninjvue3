<template>
  <h1>Reaction timer...</h1>
  <button @click="start" :disabled="isPlaying" >start</button>
  
  <Results v-if="showResults" :score='score' />
  
  <!-- <p v-if="showResults">Reaction time: {{ score }} ms</p> -->
  
  <!-- 'catch' the 'end' event from Block and run 'endGame' method -->
  <!-- the second argument (data) in the emit (Block) is automatically send to the method; endGame -->
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />   


</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data() {   
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {   
      this.delay = 2000 + Math.random() * 5000  // minimum of two seconds plus a random time of up to 5 seconds more.
      this.isPlaying = true
      this.showResults = false
      // console.log(this.delay)
    }, 
    endGame(rTime) {
      this.score = rTime
      this.isPlaying = false
      this.showResults = true
    }
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
  button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }
</style>

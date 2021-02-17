<template>
  <h1>My stuff</h1>
  <div v-if="showModal">
    <Modal :title="title" :header="header" :text="text" theme="sale" @close="toggleModal"/>  <!-- pass a prop to the Modal component  -->
  </div>
  <br><button @click="toggleModal">Modal</button>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal }, // register components here
  data() {
    return {
      title: 'My first Vue app...', 
      header: 'Sign up for something...',
      text: 'Get ready for MOOSES!',
      showModal: false,
    }
  }, 
  methods: {
    // template refs...
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },

    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
/* global styles */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid black;
  display: inline-block;
  padding-bottom: 10px;
}

</style>

<template>
  <h1>My stuff</h1>
  
  <teleport to='.modals' v-if="showModal">
    <Modal theme="" @close="toggleModal">   <!-- create a 'slot' - use the explicit Modal open and close tags  -->
      <template v-slot:links>  <!-- 'named' slot -->
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Giving away mooses!</h1>
      <p>Grab your fuzzy butt noses and let's go!</p>
    </Modal>
  </teleport >

  <teleport to='.modals' v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:links>
        <label for="email">email:</label>
        <input type="email"  name="email">
        <input type="button" value="send">
      </template>
      <p>sign up now!</p>
    </Modal>
  </teleport >

  <br><button @click="toggleModal">Modal</button>
  <button @click="toggleModal2">Modal2</button>
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
      showModal: false,
      showModal2: false,
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
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    }
  }
}
</script>

<style>
/* global styles */

#app, .modals {
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

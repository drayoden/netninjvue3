<template>
    <div class="backdrop" @click.self="closeModal"> <!-- click.self -- will only close the modal if you click on the backdrop not the modal itself -->
        <div class="modal" :class="{ sale: theme === 'sale'}">  <!-- conditional style if theme is equal to 'sale' (see App.vue) --> 
            <h1>{{ title }}</h1>
            <h4>{{ header }}</h4>   <!-- use the 'header' and 'text' prop -->
          <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['header','text', 'title', 'theme' ],  // register props

    methods: {
      closeModal() {  //custom event - toggleModal is in the App.vue component
        this.$emit('close')  // note the 'close' click event on the call to the Modal component in App.vue
      }

    }
}
</script>


<style> /* can use '<style scoped>' -- these styles only apply to this component */
        /* there is a performace hit for this, could just use more specific selectors */
  /* see branch/lesson 25 */
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }
  /* sale styles */
  .modal.sale {
    background: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }

</style>
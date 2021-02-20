<template>
    <div class="backdrop" @click.self="closeModal"> <!-- click.self -- will only close the modal if you click on the backdrop not the modal itself -->
        <div class="modal" :class="{ sale: theme === 'sale'}">  <!-- conditional style if theme is equal to 'sale' (see App.vue) --> 
          <slot>this is default text</slot>   <!-- will render non-template content between the 'Modal' tags in App.vue, or the default text if the content does not exist-->
          <div class="actions">
            <slot name="links"></slot>  <!-- renders the named (links) slot in App.vue -->
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: [ 'theme' ],  // register props

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

  /* modal actions - lesson-28 */
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

  /* sale styles */
  .modal.sale {
    background: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }

  .modal.sale .actions {
    color: white;
  }
  .modal.sale .actions a {
    color: white;
  }

</style>
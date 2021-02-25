<template>
  <h1>Job Details Page</h1>

  <!-- 'id' has to match the route parameter in the Jobs route in index.js -->
  <!-- these will display anything placed after <domain>/jobs/ in the URL -->
  <!-- <p>Job ID: {{ $route.params.id }}</p>    -->
  <p>[{{ id }}]: {{ title }}</p>    <!-- this works with the export below -->
</template>

<script>
export default {
  props: ['id', 'title'], // this shortcuts the data() function below:
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //     name: this.$route.params.title,
  //   }
  // }

}
</script>

<style>

</style>
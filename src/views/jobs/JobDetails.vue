<template>

  <h1>Job Details Page</h1>
  <div v-if="job">   <!-- conditional template stuff -->
    <!-- we need this to be conditional becuase 'job' is null iniitailly, we need to wait until it has data from the 'fetch' below.  -->

    <!-- 'id' has to match the route parameter in the Jobs route in index.js -->
    <!-- these will display anything placed after <domain>/jobs/ in the URL -->
    <!-- <p>Job ID: {{ $route.params.id }}</p>    -->
    <p>[{{ id }}]: {{ job.title }} {{ job.details }}</p>    <!-- this works with the export below -->
  </div>

  <!-- you can add latency to the json-server, see '-d' option, to see this loading message -->
  <div v-else>
    <p>Loading...</p>
  </div>
  


</template>

<script>
export default {
  props: ['id'], // this shortcuts the data() function below:
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //     name: this.$route.params.title,
  //   }
  // }

  data() {
    return {
      job: null
    }
  },

  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(r => r.json())
      .then(d => this.job = d)
      .catch(e => console.log(e.message))
  },
}


</script>

<style>

</style>
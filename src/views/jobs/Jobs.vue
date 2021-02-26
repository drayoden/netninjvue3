<template>
  <h1>Jobs</h1>

  <div v-if="jobs.length"> 
    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetails', params: {id: job.id}}">
            <h3>{{ job.title }}</h3>
        </router-link>
    </div>
  </div>


  <!-- you can add latency to the json-server, see '-d' option, to see this loading message -->
  <div v-else>  
    <p>Loading jobs...</p>
  </div>

</template>

<script>
export default {
    data() {
        return {
            jobs: []
        }
    },

    // lifecycle hook
    mounted() {
      fetch('http://localhost:3000/jobs')
        .then(r => r.json())
        .then(d => this.jobs = d)
        .catch(e => console.log("oops, error..."))
    }
}
</script>

<style>
  .job h3{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h3:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>
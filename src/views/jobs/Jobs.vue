<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: {id: job.id, title: job.title }}">
          <h3>{{ job.title }}</h3>
      </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {title: 'whisker weasle', id: 1, details: 'mooses'},
                {title: 'fuzzy pants', id: 2, details: 'mooses'},
                {title: 'moose breath', id: 3, details: 'mooses'},
                {title: 'pouncer toes', id: 4, details: 'mooses'},
                {title: 'moose pants', id: 5, details: 'mooses'},
            ]
        }
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
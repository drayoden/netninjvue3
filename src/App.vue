<template>
  <div id="nav">

    <!-- not anchor tags allows vue to intercept the request instead of making a request to the server  -->
    <!-- you can actually see this by using the dev tools network view -->
    <router-link to="/">Home</router-link> |
    
    <!-- could bind the 'to' attribute and use the name for the route --> 
    <!-- instead fo the path:  works the same but you can change the path (index.js) -->
    <!-- without the need to change the 'router-link' path like above -->
    <router-link :to="{ name: 'About'}">About</router-link> |
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link>
  
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Back</button>
  <button @click="forward">Forward</button>

  <router-view/>  <!-- new tag-->
</template>


<script>
export default {
  methods: {
    redirect() {
      this.$router.push( {name: 'Home'} )
    },
    back() {
      this.$router.go(-1) // step by 1 back in browser history, could be any number
    },
    forward() {
      this.$router.go(1) // step by 1 forward in browser history, could be any number
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

/* select the active link (nav) with this class */
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>

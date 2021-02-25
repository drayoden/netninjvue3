import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'


// array of routes:
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    
    // lazy loding information, we do not use this now.
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

    component: About
  },

  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  }, 

  {
    path: '/jobs/:id',  // id is the route parameter
    name: 'JobDetails', // does not have to be the same name as the component 
    component: JobDetails,
    props: true,
  },

  // redirect -- it is that easy!
  // if we had an old path for .../all-jobs and we now want to redirect that to .../jobs:
  {
    path: '/all-jobs',
    redirect: '/jobs',
  }, 

  // catch all 404 page not found
  {
    path: '/:catchAll(.*)',  // regX inside parens
    name: 'NotFound',
    component: NotFound,
  }, 

]


// sets up the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // uses the browser history to visit previous pages, etc.
  routes
})

export default router

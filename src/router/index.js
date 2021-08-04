import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Home from '../pages/Home.vue'
import HomeDetailsPage from '../pages/HomeDetailsPage.vue'
import House from '../pages/House.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
import Job from '../pages/Job.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },{
    path: '/home-details',
    name: 'HomeDetails',
    component: HomeDetailsPage
  },{
    path: '/house',
    name: 'House',
    component: House
  },{
    path: '/job-details',
    name: 'JobDetails',
    component: JobDetailsPage
  },{
    path: '/job',
    name: 'Job',
    component: Job
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

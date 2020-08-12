import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Country from '../views/country.vue'
import Blog from '../views/blog.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/country',
    name: 'country',
    component: Country
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

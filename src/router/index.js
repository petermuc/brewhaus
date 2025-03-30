import { createRouter, createWebHistory } from 'vue-router'
import BreweryDetails from '../views/BreweryDetails.vue'
import BrewerySearch from '@/views/BrewerySearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: BrewerySearch
    },
    {
      path: '/details/:id',
      name: 'details',
      component: BreweryDetails,
    },
  ],
})

export default router

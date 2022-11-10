import { createRouter, createWebHistory } from 'vue-router'
import myHomePage from '../components/myHomePage.vue'
import Javacode from '../components/Javacode.vue'
import Pythoncode from '../components/Pythoncode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'myHomePage',
      component: myHomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Java',
      name: 'Java', 
      component: Javacode
    },
    {
      path: '/Python',
      name: 'Python',
      component: Pythoncode
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import ContactsView from '../views/ContactsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/addForm',
      name: 'addForm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddFormView.vue'),
    },
  ],
})

export default router

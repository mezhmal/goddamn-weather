import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/today',
      name: 'today',
      component: () => import('../pages/TodayPage.vue'),
    },
    {
      path: '/tomorrow',
      name: 'tomorrow',
      component: () => import('../pages/TomorrowPage.vue'),
    },
    {
      path: '/week',
      name: 'week',
      component: () => import('../pages/WeekPage.vue'),
    },
  ],
})

export default router

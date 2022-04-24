import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('@/views/Booking.vue'),
  },
  {
    path: '/management',
    name: 'management',
    component: () => import('@/views/Management.vue'),
  },
  {
    path: '/sing-up',
    name: 'sing-up',
    component: () => import('@/views/SignUp.vue'),
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/SignIn.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
  },
  {
    path: '/seat',
    name: 'seat',
    component: () => import('@/views/Seat.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
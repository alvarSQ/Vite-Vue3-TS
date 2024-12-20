import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/TheHome.vue'
import NotFoundView from "@/views/notFound.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/modal-tree-folders',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundView,
    },
  ]
})

export default router

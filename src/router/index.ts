import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect :()=> ({name:'categories'}),
      component: ()=> import("../layouts/PublicWrapper.vue"),
      children: [
        {
          path: "/",
          name: 'categories',
          component:  ()=> import('../views/categories/CategoriesView.vue')
        },
        {
          path: '/:category',
          name: "category",
          component: ()=>import('../views/category/CategoryView.vue')
        }
      ]
    },
  ]
})

export default router

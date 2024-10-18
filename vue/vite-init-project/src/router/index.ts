//index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
const routers = [
  {
 path: '/index',
 name: 'home',
 component: () => import('@/views/index.vue'),
  },
];

const router = createRouter({
 history: createWebHistory(),
 routes: routers as unknown as RouteRecordRaw[]
})

// 路由守卫
router.beforeEach((to, from, next) => {
 next()
})
export default router;

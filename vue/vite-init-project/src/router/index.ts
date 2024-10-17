//index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const routers = [
  {
 path: '/index',
 name: 'home',
 component: () => import('../views/home/index.vue'),
  },
];

const router = createRouter({
 history: createWebHashHistory(),
 routes: routers as unknown as RouteRecordRaw[]
})

// 路由守卫
router.beforeEach((to, from, next) => {
 next()
})
export default router;

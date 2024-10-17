import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {store} from './store'
const app = createApp(App);

import router from './router'
// 初始化路由
app.use(store)
app.use(router)
app.mount('#app')

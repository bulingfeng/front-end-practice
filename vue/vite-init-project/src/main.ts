import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {store} from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
const app = createApp(App);

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// 初始化路由
app.use(store)
app.use(router)
app.mount('#app')

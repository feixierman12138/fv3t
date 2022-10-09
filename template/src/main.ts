import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import { Lazyload } from 'vant'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'

const app = createApp(App)
app.use(store).use(router).use(Lazyload).mount('#app')

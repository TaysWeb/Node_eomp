import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cors from 'cors'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

createApp(App).use(cors).use(store).use(router).mount('#app')
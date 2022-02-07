import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import core from '../../core'

const app = createApp(App)

core(app).use(router).mount('#app')

console.log(app)
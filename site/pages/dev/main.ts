import { createApp } from 'vue'
import App from './views/App.vue'
import { Button } from 'k-view-next'

const app = createApp(App)

app.use(Button).mount('#app')
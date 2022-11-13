import '@/style.css'
import '@/assets/tailwind.css'
import "vue-toastification/dist/index.css";
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Toast from "vue-toastification";
import { createPinia } from 'pinia'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Toast)
app.mount('#app')
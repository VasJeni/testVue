import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/instances/axios'

import App from './App.vue'
import router from './router'
import Model from "@/components/Model.vue"
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('base-model', Model)

app.mount('#app')

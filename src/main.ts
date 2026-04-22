import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


if (localStorage.getItem('dark')) {
    // @ts-ignore
    document.getElementsByTagName("html")[0].classList.add("dark");
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

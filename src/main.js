import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// NOTE the use of '.use(router)' in the app creation
createApp(App).use(router).mount('#app')

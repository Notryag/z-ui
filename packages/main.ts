import { createApp } from 'vue'
import App from './App.vue'
import ZUI from './components/index'


const app = createApp(App).use(ZUI).mount('#app')
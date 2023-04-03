import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import zui from '@zui-plus/components'
console.log(zui,'zui');

const app = createApp(App)

// app.use(zui.ZButton)
app.use(zui)

app.mount('#app')
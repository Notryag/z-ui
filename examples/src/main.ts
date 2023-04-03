import { createApp } from 'vue'
import zui from '@zui-plus/components'
import App from './App.vue'
import './assets/main.css'
import 'uno.css'

console.log(zui,'zui');

const app = createApp(App)

// app.use(zui.ZButton)
app.use(zui)

app.mount('#app')
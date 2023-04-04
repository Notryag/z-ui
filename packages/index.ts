import type { App } from 'vue';
import * as components from './components/index'
export * from './components/index'

export default {
    install(app: App) {
        Object.entries(components).forEach(([name, component]) => {
            app.use(component)
        })
    }
}

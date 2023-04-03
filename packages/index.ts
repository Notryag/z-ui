import type { App } from 'vue';
import * as components from './components/index'
export * from './components/index'
console.log(components, 'components');

export default {
    install(app: App) {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component)
        })
    }
}

import Theme from 'vitepress/dist/client/theme-default'
import Button from '../../../src/components/button'


import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Button)
    registerComponents(app)
  }
}

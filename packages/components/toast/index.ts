import { createVNode, render } from 'vue'
import XtxMessage from './z-toast.vue'

const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-wrapper')
document.body.appendChild(div)

let time:any = null
interface ZTaostOption {
  [text:string]: any
  type?: string
}

export default (options: ZTaostOption) => {
  const vnode = createVNode(XtxMessage, options)
  render(vnode, div)
  clearTimeout(time)
  time = setTimeout(() => {
    render(null, div)
  }, 1500)
}

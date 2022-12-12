import { version } from '../../package.json'

import { Button as ZButton } from './button/index'
import ZInput from './input/index.vue'
import ZSwitch from './switch/index.vue'
import ZRow from './row/index.vue'
import ZCol from './col/index.vue'
import ZRadio from './radio/radio.vue'
import ZRadioGroup from './radio/radio-group.vue'
import ZCheckBox from './checkbox/z-checkbox.vue'

import ZToast from './toast/index'
import ZIcon from './icon/z-icon.vue'
import ZLink from './link/z-link.vue'

import ZTree from './tree/z-tree.vue'
import ZCrumb from './crumb/z-crumb.vue'
import ZCrumbItem from './crumb/z-crumb-item.vue'
import ZBadge from './badge/badge.vue'
import ZTabs from './tabs/z-tabs.vue'
import ZTabPane from './tab-pane/tab-pane.vue'


import type { App, Plugin } from 'vue'
const components = {
  ZButton,
  ZInput,
  ZSwitch,
  ZRow,
  ZCol,
  ZRadio,
  ZRadioGroup,
  ZCheckBox,
  ZTree,
  ZIcon,
  ZLink,
  ZToast,
  ZCrumb,
  ZCrumbItem,
  ZBadge,
  ZTabs,
  ZTabPane
}
const apps: App[] = []
const install = (app: App, opts: any) => {
  if (apps.includes(app)) return
  console.log(components);

  Object.keys(components).forEach(key => app.component(key, components[key]))
  app.config.globalProperties['$toast'] = ZToast
}



export default {
  version,
  install,
  ...components
}

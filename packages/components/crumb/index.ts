import Crumb from './crumb.vue'
import CrumbItem from './crumb-item.vue'
import { withInstall } from '../../utils'

export const ZCrumb = withInstall(Crumb, {
  CrumbItem
})

export default ZCrumb
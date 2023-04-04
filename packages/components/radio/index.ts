import { withInstall } from '../../utils'

import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'

export const ZRadio = withInstall(Radio, {
    RadioGroup
})

export default ZRadio
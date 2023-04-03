import { UPDATE_MODEL_EVENT } from "../../../constant/event"
import { isString } from '@vue/shared'

export const inputProps = {
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}


export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value:string) => isString(value),
  input: (value:string) => isString(value),
  change: (value:string) => isString(value),
  focus: (e: FocusEvent) => e instanceof FocusEvent,

}
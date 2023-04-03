import { ExtractPropTypes } from "vue"

export const switchProps = {
    modelValue: {
        type: [Boolean],
        default: false,
    },
    value: {
        type: Boolean,
        defalut: false,
    },
    disabled: {
        type: Boolean,
        defalut: false,
    },
}



export type SwitchProps = ExtractPropTypes<typeof switchProps>
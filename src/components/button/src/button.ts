import { ExtractPropTypes } from "vue"

export const buttonTypes = ['default','primary','success','warning', 'infor', 'danger', 'text', ''] as const


const buttonProps = {
    icon: {
        type: String,
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean
    },
    disabled: {
        type: Boolean,
        default: false
    }
}

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonTypes = typeof buttonTypes
import { ExtractPropTypes } from "vue"

export const buttonTypes = ['default','primary','success','warning', 'info', 'danger', 'text', ''] as const

export const buttonSize = ['large', 'midium', 'small', 'mini'] as const


export const buttonProps = {
    type: {
        type: String,
        values: buttonTypes,
    },
    icon: {
        type: String,
    },
    plain: {
        type: Boolean,
    },
    size: {
        type: String,
        values: buttonSize,
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

export type ButtonSize = typeof buttonSize

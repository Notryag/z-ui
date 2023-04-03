import { ExtractPropTypes } from "vue";
import { CHANG_EVENT, UPDATE_MODEL_EVENT } from "../../constant/event";

export const radioProps = {
    disabled: Boolean,
    modelValue: {
        type: [String, Number, Boolean],
        default: '',
    },
    label: {
        type: [String, Number, Boolean],
        default: '',
    },
}

export type RadioProps = ExtractPropTypes<typeof radioProps>


export const radioEmits = [UPDATE_MODEL_EVENT, CHANG_EVENT]


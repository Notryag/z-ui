import { computed, defineComponent } from 'vue'
import './button.scss'

export default defineComponent({
  name: 'ZButton',
  props: {
    icon: String,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
  },
  setup(props, { emit, slots }) {
    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }
    const useButton = (props) => {
      let classes = computed(() => ({
        'z-button': true,
        'is-round': props.round,
        'is-circle': props.circle,
      }))

      return { classes }
    }
    const { classes } = useButton(props)

    return () => {
      return (
        <button class={classes.value} onClick={handleClick}>
          <span>{slots.default?.()}</span>
        </button>
      )
    }
  },
})

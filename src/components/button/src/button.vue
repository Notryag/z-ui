
<script lang="tsx">
import { computed, defineComponent } from 'vue'
import { buttonProps } from './button.ts'
import './button.scss'

export default defineComponent({
  name: 'ZButton',
  props: buttonProps,
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

</script>

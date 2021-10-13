<template lang="pug">
button(class="control ciu-ripple" :type="type")
  slot
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  props: {
    'type': String as PropType<"button" | "reset" | "submit" | undefined>,
  },
  setup() {
    
  },
})
</script>

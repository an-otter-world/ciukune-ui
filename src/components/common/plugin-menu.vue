<template>
<div>
  <div v-for="item in menu.items" :key="item">
    <router-link :to="item.link" :icon="item.icon">
      <div> {{ item.label }}</div>
    </router-link>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType, InjectionKey } from 'vue'
import { IMenuPlugin } from '../../lib/ui-plugins'

export default defineComponent({
  props: {
    key: {
      type: Object as PropType<InjectionKey<IMenuPlugin>>,
      required: true
    }
  },
  setup() {
    
  },
})
</script>

<template>
  <div>General Settings</div>
</template>

<script lang="ts">
import { AdminMenu } from '../admin.vue'
import { Route } from '../../lib/router'
import { defineComponent } from 'vue'
import { registerPlugin } from '../../lib/plugins'

const component = defineComponent({
  setup() {
    
  },
})

registerPlugin(Route, {
  parentName: 'Admin',
  route: {
    component: component,
    path: '/admin/general',
  }
})

registerPlugin(AdminMenu, {
  icon: 'user-circle',
  label: 'General',
  link: '/admin/general'
})

export default component
</script>

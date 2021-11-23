<template lang="pug">
div
  w-component
    pluggable-menu(:descriptors="adminMenu" parent-route-name="Admin")
  w-component
    router-view
</template>

<script lang="ts">
import DynamicMenu from '../components/dynamic-menu.vue'
import General from './admin/general.vue'
import { IMenuDescriptor } from '../components/dynamic-menu.vue'
import { defineComponent } from 'vue'
import { registerPlugin, PluginKey, getPlugins } from '../lib/plugins'

export const AdminMenu: PluginKey<IMenuDescriptor> = Symbol('Admin menu plugins')

registerPlugin(AdminMenu, {
  component: General,
  icon: 'user',
  label: 'General',
  path: '/general',
  routeName: 'AdminGeneral'
})

export default defineComponent({
  components: { DynamicMenu },
  setup() {
    return {
      adminMenu: getPlugins(AdminMenu)
    }  
  },
})
</script>

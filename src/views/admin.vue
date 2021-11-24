<template lang="pug">
div
  w-component
    pluggable-menu(:descriptors="adminMenu" parent-route-name="Admin")
  w-component
    router-view
</template>

<script lang="ts">
import General from './admin/general.vue'
import type { IMenuDescriptor } from '../components/dynamic-menu.vue'
import type { PluginKey } from '../lib/plugins'
import { registerPlugin } from '../lib/plugins'

export const AdminMenu: PluginKey<IMenuDescriptor> = Symbol('Admin menu plugins')

registerPlugin(AdminMenu, {
  component: General,
  icon: 'user',
  label: 'General',
  path: '/general',
  routeName: 'AdminGeneral'
})

</script>
<script lang="ts" setup>
import { getPlugins } from '../lib/plugins'

const adminMenu = getPlugins(AdminMenu)
</script>

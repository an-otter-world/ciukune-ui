<template lang="pug">
div
  w-component
    div(v-for="item in menu" :key="item.link")
      router-link(:to="item.link" :icon="item.icon")
        div {{ item.label }}
  w-component
    router-view
</template>

<script lang="ts">
import type { MenuItem } from '../lib/ui'
import type { PluginKey } from '../lib/plugins'

export const AdminMenu: PluginKey<MenuItem> = Symbol('ciu_admin_menu_plugins')

</script>
<script lang="ts" setup>
import { getPlugins } from '../lib/plugins'

const menu = getPlugins(AdminMenu)
</script>

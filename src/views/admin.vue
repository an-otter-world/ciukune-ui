<template>
<div>
  <c-component>
    <plugin-menu :menu="menu"/>
  </c-component>
  <c-component>
    <router-view/>
  </c-component>
</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive } from 'vue'
import PluginMenu from '../components/common/plugin-menu.vue'
import { AdminMenu } from './admin'
import General from './admin/general.vue'


export default defineComponent({
  components: { PluginMenu },
  setup() {
    const adminMenu = getPlugins(AdminMenu)
    AdminMenu.addItem({
      component: General,
      path: '/general',
      icon: 'user',
      label: 'General'
    })

    return {
      menu: reactive(AdminMenu)
    }  
  },
})
</script>

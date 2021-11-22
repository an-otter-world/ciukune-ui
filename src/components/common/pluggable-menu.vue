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
import { defineComponent, PropType, InjectionKey, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getPlugins } from '../../lib/plugins'
import { IMenuPlugin } from '../../lib/ui-plugins'

export default defineComponent({
  props: {
    key: {
      type: Object as PropType<InjectionKey<IMenuPlugin>>,
      required: true
    },
    parentRoute: {
      type: String
    }
  },
  setup({key, parentRoute}) {
    const menuPlugins = getPlugins(key)
    const router = useRouter()
    const parentRoutePath = "";
    
    let registeredRoutes = new Set<string>();
    const items = computed(() => {
    }) 

    onMounted(() => updateRoutes(menuPlugins))
    onUnmounted( () => updateRoutes([]))

    function* getMenuItems() {
      for(const menuPlugin of menuPlugins) {
        yield {
          label: menuPlugin.label,
          icon: menuPlugin.icon,
          link: parentRoute + '/' + menuPlugin.path
        }
      } 

    }

    function updateRoutes(newPlugins: IMenuPlugin[]) {
      const oldRoutes = registeredRoutes
      registeredRoutes = new Set<string>()

      for(const menuPlugin of newPlugins) {
        const routeName = menuPlugin.routeName
        const path = menuPlugin.path
        const component = menuPlugin.component

        // Register newly added plugins routes
        if(!oldRoutes.has(routeName)) {
          if(parentRoute) {
            router.addRoute(parentRoute, { path, component })
          }
          else {
            router.addRoute({ path, component })
          }

          registeredRoutes.add(routeName)
        }
      }

      // Remove routes of plugins that were unregistered
      for(const oldRoute of oldRoutes) {
        if(!registeredRoutes.has(oldRoute)) {
          router.removeRoute(oldRoute)
        }
      }
    }

    watch(menuPlugins, (value: IMenuPlugin[]) => updateRoutes(value))
  },
})
</script>

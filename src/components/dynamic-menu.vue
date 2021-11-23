<template>
<div>
  <div v-for="item in items" :key="item.link">
    <router-link :to="item.link" :icon="item.icon">
      <div> {{ item.label }}</div>
    </router-link>
  </div>
</div>
</template>

<script lang="ts">
import { Component } from 'vue'
import { PropType } from 'vue'
import { computed } from 'vue'
import { defineComponent } from 'vue'
import { find } from "lodash";
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'
import { toRef } from 'vue'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

export interface IMenuDescriptor {
  component: Component
  icon: string
  label: string
  path: string
  routeName: string
}

export default defineComponent({
  props: {
    descriptors: {
      type: Array as PropType<IMenuDescriptor[]>,
      default: () => [],
      required: false
    },
    parentRouteName: {
      type: String,
      required: false,
      default: undefined
    }
  },
  setup(props) {
    // Can't use toRefs, as it messes with IMenuDescriptor[] type, resulting in a compilation error.
    const parentRouteName = toRef(props, 'parentRouteName')
    const descriptors = toRef(props, 'descriptors')

    const router = useRouter()

    const parentRoutePath = computed(() => {
      let result = "";
      if(parentRouteName != undefined) {
        const parentRoute = find(router.getRoutes(), it => it.name == parentRouteName.value)
        result = parentRoute!.path
      }
      return result
    })

    onMounted(() => updateRoutes(descriptors.value))
    onUnmounted( () => updateRoutes([]))
    watch(descriptors, (value) => updateRoutes(value))

    function* getMenuItems() {
      for(const descriptor of descriptors.value) {
        yield {
          label: descriptor.label,
          icon: descriptor.icon,
          link: parentRoutePath.value + '/' + descriptor.path
        }
      } 
    }

    let registeredRoutes = new Set<string>();
    function updateRoutes(newPlugins: IMenuDescriptor[]) {
      const oldRoutes = registeredRoutes
      registeredRoutes = new Set<string>()

      for(const descriptor of newPlugins) {
        const routeName = descriptor.routeName
        const path = descriptor.path
        const component = descriptor.component

        // Register newly added plugins routes
        if(!oldRoutes.has(routeName)) {
          if(parentRouteName.value) {
            router.addRoute(parentRouteName.value, { path, component })
          }
          else {
            router.addRoute({ path, component })
          }

          registeredRoutes.add(routeName)
        }
      }

      // Remove routes of plugins that were unregistered
      for(const oldRoute in oldRoutes) {
        if(!registeredRoutes.has(oldRoute)) {
          router.removeRoute(oldRoute)
        }
      }
    }

    return {
      items: computed(() => [...getMenuItems()]) 
    }
  },
})
</script>

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
import { defineComponent, PropType } from 'vue'
import { Component } from 'vue'
import { CiukuneApp } from '../../main'

export interface MenuItemDescriptor {
  component: Component,
  icon: string
  label: string,
  path: string,
}

export interface MenuItem {
  icon: string
  label: string,
  link: string,
}

export class Menu {
  constructor(parentRoute: string | undefined = undefined){
    this._parentRoute = parentRoute
  }

  get items() { return this._menuItems; }

  addItem(item: MenuItemDescriptor) {
    if(this._parentRoute) {
      const routes = CiukuneApp.$router.getRoutes()
      CiukuneApp.$router.addRoute('Admin', {
        path: item.path,
        component: item.component
      })
    }
    else {
      CiukuneApp.$router.addRoute({
        path: item.path,
        component: item.component
      })

    }

    this._menuItems.push( {
      label: item.label,
      icon: item.icon,
      link: this._parentRoute + '/' + item.path
    })
  }

  private readonly _parentRoute: string | undefined
  private readonly _items: MenuItemDescriptor[] = []
  private readonly _menuItems: MenuItem[] = []
}

export default defineComponent({
  props: {
    menu: {
      type: Object as PropType<Menu>,
      required: true
    }
  },
  setup() {
    
  },
})
</script>

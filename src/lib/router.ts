import Admin from '../views/admin.vue'
import Home from '../views/home.vue'
import Profile from '../views/profile.vue'
import type { PluginKey } from './plugins'
import { App } from 'vue'
import { RouteRecordName } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import { getPlugins } from './plugins'

export interface RoutePlugin {
  parentName?: RouteRecordName
  route: RouteRecordRaw
}

export const Route: PluginKey<RoutePlugin> = Symbol('ciu_routes_plugins')

export default function install<T>(app: App<T>) {
  const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "Home",
        component: Home,
      }, {
        path: "/profile",
        name: "Profile",
        component: Profile,
      }, {
        path: "/admin",
        name: "Admin",
        component: Admin,
      },
    ]
  })

  for(const it of getPlugins(Route)) {
    const parentName = it.parentName
    const route = it.route

    if(parentName) {
      router.addRoute(parentName, route)
    }
    else {
      router.addRoute(route)
    }
  }

  app.use(router)
}

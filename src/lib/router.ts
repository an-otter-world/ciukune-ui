import Admin from '../views/admin.vue'
import Home from '../views/home.vue'
import Profile from '../views/profile.vue'
import { App } from 'vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

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
      }
    ]
  })
  app.use(router)
}

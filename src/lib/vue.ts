import App from '../app.vue'
import i18n from './i18n'
import router from './router'
import type { Plugin as VuePlugin } from 'vue'
import type { PluginKey } from './plugins'
import urql from './urql'
import wlh from '@dontnod/wlh'
import { createApp } from 'vue'
import { getPlugins } from './plugins'

export const Vue: PluginKey<VuePlugin> = Symbol('ciu_vue_plugins')

function boot() {
  const app = createApp(App)
    .use(router)
    .use(i18n)
    .use(urql)
    .use(wlh)

  for(const vuePlugin of getPlugins(Vue)) {
    app.use(vuePlugin)
  }

  app.mount('#app')
}

const _global = window as any;
_global.ciuBoot = boot;

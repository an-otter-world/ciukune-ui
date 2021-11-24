import router from './lib/router'
import i18n from './lib/i18n'
import urql from './lib/urql'
import wlh from '@dontnod/wlh'
import App from './app.vue'
import { createApp } from 'vue'

const CiukuneApp = createApp(App)
    .use(router)
    .use(i18n)
    .use(urql)
    .use(wlh)
    .mount('#app')

export { AdminMenu } from './views/admin.vue'
export { CiukuneApp }
export { getPlugins } from './lib/plugins'
export { registerPlugin } from './lib/plugins'

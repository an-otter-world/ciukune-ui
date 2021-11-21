import router from './plugins/router'
import i18n from './plugins/i18n'
import urql from './plugins/urql'
import wlh from '@dontnod/wlh'
import App from './app.vue'
import { User  } from './lib/api'
import { createApp } from 'vue'

const CiukuneApp = createApp(App)
    .use(router)
    .use(i18n)
    .use(urql)
    .use(wlh)
    .mount('#app')

export { CiukuneApp, User }


import App from './app.vue'
import i18n from './plugins/i18n'
import router from './plugins/router'
import { createApp } from 'vue'
import wlh from '@dontnod/wlh'

const CiukuneApp = createApp(App)
    .use(wlh)
    .use(i18n)
    .use(router)
    .mount('#app')

export { CiukuneApp }

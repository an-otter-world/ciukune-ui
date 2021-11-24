// Local core plugins registrations
import './core'

//Exported type & plugin endpoints.
export type { RoutePlugin } from './lib/router'
export { AdminMenu } from './views/admin.vue'
export { Route } from './lib/router'
export { Vue } from './lib/vue'
export { getPlugins } from './lib/plugins'
export { registerPlugin } from './lib/plugins'

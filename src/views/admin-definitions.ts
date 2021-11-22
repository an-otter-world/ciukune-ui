import { InjectionKey } from 'vue'
import { IMenuPlugin } from '../lib/ui-plugins'


const AdminMenu: InjectionKey<IMenuPlugin> = Symbol('Admin menu plugins')

export { AdminMenu }

import { InjectionKey, reactive, Component } from 'vue'

export function registerPlugin<TPlugin>(key: InjectionKey<TPlugin>, plugin: TPlugin) {
  _instance.register(key, plugin)
}

export function getPlugins<TPlugin>(key: InjectionKey<TPlugin>) {
  return _instance.get(key)
}

class PluginManager {
  register<TPlugin>(key: InjectionKey<TPlugin>, plugin: TPlugin) {
    const plugins = this.get(key) 
    plugins.push(plugin)
  }

  get<TPlugin>(key: InjectionKey<TPlugin>) {
    let plugins = this._plugins.get(key)
    if(!plugins) {
      plugins = reactive([])
      this._plugins.set(key, plugins)
    }
    return plugins as TPlugin[]
  }



  private readonly _plugins = new Map<Symbol, any[]>()
}

const _instance = new PluginManager();
import { InjectionKey, reactive, Component } from 'vue'

export function registerPlugin<TPlugin>(key: InjectionKey<TPlugin>, plugin: TPlugin) {
  _instance.register(key, plugin)
}

export function getPlugins<TPlugin>(key: InjectionKey<TPlugin>) {
  return _instance.get(key)
}

class PluginManager {
  register<TPlugin>(key: InjectionKey<TPlugin>, plugin: TPlugin) {
    let plugins = this._plugins.get(key) 
    if(plugins === undefined) {
      plugins = []
      this._plugins.set(key, plugins)
    }
    plugins.push(plugin)
  }

  get<TPlugin>(key: InjectionKey<TPlugin>) {
    const plugins = this._plugins.get(key)
    if(!plugins) {
      return undefined
    }
    return reactive(plugins) as TPlugin[]
  }

  private readonly _plugins = new Map<Symbol, any[]>()
}

const _instance = new PluginManager();
import { Component } from 'vue'
import { CiukuneApp } from '../main'

export interface MenuItemDescriptor {
  component: Component,
  icon: string
  label: string,
  path: string,
}

export interface MenuItem {
  icon: string
  label: string,
  link: string,
}

export class PluggableMenu {
  constructor(parentRoute: string | undefined = undefined){
    this._parentRoute = parentRoute
  }

  get items() { return this._menuItems; }

  addItem(item: MenuItemDescriptor) {
  }

  private readonly _parentRoute: string | undefined
  private readonly _items: MenuItemDescriptor[] = []
  private readonly _menuItems: MenuItem[] = []
}

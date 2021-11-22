import { Component } from 'vue'

export interface IMenuPlugin {
  component: Component,
  icon: string
  label: string,
  path: string,
}

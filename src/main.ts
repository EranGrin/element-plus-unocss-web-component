import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
import app from "./App.vue";

import ElementPlus from "element-plus";
export const pluginsWrapper = {
  install(GivenVue: any) {
    const Vue = GivenVue
    Vue.use(ElementPlus)
  },
}

import style from './style.css?inline' 
// import { createWebComponent } from '../../npms/vue-web-component-wrapper/package/index.js'
import { createWebComponent } from 'vue-web-component-wrapper'

createWebComponent({
    rootComponent: app,
    elementName: 'my-web-component',
    plugins: pluginsWrapper,
    cssFrameworkStyles: style,
    VueDefineCustomElement,
    h,
    createApp,
    getCurrentInstance,
  })


{{#if vuex}}
import { createStore } from 'vuex'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
})
{{#else}}
import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
  
})
{{/if}}
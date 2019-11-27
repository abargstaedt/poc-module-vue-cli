/* eslint-disable no-console */
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

export function getComponent() {
  console.log('diHTMl module is using Vue version:', Vue.version);
  const component = new Vue({
    render: h => h(App)
  }).$mount();
  return document.createElement('div').appendChild(component.$el);
}

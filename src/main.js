import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

export function getComponent() {
  const component = new Vue({
    render: h => h(App)
  }).$mount();
  return document.createElement('div').appendChild(component.$el);
}

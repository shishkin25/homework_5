const requireAll = (r) => r.keys().forEach(r);
const requireContext = require.context('@/assets/icons/', true, /\.svg$/);
requireAll(requireContext);



import Vue from 'vue'
import App from './App.vue'


/* глобальная регистрация UI компонентов */
import components from '@/components/UI/baseComponents.js';
components.forEach(component => {
  Vue.component(component.name, component);
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

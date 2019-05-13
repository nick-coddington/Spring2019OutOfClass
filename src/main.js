import Vue from 'vue';
import App from './App.vue';
import vSelect from 'vue-select'
import router from './router';
import './assets/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

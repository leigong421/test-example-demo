/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-06 14:38:45
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-25 13:49:37
 * @Description: this is description
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import HbUI from 'hb-ui';
Vue.config.productionTip = false;
import Print from 'vue-print-nb';
Vue.use(Print);
Vue.use(HbUI);
new Vue({
  router,
  store,

  render: (h) => h(App)
}).$mount('#app');

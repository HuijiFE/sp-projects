// tslint:disable:no-import-side-effect
// tslint:disable:variable-name
// tslint:disable:no-any
// tslint:disable:no-reserved-keywords
import 'normalize.css';
import Vue from 'vue';
// import * as components from '@/components';
// import App from '@/App.vue';
import App from '@/H5.vue';
import '@/App.scss';

// Object.entries(components).forEach(([name, comp]) => Vue.component(name, comp));

Vue.config.productionTip = false;

/**
 * Main
 */
new Vue({
  render: h => h(App),
}).$mount('#app');

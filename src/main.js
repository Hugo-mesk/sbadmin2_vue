
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWrench, faCog, faTable, faChartArea,
         faAngleDown, faAngleUp,
         faTachometerAlt, faLaughWink,
         faSearch, faBars, faBell, faEnvelope,
         faFileAlt, faExclamationTriangle, faDonate,
         faDownload, faSignInAlt,
         faUser, faSignOutAlt, faList, faUserCog
       } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
// import 'element-ui/lib/theme-chalk/index.css'
// import DataTables and DataTablesServer separately
// import { DataTables, DataTablesServer } from 'vue-data-tables'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sb-admin-2.css'
import App from './App.vue'


// Install BootstrapVue
Vue.use(BootstrapVue);
// Install Router
//  const router = new VueRouter();
Vue.use(VueRouter);
// Install ElementUI
// Vue.use(ElementUI, { locale })
// // Install DataTables
// Vue.use(DataTables)
// Vue.use(DataTablesServer)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

library.add(faWrench, faCog, faTable, faChartArea);
library.add(faAngleDown, faAngleUp);
library.add(faTachometerAlt, faLaughWink);
library.add(faSearch, faBars, faBell, faEnvelope);
library.add(faFileAlt, faExclamationTriangle, faDonate);
library.add(faDownload, faSignInAlt);
library.add(faUser, faSignOutAlt, faList, faUserCog);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app');

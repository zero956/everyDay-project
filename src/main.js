import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Menu, Icon, Breadcrumb } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.component(Button.name, Button);
Vue.component(Menu.name, Menu);
Vue.component(Icon.name, Icon);
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

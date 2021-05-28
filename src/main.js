import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTyperPlugin from "vue-typer";
// Cryptoicons - https://github.com/spothq/cryptocurrency-icons
import Cryptoicon from "vue-cryptoicon";
import icons from "vue-cryptoicon/src/icons";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Vue Typer
Vue.use(VueTyperPlugin);

Cryptoicon.add(icons)
Vue.use(Cryptoicon, { size: "15", color: "gold" });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

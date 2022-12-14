import Vue from "vue";
import App from "./App.vue";
import { Table, TableColumn } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Table);
// Vue.use(TableColumn);

const app = new Vue({
  render: (h) => h(App),
}).$mount("#app");

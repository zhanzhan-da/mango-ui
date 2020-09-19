import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";

Vue.component("m-button", Button);
Vue.component("m-icon", Icon);
Vue.component("m-button-group", ButtonGroup);
Vue.component("m-input", Input);
Vue.component("m-row", Row);
Vue.component("m-col", Col);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    message: "hi",
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
  },
});

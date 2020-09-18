import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";

Vue.component("m-button", Button);
Vue.component("m-icon", Icon);
Vue.component("m-button-group", ButtonGroup);
Vue.component("m-input", Input);

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

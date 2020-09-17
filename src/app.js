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
  },
});

//单元测试
import chai from "chai";

const expect = chai.expect;

{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  button.$mount("#test");
  let useElement = button.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#i-settings");
  button.$el.remove();
  button.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      loading: true,
    },
  });
  button.$mount();
  let useElement = button.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#i-loading");
  button.$el.remove();
  button.$destroy();
}
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      loading: true,
    },
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("1");
  button.$el.remove();
  button.$destroy();
}
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      iconPosition: "right",
    },
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("2");
  button.$el.remove();
  button.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const mButton = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  mButton.$mount();
  mButton.$on("click", function() {
    expect(1).to.eq(1);
  });
  let button = mButton.$el;
  button.click();
}

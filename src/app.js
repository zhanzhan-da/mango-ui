import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Footer from './footer';

Vue.component('m-button', Button);
Vue.component('m-icon', Icon);
Vue.component('m-button-group', ButtonGroup);
Vue.component('m-input', Input);
Vue.component('m-row', Row);
Vue.component('m-col', Col);
Vue.component('m-layout', Layout);
Vue.component('m-header', Header);
Vue.component('m-sider', Sider);
Vue.component('m-content', Content);
Vue.component('m-footer', Footer);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hi'
  },
  methods: {
    inputChange(e) {
      console.log(e);
    }
  }
});

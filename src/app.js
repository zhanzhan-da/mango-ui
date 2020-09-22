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
import Toast from './toast';
import plugin from './plugin';

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
Vue.component('m-toast', Toast);
Vue.use(plugin);

import createElement from 'vue';

const h = createElement;

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hi'
  },
  methods: {
    showToast1() {
      this.showToast('top');
    },
    showToast2() {
      this.showToast('middle');
    },
    showToast3() {
      this.showToast('bottom');
    },
    showToast(position) {
      this.$toast(`这是一条信息`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '关闭',
          callback() {
            console.log('关闭');
          }
        },
        autoClose: 3
      });
    }
  }
});

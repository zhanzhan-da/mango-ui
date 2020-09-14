import Vue from 'vue';
import Button from './button';
import Icon from './icon';

Vue.component('m-button', Button);
Vue.component('m-icon', Icon);

new Vue({
    el: '#app',
    data:{
        loading1:false
    }
})
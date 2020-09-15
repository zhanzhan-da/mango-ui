import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group'

Vue.component('m-button', Button);
Vue.component('m-icon', Icon);
Vue.component('m-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data:{
        loading1:false
    }
})

//单元测试
import chai from 'chai';

const expect = chai.expect;

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
}
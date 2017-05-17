import Vue from 'vue';
import iView from 'iview';
import App from './views/app.vue';
import 'iview/dist/styles/iview.css';
import './styles/common.css';

Vue.use(iView);
new Vue({
    el: '#app',
    render: h => h(App)
});

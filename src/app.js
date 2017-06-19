import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import iView from 'iview';

import App from './views/app/index.js';
import 'iview/dist/styles/iview.css';

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
Vue.use(VueAxios, axios)
Vue.use(iView);

new Vue({
    el: '#app',
    render: h => h(App)
});

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './request'
import store from './store'

import installElementPlus from './plugins/element'

import './index.css'

const app = createApp(App)
installElementPlus(app)
app.use(router)
	.use(store)
	.mount('#app')
	
	
	
;(function(){
  var rem = document.createElement('script');
  rem.src = './rem.js';
  document.body.appendChild(rem)
})()
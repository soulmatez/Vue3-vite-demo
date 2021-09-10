// 这里跟vue2有点区别，vue2中是直接导入vue，然后通过vue.use(xxx)
import { createStore } from 'vuex'
import getters from './getters'


// 调用createStore
export default createStore({
  getters
})
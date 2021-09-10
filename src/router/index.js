import { createRouter,createWebHashHistory} from "vue-router"
const routerHistory = createWebHashHistory()

import Layout from '../views/Layout/index.vue'

const routes = [{
	path: '/login', 
	name:'Login',
	component: ()=> import('../views/Login/index.vue'),
},{
	path: '/', 
	name:'Index',
	component: Layout,
	redirect:'/main',
	children:[{
		path:'main',
		name:'Main',
		component: () => import('../views/Main/index.vue'),
	},{
		path:'mine',
		name:'Mine,',
		component: () => import('../views/Mine/index.vue'),
	}]
}]


const router = createRouter({	
	history: routerHistory,	
	base: process.env.BASE_URL,  //当不好用时候，可以加上这句话再试试
    routes
})

export default router;
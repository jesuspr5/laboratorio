import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuBar from '@/components/MenuBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MenuBar,
    
    },

      {
          
        path:'/dashboard',
        component: ()=> import ('@/components/DashBoard.vue')
      },
      {
        path: '/table',
        component: () => import('@/components/CompTable.vue') 
      },
 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

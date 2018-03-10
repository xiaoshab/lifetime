import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Case from '@/components/Case'
import Works from '@/components/Works'
import Activity from '@/components/Activity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/case',
    	component:Case
    },
    {
      path:'/wokrs/:id',
      component:Works
    },
    {
      path:'/activity',
      component:Activity
    },
  ]
})

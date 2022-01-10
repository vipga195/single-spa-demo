import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import People from '@/components/People'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue/people',
      name: 'People',
      component: People
    },
    {
      path: '/vue/vue',
      name: 'Vue',
      component: People
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Vcode from '@/components/Vcode'
import Main from '@/components/Main'
import MainStep1 from '@/components/MainStep1'
import MainStep2 from '@/components/MainStep2'
import MainStep3 from '@/components/MainStep3'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/vcode',
      name: 'Vcode',
      component: Vcode
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main/step1',
          name: 'MainStep1',
          component: MainStep1
        },
        {
          path: '/main/step2',
          name: 'MainStep2',
          component: MainStep2
        },
        {
          path: '/main/step3',
          name: 'MainStep3',
          component: MainStep3
        }
      ]
    }
  ]
})

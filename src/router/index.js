import Vue from 'vue'
import Router from 'vue-router'
import FirstChild from '@/components/FirstChild'
import MintUILab from '@/components/MintLab'
import SecondViewsFirstChild from '@/components/SecondViewsFirstChild'
import Compile from '@/view/Compile'
import WorldAnalysis from '@/view/worldAnalysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Compile',
      components: {
        default: Compile
      },
      children: [
        {
          path: '/worldAnalysis',
          name: 'worldAnalysis',
          component: WorldAnalysis
        },
        {
          path: '/FirstChild',
          component: FirstChild,
          alias: '/sss',
          props: {
            message: 'you are my son'
          }
        },
        {
          path: '/SecondViewsFirstChild',
          component: SecondViewsFirstChild
        }
      ]
    },
    {
      path: '/MintUILab',
      name: 'MintUILab',
      component: MintUILab
    }
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MintUI from  'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import {store} from './store'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // 组件路径
  './components/testComponents',
  // 是否查询子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
)

// 遍历匹配文件名...
requireComponent.keys().forEach(fileName => {
  // 获取组件信息
  const componentConfig = requireComponent(fileName)
  // 获取组件的 帕斯卡命 命名(首字母大写的驼峰命名)
  const componentName = upperFirst(
    camelCase(
      fileName
      // 移除文件名前面的 "./_"
      .replace(/^\.\/_/, '')
      // 移除文件的扩展名
      .replace(/\.\w+$/, '')
    )
  )
  // 注册全局组件
  Vue.component(componentName, componentConfig.default || componentConfig)
})


Vue.use(ElementUI)
Vue.use(MintUI)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

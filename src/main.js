import Vue from 'vue'
import App from './App.vue'
// import VueI18n from 'vue-i18n'
// import i18n from './i18n'
import { i18n } from './i18n/index' //国际化
import { Grid, GridItem, NavBar, Swipe, SwipeItem, Tabbar, TabbarItem, Picker, Button, Popup } from 'vant'
import 'vant/lib/index.css'

Vue.use(Grid).use(GridItem).use(NavBar).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Picker).use(Button).use(Popup);

// [Grid, GridItem, NavBar, Swipe, SwipeItem].forEach(x => Vue.use(x))

Vue.config.productionTip = false

// Vue.use(VueI18n)

// const messages = {
//   en: {
//     message: {
//       my: 'my',
//       icon: 'icon{0}',
//       home: 'home',
//       search: 'search',
//       friends: 'friends',
//       setting: 'setting',
//       back: 'back',
//       confirm: 'confirm',
//       cancel: 'cancel',
//       languages: 'languages',
//     }
//   },
//   cn: {
//     message: {
//       my: '我的',
//       // 格式化
//       icon: '图标{0}',
//       home: '首页',
//       search: '查找',
//       friends: '朋友',
//       setting: '设置',
//       back: '返回',
//       confirm: '确定',
//       cancel: '取消',
//       languages: '语言',
//     }
//   }
// }

// // 通过选项创建 VueI18n 实例
// const i18n = new VueI18n({
//   locale: 'cn', // 设置地区
//   messages, // 设置地区信息
// })

new Vue({
  // el: '#app',
  i18n,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en', // 从localStorage中获取 默认英文
  messages: {
    zh: require('./lang/zh'),
    en: require('./lang/en')
  }
})

export default i18n
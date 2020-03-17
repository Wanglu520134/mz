import Vue from 'vue'
import moment from 'moment'

Vue.filter('dataFilter', function (data) {
  return moment(data * 1000).format('YYYY-MM-DD')
})// 时间戳 毫秒数

// 自定义 过滤器 数字====>字符串
Vue.filter('actorFilter', function (data) {
  // console.log(data.map(item => item.name).join(' '))
  return data.map(item => item.name).join(' ')
})
Vue.filter('categoryFilter', function (data) {
  console.log(data)
  console.log(data.replace(new RegExp('\\|', 'g'), ' | '))
  // new RegExp 用于在中文中检索
  return data.replace(new RegExp('\\|', 'g'), ' | ')
})

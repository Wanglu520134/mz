import Vue from 'vue'
import VueRouter from 'vue-router'
// import Film from '@/views/Film'
// import Cinema from '@/views/Cinema'
// import Center from '@/views/Center'
// import Detail from '@/views/Detail'
// import ErrorComponent from '@/views/ErrorComponent'
// import Nowplaying from '@/views/Film/Nowplaying'
// import Comingsoon from '@/views/Film/Comingsoon'
// import Login from '@/views/Login'
Vue.use(VueRouter) // 注册路由插件
// 路由映射表
const routes = [
  {
    path: '/film',
    // component: Film,
    component: () => import('@/views/Film'), // 路由懒加载
    children: [
      {
        path: '/film/nowplaying',
        // component: Nowplaying
        component: () => import('@/views/Film/Nowplaying') // 路由懒加载
      },
      {
        path: '/film/comingsoon',
        // component: Comingsoon
        component: () => import('@/views/Film/Comingsoon') // 路由懒加载
      },
      {
        path: '/film',
        redirect: '/film/nowplaying' // 重定向
      }
    ]
  },
  {
    path: '/cinema',
    // component: Cinema
    component: () => import('@/views/Cinema') // 路由懒加载
  },
  {
    path: '/center',
    // component: Center
    component: () => import('@/views/Center') // 路由懒加载
  },
  {
    path: '/login',
    // component: Login
    component: () => import('@/views/Login') // 路由懒加载
  },
  {
    path: '/detail/:wangluid',
    // component: Detail
    component: () => import('@/views/Detail') // 路由懒加载
  },
  {
    path: '/',
    redirect: '/film' // 重定向
  },
  {
    path: '*',
    // component: ErrorComponent
    component: () => import('@/views/ErrorComponent') // 路由懒加载
  }
]
const router = new VueRouter({
  // mode: 'history', // history  hash
  routes
})
// 配置路由拦截
// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   if (to.path === '/center') {
//     // console.log('被拦截啦')
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       // 重定向到 login页面
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })
export default router

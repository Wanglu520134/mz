<template>
  <div>
    center
  </div>
</template>
<script>
export default {
  // 路由的钩子函数
  beforeRouteEnter (to, from, next) {
    // 局部路由守卫
    console.log('拦截')
    if (localStorage.getItem('token')) {
      next()
    } else {
      // 重定向到 login页面
      next('/login')
    }
  }
}
</script>

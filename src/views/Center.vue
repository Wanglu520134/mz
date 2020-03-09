<template>
  <div>
    center
  </div>
</template>
<script>
export default {
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

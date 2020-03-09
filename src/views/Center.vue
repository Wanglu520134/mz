<template>
  <div>
    center
  </div>
</template>
<script>
export default {
<<<<<<< HEAD
  // 路由的钩子函数
=======
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
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

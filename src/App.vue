<template>
  <div id="app">
    <tabbar></tabbar><!-- 选项卡组件 -->
    <router-view></router-view> <!-- 路由容器 -->
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
export default {
  components: {
    tabbar
  }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style-type: none;
  }
</style>

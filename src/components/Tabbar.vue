<template>
  <nav>
    <ul>
      <!-- <router-link :to="navlist[0]" tag="li" activeClass="active">电影</router-link>
      <router-link :to="navlist[1]" tag="li" activeClass="active">影院</router-link>
      <router-link :to="navlist[2]" tag="li" activeClass="active">我的</router-link>-->
      <router-link
        tag="li"
        activeClass="active"
        v-for="data in navlist"
        :key="data.text"
        :to="data.path"
      >
        <i class="iconfont" :class="data.icon"></i>
        <span>{{data.text}}</span>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      navlist: [
        {
          path: '/film',
          text: '电影',
          icon: 'icon-dianying '
        },
        {
          path: '/cinema',
          text: '影院',
          icon: 'icon-cinemas-active '
        },
        {
          path: '/center',
          text: '我的',
          icon: 'icon-wode '
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.active {
  color: #ff9665;
}
nav {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background: white;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 25px;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

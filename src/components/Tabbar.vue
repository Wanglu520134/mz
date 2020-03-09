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
<<<<<<< HEAD
        <i class="iconfont" :class="data.icon"></i>
=======
        <i :class="data.icon"></i>
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
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
<<<<<<< HEAD
          icon: 'icon-dianying '
=======
          icon: 'iconfont icon-dianying '
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
        },
        {
          path: '/cinema',
          text: '影院',
<<<<<<< HEAD
          icon: 'icon-cinemas-active '
=======
          icon: 'iconfont icon-cinemas-active '
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
        },
        {
          path: '/center',
          text: '我的',
<<<<<<< HEAD
          icon: 'icon-wode '
=======
          icon: 'iconfont icon-wode '
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
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
<<<<<<< HEAD
      line-height: 25px;
=======
      line-height: 20px;
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

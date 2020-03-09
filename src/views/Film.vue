<template>
  <div>
<<<<<<< HEAD
    <swiper :key="looplist.length">
      <div class="swiper-slide" v-for="data in looplist" :key="data.bannenId">
        <img :src="data.imgUrl"/>
        </div>
    </swiper>
=======
    <div>
      大轮播
    </div>
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
    <div>
      导航栏
    </div>

    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>
<script>
<<<<<<< HEAD
import http from '@/util/http'
import swiper from '@/components/Swiper'
=======
import axios from 'axios'
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
export default {
  data () {
    return {
      looplist: []
    }
  },
<<<<<<< HEAD
  components: {
    swiper // 局部注册swiper组件
  },
  mounted () {
    http.request({
      url: '/gateway?type=2&cityId=310100&k=7383497',
      headers: {
        'X-Host': ' mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res.data)
      var obj = {
        bannenId: 222222222222,
        imgUrl: 'https://pic.maizuo.com/usr/movie/3675789254c2a0677e85cce86815a267.jpg'
      }
      this.looplist = [...res.data.data, obj]
=======
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=310100&k=5820360',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583239506476741370245","bc":"310100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res.data)
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8
    })
  }
}
</script>
<<<<<<< HEAD
<style lang="scss" scope>
  .swiper-slide{
    img{
      width: 100%;
      height: 164px;
    }
  }
</style>
=======
>>>>>>> 533a9d0b191cbfb46a84cffc7d88cb9d5563d3a8

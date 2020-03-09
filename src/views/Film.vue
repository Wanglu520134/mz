<template>
  <div>
    <swiper :key="looplist.length">
      <div class="swiper-slide" v-for="data in looplist" :key="data.bannenId">
        <img :src="data.imgUrl"/>
        </div>
    </swiper>
    <div>
      导航栏
    </div>

    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>
<script>
import http from '@/util/http'
import swiper from '@/components/Swiper'
export default {
  data () {
    return {
      looplist: []
    }
  },
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
    })
  }
}
</script>
<style lang="scss" scope>
  .swiper-slide{
    img{
      width: 100%;
      height: 164px;
    }
  }
</style>

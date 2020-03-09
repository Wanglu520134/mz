<template>
  <div>
    <div>
      大轮播
    </div>
    <div>
      导航栏
    </div>

    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      looplist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=310100&k=5820360',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583239506476741370245","bc":"310100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res.data)
    })
  }
}
</script>

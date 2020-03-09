<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster"/>
          <h4>{{data.name}}</h4>
          <p>观众评分：{{data.grade}}</p>
        </li>
    </ul>
  </div>
</template>
<script>
import http from '@/util/http'
// 自定义 过滤器 数字====>字符串
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    http.request({
      url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=7624264',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`) // 切换页面
    }
  }
}
</script>
<style lang="scss" scoped>
li{
  display: hidden;
  padding: 5px;
  img{
    float: left;
    width: 100px;
  }
  h4 p{
    padding: 5px;
  }
}
</style>

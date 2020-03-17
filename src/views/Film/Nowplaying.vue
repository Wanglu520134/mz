<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster"/>
          <h4>{{data.name}}</h4>
          <span>观众评分：{{data.grade}}</span> <span>{{data.filmType.name}}</span>
          <p class="actors">主演：{{data.actors | actorFilter}}</p>
          <p>{{data.nation}} | {{data.runtime}}分钟</p>
        </li>
    </ul>
  </div>
</template>
<script>
import http from '@/util/http'

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
      // console.log(res.data)
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
  .actors{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>

<template>
  <div v-if="filminfo">
    <img :src="filminfo.poster"/>
    <div class="box">
      <div class="nameBox">
        <div class="film-name">
          <span class="name">{{filminfo.name}} </span>
          <span class="item">{{filminfo.filmType.name}}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{filminfo.grade}}</span><br/>
          <span class=".grade-text">分</span>
        </div>
      </div>
      <p>{{filminfo.category | categoryFilter}}</p>
      <p>{{filminfo.premiereAt | dataFilter}}上映</p>
      <p>{{filminfo.nation}} | {{filminfo.runtime}}分钟</p>
      <div :class="isActive?'synopsis':''">
      {{filminfo.synopsis}}
      </div>
      <p @click="isActive=!isActive" class="iconfont icon-down"></p>
    </div>
  </div>
</template>

<script>
import http from '@/util/http'

export default {
  data () {
    return {
      filminfo: null,
      isActive: true
    }
  },
  mounted () {
    // this.$router // 路由对象
    // this,$route // 当前按唯一匹配理由对象
    console.log(this.$route.params.wangluid, '利用id去请求接口数据')

    http.request({
      url: `/gateway?filmId=${this.$route.params.wangluid}&k=4837234`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  }
}
</script>
<style lang="scss" scoped>
img{
  width: 100%
}
.box{
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
  .nameBox{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .film-name{
      width: 256px;
      .name{
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
      }
      .item{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }
    }
    .film-grade{
      width: calc(100% - 250px);
      text-align: right;
      color: #ffb232;
      .grade{
        font-size: 18px;
        font-style: italic;
      }
      .grade-text{
        font-size: 10px;
      }
    }
  }
}
.synopsis{
  height: 40px;
  overflow: hidden;
}
.iconfont{
  margin: 0 auto;
  width: 20px;
}
p{
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}
</style>

<template>
  <div>
    detail
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.params.wangluid, '利用id去请求接口数据')
  }
}
</script>

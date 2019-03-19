<template>
  <div>
    <h4>这里是第二个视图</h4>
    <el-button @click="goToSecondViewsFirstView">去第二个视图的第一个子路由</el-button>
  </div>
</template>

<script>
  import ElButton from "element-ui/packages/button/src/button";

  export default {
    components: {ElButton},
    data() {
      return {

      }
    },
    methods: {
      goToSecondViewsFirstView() {
        this.$router.push({path: 'SecondViewsFirstChild', query: { info: 'dddd'}})
      }
    }
  }
</script>
<style scoped>

</style>

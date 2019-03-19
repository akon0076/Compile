<template>
  <div>
    <h3>HelloWorld说{{ message }}</h3>
    <el-button @click="countAdd">加一</el-button>
    <!--<h3>count is {{ count }}</h3>-->
  </div>
</template>
<script>
  import ElButton from "element-ui/packages/button/src/button";
  export default {
    components: {ElButton},
    props:['message'],
    data() {
      return {
      }
    },
    computed: {
      // count: this.$store.state.test.count,
    },
    methods: {
      countAdd() {
        this.count++
      }
    }
  }

</script>
<style scoped>
  </style>

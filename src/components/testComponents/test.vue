<template>
  <div>
    <el-button @click="say()">day</el-button>
  </div>
</template>
<script>
  import ElButton from "element-ui/packages/button/src/button";

  export default {
    components: {ElButton},
    name: 'test',
    data() {
      return {
      }
    },
    methods: {
      say() {
        alert("ddd")
        this.$emit('isay',false)
      }
    },
    props: ['todos'],
    computed: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

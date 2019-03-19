<template>
  <div style="width: 100%">
    <h1>My&nbsp;Vue</h1>
    <Test2></Test2>
    <h4>这里是第一个视图</h4>
    <el-button type="primary" @click="goToFirstChild">GoTo->FirstChild</el-button>
    <div style="width: 100%">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    let importantTag = document.getElementsByClassName('mint-cell-text')
    importantTag.item(0).insertAdjacentHTML('beforebegin', '<span style="color: red">*</span>')
  },
  data () {
    return {
      username: '',
      which_to_show: 'Test'
    }
  },
  methods: {
    goToFirstChild () {
      this.$router.push({path: 'sss', query: {info: 'dddd'}})
    }
  },
  watch: {
  },
  components: {
    'Test2': () => import('./testComponents/test')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

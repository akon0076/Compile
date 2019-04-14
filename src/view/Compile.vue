<template>
  <div class="complieDiv">
    <el-menu :default-active="activeIndex" background-color="#545c64" class="el-menu-demo"
             active-text-color="#ffd04b" mode="horizontal">
      <el-menu-item index="1" class="title">分段编译系统</el-menu-item>
    </el-menu>
    <div class="item-content">
      <el-col :span="3">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo left-bar"
          @open=""
          align="left"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" @click="changeState('wordAnalysis')">
            <i class="el-icon-tickets"></i>
            <span slot="title">词法分析</span>
          </el-menu-item>
          <el-menu-item index="2" @click="changeState('syntaxAnalysis')">
            <i class="el-icon-edit"></i>
            <span slot="title">语法分析</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">语义分析</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <world-analysis :type="type"></world-analysis>
    </div>
  </div>
</template>

<script>
  import WorldAnalysis from "./worldAnalysis";
  export default {
    name: 'Compile',
    components: {WorldAnalysis},
    data() {
      return {
        type: 'worldAnalysis',
        activeIndex: '1'
      }
    },
    methods: {
      changeState(type) {
        this.type = type;
      },
    }
  }
</script>
<style scoped>
  .item-content {
    flex: 1;
  }
</style>
<style>
  .title {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
  }

  .complieDiv {
    flex-flow: column;
    display: flex;
  }

  .complieDiv .el-col {
    height: 100%;
  }

  .complieDiv .left-bar {
    height: 100%;
  }
</style>

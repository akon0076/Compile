<template>
  <div class="complieDiv">
    <el-menu :default-active="activeIndex" background-color="#545c64" class="el-menu-demo"
             active-text-color="#ffd04b" mode="horizontal">
      <el-menu-item index="1" class="title">分段编译系统</el-menu-item>
    </el-menu>
    <div class="item-content">
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo left-bar"
          @open=""
          align="left"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" @click="changeState('worldAnalysis')">
            <i class="el-icon-tickets"></i>
            <span slot="title">词法分析</span>
          </el-menu-item>
          <el-menu-item index="2" @click="changeState('syntaxAnalysis')">
            <i class="el-icon-edit"></i>
            <span slot="title">语法分析</span>
          </el-menu-item>
          <el-menu-item index="3" @click="changeState('arithmeticAnalysis')">
            <i class="el-icon-document"></i>
            <span slot="title">算数表达式分析</span>
          </el-menu-item>
          <el-menu-item index="4" @click="changeState('booleanAnalysis')">
            <i class="el-icon-more-outline"></i>
            <span slot="title">布尔表达式分析</span>
          </el-menu-item>
          <el-menu-item index="5" @click="changeState('ifStatementsAnalysis')">
            <i class="el-icon-remove-outline"></i>
            <span slot="title">IF语句分析</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <world-analysis :fun="fun"></world-analysis>
      </el-col>
    </div>
  </div>
</template>

<script>
  import WorldAnalysis from "./worldAnalysis";
  import Util from '@/Util';
  export default {
    name: 'Compile',
    components: {WorldAnalysis},
    data() {
      return {
        fun: Util.worldAnalysis,
        activeIndex: '1'
      }
    },
    methods: {
      changeState(type) {
        this.fun = Util[type];
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

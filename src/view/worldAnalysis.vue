<template>
  <div class="worldAnalysis-div">
    <el-col :span="21" class="card">
      <el-card class="card-height">
        <div class="content">
          <el-tabs type="border-card" class="tab-style">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 输入代码</span>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="input">
              </el-input>
            </el-tab-pane>
          </el-tabs>
          <el-tabs type="border-card" class="tab-style">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 分析结果</span>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="等待编译..."
                v-model="output">
              </el-input>
            </el-tab-pane>
          </el-tabs>
          <el-button type="primary" @click="compile">词法分析</el-button>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
  import WorldAnalysis from '@/Util';
    export default {
        name: "worldAnalysis",
      data() {
          return {
            input: "public 234 insist",
            output: ""
          }
      },
      mounted() {
      },
      methods: {
          compile() {
            this.output = WorldAnalysis(this.input);
          }
      }
    }
</script>

<style scoped>
  .worldAnalysis-div {
    height: 100%;
  }
  .card {
    padding: 10px;
    height: 100%;
  }
  .card-height {
    height: 100%;
    display: flex;
  }
  .content {
    padding: 10px;
  }
  .tab-style {
    margin-bottom: 50px;
  }
</style>
<style>
  .worldAnalysis-div .el-card__body {
    width: 100%;
  }
  .worldAnalysis-div .el-textarea {
    min-height: 150px;
  }
  .worldAnalysis-div .el-textarea__inner {
    min-height: 150px !important;
  }
</style>

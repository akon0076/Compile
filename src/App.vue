<template>
  <div id="app">
    <router-view class="router-view"/>
  </div>
</template>

<script>
  export default {
    name: 'app',

    data() {
      return {}
    },
    methods: {
      goToMintUI() {
        this.$router.push({path: 'MintUILab'})
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  body {
    margin: 0px;
    padding: 0px;
    min-width: 1090px;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  .router-view {
    height: 100%;
  }
</style>

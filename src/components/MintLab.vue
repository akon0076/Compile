<template>
  <div class="Liuhua">
    <mt-search
      v-model="value"
      placeholder="按姓名搜索">
    </mt-search>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ddd: 'ddd',
        value: ''
      }
    }
  }

</script>
<style scoped>
</style>
<style>
  .Liuhua .mint-searchbar {
    padding: 2px 2px;
    border-radius: 5px;
  }

  .Liuhua .mint-searchbar-cancel {
    display: none;
  }

  .Liuhua .mintui mintui-search {
    font-size: 15px
  }
</style>

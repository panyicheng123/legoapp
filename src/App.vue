<template>
  <div id="app">
    <keep-alive  exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-main></tab-bar-main>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/common/tabbar/TabBar";
  import TabBarMain from "./components/common/tabbar/TabBarMain";
  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarMain,
    }
  }
</script>
<style>
  @import "assets/css/base.css";
</style>

<template>
  <div id="tarbar_main">
    <tab-bar-item path="/home">
      <img slot="item_icon" src="~assets/img/tabbar/home.svg"/>
      <img slot="item_icon_acitve" src="~assets/img/tabbar/home-active.svg"/>
      <div slot="item_text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item_icon" src="~assets/img/tabbar/all.svg"/>
      <img slot="item_icon_acitve" src="~assets/img/tabbar/all-active.svg"/>
      <div slot="item_text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item_icon" src="~assets/img/tabbar/shopping-cart.svg"/>
      <img slot="item_icon_acitve" src="~assets/img/tabbar/shopping-cart-active.svg"/>
      <div slot="item_text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item_icon" src="~assets/img/tabbar/account.svg"/>
      <img slot="item_icon_acitve" src="~assets/img/tabbar/account-active.svg"/>
      <div slot="item_text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";
    export default {
      name: "TabBarMain",
      components:{
        TabBarItem
      }
    }
</script>

<style scoped>
  #tarbar_main{
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: black;
    z-index: 1;
  }
</style>

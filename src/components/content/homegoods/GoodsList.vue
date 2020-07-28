<template>
<div class="goodlist">
  <goods-item v-for="(item,index) in goods.list" :goodsinfo="item" :key="index"></goods-item>
</div>
</template>

<script>
  import GoodsItem from "./GoodsItem";
    export default {
      name: "GoodsList",
      props:{
        goods:{
          type:Object
        }
      },
      components:{
        GoodsItem
      }
    }
</script>

<style scoped>
.goodlist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

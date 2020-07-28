<template>
<div class="goodsitem" @click="todetail">
    <img :src="goodsinfo.show.img" class="goodimg" @load="imgload"/>
    <div class="goodname">{{goodsinfo.title}}</div>
    <div class="goodprice">
      <span>{{goodsinfo.orgPrice}}</span>
      <img src="~assets/img/home/favourite.svg" alt="">
      <span>{{goodsinfo.cfav}}</span>
    </div>
</div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      goodsinfo:{
        type:Object
      }
    },
    methods:{
      imgload(){
        //在事件总线中发送一个事件
        this.$bus.$emit("imgisload")
      },
      todetail(){
        this.$router.push({
          path:"/detail",
          query:{
            iid:this.goodsinfo.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
.goodsitem{
  flex: 1;
  margin: 5px 0px
;
}
.goodimg{
  margin-left: 10px;
  width: 90%;
  border-radius: 10px;
}
.goodname{
  margin-left: 15px;
  text-align: center;
  width: 160px;
  font-size: 14px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
}
.goodprice{
  color: #ff5500;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.goodprice img{
  margin: 12px 8px 0px 5px;
}
</style>

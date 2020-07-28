<template>
 <div id="detail">
  <detail-nav></detail-nav>
  <detail-swiper :topImage="topImage" class="detail_swiper"></detail-swiper>
 </div>
</template>

<script>
  import DetailNav from "./childComp/DetailNav";
  import DetailSwiper from "./childComp/DetailSwiper";

  import {getDetailInfo} from "../../network/detail";
  export default {
    name: "Detail",
    data(){
      return {
        itemId:null,
        topImage:[]

      }
    },
    components:{
      DetailNav,
      DetailSwiper
    },
    created() {
      //1.存储iid
      this.itemId = this.$route.query.iid
     //2.根据对应的iid请求数据
      getDetailInfo(this.itemId).then((res) => {
        //保存轮播图片信息
         this.topImage = res.result.itemInfo.topImages
      })
    }
  }
</script>
<style scoped>
#detail{
  height: 40px;
}
.detail_swiper{
  margin-top: 40px;
  height: 300px;
  overflow: hidden;
}
</style>


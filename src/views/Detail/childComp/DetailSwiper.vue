<template>
 <Swiper>
  <swiper-item v-for="(item,index) in topImage" :key="index">
    <img :src="item" alt="" class="topImage">
  </swiper-item>
 </Swiper>
</template>
<script>
  import Swiper from "../../../components/common/swiper/Swiper";
  import SwiperItem from "../../../components/common/swiper/SwiperItem";
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImage:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.swiperbottom{
  width: 100px;
  height: 32px;
  background-color: #ec7f2c;
  z-index: 9;
}
</style>

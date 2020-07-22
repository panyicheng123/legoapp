<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import SwiperItem from "../../../components/common/swiper/SwiperItem";
  import Swiper from "../../../components/common/swiper/Swiper";
    export default {
        name: "HomeSwiper",
        components:{
          Swiper,
          SwiperItem
        },
        props:{
          banners:{
            type:Array,
            default() {
              return []
            }
          }
        }
    }
</script>

<style scoped>

</style>

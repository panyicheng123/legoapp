<template>
  <div>
    <swiper class="homeswiper">
      <swiper-item v-for="(item,index) in banners" :key="index" >
        <a :href="item.link">
          <img :src="item.image" @load="swiperImage">
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
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        needEvent: false
      }
    },
    methods:{
      swiperImage(){
        //图片加载没有必要发送四次事件，发送一次即可
        if (!this.needEvent){
          this.$emit("swiperImageLoad")
          this.needEvent = true
        }
      }
    }
  }
</script>

<style scoped>
</style>

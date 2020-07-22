<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="middle">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommends :recommends="recommends"></home-recommends>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMutidata} from "../../network/home";
  import HomeSwiper from "./children/HomeSwiper";
  import HomeRecommends from "./children/HomeRecommends";
  export default {
        name: "Home",
        components:{
          HomeRecommends,
          HomeSwiper,
          NavBar
        },
        data(){
          return {
            banners:[],
            recommends:[]
          }
        },
        //组件创建完成就请求所需数据
        created() {
          getHomeMutidata().then(
            res => {
              this.banners = res.data.banner.list;
              this.recommends = res.data.recommend.list;
            }
          )
        }
  }
</script>
<style scoped>
.home_nav{
  background-color: #ff8f98;
  color: white;
}
</style>

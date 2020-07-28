<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="middle">淘乐Go</div></nav-bar>
    <tab-bar-control :titles="['流行','新款','精选']"  @changecontrol="changecontrol" ref="tabbar1"
                     class="tabcontrol" v-show="tabshow"></tab-bar-control>
    <scroll class="wrap" ref="bscroll" @scroll="scrollEvent" @pullingUp="loadmoredata" :pullUpLoad="true" :probeType="3">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommends :recommends="recommends"></home-recommends>
      <home-fasion></home-fasion>
      <tab-bar-control :titles="['流行','新款','精选']"  @changecontrol="changecontrol" ref="tabbar2"></tab-bar-control>
      <goods-list :goods="goods[type]"></goods-list>
    </scroll>
    <to-top class="totop" v-show="istopshow" @click.native="totopClick"></to-top>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import TabBarControl from "../../components/content/tabbarcontrol/TabBarControl";
  import Scroll from "../../components/common/scroll/Scroll";

  import HomeSwiper from "./children/HomeSwiper";
  import HomeRecommends from "./children/HomeRecommends";
  import HomeFasion from "./children/HomeFasion";
  import GoodsList from "../../components/content/homegoods/GoodsList";
  import ToTop from "../../components/common/backtotop/ToTop";

  import {getHomeMutidata,getGoodsMutidata} from "../../network/home";
  import {debounce} from "../../common/utils";

  export default {
    name: "Home",
    components: {
      TabBarControl,
      HomeRecommends,
      HomeSwiper,
      NavBar,
      HomeFasion,
      GoodsList,
      Scroll,
      ToTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        currentIndex:0,
        goodstype:["pop","new","sell"],
        istopshow:false,
        tabcontrolTop:0,
        tabshow:false,
        positionY:0
      }
    },
    computed:{
      type(){
        return this.goodstype[this.currentIndex]
      }
    },
    methods:{
      swiperImageLoad(){
        /*
        获取tabcontrol的offsetTop
        直接获取如果图片没有完全加载完是会获取错误的高度
        我们要等轮播图载入完成后在获取这个高度
      */
        this.tabcontrolTop = this.$refs.tabbar2.$el.offsetTop
      },
      loadmoredata(){
        this.getGoodsMutidata(this.goodstype[this.currentIndex])
      },
      scrollEvent(position){
        //将当前滚动的Y距离保存起来
         this.positionY = position.y
        //显示前往顶部按钮，实现tabcontrol吸顶效果
        if (-(position.y) >= this.tabcontrolTop){
          this.istopshow = true
          this.tabshow = true
        }else{
          this.istopshow = false
          this.tabshow = false
        }

      },
      changecontrol(index){
        switch (index) {
          case 0:
            this.currentIndex = 0
            break
          case 1:
            this.currentIndex = 1
            break
          case 2:
            this.currentIndex = 2
            break
        }
        //同步两个tabcontrol的用户点击
        this.$refs.tabbar1.currentIndex = index
        this.$refs.tabbar2.currentIndex = index
      },
      //封装请求数据的方法
      getHomeMutidata(){
        getHomeMutidata().then(
          res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          }
        )
      },
      getGoodsMutidata(type){
        const page  = this.goods[type].page
        getGoodsMutidata(type,page).then(
          res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page++
          }
        )
      },
      totopClick(){
        this.$refs.bscroll.scroll.scrollTo(0,0,500)
      }
    },
    //组件创建完成就请求所需数据
    created() {
      this.getHomeMutidata(),
      this.getGoodsMutidata("pop")
      this.getGoodsMutidata("new")
      this.getGoodsMutidata("sell")

    },
    mounted() {
      const refresh = debounce(this.$refs.bscroll.refresh,50)
      //接收事件总线中的图片加载完成事件
      this.$bus.$on("imgisload",() => {
        refresh()
      })
    },
    //home处于活跃状态
    activated() {
      //防止bscroll还没加载出来就调用语句产生报错
      if (this.$refs.bscroll.scroll){
        this.$refs.bscroll.scroll.scrollTo(0,this.positionY,0)
      }
    },
    deactivated() {
      /*console.log(this.positionY)*/
    }
  }
</script>
<style scoped>
#home{
   height: calc(100vh - 89px);
 }
.home_nav{
  background-color: #ff8f98;
  color: white;
}
.wrap{
  margin-top: 40px;
  height: calc(100vh - 89px);
}
.totop{
  position: absolute;
  bottom: 60px;
  right: 10px;
}
.tabcontrol{
  margin-top: 40px;
  position: relative;
  z-index: 1;
}
</style>

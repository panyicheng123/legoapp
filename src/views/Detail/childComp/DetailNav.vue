<template>
    <nav-bar>
      <div slot="left" @click="backtohome">
        <img src="~assets/img/detail/back.svg" class="back">
      </div>
      <div slot="middle" class="detailnav">
        <div v-for="(item,index) in titles" :key="index"
             class="detail_item" :class="{active:currentIndex==index}"
              @click="changeIndex(index)">{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNav",
    data(){
      return {
        titles:["商品","参数","评论","推荐"],
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      backtohome(){
        this.$router.go(-1)
      },
      changeIndex(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
.detailnav{
  display: flex;
}
.detail_item{
  font-size: 15px;
  flex: 1;
}
.active{
  color: #ff8f98;
}
.back{
 margin-left: 30px;
  margin-top: 13px;
}
</style>

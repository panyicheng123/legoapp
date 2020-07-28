<template>
  <div id="wrap">
    <ul class="inner">
      <li>你</li>
      <li>的</li>
      <li>名</li>
      <li>字</li>
      <li>你</li>
      <li>的</li>
      <li>名</li>
      <li>字</li>
      <li>你</li>
      <li>的</li>
      <li>名</li>
      <li>字</li>
      <li>你</li>
      <li>的</li>
      <li>名</li>
      <li>字</li>
      <li>你</li>
      <li>的</li>
      <li>名</li>
      <li>字</li>
      <li>你</li>
      <li>的</li>
      <li>名</li>
      <li>字</li>
      <li>你</li>
      <li>的</li>
      <li>名</li>
      <li>字</li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data(){
      return{
        betterscroll:null
      }
    },
    mounted() {
      this.$nextTick(() => {
        let wrap = document.getElementById("wrap")
        this.betterscroll = new BScroll(wrap, {
          probeType:3,
          pullUpLoad:true
        })//eslint-disable-line no-unused-vars

        /*bs.on("scroll",(position) => {
          console.log(position)
        })*/

        this. betterscroll.on("pullingUp",() => {
          console.log("上拉加载更多")
        })
        })

      }
  }
</script>
<style scoped>
  #wrap {
    background-color: #bfa;
    text-align: center;
    height: 100px;
    overflow: hidden;
  }
</style>

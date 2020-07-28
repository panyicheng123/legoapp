<template>
    <div class="wrap" ref="wrap">
      <div class="content" ref="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "scroll",
    data() {
      return {
        scroll: null,
      }
    },
    props:{
      pullUpLoad:{
        type:Boolean,
        default(){
          return false
        },
      probeType: {
        type: Number,
        default() {
          return 0;
        }
      }
      }
    },
    mounted() {
     this.$nextTick(() => {
       this.scroll = new BScroll(this.$refs.wrap,{
         click:true,
         scrollX:true,
         pullUpLoad: this.pullUpLoad,
         probeType:this.probeType
       })
       setTimeout(() => {
         this.scroll.refresh()
         console.log("refresh")
       },800)

       this.scroll.on("scroll",(position) => {
         this.$emit("scroll",position)
       })

       this.scroll.on("touchEnd",(pos) => {
        /* console.log(pos)*/
         //实现下拉刷新
         if(pos.y>50){
           location.reload()
           console.log("下拉刷新")
         }
       })
       //实现上拉加载更多数据
       this.scroll.on("pullingUp",() => {
         this.$emit("pullingUp")
         console.log("上拉加载")
         setTimeout(() => {
           this.scroll.finishPullUp()
         },2000)
       })

     })
    },
    methods:{
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
.wrap{
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width:100%;
}
</style>

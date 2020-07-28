<template>
    <div class="tabbarcontrol">
      <div v-on:click="controlclick(index)" v-for="(item,index) in titles" class="tabbarcontrol_item"
           :key="index" :class="{active:currentIndex==index}" >
        <span>{{item}}</span>
      </div>
    </div>
</template>
<script>
    export default {
      name: "tabbarcontrol",
      data(){
        return {
          currentIndex:0
        }
      },
      props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
      },
      methods:{
        controlclick(index){
          this.currentIndex = index
          this.$emit("changecontrol",index)
        }
      }
    }
</script>
<style scoped>
.tabbarcontrol{
  width: 100%;
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tabbarcontrol_item{
  flex: 1;
  font-size: 16px;
}
.active{
  color: #ff8f98;
}
.active span{
  display: inline-block;
  width: 60px;
  border-bottom: solid 2px;
}
</style>

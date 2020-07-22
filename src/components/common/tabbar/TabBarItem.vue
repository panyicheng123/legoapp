<template>
   <div class="tarbar_item" @click="TogglePath">
     <div v-if="!isActive"><slot name="item_icon"></slot></div>
     <div v-else><slot name="item_icon_acitve"></slot></div>
     <div :class="{activeFont:isActive}"><slot name="item_text"></slot></div>
   </div>
</template>
<script>
    export default {
      name: "TabBar_Item",
      props:{
        path:String
      },
      data(){
        return{}
      },
      methods:{
        TogglePath(){
          this.$router.replace(this.path)
          console.log(this.$route)
        }
      },
      computed:{
        isActive(){
          return !this.$route.path.indexOf(this.path)
        }
      }
    }
</script>

<style scoped>
  .activeFont{
    color: #ec7f2c;
  }
  .tarbar_item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tarbar_item  img{
    width: 24px;
    height: 24px;
  }
</style>

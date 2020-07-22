<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-items">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "HomeRecommends",
      props:{
        recommends:{
          type:Array,
          default() {
            return [];
          }
        }
      }
    }
</script>

<style scoped>
.recommends{
  display: flex;
  width: 100%;
  text-align: center;
  border-bottom: 8px solid #ececec;
}
.recommends-items{
  padding: 10px 0px 30px 0px;
  flex: 1;
}
.recommends-items img{
  line-height: 72px;
  width: 72px;
  height: 72px;
  margin-bottom: 10px;
}
</style>

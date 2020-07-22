<template>
    <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="middle"><slot name="middle"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
  export default {
      name: "NavBar"
  }
</script>
<style scoped>
  .navbar{
    display: flex;
    height: 40px;
    line-height: 40px;
    box-shadow: 0px 1px 1px rgba(100,100,100,0.1);
  }
  .left,.right{
    width: 60px;
  }
  .middle{
    flex: 1;
    text-align: center;
  }
</style>

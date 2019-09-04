<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000"><!--在组件中，使用v-for循环的话，一定要使用key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="无"/>
      </mt-swipe-item>
      <mt-swipe-item >1</mt-swipe-item>
      <mt-swipe-item >2</mt-swipe-item>
      <mt-swipe-item >3</mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 到 6宫格 的改造工程 -->
   
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default{
  data(){
    return {
      lunbotuList:[]//保存轮播图的数组
    }
  },
  created(){
    this.getLunbotu();
  },
  methods:{
    getLunbotu(){//获取轮播图数据的方法
      this.$http.get("http://vue.studyit.io/api/getlunbo").then(result =>{
        //console.log(result.body);
        if(result.body.status === 0){
          this.lunbotuList= result.body.message;//成功的
        }else{
          Toast('加载轮播图失败');
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
    &:nth-child(1){
      background-color:pink;
    }
    &:nth-child(2){
      background-color:skyblue;
    }
    &:nth-child(3){
      background-color:#333;
    }
    img{
      width:100%;
      height: 100%;
    }
  }
}

</style>

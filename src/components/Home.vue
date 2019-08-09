<template lang="html">
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeData" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-email"></span>
        <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">联系我们</div></a></li>
     </ul> 

  </div>
</template>

<script>
import axios from "axios"
import { Toast } from "mint-ui"
export default {
  data() {
    return {
      swipeData:[]
    }
  },
  created () {
    this.getSwipeData();
  },
  methods: {
      getSwipeData(){
        // this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
        //   console.log(result.body);
        // })
        axios.get('http://www.liulongbin.top:3005/api/getlunbo').then((result)=>{
          if(result.data.status === 0){
            this.swipeData = result.data.message;
          }
          else{
            Toast("加载轮播图失败");
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
    // &:nth-child(1){
    //   background-color: red;
    // }
    // &:nth-child(2){
    //   background-color: cyan;
    // }
    // &:nth-child(3){
    //   background-color: greenyellow;
    // }

    img{
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9{
  background-color:#fff;
  border:none;

  .mui-table-view-cell{
    border:none;
  }
}
</style>

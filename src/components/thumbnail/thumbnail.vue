<template>
    <div class="thumbnail">
        <div class="flag" v-show="productInfo.flag">{{productInfo.flag}}</div>
        <img :src="productInfo.image" :style="{width:size[0]+'px',height:size[1]+'px'}">
        <div class="caption">
            <div class="title" v-show="productInfo.title">{{productInfo.title}}</div>
            <div class="info" v-show="productInfo.info">{{productInfo.info}}</div>
            <div class="price" v-show="productInfo.price">{{productInfo.price}}元</div>
            <div class="rank" v-show="productInfo.rank">{{productInfo.rank}}人评价</div>
            <div class="praise" v-show="productInfo.praise">{{productInfo.praise}}人好评</div>
        </div>
        <div class="review"></div>
    </div>
</template>
<script>
export default {
  props: {
    productInfo: {
      type: Object,
      default() {
        return {
          image: "//i1.mifile.cn/a1/pms_1510019402.48089978!140x140.jpg",
          title: "小米6",
          info: "变焦双摄，拍人更美",
          price: "2299",
          rank: "11000",
          praise: "4659",
          flag: "热卖"
        };
      }
    },
    size:{
      type:Array,
      default(){
        return [160,110]
      }
    }
  }
};
</script>
<style lang="less">
.thumbnail {
  text-align: center;
  position: relative;
  .flag {
    position: absolute;
    top: -35px;
    left: 50%;
    margin-left: -33px;
    height: 22px;
    width: 66px;
    border: 1px solid #ff6700;
    color: #ff6700;
    font-size: 12px;
    text-align: center;
  }
  & > img {
    margin: 0 auto 18px;
  }
  .caption {
    .title {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
      font-weight: 400;
      color: #333;
    }
    .info {
      margin: 0 10px 10px;
      height: 18px;
      font-size: 12px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      _zoom: 1;
      color: #b0b0b0;
    }
    .price {
      margin: 0 10px 10px;
      color: #ff6700;
      font-size: 12px;
    }
    .rank {
      margin: 0 10px;
      font-size: 12px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      _zoom: 1;
      color: #b0b0b0;
    }
    .praise {
      color: #757575;
      font-size: 14px;
    }
  }
}
</style>

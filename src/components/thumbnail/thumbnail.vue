<template>
  <div class="thumbnail">
    <div class="flag" v-show="productInfo.flag" :style="productInfo.flagStyle">{{productInfo.flag}}</div>
    <img :src="productInfo.image" :style="{width:size[0]+'px',height:size[1]+'px'}">
    <div class="caption">
      <div class="title" v-show="productInfo.title">{{productInfo.title}}</div>
      <div class="info" v-show="productInfo.info">{{productInfo.info}}</div>
      <div class="price" v-show="productInfo.price">{{productInfo.price}}元</div>
      <div class="rank" v-show="productInfo.rank">{{productInfo.rank}}人评价</div>
      <div class="praise" v-show="productInfo.praise">{{productInfo.praise}}人好评</div>
    </div>
    <div class="review" v-if="productInfo.review">{{productInfo.review}}</div>
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
          // rank: "11000",
          // praise: "4659",
          flag: "热卖",
          flagStyle: {
            border: "1px solid #ff6700",
            color: "#ff6700"
          },
          review: "朋友圈一发就被刷爆了都问我哪买的什么电视，小米是不是..."
        };
      }
    },
    size: {
      type: Array,
      default() {
        return [160, 110];
      }
    }
  }
};
</script>
<style lang="less">
.thumbnail {
  text-align: center;
  padding-top: 40px;
  position: relative;
  z-index: 1;
  height: 100%;
  &:hover .review {
    height: 75px;
    font-size: 12px;
    padding: 10px 30px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .flag {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -33px;
    height: 22px;
    width: 66px;
    font-size: 12px;
    line-height: 20px;
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
      margin: 5px 10px 10px 10px;
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
      margin-bottom:10px;
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
  .review {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    z-index: 10;
    color: #fff;
    background-color: #ff6700;
    transition: height 0.2s;
  }
}
</style>

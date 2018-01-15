<template>
  <div class="content-goods">
    <div class="container">
      <div class="title">内容</div>
      <div class="content-list clearfix">
        <div class="content-item">
          <small-slider :itemList="itemList" :title="'内容'" :rainbowColor="'#ffac13'"></small-slider>
        </div>
        <div class="content-item">
          <small-slider :itemList="itemList" :title="'MIUI 主题'" :rainbowColor="'#83c44e'"></small-slider>
        </div>
        <div class="content-item">
          <small-slider :itemList="itemList" :title="'游戏'" :rainbowColor="'#e53935'"></small-slider>
        </div>
        <div class="content-item">
          <small-slider :itemList="itemList" :title="'应用'" :rainbowColor="'#2196f3'"></small-slider>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SmallSlider from "@/components/SmallSlider/SmallSlider.vue";
import {getContentBook} from "@/api/ContentGoods.js";

export default {
  components: { SmallSlider },
  data() {
    return { itemList: [] };
  },
  created() {
    getContentBook().then(res => {
      this.itemList = res.productInfo;
    });
  }
};
</script>
<style lang="less">
.content-goods {
  .title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .content-item {
    float: left;
    margin-left: 22px;
    transition: all .2s linear;
    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -2px, 0);
    }
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>

<template>
  <div class="star-goods">
    <div class="container">
      <div class="top clearfix">
        <div class="title">小米明星单品</div>
        <div class="more">
          <span :class="{active:this.currentWrapper===1}" @click="showFirstWrapper">&lt;</span>
          <span :class="{active:this.currentWrapper===2}" @click="showSecondWrapper">&gt;</span>
        </div>
      </div>
      <div class="mid">
        <ul class="clearfix" ref="goodsWrapper" v-if="stargoodsList">
          <li v-for="(item,index) in stargoodsList" :key="index" :style="{'border-top-color':rainbowBorder[index]}">
            <thumbnail :productInfo="item" :size="[160,160]"></thumbnail>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Thumbnail from "@/components/thumbnail/thumbnail.vue";
import { getstargoods } from "@/api/StarGoods.js";
export default {
  data() {
    return {
      stargoodsList: [],
      rainbowBorder: [
        "#ffac13",
        "#83c44e",
        "#2196f3",
        "#e53935",
        "#00c0a5",
        "#ffac13",
        "#83c44e",
        "#2196f3",
        "#e53935",
        "#00c0a5"
      ],
      currentWrapper: 1
    };
  },
  components: {
    Thumbnail
  },
  created() {
    getstargoods().then(res => {
      this.stargoodsList = res.result;
      setTimeout(() => {
        this.startTimer();
      }, 20);
    });
  },
  methods: {
    startTimer() {
      this.timer = setInterval(this.showStarGoods, 5000);
    },
    showStarGoods() {
      if (this.stargoodsList && this.currentWrapper === 1) {
        this.$refs.goodsWrapper.style.marginLeft = "-1226px";
        this.currentWrapper = 2;
      } else if (this.stargoodsList && this.currentWrapper === 2) {
        this.$refs.goodsWrapper.style.marginLeft = "0";
        this.currentWrapper = 1;
      }
    },
    showFirstWrapper() {
      clearInterval(this.timer);
      this.currentWrapper = 1;
      this.$refs.goodsWrapper.style.marginLeft = "0";
      this.startTimer();
    },
    showSecondWrapper() {
      clearInterval(this.timer);
      this.currentWrapper = 2;
      this.$refs.goodsWrapper.style.marginLeft = "-1226px";
      this.startTimer();
    }
  }
};
</script>
<style lang="less">
.star-goods {
  .top {
    position: relative;
    height: 58px;
    -webkit-font-smoothing: antialiased;
    .title {
      float: left;
      margin: 0;
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
    .more {
      float: right;
      line-height: 58px;
      color: rgb(131, 128, 128);
      font-size: 0;
      font-weight: 800;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      & > span {
        display: inline-block;
        width: 36px;
        height: 26px;
        padding: 3px 5px;
        font-size: 20px;
        border: 1px solid #e0e0e0;
        vertical-align: middle;
        line-height: 16px;
        margin-left: -1px;
        text-align: center;
        cursor: pointer;
        &.active {
          color: #e0e0e0;
        }
      }
    }
  }
  .mid {
    height: 340px;
    overflow: hidden;
    ul {
      width: 2480px;
      margin-left: 0;
      transition: margin-left 0.5s ease;
      li {
        float: left;
        height: 300px;
        border-top-width: 1px;
        border-top-style: solid;
        text-align: center;
        background: #fafafa;
        -webkit-transition: all 0.6s;
        transition: all 0.6s;
        width: 234px;
        margin-right: 14px;
      }
    }
  }
}
</style>


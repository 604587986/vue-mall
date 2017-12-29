<template>
  <div class="slider">
    <div class="container" @mouseenter="stopTimer" @mouseleave="startTimer">
      <transition-group tag="div" name="slide">
        <div class="slider-item" v-for="(item,index) in itemList" :key="index" v-show="currentImg===index?true:false">
          <img :src="item.image">
        </div>
      </transition-group>
      <div class="arrow-wrapper">
        <div class="arrow arrow-left" @click="preImg"></div>
        <div class="arrow arrow-right" @click="nextImg"></div>
      </div>
      <div class="dot-wrapper">
        <div class="dot" v-for="(item,index) in itemList" :key="index" :class="{active:currentImg===itemList.length-1-index}"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
      timer: null,
      currentImg: 0
    };
  },
  created() {
    axios.get("../../../static/mock/slider.json").then(res => {
      this.itemList = res.data.result;
      this.$nextTick(() => {
        this.startTimer();        
      });
    });
  },
  methods: {
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.timer = setInterval(this.showImg, 3000);
    },
    showImg() {
      this.currentImg++;
      if (this.currentImg === this.itemList.length) {
        this.currentImg = 0;        
      }
    },
    preImg() {
      this.stopTimer();
      this.currentImg--;
      if (this.currentImg === -1) {
        this.currentImg = this.itemList.length - 1;
      }
    },
    nextImg() {
      this.stopTimer();
      this.currentImg++;
      if (this.currentImg === this.itemList.length) {
        this.currentImg = 0;
      }
    }
  }
};
</script>
<style lang="less">
.slider {
  .container {
    position: relative;
    height: 464px;
    .slider-item {
      position: absolute;
      top: 0;
      left: 0;
      &.slide-enter-active,
      .slide-enter-active {
        transition: opacity 0.5s;
      }
      &.slide-enter,
      .slide-leave-to {
        opacity: 0;
      }
    }
    .arrow-wrapper {
      position: absolute;
      height: 70px;
      width: 100%;
      top: 50%;
      margin-top: -35px;
      .arrow {
        width: 40px;
        height: 70px;
        &.arrow-left {
          float: left;
          margin-left: 234px;
          background: url(./pre.png) no-repeat 0 15px;
          background-size: 100%;
          border-radius: 0 5px 5px 0;
          &:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
        &.arrow-right {
          float: right;
          background: url(./next.png) no-repeat 0 15px;
          background-size: 100%;
          border-radius: 5px 0 0 5px;
          &:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
    .dot-wrapper {
      position: absolute;
      height: 18px;
      width: 100%;
      right: 20px;
      bottom: 20px;
      .dot {
        float: right;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        border: 2px solid #fff;
        border-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        text-align: left;
        text-indent: -9999px;
        overflow: hidden;
        background: rgba(0,0,0,0.4);
        transition: all .2s;
        &.active{
          background: #f5f5f5;
        }
      }
    }
  }
}
</style>

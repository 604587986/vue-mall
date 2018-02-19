<template>
  <div id="app">
    <m-header></m-header>
    <navbar></navbar>
    <div class="container">
      <category-nav></category-nav>
      <slider></slider>
      <div class="slider-next clearfix">
        <div class="left">
          <ul class="left-ul">
            <li>
              <a href="javascript:;">选购手机</a>
            </li>
            <li>
              <a href="javascript:;">企业团购</a>
            </li>
            <li>
              <a href="javascript:;">F码通道</a>
            </li>
            <li>
              <a href="javascript:;">米粉卡</a>
            </li>
            <li>
              <a href="javascript:;">以旧换新</a>
            </li>
            <li>
              <a href="javascript:;">话费充值</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul class="right-ul">
            <li><img src="//i1.mifile.cn/a4/xmad_15145541454323_YMAFN.jpg"></li>
            <li><img src="//i1.mifile.cn/a4/xmad_15147371866995_gWitc.jpg"></li>
            <li><img src="//i1.mifile.cn/a4/xmad_15145453983484_WkKEq.jpg"></li>
          </ul>
        </div>
      </div>
    </div>
    <star-goods></star-goods>
    <div class="main">
      <category-goods :typeTitle="'家电'" :typeTabs="['热门','电视影音','电脑','家居']" :content="{recommend: householdApplianceRecom,productInfo:householdApplianceList}"></category-goods>
      <category-goods :typeTitle="'家电'" :typeTabs="['热门','电视影音','电脑','家居']" :content="{recommend: householdApplianceRecom,productInfo:householdApplianceList}"></category-goods>
      <content-goods></content-goods>
    </div>
  </div>
</template>

<script>
import MHeader from "@/components/Header/Header.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Slider from "@/components/Slider/Slider.vue";
import CategoryNav from "@/components/CategoryNav/CategoryNav.vue";
import StarGoods from "@/components/StarGoods/StarGoods.vue";
import CategoryGoods from "@/components/CategoryGoods/CategoryGoods.vue";
import ContentGoods from "@/components/ContentGoods/ContentGoods.vue";

import { gethouseholdAppliance } from "@/api/CategoryGoods.js";
export default {
  name: "app",
  components: {
    MHeader,
    Breadcrumb,
    Navbar,
    Slider,
    CategoryNav,
    StarGoods,
    CategoryGoods,
    ContentGoods
  },
  data() {
    return {
      householdApplianceRecom: [],
      householdApplianceList: []
    };
  },
  beforeCreate() {
    gethouseholdAppliance().then(res => {
      this.householdApplianceRecom = res.recommend;
      this.householdApplianceList = res.productInfo;
    });
  }
};
</script>

<style lang="less">
#app {
  min-width: 1226px;
  .container {
    position: relative;
    .slider-next {
      margin-top: 14px;
      margin-bottom: 20px;
      a {
        color: #fff;
        text-decoration: none;
      }
      .left {
        width: 234px;
        float: left;
        .left-ul {
          margin: 0;
          padding: 3px;
          list-style-type: none;
          font-size: 0;
          text-align: center;
          background: #5f5750;
          li {
            font-size: 12px;
            display: inline-block;
            width: 70px;
            height: 82px;
            padding: 0 3px;
            line-height: 82px;
            a {
              display: block;
              width: 100%;
              color: rgba(255, 255, 255, 0.7);
              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
      .right {
        float: left;
        margin-left: 14px;
        min-height: 1px;
        .right-ul {
          li {
            float: left;
            width: 316px;
            height: 170px;
            margin-left: 15px;
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
  .main {
    background: #f5f5f5;
    width: 100%;
  }
}
</style>


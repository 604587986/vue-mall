<template>
  <div class="navbar">
    <div class="container clearfix">
      <div class="logo"></div>
      <div class="nav">
        <ul>
          <li @mouseover="currentList=xiaomiList;showDropdown=true" @mouseout="showDropdown=false">
            <a href="javascript:;">小米手机</a>
          </li>
          <li @mouseover="currentList=redmiList;showDropdown=true" @mouseout="showDropdown=false">
            <a href="javascript:;">红米</a>
          </li>
          <li @mouseover="currentList=computerList;showDropdown=true" @mouseout="showDropdown=false">
            <a href="javascript:;">笔记本</a>
          </li>
          <li @mouseover="currentList=tvList;showDropdown=true" @mouseout="showDropdown=false">
            <a href="javascript:;">电视</a>
          </li>
          <li @mouseover="currentList=boxList;showDropdown=true" @mouseout="showDropdown=false">
            <a href="javascript:;">盒子</a>
          </li>
          <li>
            <a href="javascript:;">新品</a>
          </li>
          <li @mouseover="currentList=routerList;showDropdown=true" @mouseout="showDropdown=false">
            <a href="javascript:;">路由器</a>
          </li>
          <li @mouseover="currentList=hardwareList;showDropdown=true" @mouseout="showDropdown=false">
            <a href="javascript:;">智能硬件</a>
          </li>
          <li>
            <a href="javascript:;">服务</a>
          </li>
          <li>
            <a href="javascript:;">社区</a>
          </li>
        </ul>
      </div>
      <div class="search">
        <input type="text" :class="{focus:inputFocus}" @focus="inputFocus=true" @blur="inputFocus=false">
        <span class="search-btn" :class="{focus:inputFocus}"></span>
        <div class="dropdown" :class="{active:inputFocus}">
          <ul>
            <li v-for="(item,index) in queryList" :key="index" class="clearfix">
              <span class="left">{{item.name}}</span>
              <span class="right">约有{{item.count}}件</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="dropdown" :class="{active:showDropdown}" @mousemove="showDropdown=true" @mouseout="showDropdown=false">
      <div class="container">
        <ul>
          <li v-for="item in currentList" :key="item.productId">
            <thumbnail :productInfo="item"></thumbnail>
            <div class="seq"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Thumbnail from "@/components/thumbnail/thumbnail.vue";
import * as getNavbar from "@/api/Navbar.js";
export default {
  props: {
    queryList: {
      type: Array,
      default() {
        return [{ name: "小米手机6", count: "24" }, { name: "小米5x", count: "6" }];
      }
    }
  },
  data() {
    return {
      showDropdown: false,
      inputFocus: false,
      currentList: [],
      xiaomiList: [],
      redmiList: [],
      computerList: [],
      tvList: [],
      boxList: [],
      routerList: [],
      hardwareList: []
    };
  },
  created() {
    getNavbar.getxiaomi().then(res => {
      this.xiaomiList = res.result;
    });
    getNavbar.getredmi().then(res => {
      this.redmiList = res.result;
    });
    getNavbar.getcomputer().then(res => {
      this.computerList = res.result;
    });
    getNavbar.gettv().then(res => {
      this.tvList = res.result;
    });
    getNavbar.getbox().then(res => {
      this.boxList = res.result;
    });
    getNavbar.getrouter().then(res => {
      this.routerList = res.result;
    });
    getNavbar.gethardware().then(res => {
      this.hardwareList = res.result;
    });
  },
  components: {
    Thumbnail
  }
};
</script>
<style lang="less">
.navbar {
  position: relative;
  z-index: 20;
  height: 100px;
  .logo {
    float: left;
    margin-top: 22px;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background: url(./img/mi-logo.png) no-repeat 50% 50%;
    background-color: #ff6700;
  }
  .nav {
    float: left;
    width: 850px;
    text-align: center;
    ul {
      font-size: 0;
      width: 820px;
      height: 88px;
      margin: 0;
      padding: 0 0 0 156px;
      list-style-type: none;
      color: #333;
      li {
        display: inline-block;
        font-size: 16px;
        line-height: 100px;
        padding: 0 10px 0;
        &:hover a {
          color: #ff6700;
        }
        a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
  .search {
    position: relative;
    float: right;
    width: 296px;
    margin-top: 25px;
    &:hover input {
      border-color: #999;
    }
    &:hover .search-btn {
      border-color: #999;
    }
    input {
      z-index: 1;
      width: 243px;
      height: 48px;
      padding: 0 10px;
      border: 1px solid #e0e0e0;
      font-size: 14px;
      line-height: 48px;
      outline: 0;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      &.focus {
        border-color: #ff6700;
      }
    }
    .search-btn {
      display: block;
      position: absolute;
      height: 48px;
      width: 48px;
      background: url(./img/searchbtn.jpg) no-repeat 8px 8px;
      background-size: 28px 28px;
      top: 0;
      left: 243px;
      border: 1px solid #e0e0e0;
      border-left: 0;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      &.focus {
        border-color: #ff6700;
      }
    }
    .dropdown {
      position: absolute;
      left: 0;
      top: 48px;
      z-index: 61;
      width: 243px;
      border: 1px solid #ff6700;
      border-top: 0;
      background: #fff;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      display: none;
      &.active {
        display: block;
      }
      ul {
        li {
          display: block;
          padding: 6px 15px;
          font-size: 12px;
          color: #424242;
          .left {
            display: block;
            float: left;
          }
          .right {
            display: block;
            float: right;
            color: #b0b0b0;
          }
        }
      }
    }
  }
  & > .dropdown {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 60;
    width: 100%;
    border-top: 1px solid #e0e0e0;
    background: #fff;
    overflow: hidden;
    transition: height 0.3s;
    height: 0;
    &.active {
      height: 241px;
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
    }
    ul {
      font-size: 0;
      li {
        display: inline-block;
        position: relative;
        padding: 0 20px 20px;
        &:first-child {
          margin-left: 20px;
        }
        &:last-child > .seq {
          display: none;
        }
        .seq {
          position: absolute;
          width: 1px;
          height: 100px;
          top: 35px;
          right: 0;
          background-color: #e0e0e0;
        }
      }
    }
  }
}
</style>


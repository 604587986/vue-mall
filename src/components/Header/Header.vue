<template>
    <div class="header">
        <div class="container clearfix">
            <div class="header-nav">
                <ul>
                    <a href="javascript:;">
                        <li>小米商城</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>MIUI</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>loT</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>云服务</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>水滴</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>金融</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>有品</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>Select Region</li>
                    </a>
                </ul>
            </div>
            <div class="header-cart" @mouseover="cartMenu=true" @mouseout="cartMenu=false" :class="{active:cartMenu}">
                <span>购物车</span>
                <span class="count">（0）</span>
                <div class="cart-menu" :class="{active:cartMenu}">
                    购物车中还没有商品，赶紧选购吧！
                </div>
            </div>
            <div class="header-info">
                <ul>
                    <a href="javascript:;">
                        <li>登录</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>注册</li>
                    </a>
                    <li class="sep">|</li>
                    <a href="javascript:;">
                        <li>消息通知</li>
                    </a>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            cartMenu: false
        }
    },
    methods:{

    }
};
</script>
<style lang="less">
.header {
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
  a {
    color: #b0b0b0;
  }
  .header-nav {
    float: left;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    ul {
      font-size: 0;
      li {
        display: inline-block;
        font-size: 12px;
        &.sep {
          margin: 0 0.5em;
          color: #424242;
          font-family: sans-serif;
        }
      }
    }
  }
  .header-cart {
    position: relative;
    float: right;
    width: 120px;
    margin-left: 25px;
    height: 40px;
    line-height: 40px;
    background: #424242;
    text-align: center;
    &.active{
        color: #ff6700;
        background: #fff;
    }
    .cart-menu {
      display: none;
      position: absolute;
      right: 0;
      top: 40px;
      z-index: 31;
      width: 316px;
      padding: 20px;
      color: #424242;
      background: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
      &.active{
          display: block;
      }
    }
  }
  .header-info {
    float: right;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    ul {
      font-size: 0;
      li {
        display: inline-block;
        font-size: 12px;
        &.sep {
          margin: 0 0.5em;
          color: #424242;
          font-family: sans-serif;
        }
      }
    }
  }
}
</style>

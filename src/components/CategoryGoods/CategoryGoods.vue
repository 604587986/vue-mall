<template>
  <div class="category-goods">
    <div class="container">
      <div class="top clearfix">
        <div class="type-title">{{typeTitle}}</div>
        <div class="type-tab">
          <div v-for="(tab,index) in typeTabs" :key="index" class="tab-item" :class="{active:index===currentTab}" @mouseenter="currentTab=index">{{tab}}</div>
        </div>
      </div>
      <div class="content clearfix">
        <div class="recommend">
          <div v-for="item in content.recommend">
            <img :src="item">
          </div>
        </div>
        <div class="item-list">
          <ul v-if="content.productInfo[currentTab]">
            <li class="item">
              <thumbnail :productInfo="content.productInfo[currentTab][0]" :size="[150,150]"></thumbnail>
            </li>
            <li class="item">
              <thumbnail :productInfo="content.productInfo[currentTab][1]" :size="[150,150]"></thumbnail>
            </li>
            <li class="item">
              <thumbnail :productInfo="content.productInfo[currentTab][2]" :size="[150,150]"></thumbnail>
            </li>
            <li class="item">
              <thumbnail :productInfo="content.productInfo[currentTab][3]" :size="[150,150]"></thumbnail>
            </li>
            <li class="item">
              <thumbnail :productInfo="content.productInfo[currentTab][4]" :size="[150,150]"></thumbnail>
            </li>
            <li class="item">
              <thumbnail :productInfo="content.productInfo[currentTab][5]" :size="[150,150]"></thumbnail>
            </li>
            <li class="item">
              <thumbnail :productInfo="content.productInfo[currentTab][6]" :size="[150,150]" :flagStyle="{background: '#83c44e',color:'#fff'}"></thumbnail>
            </li>
            <li class="item small-item" v-if="content.productInfo[currentTab][7]">
              <h3>{{content.productInfo[currentTab][7].title}}</h3>
              <p>{{content.productInfo[currentTab][7].price}}元</p>
              <img :src="content.productInfo[currentTab][7].image">
            </li>
            <li class="item small-item last-item">
              <h3>浏览更多</h3>
              <p>{{typeTabs[currentTab]}}</p>
              <img src="./more.png">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Thumbnail from "@/components/thumbnail/thumbnail.vue";
export default {
  data() {
    return {
      currentTab: 0
    };
  },
  props: {
    typeTitle: {
      type: String,
      default: "分类"
    },
    typeTabs: {
      type: Array,
      default() {
        return ["热门"];
      }
    },
    content: {
      type: Object,
      default() {
        return {
          recommend: [
            "//i1.mifile.cn/a4/xmad_15033634845604_MHJpV.jpg",
            "//i1.mifile.cn/a4/xmad_15033634845604_MHJpV.jpg"
          ],
          productInfo: [
            [
              {
                productId: "10001",
                title: "小米MIX 2",
                price: "3299",
                image: "//i1.mifile.cn/a1/pms_1503909218.70932288!220x220.png",
                flag: "新品",
                flagStyle: { background: "#e53935", color: "#fff" },
                review: "朋友圈一发就被刷爆了都问我哪买的什么电视，小米是不是..."
              }
            ]
          ]
        };
      }
    }
  },
  components: {
    Thumbnail
  }
};
</script>
<style lang="less">
.category-goods {
  padding-top: 60px;
  .top {
    position: relative;
    height: 58px;
    .type-title {
      float: left;
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
    .type-tab {
      float: right;
      .tab-item {
        margin-left: 30px;
        display: inline-block;
        padding: 0;
        color: #424242;
        line-height: 26px;
        height: 26px;
        margin-top: 16px;
        border-bottom: 2px solid #f5f5f5;
        border-bottom: 2px solid transparent;
        transition: border-color 0.5s;
        cursor: pointer;
        &.active {
          color: #ff6700;
          border-bottom: 2px solid #ff6700;
        }
      }
    }
  }
  .content {
    .recommend {
      width: 234px;
      float: left;
      display: flex;
      flex-direction: column;
      & > div {
        flex: 1;
        margin-top: 14px;
        transition: all 0.2s;
        &:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transform: translate3d(0, -2px, 0);
        }
        &:first-child {
          margin-top: 0;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .item-list {
      float: left;
      width: 992px;
      height: 614px;
      margin-top: -2px;
      font-size: 0;
      position: relative;
      & > ul {
        position: absolute;
        top: 0;
        left: 0;
        .item {
          display: inline-block;
          position: relative;
          margin-left: 14px;
          margin-bottom: 14px;
          background: #fff;
          width: 233px;
          height: 300px;
          vertical-align: top;
          transition: all 0.2s;
          &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            transform: translate3d(0, -2px, 0);
          }
          &.small-item {
            height: 143px;
            position: relative;
            img {
              width: 80px;
              height: 80px;
              position: absolute;
              right: 20px;
              top: 32px;
            }
            & > h3 {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              color: #333;
              font-size: 14px;
              font-weight: 400;
              padding: 14px 0 0 30px;
            }
            & > p {
              font-size: 12px;
              padding: 14px 0 0 30px;
              color: #ff6700;
            }
          }
          &.last-item {
            position: absolute;
            bottom: 0;
            right: 4px;
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 12px;
              color: #757575;
              padding: 0 0 0 30px;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="small-slider" :style="{borderTopColor:rainbowColor}">
    <h2 class="title" :style="{color:rainbowColor}">{{title}}</h2>
    <div class="item-wrapper" :style="{width:itemCount+'00%'}">
      <ul class="item-list" ref="itemList">
        <li class="item" v-for="item in itemList">
          <h4 class="name" v-show="item.name">{{item.name}}</h4>
          <p class="desc" v-show="item.desc">{{item.desc}}</p>
          <p class="price" v-show="item.price">{{item.price}}</p>
          <div class="btn" v-show="item.btn" :style="{borderColor:rainbowColor,color:rainbowColor}">{{item.btn}}</div>
          <div class="image" v-show="item.image">
            <img :src="item.image">
          </div>
        </li>
      </ul>
    </div>
    <div class="dot-wrapper">
      <ul>
        <li :class="{active:currentItem===index}" v-for="(item,index) in itemList">
          <span class="dot"></span>
        </li>
      </ul>
    </div>
    <div class="arrow-wrapper clearfix">
      <div class="arrow pre" @click="showPre">
        <div class="pre-bg"></div>
      </div>
      <div class="arrow next" @click="showNext">
        <div class="next-bg"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentItem: 0
    };
  },
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default: "图书"
    },
    rainbowColor: {
      type: String,
      default: "#ffac13"
    }
  },
  computed: {
    itemCount() {
      return this.itemList.length;
    }
  },
  methods: {
    showNext() {
      if (this.currentItem === this.itemCount - 1) {
        return;
      }
      this.$refs.itemList.style.marginLeft =
        -(this.currentItem + 1) * 290 + "px";
      this.currentItem++;
    },
    showPre() {
      if (this.currentItem === 0) {
        return;
      }
      this.$refs.itemList.style.marginLeft =
        -(this.currentItem - 1) * 290 + "px";
      this.currentItem--;
    }
  }
};
</script>
<style lang="less">
.small-slider {
  position: relative;
  width: 290px;
  height: 420px;
  padding: 45px 0 0;
  border-top: 1px solid #000;
  overflow: hidden;
  h2.title {
    margin: 0 10px 18px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
  .item-wrapper {
    .item-list {
      font-size: 0;
      transition: all 0.5s;
      .item {
        display: inline-block;
        width: 290px;
        height: 340px;
        color: #333;
        .name {
          margin: 0 20px 5px;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.25;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          text-align: center;
        }
        .desc {
          margin: 0 48px 10px;
          height: 40px;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          overflow: hidden;
          color: #b0b0b0;
        }
        .price {
          height: 21px;
          font-size: 12px;
          margin: 0 10px 15px;
          text-align: center;
        }
        .btn {
          background: #fff;
          width: 118px;
          height: 28px;
          font-size: 12px;
          margin: 0 auto;
          margin-bottom: 20px;
          text-align: center;
          line-height: 28px;
          border: 1px solid #b0b0b0;
          cursor: pointer;
          transition: all 0.4s;
        }
        .image {
          width: 216px;
          height: 154px;
          margin: 0 auto;
          img {
            width: 216px;
            height: 154px;
          }
        }
      }
    }
  }

  .dot-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 296px;
    text-align: center;
    ul {
      li {
        display: inline-block;
        width: 10px;
        height: 10px;
        padding: 10px;
        margin: 0 2px;
        cursor: pointer;
        box-sizing: content-box;
        &.active > .dot {
          border-color: #ff6700;
          background-color: transparent;
        }
        .dot {
          display: block;
          width: 6px;
          height: 6px;
          border: 2px solid #f5f5f5;
          border-radius: 50%;
          text-align: left;
          text-indent: -9999em;
          overflow: hidden;
          background-color: #b0b0b0;
          transition: all 0.5s;
        }
      }
    }
  }
  .arrow-wrapper {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -24px;
    width: 100%;
    height: 48px;
    transition: all 0.5s;
    display: none;
    .arrow {
      width: 20px;
      height: 48px;
      padding: 12px 0;
      font-size: 18px;
      line-height: 24px;
      transition: all 0.5s;
      background-color: rgba(66, 66, 66, 0.3);
      &.pre {
        float: left;
        &:hover {
          background-color: rgba(66, 66, 66, 0.6);
        }
        .pre-bg {
          height: 24px;
          background: url(./pre.png) no-repeat 0 0;
          background-size: contain;
        }
      }
      &.next {
        float: right;
        &:hover {
          background-color: rgba(66, 66, 66, 0.6);
        }
        .next-bg {
          height: 24px;
          background: url(./next.png) no-repeat 0 0;
          background-size: contain;
        }
      }
    }
  }
  &:hover .arrow-wrapper {
    display: block;
  }
}
</style>

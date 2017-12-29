<template>
    <div class="breadcrumb">
        <div class="container">
            <ul>
                <a href="javascript:;">
                    <li>首页</li>
                </a>
                <span v-for="(item,index) in typeName" :key="index">
                    <i class="sep">></i>
                    <a href="javascript:;">
                        <li>
                            {{item}}
                        </li>
                    </a>
                </span>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    typeName: {
      type: Array,
      default: []
    }
  }
};
</script>
<style lang="less">
.breadcrumb {
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  background: #f5f5f5;
  color: #616161;
  ul {
    font-size: 0;
    .sep {
      margin: 0 0.5em;
      color: #b0b0b0;
      font-size: 12px;
      font-family: sans-serif;
      line-height: 40px;
    }
    a {
      color: #757575;
      li {
        display: inline-block;
        font-size: 12px;
      }
    }
  }
}
</style>

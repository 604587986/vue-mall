<template>
    <div class="category-nav">
        <ul>
            <li class="clearfix">
                <a href="javascript:;">手机 电话卡</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">笔记本</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">电视 盒子</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">路由器 智能硬件</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">移动电源 电池 插线板</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">耳机 音箱</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">保护套 贴膜</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">线材 支架 存储卡</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">箱包 服饰 鞋 眼镜</a>
                <i class="arrow"></i>
            </li>
            <li class="clearfix">
                <a href="javascript:;">米兔 生活周边</a>
                <i class="arrow"></i>

            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.category-nav {
  width: 234px;
  height: 460px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  & > ul {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    list-style-type: none;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    li {
      flex: 1;
      line-height: 42px;
      padding-left: 30px;
      &:hover{
          background: #ff6700;
      }
      a {
        display: block;
        float: left;
        color: #fff;
        text-decoration: none;
      }
      i {
        display: block;
        float: right;
        width: 16px;
        height: 100%;
        background: url(./next.png) no-repeat 0 14px;
        background-size: 14px 14px;
        margin-right: 10px;
      }
    }
  }
}
</style>

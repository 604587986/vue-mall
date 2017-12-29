<template>
  <div id="app">
    <m-header></m-header>
    <navbar></navbar>
    <div class="container">
      <category-nav></category-nav>
      <slider></slider>
    </div>
  </div>
</template>

<script>
import MHeader from "@/components/Header/Header.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Slider from "@/components/Slider/Slider.vue";
import CategoryNav from "@/components/CategoryNav/CategoryNav.vue";
export default {
  name: "app",
  components: {
    MHeader,
    Breadcrumb,
    Navbar,
    Slider,
    CategoryNav
  }
};
</script>

<style lang="less">
  #app{
    .container{
      position: relative;
    }
  }
</style>


<template>
  <div class="left-wrap">
    <div class="header-part">
      <!-- logo -->
      <img class="logo" src="https://i.h2.pdim.gs/3459966f6e12c3f61e596278e5af4b54.png">
      <!-- 搜索 -->
      <div class="input-wrap">
        <input v-model="searchText" type="text" class="input">
        <span class="input-search iconfont" @click="onSearch">&#xe63e;</span>
      </div>
      <!-- 滚动 -->
      <scroll-view class="scroll"></scroll-view>
    </div>
    <left-menu-view class="body-part"></left-menu-view>
  </div>
</template>
<script>
import ScrollView from "./scrollView";
import LeftMenuView from "./LeftMenuView";
export default {
  name: "leftView",
  components: {
    ScrollView,
    LeftMenuView
  },
  data: function() {
    return {
      searchText: ""
    };
  },

  methods: {
    onSearch: function() {
      if (!this.searchText) {
        alert("请输入搜索内容");
        return;
      }
      location.href =
        "https://www.panda.tv/search?kw=" +
        this.searchText +
        "&pdt=1.r_555888.psbar-s.0.25uobn08gdm";
    }
  },
  mounted: function() {}
};
</script>
<style lang="scss" scoped>
.left-wrap {
  width: 200px;
  float: left;
  height: 100%;
  overflow: auto;
  background: #191b2e;
  color: #fff;
  position: relative;
  .header-part {
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }
  .logo {
    width: 88px;
    margin: auto;
    margin-top: 30px;
    display: block;
  }
  .input-wrap {
    $w: 160px;
    $searchW: 24px;
    width: $w;
    height: 26px;
    line-height: 26px;
    border-radius: 13px;
    background: #2d2c3e;
    overflow: hidden;
    margin: 10px auto;
    font-size: 0;
    .input {
      font-size: 12px;
      height: 100%;
      color: #c0c2ce;
      $p: 15px;
      padding-left: $p;
      width: $w -$p -$searchW;
      vertical-align: middle;
    }

    .input-search {
      width: $searchW;
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      font-size: 16px;
      cursor: pointer;
      transition: 0.5s color;
      &:hover {
        color: #060;
      }
    }
  }
  .scroll {
    margin: 20px auto 0;
    width: 160px;
  }
  .body-part {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 177px;
    padding-top: 20px;
    overflow: auto;
  }
}
</style>



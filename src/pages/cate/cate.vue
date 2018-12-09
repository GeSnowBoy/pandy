<template>
  <div class="cate-wrap">
    <div class="list-header">
      <i class="header-line"></i>
      <div class="list-title">全部分类</div>
      <ul class="list-header-hots clearfix" data-pdt-block="s0">
        <li v-for="item in headerData" @click="tabHeader(item.cate)" :key="item.cate">
          <a :class="item.cate ==  curCate ? 'selected':''">{{item.title}}</a>
        </li>
      </ul>
    </div>

    <div class="sort-container">
      <transition-group name="list" mode="in-out">
        <a
          class="cate-item"
          v-for="(item) in cates"
          :key="item.title"
          v-if="curCate === 'all' || item.cate == curCate"
          target="_blank"
          :href="'https://www.panda.tv/'+item.link "
        >
          <img :src="item.url" alt>
          <div class="text">{{item.title}}</div>
        </a>
      </transition-group>
    </div>
  </div>
  <!-- body -->
</template>
<script>
import { customXHR } from "../../utils";
import headerData from "./headerData";
export default {
  data() {
    return {
      cates: [],
      curCate: "all",
      headerData
    };
  },
  mounted() {
    customXHR("./static/apis/cate.js").then(res => {
      this.cates = res;
    });
  },
  methods: {
    tabHeader(cateType) {
      if (cateType == this.curCate) return;
      this.curCate = cateType;
    }
  }
};
</script>
<style lang="scss" scoped>
.cate-wrap {
  padding-left: 21px;
  padding-top: 30px;
  background-color: #efefef;
  min-height: 100%;
  .list-header {
    position: relative;
    margin-bottom: 30px;
    height: 30px;

    .header-line {
      display: inline-block;
      width: 6px;
      height: 24px;
      background-color: #1cd198;
      position: relative;
      top: 3px;
      margin-right: 8px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .list-title {
      font-size: 26px;
      color: #333;
      line-height: 30px;
      display: inline-block;
    }
    .list-header-hots {
      position: absolute;
      top: 3px;
      left: 130px;
      right: 0;
      height: 35px;
      overflow: hidden;
      li {
        float: left;
        margin-right: 8px;
        margin-bottom: 8px;
        a {
          display: inline-block;
          cursor: pointer;
          *display: inline;
          *zoom: 1;
          border: 1px solid #1cd39b;
          font-size: 14px;
          line-height: 24px;
          color: #1cd39b;
          padding: 0 8px;
          border-radius: 2px;
          vertical-align: super;
          position: relative;
          background-color: #edfcf6;
          &.selected,
          &:hover {
            background: #1cd39b;
            color: #fff;
            &:after {
              content: "";
              position: absolute;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-top: 7px solid #1cd39b;
              bottom: -8px;
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
              filter: alpha(opacity=100);
              opacity: 1;
              left: 50%;
              margin-left: -7px;
            }
          }
        }
      }
    }
  }
  .sort-container {
    .cate-item {
      width: 167px;
      display: inline-block;
      margin-bottom: 20px;
      margin-right: 12px;
      cursor: pointer;
      &:hover {
        .text {
          background-color: #1cd39b;
          color: #fff;
          transition: 0.3s background;
        }
      }
      img {
        display: block;
        width: 100%;
        height: 231.7px;
      }
      .text {
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #fff;
      }
    }
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active {
  transition: all 1s;
}
.list-enter
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px) scale(2, 2);
}
</style>

<template>
  <div class="menu">
    <div class="type-wrap">
      <router-link :to="item.link" class="type-item" v-for="item in typesList" :key="item.text">
        <span class="icon iconfont" v-html="item.icon"></span>
        <span class="text">{{item.text}}</span>
        <span class="hot" v-if="item.isShowHot">HOT</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "leftMenuView",
  data() {
    return {
      typesList: [
        {
          icon: "&#xeb8b;",
          text: "全部直播",
          link: "/cate",
          isShowHot: false
        },
        {
          icon: "&#xeb89;",
          text: "全部分类",
          link: "/cate",
          isShowHot: false
        },
        {
          icon: "&#xeb88;",
          text: "主播排行",
          link: "rank",
          isShowHot: false
        },
        {
          icon: "&#xeb6f;",
          text: "熊猫精品",
          link: "/cate",
          isShowHot: false
        },
        {
          icon: "&#xeb6b;",
          text: "熊猫小店",
          link: "/cate",
          isShowHot: false
        },
        {
          icon: "&#xeb68;",
          text: "熊猫游戏",
          link: "/cate",
          isShowHot: true
        },
        {
          icon: "&#xeb67;",
          text: "熊猫招募",
          link: "/cate",
          isShowHot: false
        },
        {
          icon: "&#xeb69;",
          text: "我的订阅",
          link: "/cate",
          isShowHot: false
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.menu {
  .type-wrap {
    padding: 0 20px;
  }
  .type-item {
    color: #666;
    cursor: pointer;
    display: block;
    height: 40px;
    line-height: 40px;
    font-size: 14px;

    &:hover {
      color: #999;
    }
    .icon {
      margin-right: 5px;
    }
    .hot {
      float: right;
      color: #ffae31;
      font-size: 10px;
    }
  }
}
</style>





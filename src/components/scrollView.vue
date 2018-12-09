<template>
  <div class="scroll">
    <transition-group name="list" tag="p">
      <div
        class="scroll-item list-item"
        v-for="(item,index) in textList"
        v-show="index === curIndex"
        :key="index"
      >
        <div class="item-left">活动</div>
        <div class="item-right" @click="gotoLink(item)">{{item.text}}</div>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textList: [
        {
          text: "后宫不能说的秘密",
          link:
            "https://www.panda.tv/sps/salutepk2018.html?pdt=1.27.psbar-ads.2.74qqot8o9o7m"
        },
        {
          text: "主线奖励",
          link:
            "https://www.panda.tv/sps/salutepk2018.html?pdt=1.27.psbar-ads.2.74qqot8o9o7m"
        },
        {
          text: "温氏股份",
          link:
            "https://www.panda.tv/sps/salutepk2018.html?pdt=1.27.psbar-ads.2.74qqot8o9o7m"
        }
      ],
      curIndex: 0
    };
  },
  mounted: function() {
    this.timer = setInterval(() => {
      this.curIndex = (this.curIndex + 1) % this.textList.length;
    }, 3000);
  },
  methods: {
    gotoLink(linkData) {
      location.href = linkData.link;
    }
  },
  destroyed: function() {
    clearInterval(this.timer);
  }
};
</script>
<style scoped lang='scss'>
.scroll {
  $h: 20px;
  height: $h;
  line-height: $h;
  position: relative;
  //   overflow: hidden;
  .scroll-item {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    font-size: 12px;

    .item-left {
      height: 100%;
      padding: 0 8px;
      color: #fff;
      background-color: #e00;
      border-radius: 3px;
      display: inline-block;
      margin-right: 6px;
    }
    .item-right {
      cursor: pointer;
      display: inline-block;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-leave-to,
.list-leave-active {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.5s;
}
.list-enter {
  opacity: 0;
  transform: translateY(10px);
}
</style>


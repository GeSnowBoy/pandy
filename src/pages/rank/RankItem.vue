<template>
  <div class="rank-item-wrap">
    <div class="header">
      <span class="name">{{title}}</span>
      <div class="switch-wrap">
        <div class="left" @click="switchType('cur')" :class="curShow === 'cur' ? 'active':''">今日</div>
        <div class="right" @click="switchType('pre')" :class="curShow === 'pre' ? 'active':''">昨日</div>
      </div>
    </div>
    <div class="body">
      <div class="body-item" v-for="(item,index) in renderWeekList" :key="item.anchorid">
        <p class="rank">{{index + 1}}</p>
        <p class="anchor-detail">
          <a target="_blank" :href="'https://www.panda.tv/'+ item.roominfo.id" data-pdt-ele="0">
            <img class="ava" :src="item.userinfo.avatar">
            <span class="name">{{item.userinfo.nickName}}</span>
            <span class="live bg-icon" v-if="item.roominfo.status"></span>
          </a>
        </p>
        <div class="right-wrap">
          <span class="anchor-popular-detail">收到{{item.user_count}}人的礼物</span>
          <span class="change bg-icon"></span>
        </div>
      </div>
    </div>
    <div class="footer">你还不是主播</div>
  </div>
</template>
<script>
import { customXHR } from "../../utils";
export default {
  name: "Rankltem",
  props: {
    title: {
      type: String
    },
    url: {
      type: String
    }
  },
  data: function() {
    return {
      curWeek: [],
      preWeek: [],
      curShow: "cur" // cur 现在  pre 上
    };
  },
  mounted() {
    customXHR(this.url).then(res => {
      console.log(res);
      this.curWeek = res.cur_rank_list;
      this.preWeek = res.pre_rank_list;
    });
  },
  methods: {
    switchType(type) {
      if (this.curShow === type) return;
      this.curShow = type;
    }
  },
  computed: {
    renderWeekList() {
      return this.curShow === "cur" ? this.curWeek : this.preWeek;
    }
  }
};
</script>

<style lang='scss' scoped>
$color: #00c270;
.rank-item-wrap {
  border-radius: 5px;
  background-color: #fff;
  .header {
    height: 50px;
    line-height: 50px;
    margin: 0 20px;
    background-color: #fbfbfb;
    font-size: 23px;
    .switch-wrap {
      float: right;
      height: 21px;
      line-height: 21px;
      text-align: center;
      border: 1px solid;
      color: $color;
      border-radius: 3px;
      overflow: hidden;
      vertical-align: middle;
      margin-top: 14px;
      cursor: pointer;
      font-size: 0;
      .left,
      .right {
        width: 44px;
        height: 100%;
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;

        &.active {
          background-color: $color;
          color: #fff;
        }
        &:hover {
          color: #000;
        }
      }
    }
  }
  .body {
    overflow: auto;
    height: 630px;
    .body-item {
      height: 65px;
      line-height: 65px;
      margin: 0 10px;
      .bg-icon {
        display: inline-block;
        background-image: url("/static/imgs/iconsbg.png");
      }
      .rank {
        display: inline-block;
      }
      .anchor-detail {
        display: inline-block;
        .ava {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
          margin: 0 10px;
        }
        .name {
          font-size: 14px;
        }
        .live {
          background-position: -53px 0;
          width: 29px;
          height: 9px;
        }
      }
      .right-wrap {
        float: right;
      }
      .anchor-popular-detail {
        font-size: 12px;
        color: #898989;
      }
      .change {
        display: inline-block;
        width: 14px;
        height: 15px;
        margin-left: 20px;
      }
    }
  }
  .footer {
    height: 60px;
    line-height: 60px;
    border-top: 2px solid rgb(238, 238, 238);
    color: #f5b324;
    font-size: 14px;
    padding-left: 20px;
  }
}
</style>

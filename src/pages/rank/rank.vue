<template>
  <div class="rank">
    <right-content-header title="排行榜"></right-content-header>
    <div class="rank-wrap">
      <div class="rank-item">
        <rank-item title="车站日榜" url="./static/apis/week.json"></rank-item>
      </div>
      <div class="rank-item">
        <rank-item title="车站周榜" url="./static/apis/week.json"></rank-item>
      </div>
      <div class="rank-item">
        <rank-item title="车站月榜" url="./static/apis/week.json"></rank-item>
      </div>
      <div class="rank-item">
        <rank-item title="魅力主播榜" url="./static/apis/week.json"></rank-item>
      </div>
      <div class="rank-item">
        <rank-item title="受欢迎主播" url="./static/apis/week.json"></rank-item>
      </div>
      <div class="rank-item">
        <rank-item title="弹幕条数榜" url="./static/apis/week.json"></rank-item>
      </div>
    </div>
  </div>
</template>
<script>
import RightContentHeader from "./RightContentHeader";
import RankItem from "./RankItem";
export default {
  name: "Rank",

  components: {
    RightContentHeader,
    RankItem
  },
  data() {
    return {};
  },
  methods: {
    setTitle() {}
  }
};
</script>
<style lang='scss' scoped>
.rank {
  padding: 0 20px 30px;
  background-color: #f2f2f3;
  min-height: 100%;
  box-sizing: border-box;
  .rank-wrap {
    margin: 35px -20px 0;
    overflow: hidden;

    .rank-item {
      width: 33.33%;
      box-sizing: border-box;
      padding: 20px;
      float: left;
    }
  }
}
</style>



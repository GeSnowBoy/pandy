<template>
  <div class="header">
    <span class="header-text">{{title}}</span>
  </div>
</template>
<script>
export default {
  name: "RightContentHeader",
  props: ["title"]
};
</script>

<style lang='scss' scoped>
.header {
  height: 80px;
  border-bottom: 2px solid #d3dde6;
  .header-text {
    display: inline-block;
    height: 79px;
    padding-right: 10px;
    border-bottom: 4px solid #00ce7d;
    font-size: 23px;
    line-height: 80px;
  }
}
</style>


<template>
  <div id="app">
    <left-view></left-view>
    <right-view></right-view>
  </div>
</template>

<script>
import LeftView from "./components/LeftView";
import RightView from "./components/RightView";
export default {
  name: "App",
  components: {
    LeftView: LeftView,
    RightView: RightView
  },
  mounted: function() {
    console.log(
      `国民老公王校长的公司...
没时间解释了，快上车。
6a912600c05df281.js:1 请将简历发送至 job@panda.tv（标题格式：“姓名-应聘XX职位-来自console”）
6a912600c05df281.js:1 职位介绍：http://hr.panda.tv`
    );
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  background: none;
  outline: none;
  border: none;
}
a {
  color: inherit;
  text-decoration: none;
}
@font-face {
  font-family: "iconfont"; /* project id 956534 */
  src: url("//at.alicdn.com/t/font_956534_itn6a3net78.eot");
  src: url("//at.alicdn.com/t/font_956534_itn6a3net78.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_956534_itn6a3net78.woff") format("woff"),
    url("//at.alicdn.com/t/font_956534_itn6a3net78.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_956534_itn6a3net78.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>

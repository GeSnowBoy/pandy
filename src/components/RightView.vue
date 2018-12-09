<template>
  <div class="right-wrap">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "RightView",
  data: function() {
    return {};
  },
  methods: {},
  mounted: function() {}
};
</script>
<style lang='scss'>
.right-wrap {
  overflow: hidden;
  height: 100%;
  overflow: auto;
}
</style>


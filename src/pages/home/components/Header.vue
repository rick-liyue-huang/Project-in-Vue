<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> input city
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{ this.city }} -->
        <!-- {{ this.$store.state.city }} -->
        {{ this.city }}
        <!-- {{ this.doubleCity }} -->
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HomeHeader",
  // props: {
  //   city: String
  // }
  computed: {
    ...mapState(["city"]), // 映射到comuted 计算属性的city中
    ...mapGetters(["doubleCity"])
  }
};
// 1rem = html font-size = 50px
// 将一些公用样式导出去
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
    width: 0.64rem
    float: left
    .back-icon
      text-align: center
      font-size: 0.4rem
  .header-input
    flex: 1
    background: #fff
    height: 0.64rem
    line-height: 0.64rem
    border-radius: 0.1rem
    margin-top: 0.12rem
    margin-left: 0.2rem
    padding-left: 0.2rem
    color: #ccc
  .header-right
    min-width: 1.04rem
    padding: 0 0.1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      font-size: 0.24rem
      margin-left: -0.04rem
</style>

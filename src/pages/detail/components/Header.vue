<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont abs-back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      Detail Info
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: 0
    };
  },
  mounted() {
    // 需要对 全局事件 解绑
    window.addEventListener("scroll", this.handleScroll);
  },
  // 解绑 全局事件
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 手机兼容性
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.header-abs
  position: absolute
  left: 0.2rem
  top: 0.2rem
  width: 0.8rem
  height: 0.8rem
  border-radius: 0.4rem
  background: rgba(0, 0, 0, 0.8)
  text-align: center
  line-height: 0.8rem
  .abs-back-icon
    color: #fff
    font-size: 0.4rem
.header-fixed
  z-index: 90
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  font-size: 0.32rem
  color: #fff
  background: $bgColor
  position: fixed
  top: 0
  left: 0
  right: 0
  .header-fixed-back
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff
    position: absolute
    top: 0
    left: 0
</style>
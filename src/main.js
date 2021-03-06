/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "babel-polyfill"; // 用来支持 promise
import App from "./App";
import router from "./router";
// 引入 vuex
import store from "./store";

// 引入全局默认样式
import "./assets/styles/reset.css";
// 在2倍屏幕或者4倍屏幕，处理1像素边框会被显示为多像素的问题,
import "./assets/styles/border.css";
// 在主目录引入iconfont
import "./assets/styles/iconfont.css";
// 解决移动端300ms点击延迟
// 针对新版 浏览器 不需要 fastclick, 取而代之的是 touch-action: manipulation; in html css
import fastClick from "fastclick";
// 引入 swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

// 使用fastClick，让其在body上应用
fastClick.attach(document.body);
// 使用这个插件
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// 定义了子组件 App 需要在这里配置
new Vue({
  // 对应 index.html 挂载点
  el: "#app",
  router, // 使用了 router，相当于注册
  store, // 注册 store ,其他的子组件都可以使用
  components: { App }, // 这是局部组件
  template: "<App/>"
});

// 路由就是根据网址的不同返回不同的内容

// 多页面应用： 页面跳转 返回 HTML， 请求需要处理服务器返回
// 优点: 首屏时间快， SEO 效果好
// 缺点：页面切换慢

// 单页应用 页面跳转 利用js 挂在不同的页面在前端渲染， 可以在前端解决
// 优点： 页面跳转块
// 缺点：首屏时间慢， SEO差

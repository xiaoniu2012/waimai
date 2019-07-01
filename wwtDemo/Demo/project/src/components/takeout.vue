<template>
  <div id="wrap">
    <!-- <h1><router-link to="/">外卖界面</router-link></h1> -->
    <footer>
      <div>
        <router-link to="/takeout">
          <img src="../assets/img/SSS1.png" alt>
          <br>
          <span>外卖</span>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <img src="../assets/img/zhinanzhen.png" alt>
          <br>
          <span>搜索</span>
        </router-link>
      </div>
      <div>
        <router-link to="/bos">
          <img src="../assets/img/dingdan1.png" alt>
          <br>
          <span>订单</span>
        </router-link>
      </div>
      <div>
        <router-link to="/my">
          <img src="../assets/img/touxiang2.png" alt>
          <br>
          <span>我的</span>
        </router-link>
      </div>
    </footer>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "takeout",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
footer {
  width: 3.75rem;
  /* border: 1px solid red; */
  height: 0.65rem;
  background-color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  font-size: 0.12rem;
}
footer div img {
  width: 0.25rem;
}
footer div {
  margin-top: 0.15rem;
}
</style>
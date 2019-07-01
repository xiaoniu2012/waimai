<template>
  <div id="wrap">
    <!-- <div id="top">
        <img src="../assets/img/back.png" @click="back()" >
      <p>订单列表</p>
    </div> -->
    <!-- 底部部分 -->
    <footer>
      <div>
        <router-link to="/takeout">
          <img src="../assets/img/SSS.png" >
          <br>
          <span>外卖</span>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <img src="../assets/img/zhinanzhen.png" >
          <br>
          <span>搜索</span>
        </router-link>
      </div>
      <div>
        <router-link to="/bos">
          <img src="../assets/img/dingdan2.png" >
          <br>
          <span>订单</span>
        </router-link>
      </div>
      <div>
        <router-link to="/my">
          <img src="../assets/img/touxiang2.png"  >
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
  name: "bos",
  data() {
    return {};
  },
  created() {},
  methods: {
    back(){
      this.$router.back();
    },
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  height: 100vh;
  position: relative;
  background-color: rgb(245, 245, 245)
}
/* #top {
  width: 3.75rem;
  height: 50px;
  background-color: rgb(49, 144, 232);
  position: fixed;
}
#top img {
  height: 0.18rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p {
  font-size: 0.18rem;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
} */

footer {
  width: 3.75rem;
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
<template>
  <div id="wrap">
    <div id="wrap1">
      <p @click="back()">请重新进入</p>
      <p>请返回后重新进入积分商城~</p>
      <router-link to="/scoreimg">
        <img src="../../assets/img/retrylogin[1].png" alt>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "score",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  height: 100vh;
  background-color: rgb(240, 240, 240);
}
#wrap1 {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#wrap1 p:nth-child(1) {
  font-size: 0.35rem;
  color: rgb(13, 127, 213);
}
#wrap1 p:nth-child(2) {
  color: rgb(195, 195, 195);
  font-size: 0.15rem;
  /* color: blue; */
}
#wrap1 img {
  width: 2.15rem;
}
</style>

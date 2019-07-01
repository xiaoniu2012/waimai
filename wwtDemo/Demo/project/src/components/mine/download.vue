<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/img/back.png" >
      <p>下载</p>
    </div>
    <div id="middle">
        <img src="../../assets/img/eliaomo.png" alt="">
        <p>下载饿了么APP</p>
    </div>
    <p id="btn">下载</p>
  </div>
</template>
<script>
export default {
  name: "download",
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
  width: 100%;
  position: relative;
}
#top {
  width: 100%;
  height: 0.55rem;
  background-color: rgb(49, 144, 232);
  position: fixed;
}
#top img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#middle img {
    width: 1.75rem;
    position: absolute;
    left: 1rem;
    top: 1rem;
}
#middle p {
    font-size: 0.2rem;
    position: absolute;
    left: 1.1rem;
    top: 2.9rem;
}
#btn {
    width: 3.55rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.2rem;
    position: absolute;
    text-align: center;
    left: 0.1rem;
    top: 3.4rem;
    background-color: rgb(76, 217, 100);
    border-radius: 0.04rem;
    color: white;
}
</style>

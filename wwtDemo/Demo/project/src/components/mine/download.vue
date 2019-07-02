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
    <p id="btn"  @click="tool1()">下载</p>
    <!-- 弹窗 -->
    <div class="frame1 animated heartBeat 0.4s" v-if="outshow1">
      <img src="../../assets/img/pipe.png" alt>
      <p>IOS用户请前往AppStore下载</p>
      <div id="sure" @click="falsetool1()">
        <p>确认</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "download",
  data() {
    return {
      outshow1: false,
    };
  },
  methods: {
    tool1() {
      this.outshow1 = true;
    },
    falsetool1() {
      this.outshow1 = false;
    },
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

.frame1 {
  width: 2.75rem;
  height: 2.25rem;
  background-color: white;
  border-radius: 0.1rem;
  position: absolute;
  left: 0.5rem;
  top: 1.85rem;
  /* animation: jello 100s; */
}

.frame1 img {
  width: 1.2rem;
  position: absolute;
  left: 0.75rem;
  top: 0.05rem;
}
.frame1 p:nth-child(2) {
  font-size: 0.18rem;
  position: absolute;
  left: 0.25rem;
  top: 1.3rem;
}
#sure {
  width: 2.75rem;
  height: 0.45rem;
  background-color: rgb(76, 217, 100);
  color: white;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.25rem;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>

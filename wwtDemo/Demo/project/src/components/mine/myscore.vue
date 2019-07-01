<template>
  <div id="wrap">
    <div id="wdye">
      <img @click="back()" id="zj" src="../../assets/img/back.png" alt>
      <p style="margin-top:0.12rem">我的积分</p>
      <div id="dqye">
        <p id="jifen01">当前积分</p>
        <router-link to="/scoreexplain">
          <img style="height:0.2rem" id="tp" src="../../assets/img/question.png" alt>
        </router-link>
        <p>0</p>
        <p>分</p>
        <p id="tx" @click="tool1()">积分兑换商品</p>
      </div>
    </div>
    <!-- 弹窗 -->
    <div class="frame1 animated heartBeat 0.4s" v-if="outshow1">
      <img src="../../assets/img/pipe.png" alt>
      <p>快去下单赚取大量积分吧</p>
      <div id="sure" @click="falsetool1()">
        <p>确认</p>
      </div>
    </div>
    <div id="jymx">
      <p>最近30天积分记录</p>
      <img src="../../assets/img/myscore.png" alt>
      <p>最近30天无积分记录</p>
      <p>快去下单赚取大量积分吧</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "myscore",
  data() {
    return {
      outshow1: false
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
#wrap{
  width: 3.75rem;
  height: 100vh;
  background-color: rgb(245, 245, 245)
}
#wdye {
  background-color: rgb(49, 144, 232);
  overflow: hidden;
  height: 2.2rem;
}
#zj {
  height: 0.2rem;
  padding: 0.1rem;
  float: left;
}
#wdye > p:nth-child(2) {
  color: white;
  font-size: 0.2rem;
  float: left;
  margin-left: 1.1rem;
}
#dqye {
  background-color: white;
  height: 1.6rem;
  width: 3.55rem;
  overflow: hidden;
  margin-left: 0.1rem;
  margin-top: 0.45rem;
  border-radius: 0.02rem;
}
#dqye > p {
  float: left;
  margin: 0.1rem;
}
#tp {
  float: right;
  margin: 0.1rem;
}
#dqye > p:nth-child(3) {
  color: black;
  font-size: 0.35rem;
  float: left;
  margin-left: -0.5rem;
  margin-top: 0.35rem;
}
#dqye p:nth-child(4) {
  color: black;
  font-size: 0.15rem;
  float: left;
  margin-left: -0.25rem;
  margin-top: 0.51rem;
}
#tx {
  font-size: 0.18rem;
  background-color: rgb(254, 109, 71);
  float: left;
  color: white;
  width: 3.2rem;
  border-radius: 2px;
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  padding-left: 0.1rem;
}
#jymx > p {
  color: gray;
  margin: 0.1rem;
}
#jymx > img:nth-child(2) {
  text-align: center;
  width: 1rem;
  margin: 0.5rem 0 0 1.5rem;
}
#jymx > p:nth-child(3) {
  font-size: 0.22rem;
  text-align: center;
  /* width: 1rem; */
  margin: 0.17rem 0 0 0.1rem;
}
#jymx > p:nth-child(4) {
  /* font-size: 0.22rem; */
  text-align: center;
  /* width: 1rem; */
  margin: 0.17rem 0 0 0.1rem;
}
#jifen01 {
  color: gray;
}
.frame1 {
  width: 2.75rem;
  height: 2.25rem;
  background-color: white;
  border: 1px solid gray;
  position: absolute;
  left: 0.5rem;
  top: 1.25rem;
  /* animation: jello 100s; */
}
.frame1 img {
  width: 1.2rem;
  position: absolute;
  left: 0.75rem;
  top: 0.05rem;
}
.frame1 p:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.25rem;
  top: 1.3rem;
}
#sure {
  width: 2.75rem;
  height: 0.45rem;
  background-color: yellowgreen;
  color: white;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.25rem;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
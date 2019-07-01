
<template>
  <div id="wrap">
    <div id="wdye">
      <img @click="back()" id="zj" src="../../assets/img/zuojian.png" alt>
      <p>我的余额</p>
      <div id="dqye">
        <p>当前余额</p>
        <router-link to="/balanceexplain">
          <img id="tp" src="../../assets/img/balance.png" alt>
        </router-link>
        <p>0.00</p>
        <p>元</p>
        <p id="tx">提现</p>
      </div>
    </div>
    <div id="jymx">
      <p>交易明细</p>
      <img src="../../assets/img/record.png" alt>
      <p>暂无明细记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "mybalance",
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
  background-color: rgb(245, 245, 245);
}
#wdye {
  background-color: rgb(49, 144, 232);
  overflow: hidden;
  height: 2rem;
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
  height: 1.5rem;
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
  font-size: 0.3rem;
  float: left;
  margin-left: -0.6rem;
  margin-top: 0.2rem;
}
#dqye > p:nth-child(4) {
  color: black;
  font-size: 0.15rem;
  float: left;
  margin-left: -0.08rem;
  margin-top: 0.37rem;
}
#tx {
  background-color: rgb(204, 204, 204);
  float: left;
  color: white;
  width: 3.2rem;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.1rem;
  margin-top: 1rem;
  font-size: 0.2rem;
}
#jymx p:nth-child(1) {
  font-size: 0.16rem;
  color: gray;
  margin: 0.1rem;
}
#jymx img:nth-child(2) {
  width: 1.2rem;
  margin-left: 1.25rem;
  margin-top: 1rem;
}
#jymx p:nth-child(3) {
  font-size: 0.16rem;
  color: gray;
  margin-top: 0.1rem;
  margin-left: 1.4rem;
}
</style>
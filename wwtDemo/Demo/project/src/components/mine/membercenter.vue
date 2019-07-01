<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/img/back.png">
      <p>会员中心</p>
    </div>
    <div id="member">
      <p>为账户{{this.$store.state.username}}购买会员</p>
    </div>
    <router-link to="/discount">
      <div id="privilege">
        <p>会员特权</p>
        <p>会员说明</p>
        <img src="../../assets/img/youjian.png" alt>
      </div>
    </router-link>
    <div class="sheng">
      <img src="../../assets/img/yewutubiaosheng.png" alt>
      <div class="tex1">
        <p>减免配送费</p>
        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
        <p>蜂鸟专送专享</p>
      </div>
    </div>
    <div class="sheng">
      <img src="../../assets/img/yewutubiaosheng.png" alt>
      <div class="tex1">
        <p>减免配送费</p>
        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
        <p>蜂鸟专送专享</p>
      </div>
    </div>
    <div id="tex2">
      <p>开通会员</p>
    </div>
    <div id="price">
      <span>1个月</span>
      <span>￥20</span>
      <span>
        <router-link to="/disburse">购买</router-link>
      </span>
    </div>
    <router-link to="/exchangevip">
      <div class="exchange">
        <span>兑换会员</span>
        <span>使用卡号卡密</span>
        <img src="../../assets/img/youjian.png" alt>
      </div>
    </router-link>
    <router-link to="/buyrecord"><div class="exchange">
      <span>购买记录</span>
      <span>开发票</span>
      <img src="../../assets/img/youjian.png" alt>
    </div></router-link>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "membercenter",
  data() {
    return {};
  },
  computed: {
    ...mapState(["username"])
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script scoped>
<style scoped>
#wrap {
  width: 3.75rem;
  position: relative;
}
#top {
  width: 100%;
  height: 0.55rem;
  background-color: rgb(49, 144, 232);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
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
#member {
  margin-top: 0.56rem;
  height: 0.4rem;
  font-size: 0.15rem;
  padding-left: 0.1rem;
  line-height: 0.4rem;
}
#privilege {
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid gainsboro;
  background-color: white;
  position: relative;
}
#privilege p:nth-child(1) {
  padding-left: 0.1rem;
  font-size: 0.18rem;
  position: absolute;
  left: 0;
  top: 0;
}
#privilege p:nth-child(2) {
  font-size: 0.15rem;
  color: gray;
  position: absolute;
  right: 0.3rem;
  top: 0;
}
#privilege img {
  width: 0.08rem;
  position: absolute;
  right: 0.1rem;
  top: 0.18rem;
}

.sheng {
  height: 1rem;
  border: 1px solid gainsboro;
  background-color: white;
  position: relative;
}
.sheng img {
  width: 0.55rem;
  position: absolute;
  left: 0.12rem;
  top: 0.15rem;
}
.tex1 {
  position: absolute;
  left: 0.8rem;
  top: 0.15rem;
}
.tex1 p:nth-child(1) {
  font-size: 0.15rem;
}
.tex1 p:nth-child(2),
.tex1 p:nth-child(3) {
  font-size: 0.1rem;
  color: gray;
}
#tex2 {
  font-size: 0.2rem;
  margin-top: 0.15rem;
  height: 0.45rem;
  line-height: 0.45rem;
  border: 1px solid gainsboro;
  background-color: white;
  padding-left: 0.2rem;
}
#price {
  height: 0.5rem;
  border: 1px solid gainsboro;
  background-color: white;
  line-height: 0.5rem;
  position: relative;
}
#price span:nth-child(1) {
  font-size: 0.15rem;
  margin-left: 0.1rem;
}
#price span:nth-child(2) {
  font-size: 0.15rem;
  color: orangered;
}
#price span:nth-child(3) {
  text-align: center;
  width: 0.6rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.15rem;
  color: orangered;
  border: 1px solid orangered;
  position: absolute;
  right: 0.2rem;
  top: 0.1rem;
}
.exchange {
  margin-top: 0.08rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid gainsboro;
  background-color: white;
  position: relative;
}
.exchange span:nth-child(1) {
  font-size: 0.2rem;
  padding-left: 0.1rem;
}
.exchange span:nth-child(2) {
  color: gray;
  font-size: 0.13rem;
  position: absolute;
  right: 0.3rem;
  top: 0;
}
.exchange img {
  width: 0.1rem;
  position: absolute;
  right: 0.1rem;
  top: 0.17rem;
}
</style>

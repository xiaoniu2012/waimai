<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/img/back.png">
      <p>在线支付</p>
    </div>
    <!-- 支付倒计时 -->
    <div id="pay">
      <p>支付剩余时间</p>
      <!-- 倒计时 -->
      <p>00:{{minute}}:{{second}}</p>
    </div>
    <div id="tex1">选择支付方式</div>
    <div class="icon">
      <img src="../../assets/img/zhifubao.png" alt>
      <span>支付宝</span>
      <img v-show="icon" @click="img1()" :src="src1" alt>
    </div>
    <div class="icon">
      <img src="../../assets/img/weixin.png" alt>
      <span>微信</span>
      <img @click="img2()" :src="src2" alt>
    </div>
    <div id="confirm" @click="tool1()">确认支付</div>

    <!-- 弹框1 -->
    <div class="frame animated heartBeat 0.4s" v-if="outshow">
      <img src="../../assets/img/pipe.png" alt>
      <p>支付超时</p>
      <div id="sure" @click="falsetool()">
        <p>确认</p>
      </div>
    </div>

    <!-- 弹框2 -->
    <div class="frame1 animated heartBeat 0.4s" v-if="outshow1">
      <img src="../../assets/img/pipe.png" alt>
      <p>当前环境无法支付,请打开官方APP进行付款</p>
      <div id="sure" @click="falsetool1()">
        <p>确认</p>
      </div>
    </div>
    <!-- 弹框3 -->
    <div class="frame2 animated heartBeat 0.4s" v-if="outshow2">
      <img src="../../assets/img/pipe.png" alt>
      <p>暂不开放支付功能</p>
      <div id="sure" @click="falsetool2()">
        <p>确认</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "disburse",
  data() {
    return {
      minutes: 15,
      seconds: 0,
      outshow1: false,
      outshow: false,
      outshow2: true,
      icon: true,
      src1: require("../../assets/img/icon-test.png"),
      src2: require("../../assets/img/icon-test2.png")
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    img1() {
      this.src1 = require("../../assets/img/icon-test.png");
      this.src2 = require("../../assets/img/icon-test2.png");
    },
    img2() {
      this.src1 = require("../../assets/img/icon-test2.png");
      this.src2 = require("../../assets/img/icon-test.png");
    },
    // 倒计时
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.outshow = true;
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
    back() {
      this.$router.back();
    },
    tool1() {
      this.outshow1 = true;
    },
    falsetool() {
      this.outshow = false;
    },
    falsetool1() {
      this.outshow1 = false;
      this.$router.push({
        name: "bos"
      });
    },
    falsetool2() {
      this.outshow2 = false;
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  }
};
</script>
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
#pay {
  height: 1.35rem;
  background-color: white;
  margin-top: 0.58rem;
  font-size: 0.25rem;
  position: relative;
}
#pay p:nth-child(1) {
  font-size: 0.18rem;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
}
#pay p:nth-child(2) {
  font-size: 0.38rem;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
#tex1 {
  height: 0.45rem;
  font-size: 0.18rem;
  padding-left: 0.2rem;
  padding-top: 0.18rem;
}
.icon {
  height: 0.85rem;
  background-color: white;
  position: relative;
  border: 0.5px solid gainsboro;
}
.icon img:nth-child(1) {
  width: 0.5rem;
  position: absolute;
  left: 0.15rem;
  top: 0.2rem;
}
.icon span:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.7rem;
  top: 0.28rem;
}
.icon img:nth-child(3),
.icon img:nth-child(4) {
  width: 0.35rem;
  position: absolute;
  right: 0.2rem;
  top: 0.28rem;
}
#confirm {
  margin-top: 0.15rem;
  width: 3.75rem;
  line-height: 0.6rem;
  height: 0.6rem;
  background-color: rgb(76, 217, 100);
  color: white;
  font-size: 0.2rem;
  text-align: center;
}
/* 弹窗 */
.frame1,
.frame,
.frame2 {
  width: 2.75rem;
  height: 2.25rem;
  background-color: white;
  border: 1px solid gray;
  position: absolute;
  left: 0.5rem;
  top: 1.25rem;
  /* animation: jello 100s; */
}
.frame1 img,
.frame img,
.frame2 img {
  width: 1.2rem;
  position: absolute;
  left: 0.75rem;
  top: 0.05rem;
}
.frame2 p:nth-child(2) {
  font-size: 0.25rem;
  position: absolute;
  left: 0.4rem;
  top: 1.3rem;
}
.frame1 p:nth-child(2) {
  font-size: 0.15rem;
  position: absolute;
  left: 0.12rem;
  top: 1.3rem;
}
.frame p:nth-child(2) {
  font-size: 0.25rem;
  position: absolute;
  left: 0.82rem;
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

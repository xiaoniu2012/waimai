<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/img/back.png">
      <p>兑换会员</p>
    </div>
    <div id="member">
      <p>成功兑换后将关联到当前账户:{{this.$store.state.username}}</p>
    </div>
    <input @input="shuru1()" v-model="user" maxlength="10" class="inp" type="text" placeholder="请输入10位卡号">
    <input @input="shuru1()" v-model="pw" maxlength="6" class="inp" type="text" placeholder="请输入6位卡密">
    <!-- 兑换按钮 -->
    <!-- <button id="btn" >兑换</button> -->
    <p id="exchange" :style="{backgroundColor:a}" @click="tool1()">兑换</p>
    <div>
        <p id="prompt">——温馨提示——</p>
        <div id="bottex">
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡：30次减免配送费。</p>
        <p>季卡：90次减免配送费。</p>
        <p>年卡：360次减免配送费。</p>
        <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
        </div>
    </div>
    <div class="frame1 animated heartBeat 0.4s" v-if="outshow1">
      <img src="../../assets/img/pipe.png" alt>
      <p>无效的卡号</p>
      <div id="sure" @click="falsetool1()">
        <p>确认</p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "exchangevip",
  data() {
    return {
      outshow1: false,
      user:"",
      pw:"",
      a:"rgb(204,204,204)"
    };
  },
 computed: {
    ...mapState(["username"])
  },
  methods: {
    change1(){
      if(this.user.lenth<2){
        var btn=document.getElementById("btn");
        btn.disabled=true
      }

    },
    shuru1(){
      if(/^\d{10}$/.test(this.user)){
        if(/^\d{6}$/.test(this.pw)){
            this.a="rgb(76,217,100)";
        }
        else{
         this.a="grey";
      }          
      }
      else{
         this.a="grey";
      }

    },
    tool1() {
      if(/^\d{10}$/.test(this.user) && /^\d{6}$/.test(this.pw)){
        this.outshow1 = true;
      }
      else{
        this.outshow1 = false;
      }
    },
    falsetool1() {
      this.outshow1 = false;
    },
    back() {
      this.$router.back();
    }
  }
};
</script scoped>
<style scoped>
#wrap {
  width: 3.75rem;
  height: 100vh;
  background-color: rgb(245, 245, 245);
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
  padding-top: 0.56rem;
  height: 0.45rem;
  font-size: 0.15rem;
  padding-left: 0.1rem;
  line-height: 0.45rem;
}
.inp{
    width: 3.7rem;
    height: 0.35rem;
    font-size: 0.15rem;
    border: 1px solid gainsboro;
}
#exchange{
    width: 3.45rem;
    height: 0.35rem;
    color: white;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.35rem;
    margin-top: 0.2rem;
    margin-left: 0.15rem;
}
#prompt{
    font-size: 0.18rem;
    margin-left: 1.25rem;
    margin-top: 0.25rem;
    color: grey;
}
#bottex p{
    font-size: 0.12rem;
    margin-left: 0.45rem;
    margin-top: 0.04rem;
    color: grey;
}

.frame1 {
  width: 2.75rem;
  height: 2.25rem;
  background-color: white;
  border-radius: 0.1rem;
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
  left: 0.85rem;
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

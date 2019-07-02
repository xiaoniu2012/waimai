<template>
  <div id="wrap">
    <div id="top">
      <router-link to="/" id="back">
        <img src="../assets/img/back.png" alt>
      </router-link>
      <p>密码登录</p>
    </div>
    <div id="wrap1">
      <input v-model="username" placeholder="账号" type="text">
      <br>
      <input v-model="password" placeholder="密码" :type="show">
      <div id="cash" @click="display()"><el-switch  v-model="value" active-color="#13ce66" inactive-color="rgb(204,204,204)"></el-switch></div>
      <br>
      <div id="captcha">
        <input v-model="codeNumber" placeholder="验证码" type="text">
        <img :src="code" alt>
        <div id="text">
          <p>看不清</p>
          <p @click="getCode()">换一张</p>
        </div>
      </div>
      <div id="text2">
        <p>温馨提示:未注册过的账号,登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
      </div>
    </div>
    <button @click="login()">登录</button>

    <router-link to="/reset" id="reset1">重置密码？</router-link>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      code: "", //存储验证码base64图片
      username: "",
      password: "",
      codeNumber: "", //存储验证码输入框的值
      value: false,
      show:"password"
    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
  },
  methods: {
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        withCredentials: true
      }).then(res => {
        console.log("验证码数据");
        console.log(res);
        this.code = res.data.code;
      });
    },
    login() {
      //新人注册红包是3个
      this.$store.commit("getlength", 3);
      this.$store.commit("getname", this.username);
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        this.$store.commit("getuserid", res.data.user_id);
        // console.log("login数据");
        console.log(res);
        if (res.data.message) {
          alert(res.data.message); //登陆失败
        } else {
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "adress"
            // query:{
            //  username:res.data.username
            // }
          });
        }
        this.$store.commit('xiugai',false)
      });
    },
    display(){
     if (this.value==false ) {
       this.show ="password"
     } else {
        this.show = "text"
     }
    },
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  height: 100vh;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
}
#top {
  height: 0.45rem;
  background-color: rgb(49, 144, 232);
  position: relative;
}
#back img {
  height: 0.18rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p {
  font-size: 0.15rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#wrap1 {
  margin-top: 15px;
}
#wrap1 input {
  margin-top:-0.02rem;
  width: 3.75rem;
  height: 50px;
  border: 0.01rem solid rgb(244, 244, 244);
  font-size: 0.2rem;
  padding-left: 0.1rem;
}
#captcha {
  width: 3.75rem;
  height: 50px;
  position: relative;
}
#captcha img {
  position: absolute;
  right: 15%;
  top: 20%;
}
#text {
  position: absolute;
  right: 2%;
  top: 5%;
  font-size: 0.15rem;
}
#text p:nth-child(2) {
  color: blue;
}
#text2 {
  font-size: 0.15rem;
  color: red;
}
#text2 p {
  margin-left: 0.15rem;
  margin-top: 10px;
  margin-bottom: 5px;
}

#wrap > button {
  font-size: 0.15rem;
  width: 3.55rem;
  margin-left: 0.1rem;
  border-radius: 0.08rem;
  height: 50px;
  background-color: rgb(76, 217, 100);
  color: white;
}
#reset1 {
  color: rgb(59, 149, 233);
  font-size: 0.15rem;
  margin-top: 5px;
  float: right;
}
#cash{
  margin-left: 3.2rem;
  margin-top:-0.35rem;

}
</style>

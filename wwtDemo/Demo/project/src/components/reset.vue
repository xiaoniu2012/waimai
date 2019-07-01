<template>
  <div id="wrap">
    <div id="top">
        <img @click="back()" id="back" src="../assets/img/back.png" alt>
      <p>重置密码</p>
    </div>
    <div id="wrap1">
      <input v-model="username" placeholder="账号" type="text">
      <br>
       <input v-model="oldpassWord" placeholder="旧密码" type="text">
      <br>
      <input v-model="newpassword" placeholder="请输入密码" type="text">
      <br>
       <input v-model="confirmpassword" placeholder="请确认密码" type="text">
      <br>
      <div id="captcha">
        <input v-model="captcha_code" placeholder="验证码" type="text">
        <img :src="code" alt>
        <div id="text">
          <p>看不清</p>
          <p @click="getCode()">换一张</p>
        </div>
      </div>
    </div>
    <button @click="reset()">确认修改</button>

  </div>
</template>
<script>
export default {
  name: "reset",
  data() {
    return {
      code: "", //存储验证码base64图片
      username: "",
      oldpassWord:"",
      newpassword:"",
      confirmpassword:"",
      captcha_code: "" //存储验证码输入框的值
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
    reset() {
      const api = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          oldpassWord: this.oldpassWord,
          newpassword:this.newpassword,
          confirmpassword:this.confirmpassword,
          captcha_code: this.captcha_code
        }
      }).then(res => {
        console.log("login数据");
        console.log(res);
        if (res.data.message) {
          alert(res.data.message); //登陆失败
        } 
        else {
           alert("密码修改成功");
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "reset",
            // query: res.data,
            // params: { pID: res.data.id }
          });
        }
      });
    },
    back(){
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
  overflow: hidden;
}
#top {
  height: 50px;
  background-color: rgb(49, 144, 232);;
  position: relative;
}
#back {
  height: 20px;
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
  width: 3.75rem;
  height: 50px;
  padding-left: 0.1rem;
  font-size: 0.2rem;
  border: 0.01rem solid rgb(242, 242, 242);
}
#captcha {
  width: 3.75rem;
  height: 50px;
  background-color: white;
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
  color: rgb(49, 144, 232);
}

#wrap > button {
  
  font-size: 0.15rem;
  margin-top: 0.15rem;
  margin-left: 0.1rem;
  width: 3.55rem;
  height: 50px;
  background-color: rgb(76, 217, 100);
  border-radius: 0.08rem;
  color: white;
}
</style>

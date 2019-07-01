<template>
  <div id="wrap">
    <div id="yhm">
      <img @click="back()" src="../../assets/img/zuojian.png" alt>

      <p>修改密码名</p>
    </div>
    <div id="srk">
      <input v-model="username" :style="{border:color}" @input="panduan()" placeholder="输入用户名">
      <p :style="{color:a}" v-if="kong">{{tex}}</p>
    </div>
    <button id="anniu" :style="{color:b}" @click="revise()">确认修改</button>
    <!-- <h1 @click="back()">返回</h1> -->
  </div>
</template>
<script>
export default {
  name: "reviseuesername",
  data() {
    return {
      username: "",
      color: "0.01rem solid rgb(224,224,224)",
      a: "",
      b: "gainsboro",
      kong: true,
      tex: "用户名只能修改一次（5-24个字符之间）"
    };
  },
  methods: {
    revise() {
      this.$store.commit("getname", this.username);
      if (/^[A-Za-z1-9]{5}/.test(this.username)) {
        this.$router.push({
          name: "zhxx"
        });
      }
    },
    panduan() {
      if (/^[A-Za-z1-9]{5}/.test(this.username)) {
        (this.color = "0.01rem solid rgb(224,224,224)"),
          (this.tex = "用户名只能修改一次（5-24个字符之间）"),
          (this.a = "gray"),
          (this.b = "white");
      } else {
        (this.color = "0.01rem solid red"),
          (this.tex = "用户名长度在5-24位之间"),
          (this.a = "red"),
          (this.b = "gainsboro");
      }
    },
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
  background-color: rgb(242, 242, 242);
}
#yhm {
  overflow: hidden;
  background-color: rgb(49, 144, 232);
  height: 0.46rem;
}
#yhm > img {
  float: left;
  width: 0.24rem;
  margin-top: 0.12rem;
  padding-left: 0.1rem;
}
#yhm p {
  color: white;
  font-size: 0.2rem;
  line-height: 0.46rem;
  padding-left: 1.4rem;
  font-weight: bold;
  /* text-align: center; */
}
#srk > input {
  background-color: rgb(242, 242, 242);
  width: 3.55rem;
  margin-left: 2%;
  height: 0.34rem;
  margin-top: 2.5%;
  font-size: 0.16rem;
}
#srk > p {
  font-size: 0.1rem;
  padding: 0.08rem;
}
#anniu {
  margin-top: 0.2rem;
  height: 0.45rem;
  background-color: rgb(49, 153, 232);
  /* color: white; */
  width: 95%;
  font-size: 0.15rem;
  line-height: 0.45rem;
}
</style>

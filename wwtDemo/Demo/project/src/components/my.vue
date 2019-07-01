<template>
  <div id="wrap">
    <!-- 头部部分 -->
    <div id="toubu">
      <img @click="back()" src="../assets/img/zuojian.png" alt />

      <p>我的</p>

      <div id="wdtz" @click="judge()">
        <img v-if="pdimg" class="touxiang" :src="imageUrl" />
        <img v-else class="touxiang" src="../assets/img/tupian.jpg" alt />
        <p>{{this.$store.state.username||login}}</p>
        <img src="../assets/img/shouji3.png" alt />
        <p>暂无绑定手机号</p>
        <img id="youbiao" src="../assets/img/right.png" alt />
      </div>
    </div>
    <div id="zhong1">
      <router-link to="/mybalance">
        <div id="yue">
          <p>0.00</p>
          <p>元</p>
          <p>我的余额</p>
        </div>
      </router-link>
      <router-link to="/preference">
        <div id="youhui">
          <p>{{getname}}</p>
          <p>个</p>
          <p>我的优惠</p>
        </div>
      </router-link>
      <router-link to="/myscore">
        <div id="jifen">
          <p>0</p>
          <p>分</p>
          <p>我的积分</p>
        </div>
      </router-link>
    </div>

    <router-link to="/bos">
      <div id="dingdan">
        <img src="../assets/img/dingdan.png" alt />
        <div>
          <p class="zi">我的订单</p>
          <img class="ddtp" src="../assets/img/youjian.png" alt />
        </div>
      </div>
    </router-link>
    <router-link to="/score">
      <div id="jfsc">
        <img src="../assets/img/shangjia002.png" alt />
        <div>
          <p class="zi">积分商城</p>
          <img class="ddtp" src="../assets/img/youjian.png" alt />
        </div>
      </div>
    </router-link>
    <div id="hyk" @click="membercenter()">
      <img src="../assets/img/huangguan.png" alt />
      <div>
        <p class="zi">饿了吗会员卡</p>
        <img class="ddtp" src="../assets/img/youjian.png" alt />
      </div>
    </div>
    <div id="fwzx" @click="fwzx()">
      <span id="fk"></span>
      <div>
        <p class="zi">服务中心</p>
        <img src="../assets/img/youjian.png" alt />
      </div>
    </div>
    <router-link to="/download">
      <div id="elm">
        <img src="../assets/img/eliaomo.png" alt />
        <div>
          <p class="zi">下载饿了么APP</p>
          <img class="ddtp" src="../assets/img/youjian.png" alt />
        </div>
      </div>
    </router-link>

    <footer>
      <div>
        <router-link to="/takeout">
          <img src="../assets/img/SSS.png" />
          <br />
          <span>外卖</span>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <img src="../assets/img/zhinanzhen.png" />
          <br />
          <span>搜索</span>
        </router-link>
      </div>
      <div>
        <router-link to="/bos">
          <img src="../assets/img/dingdan1.png" />
          <br />
          <span>订单</span>
        </router-link>
      </div>
      <div @click="my()">
        <img src="../assets/img/touxiang1.png" />
        <br />
        <span>我的</span>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "my",
  data() {
    return {
      login: "登录/注册", // img2: thias.$store.state.img
      imageUrl: "",
      pdimg: true
    };
  },
  // computed: {
  //   // imageUrl(){
  //   //   return this.$store.state.img;
  //   // },
  //   ...mapState(["imageUrl"])
  // },
  created() {
    // this.img2 = this.$store.state.img;
    // console.log(this.$store.state.img);
    // this.$store.commit("getname",this.username);
    // this.$store.state.username=localStorage.thisusername;
    this.getSrc();
  },
  computed: {
    // this.$store.state.hongbaolength
    // 方式一
    ...mapState(["username"]),
    // ...mapState(["imageUrl"]),

    // 方法二
    getname() {
      return this.$store.state.hongbaolength;
    }
    // 方法三
  },
  methods: {
    getSrc() {
      const api = "https://elm.cangdu.org/v1/user/" + this.$store.state.userid;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.imageUrl = "https://elm.cangdu.org/img/" + res.data.avatar;
        console.log(this.imageUrl);
      });
    },
    judge() {
      if (this.$store.state.username) {
        this.$router.push({
          name: "zhxx"
        });
      } else {
        this.$router.push({
          name: "login"
        });
      }
    },
    fwzx() {
      this.$router.push({
        name: "fwzx"
      });
    },
    membercenter() {
      this.$router.push({
        name: "membercenter"
      });
    },
    my() {
      this.$router.push({
        name: "my"
      });
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
  background-color: white;
}
#toubu {
  background-color: #3190e8;
  height: 1.35rem;
  /* width: 4.75rem; */
  overflow: hidden;
}
#toubu > img:nth-child(1) {
  background-color: #3190e8;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  float: left;
  height: 0.25rem;
}
#toubu p:nth-child(2) {
  background-color: #3190e8;
  font-size: 0.19rem;
  color: white;
  font-weight: 700;
  float: left;
  margin-left: 1.4rem;
  margin-top: 0.1rem;
}
.touxiang {
  background-color: #3190e8;
  border-radius: 0.3rem;
  float: left;
  margin-top: 0.5rem;
  margin-left: -2rem;
  height: 0.65rem;
}

#wdtz p:nth-child(2) {
  background-color: #3190e8;

  margin-top: 0.6rem;
  margin-left: -1.2rem;
  color: white;
  font-size: 0.18rem;
  font-weight: 700;
}
#wdtz img:nth-child(3) {
  background-color: #3190e8;
  width: 20px;
  float: left;
  margin-top: 0.91rem;
  margin-left: -1.25rem;
}
#wdtz p:nth-child(4) {
  background-color: #3190e8;
  float: left;
  margin-left: -1rem;
  margin-top: 0.95rem;
  color: white;
}

#youbiao {
  background-color: #3190e8;
  float: right;
  margin-right: 0.2rem;
  margin-top: 0.85rem;
}
#zhong1 {
  height: 0.8rem;
  overflow: hidden;
  border-bottom: 0.1rem solid #f5f5f5;
}
#yue {
  height: 0.8rem;
  float: left;
  border-right: 1px solid #f5f5f5;
  /* overflow: hidden; */
  padding-right: 0.3rem;
}
#yue p:nth-child(1) {
  color: #f90;
  font-size: 0.25rem;
  float: left;
  margin-left: 0.3rem;
  margin-top: 0.15rem;
  font-weight: 700;
}
#yue p:nth-child(2) {
  float: left;
  font-size: 0.13rem;
  margin-top: 0.3rem;
  color: #666;
  font-weight: 400;
}
#yue p:nth-child(3) {
  float: left;
  font-size: 0.13rem;
  margin-top: 0.5rem;
  margin-left: -0.6rem;
  color: #666;
  font-weight: 400;
}
#youhui {
  height: 0.8rem;
  float: left;
  /* overflow: hidden; */
  border-right: 1px solid #f5f5f5;
  padding-right: 0.3rem;
}
#youhui p:nth-child(1) {
  color: #ff5f3e;
  font-size: 0.25rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.15rem;
  font-weight: 700;
}
#youhui p:nth-child(2) {
  float: left;
  font-size: 0.13rem;
  margin-top: 0.3rem;
  color: #666;
  font-weight: 400;
}
#youhui p:nth-child(3) {
  float: left;
  font-size: 0.13rem;
  margin-top: 0.5rem;
  margin-left: -0.4rem;
  color: #666;
  font-weight: 400;
}
#jifen {
  overflow: hidden;
}
#jifen p:nth-child(1) {
  color: #6ac20b;
  font-size: 0.25rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.15rem;
  font-weight: 700;
}
#jifen p:nth-child(2) {
  float: left;
  font-size: 0.13rem;
  margin-top: 0.3rem;
  color: #666;
  font-weight: 400;
}
#jifen p:nth-child(3) {
  float: left;
  font-size: 0.13rem;
  margin-top: 0.5rem;
  margin-left: -0.4rem;
  color: #666;
  font-weight: 400;
}
#dingdan {
  overflow: hidden;
}
#dingdan > img {
  float: left;
  width: 8%;
  margin-top: 2.5%;
  margin-left: 2%;
}
#dingdan img:nth-child(3) {
  float: right;
  width: 0.1rem;
  padding-top: 0.13rem;
  padding-right: 0.1rem;
}
#dingdan > div {
  width: 88.5%;
  float: left;
  /* margin-top: 0.1rem; */
  margin-left: 0.055rem;
  border-bottom: 2px solid #f5f5f5;
  overflow: hidden;
}
.zi {
  float: left;
  font-size: 0.16rem;
  margin-top: 0.1rem;
  color: black;
}
#jfsc {
  overflow: hidden;
}
.ddtp {
  float: right;
  width: 0.06rem;
  margin-top: 0.12rem;
  margin-right: 0.1rem;
}
#jfsc > img {
  float: left;
  width: 5%;
  left: 2%;
  margin-right: 2.5%;
  margin-left: 3.5%;
  margin-top: 4%;
}
#jfsc img:nth-child(3) {
  float: right;
  width: 0.1rem;
  padding-top: 0.13rem;
  padding-right: 0.1rem;
}
#jfsc > div {
  width: 89%;
  float: left;
  border-bottom: 2px solid #f5f5f5;
  overflow: hidden;
}
#hyk {
  overflow: hidden;
  border-bottom: 0.1rem solid #f5f5f5;
}

#hyk > img {
  float: left;
  width: 5%;
  left: 2%;
  margin-right: 2.5%;
  margin-left: 3.5%;
  margin-top: 3.5%;
}
#hyk img:nth-child(3) {
  float: right;
  width: 0.1rem;
  padding-top: 0.13rem;
  padding-right: 0.1rem;
}
#hyk > div {
  width: 89%;
  float: left;
  overflow: hidden;
}
.zi {
  float: left;
}
#fwzx {
  overflow: hidden;
  margin-left: 0.15rem;
}
#fwzx p {
  margin-top: 0.12rem;
  margin-left: 0.12rem;
}

#fk {
  width: 0.15rem;
  height: 0.15rem;
  margin-top: 5%;
  background-color: #3190e8;
  float: left;
}

#fwzx img:nth-child(2) {
  float: right;
  width: 0.06rem;
  margin-top: 0.12rem;
  margin-right: 0.1rem;
}
#fwzx div:nth-child(2) {
  width: 95.5%;
  float: left;
  border-bottom: 2px solid #f5f5f5;
}
#elm {
  /* position: relative; */
  overflow: hidden;
}
#elm > img {
  float: left;
  width: 5%;
  margin-right: 2.5%;
  margin-left: 3.5%;
  margin-top: 3.5%;
}
#elm img:nth-child(3) {
  float: right;
  width: 0.1rem;
  padding-top: 0.13rem;
  padding-right: 0.1rem;
}
#elm > div {
  width: 89%;
  float: left;
  /* margin-top: 0.1rem; */
  /* border-bottom:2px solid gainsboro ; */
  overflow: hidden;
}

/* 底部部分 */
footer {
  width: 3.75rem;
  /* border: 1px solid red; */
  height: 0.65rem;
  background-color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  font-size: 0.12rem;
}
footer div img {
  width: 0.25rem;
}
footer div {
  margin-top: 0.15rem;
}
</style>
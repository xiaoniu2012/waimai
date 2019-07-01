<template>
  <div>
    <div id="top" @click="back1()">
      <img src="../assets/img/back.png" alt />
      <p>{{msg}}</p>
    </div>
    <div id="center">
      <p id="p1">活动与属性</p>
      <ul :key="i" v-for="(v,i) in baozhun">
        <li id="bao">
          <span class="san" v-if="v.icon_name='准'" style="backgroundColor:blue">{{v.icon_name}}</span>
          <span>{{v.description}}</span>
        </li>
      </ul>
    </div>
    <div id="jiandu">
      <div id="jiandu1">
        <p>食品监督安全公式</p>
        <router-link to="/qiye">
          <span>企业认证详情</span>
          <img src="../assets/img/iconfontjiantou2.png" alt />
        </router-link>
      </div>
      <div id="jiandu2">
        <img src="../assets/img/icon_xiaolian-mian.png" alt />
        <span id="float">
          <p>
            检查结果:
            <span class="pan">良好</span>
          </p>
          <p>检查日期：</p>
        </span>
      </div>
    </div>
    <div id="xinxi">
      <p class="xin">商家信息</p>
      <p class="ming">{{data.name}}</p>
      <p id="adress">地址：{{data.address}}</p>
      <p id="sale">营业时间：{{data.opening_hours}}</p>
      <p id="yi" @click="show1()">
        营业执照
        <img src="../assets/img/iconfontjiantou2.png" />
      </p>
      <p id="yi1" @click="show1()">
        餐饮服务许可证
        <img src="../assets/img/iconfontjiantou2.png" />
      </p>
    </div>
    <div id="zhe" v-if="show" @click="show2()"></div>
  </div>
</template>
<script>
export default {
  name: "canxiangqing",
  data() {
    return {
      msg: "商家详情",
      data: "",
      dizhi: "",
      baozhun: "",
      show: false
    };
  },
  created() {
    this.dizhi = this.$store.state.id;
    this.qing();
  },
  methods: {
    show1() {
      this.show = true;
    },
    show2() {
      this.show = false;
    },
    back1() {
      this.$router.back();
    },
    qing() {
      const api = "https://elm.cangdu.org/shopping/restaurant/" + this.dizhi;
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        this.data = res.data;
        this.baozhun = this.data.supports;
        console.log(this.data);
      });
    }
  }
};
// https://elm.cangdu.org/shopping/restaurant/1
</script>
<style scoped>
#zhe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 56;
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 0.4;
}
#yi img,
#yi1 img {
  width: 30px;
  height: 30px;
  margin-left: 155px;
}
#yi,
#yi1 {
  width: 100%;
  float: left;
  margin-top: 55px;
  font-size: 0.17rem;
}
#sale {
  width: 100%;
  float: left;
  margin-top: 50px;
  font-size: 0.15rem;
  font-weight: bold;
}
#adress {
  float: left;
  width: 100%;
  margin-top: 50px;
  font-size: 0.14rem;
  width: 100%;
}
.ming {
  width: 100%;
  float: left;
  margin-top: 50px;
  font-size: 0.15rem;
}
.xin {
  float: left;
  width: 90%;
  font-size: 0.2rem;
  font-weight: bold;
  padding: 1px;
  margin-left: 5px;
}
#xinxi {
  width: 100%;
  float: left;
  background-color: white;
  margin-top: 10px;
}
.pan {
  color: green;
}
#float {
  float: left;
  font-size: 0.13rem;
  padding: 2px;
}
#jiandu {
  width: 100%;
  float: left;
  margin-top: 10px;
  background-color: white;
}
#jiandu1 {
  float: left;
  height: 50px;
}
#jiandu1 img {
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 25px;
  margin-top: 6px;
}
#jiandu1 p {
  float: left;
  font-size: 0.2rem;
  font-weight: bold;
  margin-left: 10px;
}
#jiandu1 span {
  float: left;
  margin-left: 50px;
  font-size: 0.15rem;
  margin-top: 6px;
  color: grey;
}
#jiandu2 {
  float: left;
}
#jiandu2 img {
  width: 50px;
  height: 50px;
  float: left;
}
.san {
  background-color: gray;
  border-radius: 2px;
}
#bao {
  font-size: 0.15rem;
  margin-top: 10px;
}
#p1 {
  float: left;
  height: 30px;
  float: left;
  font-size: 0.2rem;
  font-weight: bold;
  width: 100%;
}
#center {
  float: left;
  width: 100%;
  margin-top: 5px;
  background-color: white;
}
#top {
  width: 3.75rem;
  height: 0.45rem;
  background-color: rgb(49, 144, 232);
  color: white;
  position: relative;
}
#top img:nth-child(1) {
  position: absolute;
  left: 0.1rem;
  top: 0.12rem;
  width: 0.14rem;
}
#top p{
     line-height: 0.45rem;
     text-align: center;
     font-size: 0.2rem;

}
</style>

<template>
  <div>
    <div id="top" @click="back1()">
      <img src="../assets/img/back.png"/>
      <p>确认订单</p>
      <img src="../assets/img/touxiang2.png"  />
    </div>
    <div id="dizhi" @click="adddizhi()">
      <img src="../assets/img/juli.png" />
      <p>请添加一个收货地址</p>
      <img src="../assets/img/iconfontjiantou2.png" />
    </div>

    <div id="time">
      <p></p>
      <p>送达时间</p>
      <div id="right">
        <span>尽快送达|预计{{hours}}{{fu}}{{minutes}}</span>
        <span>{{da1}}</span>
      </div>
    </div>

    <div id="pay">
      <div @click="zhifu()" id="pay01">
        <span>支付方式</span>
        <span>在线支付</span>
        <img src="../assets/img/iconfontjiantou2.png" />
      </div>
      <div id="pay02">
        <span>红包</span>
        <span>暂时只在饿了吗APP中支持</span>
      </div>
    </div>

    <div id="xianjin" v-show="show">
      <p>支付方式</p>
      <div id="xianjin01">
        <span>货到付款(商家暂时不支持货到付款)</span>
        <img src="../assets/img/icon-test2.png"  />
      </div>
      <div id="xianjin02">
        <span>在线支付</span>
        <img src="../assets/img/icon-test.png" />
      </div>
    </div>
    <div id="yin" @click="xiaoshi()" v-show="show"></div>

    <div id="list">
      <p id="shop">
        <img :src="'https://elm.cangdu.org/img/'+path" alt />
        {{name}}
      </p>
      <ul :key="i" v-for="(v,i) in ming1" class="yihui">
        <li class="enen">{{v}}</li>
        <li class="en">x1</li>
      </ul>
      <ul :key="i" v-for="(v,i) in ming2" class="yihui">
        <li class="enen">{{v}}</li>
        <li class="en">x1</li>
      </ul>
      <div id="jia">
        <ul :key="i" v-for="(v,i) in jia1">
          <li>{{v}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dingdan",
  data() {
    return {
      da: "",
      da1: "",
      hours: "",
      minutes: "",
      fu: ":",
      show: false,
      shop: "效果演示",
      ming1: "",
      ming2: "",
      shu1: "",
      shu2: "",
      path: "",
      name: "",
      jia1: ""
    };
  },
  created() {
    this.song();
    this.gettime();
    this.name = this.$route.query.ming;
    this.path = this.$route.query.pian;
    this.ming1 = this.$store.state.arr;
    this.ming2 = this.$store.state.arr2;
    this.jia1 = this.$store.state.arr1;
  },
  methods: {
    back1() {
      this.$router.back();
    },
    song() {
      const api =
        "https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes";
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        this.da = res.data;
        this.da1 = this.da[0].text;
      });
    },
    gettime() {
      var time1 = new Date();
      var time2 = time1.getHours();
      var time3 = time1.getMinutes();
      console.log(time2, time3);
      if (time3 < 30) {
        time3 = time3 + 30;
        this.hours = time2;
        this.minutes = time3;
      } else {
        time2 += 1;
        time3 -= 30;
        if (time3 < 10) {
          time3 = "0" + time3;
        }
        this.hours = time2;
        this.minutes = time3;
      }
    },
    zhifu() {
      // this.show=true;
      var yu = document.getElementById("xianjin");
      yu.style.height = "0.1rem";
      this.show = true;
    },
    xiaoshi() {
      this.show = false;
      var yu = document.getElementById("xianjin");
      yu.style.height = "0px";
    },
    adddizhi() {
      this.$router.push({
        name: "receiptaddress"
      });
    }
  }
};
</script>
<style scoped>
#top {
  width: 3.75rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.18rem;
  color: white;
  background-color: #3190e8;
  position: relative;
}
#top img:nth-child(1) {
  width: 0.12rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
#top p:nth-child(2) {
  position: absolute;
  left: 1.42rem;
  top: 0;
}
#top img:nth-child(3) {
  width: 0.28rem;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}
#dizhi {
  padding-top: 0.5rem;
  width: 3.75rem;
  height: 0.45rem;
  font-weight: bold;
  background-color: white;
  position: relative;
}
#dizhi img:nth-child(1) {
  width: 0.45rem;
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
}
#dizhi p:nth-child(2) {
  font-size: 0.18rem;
  position: absolute;
  left: 1rem;
  top: 0.32rem;
}
#dizhi img:nth-child(3) {
  width: 0.32rem;
  position: absolute;
  right: 0.1rem;
  top: 0.32rem;
}
#time {
  width: 3.75rem;
  height: 1rem;
  line-height: 1rem;
  background-color: white;
  margin-top: 0.1rem;
  position: relative;
}
#time p:nth-child(1) {
  height: 1rem;
  width: 0.08rem;
  background-color: rgb(49, 144, 232);
}
#time p:nth-child(2) {
  font-size: 0.15rem;
  font-weight: bold;
  position: absolute;
  left: 0.2rem;
  top: 0;
}
#right {
  width: 2.4rem;
  position: absolute;
  left: 1.2rem;
  top: 0;
}
#right span:nth-child(1) {
  font-size: 0.16rem;
}
#right span:nth-child(2) {
  font-size: 0.12rem;
  margin-left: 0.1rem;
  color: white;
  background-color: #3190e8;
  padding: 0.1rem;
}

#pay {
  width: 3.75rem;
  height: 1rem;
  margin-top: 0.1rem;
}
#pay01,
#pay02 {
  width: 3.75rem;
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.12rem;
  position: relative;
}
#pay01 span:nth-child(1),
#pay02 span:nth-child(1) {
  font-size: 0.15rem;
  position: absolute;
  left: 0.1rem;
}
#pay01 span:nth-child(2),
#pay02 span:nth-child(2) {
  font-size: 0.15rem;
  position: absolute;
  top: 0.02rem;
  right: 0.5rem;
}
#pay01 img:nth-child(3) {
  width: 0.25rem;
  position: absolute;
  right: 0.1rem;
  top: 0.12rem;
}
#xianjin{
  margin-top: 0.1rem;
  width: 3.7rem;
  height: 2.25rem;
  border: 0.01px solid gray;
}
#xianjin p:nth-child(1){
  width: 3.75rem;
  height: 0.55rem;
  background-color: #3190e8;
  font-size: 0.15rem;
  text-align: center;
  line-height: 0.55rem;
}
#xianjin01,#xianjin02{
  width: 3.75rem;
  height: 0.85rem;
  line-height: 0.85rem;
  position: relative;
}
#xianjin01 span:nth-child(1),#xianjin02 span:nth-child(1){
  font-size: 0.15rem;
  position: absolute;
  left: 0.1rem;
}
#xianjin01 img:nth-child(2),#xianjin02 img:nth-child(2){
  width: 0.35rem;
  position: absolute;
  top:0.2rem;
  right: 0.2rem;
}


.jia {
  float: left;
  width: 40%;
}
.yihui {
  border: 1px solid grey;
  float: left;
  width: 60%;
}
.enen {
  font-size: 0.15rem;
}
.en {
  float: left;
  margin-left: 140px;
  font-size: 0.15rem;
  /* margin-top: -25px; */
  color: orange;
}
#shop img {
  width: 50px;
  /* height: 50px; */
}
#shop {
  font-size: 0.2rem;
  color: black;
  font-weight: bold;
}
#list {
  width: 100%;
  float: left;
}

#yin {
   width: 3.75rem;
  height: 2.5rem;
  position: absolute;
  opacity: 0.4;
}

</style>
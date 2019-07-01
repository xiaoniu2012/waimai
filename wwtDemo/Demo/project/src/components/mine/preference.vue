<template>
  <!-- 我的优惠 -->
  <div id="wrap">
    <router-link to="my">
      <div id="top">
        <img src="../../assets/img/back.png">
        <p>我的优惠</p>
      </div>
    </router-link>
    <div id="title1">
      <p @click="redpak()">红包</p>
      <p @click="shopcoupon()">商家代金券</p>
    </div>
    <div id="title2">
      <span>有</span>
      <span>{{this.$store.state.hongbaolength}}</span>
      <span>个红包即将过期</span>
      <router-link to="/redpackexplain">
        <div id="tit2">
          <img src="../../assets/img/question.png" alt>
          <p>红包说明</p>
        </div>
      </router-link>
      <ul>
        <li :key="i" v-for="(v,i) in datas">
          <div id="center">
            <div id="centerleft">
              <p>￥</p>
              <p>{{v.amount.toFixed(1)}}</p>
              <p>{{v.description_map.sum_condition}}</p>
            </div>
            <div id="centercenter">
              <p>{{v.name}}</p>
              <p>{{v.description_map.validity_periods}}</p>
              <p>{{v.description_map.phone}}</p>
            </div>
            <div id="centerright">
              <p>{{v.description_map.validity_delta}}</p>
            </div>
          </div>
        </li>
      </ul>
      <div id="xianpin">
        <p>限品类:快餐便当,特色菜系,小吃夜宵,甜品饮品,异国料理</p>
      </div>
    </div>
    <router-link to="/historyhongbao">
    <div id="bottom2">
      <p>查看历史红包</p>
      <img src="../../assets/img/right.png" alt="">
    </div>
    </router-link>
    <div id="bottom">
      <!-- converthongbao -->
      <router-link to="/converthongbao"><p>兑换红包</p></router-link>
      <router-link to="/recommendencourage"><p>推荐有奖</p></router-link>
    </div>
    
    
  </div>
</template>
<script >
export default {
  name: "preference",
  data() {
    return {
      datas: "",
      user_id: 1
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    redpak() {
      this.$router.push({
        name: "preference"
      });
    },
    shopcoupon() {
      this.$router.push({
        name: "shopcoupon"
      });
    },

    getdata() {
      const api =
        "https://elm.cangdu.org/promotion/v2/users/" +
        this.user_id +
        "/hongbaos?limit=20&offset=0";
      if(this.$store.state.username){
        this.$http({
        url: api,
        methods: "get",
        data: {}
      }).then(res => {
        this.datas = res.data;
        console.log(this.datas);
        this.$store.commit("getlength",this.datas.length);
        console.log(this.datas.length)
      });
      }
    }
  }
};
</script>

<style scoped >
#wrap {
  width: 3.75rem;
  height: 100vh;
  background-color: rgb(245, 245, 245);
  position: relative;
  
}
#top {
  width: 3.75rem;
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
#title1 {
  /* margin-top: 0.55rem; */
  padding-top: 0.55rem;
  width: 3.75rem;
  height: 0.45rem;
  background-color: white;
  font-size: 0.18rem;
  position: relative;
  
}
#title1 p:nth-child(1) {
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
  color: rgb(49, 144, 232);
  padding-bottom: 0.02rem;
  border-bottom: 0.02rem solid rgb(49, 144, 232);
}
#title1 p:nth-child(2) {
  position: absolute;
  right: 0.45rem;
  top: 0.6rem;
}
#title2 {
  width: 3.75rem;
  height: 0.35rem;
  /* border: 1px solid aqua; */
  line-height: 0.35rem;
  font-size: 0.15rem;
  position: relative;
}
#title2 span:nth-child(2) {
  color: red;
}
#tit2 {
  height: 0.35rem;
  line-height: 0.35rem;
  position: absolute;
  right: 0.25rem;
  top: 0;
}
#tit2 img:nth-child(1) {
  width: 0.15rem;
}
#tit2 p:nth-child(2) {
  font-size: 0.12rem;
  display: inline;
}
#center {
  background-color: white;
  width: 3.75rem;
  height: 0.85rem;
  border-top: 1px solid red;
  display: flex;
  margin-top: 0.1rem;
}
#centerleft {
  width: 1rem;
  height: 0.85rem;
  /* border: 1px solid blue; */
  position: relative;
}
#centerleft p:nth-child(1) {
  color: red;
  font-size: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
}
#centerleft p:nth-child(2) {
  color: red;
  font-size: 0.3rem;
  position: absolute;
  left: 0.28rem;
  top: 0.2rem;
}
#centerleft p:nth-child(3) {
  color: rgb(181, 181, 181);
  font-size: 0.05rem;
  position: absolute;
  left: 0.1rem;
  top: 0.5rem;
}
#centercenter {
  width: 2.2rem;
  /* border: 1px solid gold; */
  position: relative;
}
#centercenter p:nth-child(1) {
  color: rgb(102, 102, 102);
  font-size:0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#centercenter p:nth-child(2) {
  color: rgb(172, 172, 172);
  font-size: 0.1rem;
  position: absolute;
  left: 0.1rem;
  top: 0.35rem;
}
#centercenter p:nth-child(3) {
  color: rgb(172, 172, 172);
  font-size: 0.01rem;
  position: absolute;
  left: 0.1rem;
  top: 0.55rem;
}
#centerright {
  width: 0.75rem;
  /* border: 1px solid gold; */
  position: relative;
}
#centerright p {
  font-size: 0.18rem;
  color: red;
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
}
#xianpin {
  margin-top: 0.2rem;
  margin-left: 0.4rem;
  font-size: 0.8em;
  color: rgb(153, 153, 153);
}
#bottom2 p{
  color: rgb(153, 153, 153);
  position: absolute;
  left: 1.05rem;
  bottom: 1.2rem;
  font-size: 0.2rem;
}
#bottom2 img{
  width: 0.1rem;
  position: absolute;
  left: 2.34rem;
  bottom: 1.26rem;
}
#bottom{
  width: 3.75rem;
  height: 0.45rem;
  background-color: white;
  line-height: 0.45rem;
  font-size: 0.18rem;
  text-align: center;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
}
#bottom p:nth-child(1){
  width: 1.85rem;
  height: 0.45rem;
  border: 0.01rem solid rgb(245, 245, 245);
  color: rgb(85, 85, 85);
  
}
#bottom p:nth-child(2){
  width: 1.85rem;
  height: 0.45rem;
  border: 0.01rem solid gainsboro;
  color: rgb(85, 85, 85);
}
</style>

<template>
  <!-- 我的优惠 -->
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/img/back.png">
      <p>我的优惠</p>
    </div>
    <div id="title1">
      <p @click="redpak()">红包</p>
      <p @click="shopcoupon()">商家代金券</p>
    </div>
    <div id="title2">
        <router-link to="/shopcouponexplain">
          <div id="tit2">
            <img src="../../assets/img/question.png" alt="">
            <p>商家代金券说明</p>
        </div>
        </router-link>
        <div id="content">
            <img src="../../assets/img/wufa.png" alt="">
            <p>无法使用代金券</p>
            <p>非客户端或客户端版本过低</p>
            <router-link to="/download">
                <button>下载或升级客户端</button>
            </router-link>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopcoupon",
  data() {
    return {};
  },
  methods: {
    redpak(){
      this.$router.push({
        name:"preference"
      })
    },
    shopcoupon(){
      this.$router.push({
        name:"shopcoupon"
      })
    },
    //返回上一级
    back() {
      this.$router.back();
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
#title1{
  padding-top: 0.55rem;
  width: 3.75rem;
  height: 0.45rem;
  background-color: white;
  font-size: 0.18rem;
  position: relative;
}
#title1 p:nth-child(1){
  position: absolute;
  left: 0.55rem;
  top: 0.59rem; 
}
#title1 p:nth-child(2){
  position: absolute;
  right: 0.55rem;
  top: 0.59rem;
  color: rgb(49, 144, 232);
  padding-bottom: 0.02rem;
  border-bottom: 0.02rem solid rgb(49, 144, 232);
}
#title2{
    width: 3.75rem;
    height: 0.35rem;
    /* border: 1px solid aqua; */
    line-height: 0.35rem;
    font-size: 0.15rem;
    position: relative;
}
#tit2{
    height: 0.35rem;
    line-height: 0.35rem;
    position: absolute;
    right: 0.25rem;
    top: 0;
}
#tit2 img:nth-child(1){
    width: 0.15rem;
}
#tit2 p:nth-child(2){
  color: rgb(49, 144, 232);
    font-size: 0.12rem;
    display: inline;
}
#content {
    position: relative;
}
#content img{
    width: 0.75rem;
    position: absolute;
    left: 1.45rem;
    top: 1.35rem;
}
#content p:nth-child(2){
  color: rgb(102, 102, 102);
    font-size: 0.16rem;
    position: absolute;
    left: 1.28rem;
    top: 2.2rem;
}
#content p:nth-child(3){
    font-size: 0.125rem;
    color: gray;
    position: absolute;
    left: 1.05rem;
    top: 2.48rem;
}
#content button{
    width: 1.5rem;
    height: 0.45rem;
    background-color: rgb(89, 209, 118);
    color: white;
    font-size: 0.15rem;
    position: absolute;
    left: 1.05rem;
    top: 2.85rem;
    border-radius: 0.08rem;
}
</style>

<template>
  <div id="wrap">
    <div id="top">
      <img @click="receipt()" src="../../assets/img/back.png">
      <p>搜索地址</p>
    </div>
    <div id="inps">
      <input class="inp" v-model="keyword" type="text" placeholder="请输入小区/写字楼/学校等">
      <button @click="confirm()">确认</button>
    </div>
    <div id="tex1">
      <p>为了满足商家的送餐需求,建议您从列表中选择地址</p>
    </div>
    <div v-if="zhanshi">
      <span id="span2">找不到地址?</span>
      <span id="span3">请尝试输入小区, 写字楼或者学校名</span>
      <span id="span4">详情地址 (如门牌号) 可稍后输入哦。</span>
    </div>
    <ul>
      <li class="texs" :key="i" v-for="(v,i) in datas">
        <p @click="transfer(v)">{{v.name}}</p>
        <p>{{v.address}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "lookaddress",
  data() {
    return {
      datas: "",
      keyword: "",
      zhanshi: true,
    };
  },

  methods: {
    //接口文档  3. https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search
    confirm() {
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.$store.state.cityid1 +
        "&keyword=" +
        this.keyword +
        "&type=search";
      if (this.keyword == "") {
        return;
      } else {
        this.$http({
          url: api,
          methods: "get",
          data: {}
        }).then(res => {
          this.datas = res.data;
          console.log(this.datas);
          if (this.datas != "") {
            this.zhanshi = false;
          } else {
            this.zhanshi = true;
          }
        });
      }
    },
    // transfer    传值
    transfer(v) {
      this.$router.push({
        name: "newaddress",
        query: {
          lookaddress: v.name
        }
      });
    },
    // 返回到编辑地址
    receipt() {
      this.$router.push({
        name: "newaddress"
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
  position: relative;
  background-color: rgb(242, 242, 242);
}
#top {
  width: 3.75rem;
  height: 0.45rem;
  background-color: rgb(49, 144, 232);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
#top img {
  height: 0.2rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p:nth-child(2) {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#inps {
  background-color: white;
  padding: 0.1rem 0;
  padding-top: 0.42rem;
  position: relative;
}
.inp {
  font-size: 0.15rem;
  margin-top: 0.15rem;
  width: 2.65rem;
  height: 0.38rem;
  margin-left: 0.12rem;
  background-color: rgb(242, 242, 242);
  border: 0.01rem solid gainsboro;
  border-radius: 0.08rem;
  padding-left: 0.1rem;
}
#inps button:nth-child(2) {
  width: 0.68rem;
  height: 0.45rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.15rem;
  color: white;
  border: 0.01rem solid gainsboro;
  position: absolute;
  right: 0.1rem;
  top: 0.54rem;
  border-radius: 0.08rem;
}
#tex1 {
  margin-top: 0.15rem;
  width: 3.75rem;
  height: 0.25rem;
  background-color: rgb(255, 246, 228);
  font-size: 0.14rem;
  line-height: 0.25rem;
  color: orange;
  margin-bottom: 0.1rem;
}
#tex1 p:nth-child(1) {
  margin-left: 0.18rem;
}
.texs {
  width: 3.74rem;
  background-color: #f2f2f2;
  border-bottom: 0.01rem solid gainsboro;
}
.texs p:nth-child(1) {
  font-size: 0.14rem;
  width: 3.74rem;
}
.texs p:nth-child(2) {
  display: inline-block;
  width: 3.1rem;
  /* border: 1px solid rebeccapurple; */
  font-size: 0.14rem;
  width: 3.74rem;
}

#span1 {
  display: inline-block;
  width: 3.75rem;
  height: 0.3rem;
  background-color: rgb(255, 246, 228);
  line-height: 0.3rem;
  text-align: center;
  color: rgb(255, 136, 63);
  font-size: 0.15rem;
}
#span2 {
  position: absolute;
  top: 2.9rem;
  left: 1.35rem;
  font-size: 0.16rem;
  color: rgb(167, 167, 167);
}
#span3 {
  position: absolute;
  top: 3.25rem;
  left: 0.65rem;
  font-size: 0.16rem;
  color: rgb(167, 167, 167);
}
#span4 {
  position: absolute;
  top: 3.6rem;
  left: 0.5rem;
  font-size: 0.16rem;
  color: rgb(167, 167, 167);
}
</style>

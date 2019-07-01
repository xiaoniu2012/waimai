<template>
  <div id="wrap">
    <div id="top">
      <img @click="returnzhxx()" src="../../assets/img/back.png">
      <p>编辑地址</p>
      <!-- <p @click="shanchu()">{{msg}}</p> -->
      <div id="text1">
        <p @click="changetex()" v-if="show">编辑</p>
        <p @click="changetex()" v-else>完成</p>
      </div>
    </div>
    <!-- 新增的地址 -->
    <ul id="ul">
      <li class="texs" :key="i" v-for="(v,i) in jieshou">
        <p>{{v.name}}</p>
        <p>{{v.phone}}</p>
        <p @click="delect(i)" v-show="show2">×</p>
        <!-- <p @click="delect(i)" v-show="buer==false">×</p> -->
      </li>
    </ul>
    <div id="address" @click="jump()">
      <p>新增地址</p>
      <img src="../../assets/img/right.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "receiptaddress",
  data() {
    return {
      name: "",
      phone: "",
      jieshou: [],
      show: true,
      show2: false
      // msg:"编辑",
      // buer:true,
    };
  },
  created() {
    this.receivenewadd();
  },
  methods: {
    back() {
      this.$router.back();
    },
    jump() {
      this.$router.push({
        name: "newaddress"
      });
    },
    returnzhxx() {
      this.$router.push({
        name: "zhxx"
      });
    },
    //接收增加地址的用户名和手机号
    receivenewadd() {
      const api =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userid +
        "/addresses";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true,
        data: {}
      }).then(res => {
        console.log(res.data);
        this.jieshou = res.data;
        this.jieshou.reverse();
        this.address_id = res.data;

        this.$router.push({});
      });
    },

    //接收增加地址的用户名和手机号
    delect(i) {
      const api =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userid +
        "/addresses/" +
        this.address_id[i].id;
      this.$http({
        url: api,
        method: "DELETE",
        withCredentials: true
      }).then(res => {
        console.log(res);
        //删除节点
        this.jieshou.splice(i, 1);
      });
    },
    changetex() {
      this.show = !this.show;
      this.show2 = !this.show2;
    }
    // shanchu(){
    //   this.buer=!this.buer;
    //   if(buer==false){
    //     this.msg="完成"
    //   }
    //   else{
    //     this.msg="编辑"
    //   }

    // }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  height: 100vh;
  background-color: #f2f2f2;
  position: relative;
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
  height: 0.18rem;
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
#top p:nth-child(3) {
  font-size: 0.18rem;
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0.15rem;
}
#address {
  color: black;
  width: 3.75rem;
  height: 0.45rem;
  line-height: 0.45rem;
  padding-top: 0.18rem;
  position: relative;
}
#address p:nth-child(1) {
  width: 3.61rem;
  height: 0.45rem;
  font-size: 0.18rem;
  background-color: white;
  border: 0.01rem solid rgb(216, 216, 216);
  padding-left: 0.1rem;
}
#address img:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  right: 0.1rem;
  top: 0.32rem;
}
.texs {
  width: 3.74rem;
  background-color: white;
  border-bottom: 0.01rem solid gainsboro;
  position: relative;
}
.texs p:nth-child(1) {
  font-size: 0.14rem;
  width: 3.74rem;
  padding-left: 0.1rem;
}
.texs p:nth-child(2) {
  display: inline-block;
  width: 3.1rem;
  /* border: 1px solid rebeccapurple; */
  font-size: 0.14rem;
  padding-left: 0.1rem;
  width: 3.74rem;
}
.texs p:nth-child(3) {
  color: rgb(156, 156, 156);
  font-size: 0.26rem;
  position: absolute;
  right: 0.12rem;
  top: -0.12rem;
}
#text1 {
  color: white;
  font-size: 0.18rem;
  padding-left: 3.2rem;
  padding-top: 0.1rem;
}
#ul {
  padding-top: 0.58rem;
}
</style>

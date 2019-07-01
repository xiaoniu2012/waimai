<template>
  <div id="wrap">
    <div id="top">
      <img @click="back()" src="../../assets/img/back.png">
      <p>新增地址</p>
    </div>
    <div id="inps">
      <input v-model="name" class="inp" type="text" placeholder="请输入你的姓名">
      <input v-model="address" @click="jump()" class="inp" type="text" placeholder="小区/写字楼/学校等">

      <input @input="event1" v-model="address_detail" class="inp" type="text" :style="{border:color1}" placeholder="请填写详细送餐地址">
      <p class="tex" v-show="datatex1">{{tex1}}</p>

      <input @input="event2" v-model="phone" class="inp" type="text" :style="{border:color2}" placeholder="请填写能够联系到您的手机号">
      <p class="tex"  v-show="datatex2">{{tex2}}</p>

      <input @input="event3" v-model="phone_bk" class="inp" type="text" placeholder="备用电话(选填)">
      <p class="tex"  v-show="datatex3">{{tex3}}</p>
    </div>
    <div>
      <button id="add" @click="addaddress()">新增地址</button>
    </div>
    <!-- 弹框1 -->
    <div class="frame1 animated heartBeat 0.4s" v-if="outshow1">
      <img src="../../assets/img/pipe.png" alt>
      <p>地址信息有误</p>
      <div id="sure" @click="falsetool1()">
        <p>确认</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newaddress",
  data() {
    return {
      name: "",
      address: "",
      address_detail: "",
      phone: "",
      phone_bk: "",
      
      // 弹窗数据
      outshow1: false,


      // 正则用到的数据
      tex1:"",
      color1:"0.01rem solid rgb(224,224,224)",
      datatex1:false,
      tex2:"",
      color2:"0.01rem solid rgb(224,224,224)",
      datatex2:false,
      tex3:"",
      datatex3:false,
    };
  },
  created() {
    this.receive();
  },
  methods: {
    jump() {
      this.$router.push({
        name: "lookaddress"
      });
    },
    //接收查找到的地址
    receive() {
      this.address = this.$route.query.lookaddress;
    },
    // 增加地址
    addaddress() {
      const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.userid+"/addresses";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {         
          name: this.name,
          address: this.address,
          address_detail: this.address_detail,
          phone: this.phone,
          phone_bk: this.phone_bk,

          user_id: this.user_id,
          geohash:this.$store.state.jingdu,
          tag: "0",
          sex: 1,
          tag_type: 2
        }
      }).then(res => {
        console.log(res);
        
        if(this.address_detail==""){
          this.outshow1=true
        }
        else{
          this.$router.push({
          name: "receiptaddress",
        });
        }
      });
    },
    back() {
      this.$router.push({
        name:"receiptaddress"
      })
    },
    // 正则监听事件1
    event1(){
      if(/^\w{3}/.test(this.address_detail)){
        this.color1="0.01rem solid rgb(224,224,224)"
        this.tex1=""
      }
      else if(/^\w{0}$/.test(this.address_detail)){
        this.datatex1="true";
        this.color1="0.01rem solid red"
        this.tex1="请详细填写送餐地址"
      }
      else{
        this.datatex1="true";
        this.color1="0.01rem solid red"
        this.tex1="送餐地址太短了,不能辨识"
      }
    },
    event2(){
      if(/^1[3456789]\d{9}$/.test(this.phone)){
        this.color2="0.01rem solid rgb(224,224,224)"
        this.tex2=""
      }
      else if(/^\w{0}$/.test(this.phone)){
        this.datatex2="true";
        this.color2="0.01rem solid red"
        this.tex2="手机号不能为空"
      }
      else{
        this.datatex2="true";
        this.color2="0.01rem solid red"
        
        this.tex2="请输入正确的手机号"
      }
    },
    event3(){
      if(/^1[3456789]\d{9}$/.test(this.phone_bk)){
        this.tex3=""
      }
      else if(/^\w{0}$/.test(this.phone_bk)){
        this.datatex3="true";
        this.tex3=""
      }
      else{
        this.datatex3="true";
        this.tex3="请输入正确的手机号"
      }
    },

    falsetool1() {
      this.outshow1 = false;
    },
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  height: 100vh;
  position: relative;
  background-color: #f2f2f2;
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
  height: 0.21rem;
  position: absolute;
  left: 5%;
  top: 55%;
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
  padding-top: 0.55rem;
  background-color: white;
  padding-bottom: 0.1rem;
}
.inp {
  font-size: 0.15rem;
  margin-top: 0.15rem;
  width: 3.53rem;
  height: 0.34rem;
  margin-left: 0.1rem;
  background-color: #f2f2f2;
  border: 0.01rem solid gainsboro;
}
#add {
  font-size: 0.15rem;
  color: white;
  margin-top: 0.15rem;
  width: 3.53rem;
  height: 0.34rem;
  margin-left: 0.1rem;
  background-color: rgb(76, 217, 100);
  border: 0.01rem solid gainsboro;
}
.frame1 {
  width: 2.8rem;
  height: 2rem;
  background-color: white;
  border: 1px solid gray;
  position: absolute;
  left: 0.45rem;
  top: 2rem;
  /* animation: jello 100s; */
}
.frame1 img {
  width: 1rem;
  position: absolute;
  left: 0.85rem;
  top: 0.05rem;
}
.frame1 p:nth-child(2) {
  font-size: 0.16rem;
  position: absolute;
  left: 0.88rem;
  top: 1.1rem;
}
#sure {
  width: 2.8rem;
  height: 0.45rem;
  background-color: rgb(76, 217, 100);
  color: white;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.25rem;
  position: absolute;
  left: 0;
  bottom: 0;
}

/* 正则 用到的样式 */
.tex{
  width: 3.55rem;
  margin-left:0.1rem; 
  font-size: 0.1rem;
  /* border: 0.01rem solid red; */
  padding: 0.01rem 0;
  color: red;
}
</style>


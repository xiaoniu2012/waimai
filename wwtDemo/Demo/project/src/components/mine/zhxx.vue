<template>
  <div id="wrap">
    <div id="toubu">
      <router-link to="/my">
        <img id="tp" src="../../assets/img/zuojian.png" alt>
      </router-link>

      <p>账户信息</p>
    </div>
    <div id="touxiang">
      <p>头像</p>

      <el-upload
        id="elimg"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img id="elimg1"  :src="imageUrl" class="avatar">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <img src="../../assets/img/youjian.png" alt>
      
    </div>
    <router-link to="/reviseuesername">
      <div id="yhm">
        <p>用户名</p>
        <div id="userid">
          <p>{{this.$store.state.username}}</p>
        </div>
        <img class="ddtp" src="../../assets/img/youjian.png" alt>
      </div>
    </router-link>
    <router-link to="/receiptaddress">
      <div id="shdz">
        <p>收货地址</p>
        <img class="ddtp" src="../../assets/img/youjian.png" alt>
      </div>
    </router-link>

    <p class="zhbd">账号绑定</p>

    <div id="shouji" @click="tool1()">
      <img src="../../assets/img/shouji2.png" alt>
      <p>手机</p>
      <img class="ddtp" src="../../assets/img/youjian.png" alt>
    </div>
    <!-- 弹框1 -->
    <div class="frame1 animated heartBeat 0.4s" v-if="outshow1">
      <img src="../../assets/img/pipe.png" alt>
      <p>请在手机APP中设置</p>
      <div id="sure" @click="falsetool1()">
        <p>确认</p>
      </div>
    </div>

    <p class="zhbd">安全设置</p>
    <router-link to="/reset">
      <div id="dlmm">
        <p>登陆密码</p>
        <p>修改</p>
        <img class="ddtp" src="../../assets/img/youjian.png" alt>
      </div>
    </router-link>
    <button @click="tool()" class="tcdl">退出登录</button>
    <!-- 弹框2 -->
    <div class="frame animated heartBeat 0.4s" v-show="outshow">
      <img src="../../assets/img/pipe.png" alt>
      <p>是否退出登录</p>
      <p @click="falsetool()">再等等</p>
      <p @click="leave()">退出登录</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "zhxx",
  data() {
    return {
      outshow: false,
      outshow1: false,
      imageUrl: ""
    };
  },
  computed:{
    // imageUrl(){
    //   return this.$store.state.img;
    // },
    ...mapState(["imageUrl"])

  },
  created() {
      // this.imageUrl=this.$store.state.img
      this.getSrc();
  },

  methods: {
    getSrc(){
            const api = "https://elm.cangdu.org/v1/user/"+this.$store.state.userid
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                this.imageUrl="https://elm.cangdu.org/img/"+res.data.avatar;
                console.log(this.imageUrl);
            })
        },
    back() {
      this.$condition.back();
    },
    tool() {
      this.outshow = true;
    },
    tool1() {
      this.outshow1 = true;
    },
    falsetool() {
      this.outshow = false;
    },
    falsetool1() {
      this.outshow1 = false;
    },
    leave() {
      this.$store.state.username = "",
      this.$store.commit("getlength",0);
      this.$store.commit("initImageUrl");
      this.$store.commit('xiugai',true)

      // this.$store.state.imageUrl = "",
        this.$router.push({
          name: "my"
        });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      // this.$store.commit("getimg",this.imageUrl)
    
      // this.$nextTick(function (){//等所有DOM元素加载完成时触发
          // this.$store.commit("getavatar",this.imageUrl);
          console.log(file, res)
      //立刻显示
      // this.imageUrl = URL.createObjectURL(file.raw);


      var file = file.raw;
      var formdata1 = new FormData(); // 创建form对象
      formdata1.append("file", file, file.name); // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('img',file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      this.axios.post('https://elm.cangdu.org/eus/v1/users/'+this.$store.state.userid+'/avatar', formdata1, config).then(response => {
        //这里的/xapi/upimage为接口
        console.log(response.data);
        console.log(this.$store.state.userid)
      });

    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  computed: {
    ...mapState(["username"])
  }
};
</script>
<style scoped>
#wrap{
  width: 3.75rem;
  height: 100vh;
  background-color: #f2f2f2;
}
#toubu {
  height: 0.5rem;
  background-color: rgb(49, 144, 232);
  overflow: hidden;
}
#tp {
  width: 0.3rem;
  float: left;
  margin-top: 0.1rem;
}
#toubu > p {
  color: white;
  font-size: 0.2rem;
  margin-left: 1.2rem;
  float: left;
  margin-top: 0.1rem;
}
#touxiang {
  width: 3.75rem;
  height: 0.65rem;
  background-color: white;
  position: relative;
  line-height: 0.65rem;
}
#touxiang p {
  font-size: 0.14rem;
  position: absolute;
  left: 0.1rem;
  top: 0;
}
#elimg {
  text-align: center;
  width: 0.45rem;
  height: 0.45rem;
  line-height: 0.45rem;
  position: absolute;
  right: 0.55rem;
  top: 0.1rem;
}
#elimg1 {
  border-radius: 0.4rem;
  text-align: center;
  width: 0.45rem;
  height: 0.45rem;
  /* line-height: 0.35rem; */
  position: absolute;
  right: 0;
  top: 0rem;
}
#touxiang img:nth-child(3) {
  float: right;
  width: 0.1rem;
  margin-top: 0.25rem;
  margin-right: 0.18rem;
}
#yhm {
  width: 3.75rem;
  height: 0.5rem;
  /* border: 1px solid gainsboro; */
  position: relative;
  line-height: 0.5rem;
}
#yhm>p:nth-child(1) {
  color: rgb(51, 51, 51);
  font-size: 0.18rem;
  position: absolute;
  left: 0.1rem;
  top: 0;
}
#userid {
  color: gray;
  position: absolute;
  right: 0.7rem;
  top: 0;
}
#userid  p{
  font-size: 0.15rem;
  float: right;
}
#shdz {
  height: 0.5rem;
  background-color: white;
  overflow: hidden;
  border-bottom: 1px solid gainsboro;
}
#shdz > p {
  margin-top: 0.15rem;
  float: left;
  font-size: 0.16rem;
  margin-left: 0.1rem;
  color: rgb(51, 51, 51)
}
.zhbd {
  padding: 0.1rem;
  color: grey;
  border-bottom: 1px solid gainsboro;
}
#shouji {
  height: 0.5rem;
  background-color: white;
  overflow: hidden;
  border-bottom: 1px solid gainsboro;
}
#shouji > img:nth-child(1) {
  width: 0.2rem;
  float: left;
  margin: 0.15rem;
}
#shouji > p:nth-child(2) {
  font-size: 0.14rem;
  float: left;
  margin-top: 0.14rem;
  margin-left: -0.1rem;
  color: rgb(51, 51, 51)
}
#dlmm {
  height: 0.5rem;
  background-color: white;
  overflow: hidden;
  border-bottom: 1px solid gainsboro;
}
#dlmm > p:nth-child(1) {
  font-size: 0.16rem;
  float: left;
  margin-top: 0.12rem;
  margin-left: 0.1rem;
  color: rgb(51, 51, 51)
}
#dlmm > p:nth-child(2) {
  font-size: 0.18rem;
  float: left;
  margin-top: 0.1rem;
  margin-left: 2rem;
  color: gray;
}
.tcdl {
  background-color: rgb(216, 88, 74);
  width: 3.55rem;
  margin-left: 0.1rem;
  border-radius: 0.08rem;
  height: 0.38rem;
  margin-top: 0.3rem;
  color: white;
  font-size: 0.14rem;
}
/* 弹框样式4 */
.frame,
.frame1 {
  width: 2.75rem;
  height: 2.25rem;
  background-color: white;
  border-radius: 0.1rem;
  position: absolute;
  left: 0.5rem;
  top: 1.25rem;
  /* animation: jello 100s; */
}
.frame img,
.frame1 img {
  width: 1.2rem;
  position: absolute;
  left: 0.75rem;
  top: 0.05rem;
}
.frame p:nth-child(2) {
  font-size: 0.25rem;
  position: absolute;
  left: 0.65rem;
  top: 1.2rem;
}
.frame p:nth-child(3) {
  width: 0.95rem;
  height: 0.35rem;
  text-align: center;
  line-height: 0.35rem;
  background-color: gray;
  color: white;
  font-size: 0.2rem;
  position: absolute;
  left: 0.2rem;
  top: 1.8rem;
  border-radius: 5%;
}
.frame p:nth-child(4) {
  width: 0.95rem;
  height: 0.35rem;
  text-align: center;
  line-height: 0.35rem;
  background-color: red;
  color: white;
  font-size: 0.2rem;
  position: absolute;
  left: 1.35rem;
  top: 1.8rem;
  border-radius: 5%;
}
.frame1 p:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.45rem;
  top: 1.3rem;
}
#sure {
  width: 2.75rem;
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
.ddtp {
  float: right;
  width: 0.1rem;
  margin-top: 0.16rem;
  margin-right: 0.18rem;
}
</style>

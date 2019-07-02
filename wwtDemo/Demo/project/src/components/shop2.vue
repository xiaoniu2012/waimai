<template>
  <div>
    <p id="top12" @click.stop="back1()">
      <img src="../assets/img/back.png" alt>
      {{didian}}
    </p>
    <div id="center12">
      <div class="top_b">
        <!-- 分类数据列表 -->
        <el-cascader
          placeholder="分类"
          class="fenlei"
          @change="handleChange1"
          :options="fenleiOp"
          :props="fenleiParams"
          clearable
        ></el-cascader>

        <!-- 排序数据列表 -->
        <el-cascader
          placeholder="排序"
          class="paixu"
          @change="handleChange2"
          :options="paixuoptions"
          clearable
        ></el-cascader>

        <!-- 筛选数据列表 -->
        <el-cascader
          placeholder="筛选"
          class="shaixuan"
          :options="fenleiOp"
          :props="fenleiParams"
          clearable
        ></el-cascader>
      </div>
    </div>
    <div id="xia" @scroll="move1()">
      <div id="bottom">
        <div id="bottom1">
          <img src="../assets/img/weibiaoti2fuzhi14.png" alt>
          <div>附近商家</div>
        </div>

        <div :key="i" v-for="(v,i) in data2" id="bottom2" @click="quid(v)" >
          <router-link
            :to="'/shangjia?cityId=' + v.name + '&image1=' + v.image_path +'&image2=' + v.id +'&fei='+ v.float_delivery_fee"
          >
            <div id="tupain">
              <img :src="'https://elm.cangdu.org/img/'+v.image_path">
            </div>
            <div id="left">
              <div id="pai">品牌</div>
              <div id="ming">{{v.name}}</div>
              <div id="ping" v-if="v.rating">
                <el-rate v-model="v.rating" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                <span v-if="v.rating">{{v.rating}}</span>
              </div>
              <div id="sale">
                <span>月售</span>
                {{v.recent_order_num}}
                <span>单</span>
              </div>
              <div id="song">
                <div id="qifei">
                  <span>￥</span>
                  {{v.float_minimum_order_amount}}
                  <span>起送/</span>
                </div>
                <div id="peifei">
                  <span>配送费约￥</span>
                  {{v.float_delivery_fee}}
                </div>
              </div>
            </div>
          </router-link>


          <div id="right" v-if="v.supports">
            <div id="top1" v-if="v.supports[0]">
              {{v.supports[0].icon_name}}
        <span v-if="v.supports[1]">{{v.supports[1].icon_name}}</span>
            </div>
            <div id="center1">
              <div id="a1">蜂鸟专送</div>
              <div id="a2">准时送达</div>
            </div>
            <div id="bt">
              <div id="distance">{{v.distance}}</div>
              <div id="sptm">
                <span>/</span>
                {{v.order_lead_time}}
              </div>
            </div>
          </div>

          
        </div>
        
      </div>
    </div>
    
    <div id="fan" @click="fanhui()">
      <img src="../assets/img/juli.png">
    </div>
  </div>
</template>
<script>
import { Loading } from "element-ui";
var loadingInstance;
export default {
  name: "shop2",
  data() {
    return {
      msg: "",
      didian: "",
      x1: "",
      y1: "",
       fenid1:"",
       fenid2:"",
       namestring:"",
       datas:"",
      loading: true,
      one: require("../assets/img/up1.png"),
      two: require("../assets/img/up2.png"),
      data2: "",
      duo: 20,
      fenleiOp: [],
      fenleiParams: {
        label: "name",
        value: "id",
        children: "sub_categories"
      },
      paixuoptions: [
        {
          label: "起送价",
          value: "1"
        },
        {
          label: "配送速度",
          value: "2"
        },
        {
          label: "评分",
          value: "3"
        },
        {
          label: "智能排序",
          value: "4"
        },
        {
          label: "距离最近",
          value: "5"
        },
        {
          label: "销量最高",
          value: "6"
        }
      ]
    };
  },
  created() {
    this.didian = this.$route.query.cityId;
    var j1 = this.$store.state.jingdu.split(",");
    this.x1 = j1[0];
    this.y1 = j1[1];
    this.allfen();
    this.allshop();
    loadingInstance = Loading.service({
      fullscreen: true,
      text: "拼命加载中",
      background: "gray"
    });
  },
  methods: {
    move1() {
      var con = document.getElementById("xia");
      if (con.scrollTop + con.clientHeight + 50 >= con.scrollHeight) {
        this.duo = this.duo + 10;
        this.x1 = parseFloat(this.x1) + 0.1;
        this.y1 = parseFloat(this.y1) + 0.1;
        this.allshop();
      }
    },
    fanhui() {
      var con = document.getElementById("xia");
      con.scrollTop = 0;
    },
    back1() {
      this.$router.push({name:"shop1"});
    },
    allfen() {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        this.msg = res.data;
        this.fenleiOp = res.data;
        console.log(this.fenleiOp);
      });
    },
    fenlei() {
      this.one = this.two;
    },
    quid(v) {
      this.$store.commit("canid", v.id);
    },
    allshop() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.x1 +
        "&longitude=" +
        this.y1 +
        "&order_by=" +
        this.$store.state.shopID +
        "&limit=" +
        this.duo;
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        this.data2 = res.data;
        loadingInstance.close();
      });
    },
    //获取排序下拉列表id
    handleChange2(value) {
      this.$store.commit("getshopID", value[0]);
      var j1 = this.$store.state.jingdu.split(",");
      this.x1 = j1[0];
      this.y1 = j1[1];
      this.allshop();
    },
    // 动态获得下拉列表的id
    handleChange1(value) {
      console.log(value);
      let a = value[0];
      let b = value[1];
      for (let i = 0; i < this.fenleiOp.length; i++) {
        if (a == this.fenleiOp[i].id) {
          this.fenid1 = this.fenleiOp[i].name;
          console.log(this.fenid1);
          for (let j = 0; j < this.fenleiOp[i].sub_categories.length; j++) {
            if (b == this.fenleiOp[i].sub_categories[j].id) {
              this.fenid2 = this.fenleiOp[i].sub_categories[j].name;
              console.log(this.fenid2);
            }
          }
        }
      }
       this.getfenleidatas();
      // 分类数据传值
      // this.$store.commit("getfenleiID", { a: this.fenid1, b: this.fenid2 });
    },
    getfenleidatas() {
        // 获取vuex中的全局资源
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.$store.state.latitude +
        "&longitude=" +
        this.$store.state.longitude;
      // 存储商品分类标志
      this.namestring =
        this.fenid1 + "/" + this.fenid2;
      // console.log(this.namestring);
      this.$http({
        url: api,
        method: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //res是请求返回的数据
        this.data2 = []; //先清空数组，不然值会累加
        if (res.data) {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].category == this.namestring) {
              // console.log("aaa");
              this.data2.push(res.data[i]);
              console.log(this.data2);
            }
          }
        }
      });
    }
  }
};
</script>
<style scoped>
#fan {
  width: 35px;
  height: 35px;
  border: 1px solid grey;
  border-radius: 50%;
  position: fixed;
  left: 300px;
  top: 570px;
  z-index: 2;
  background-color:blue;
}
#fan img {
  width: 100%;
  height: 100%;
}
.paixu {
  width: 120px;
}
.shaixuan {
  width: 120px;
}
.fenlei {
  width: 120px;
}
#bt {
  float: left;
  margin-left: 20px;
  margin-top: 5px;
}
#top1 {
  float: right;
  letter-spacing: 2px;
  margin-top: 5px;
}
#a1 {
  background-color: blue;
  border: 1px solid blue;
  border-radius: 2px;
}
#a2 {
  color: blue!important;
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid blue;
}
#center1 {
  float: right;
  width: 100px;
  margin-top: 10px;
}
#center1 div {
  float: left;
  color: white;
  font-size: 0.1rem;
}
#bt {
  float: left;
  margin-left: 20px;
  margin-top: 5px;
}
#right {
  float: right;
  height: 100%;
  width: 130px;
  margin-right: 10px;
  margin-top: -80px;
}
#left {
  float: left;
  width: 200px;
  /* border: 1px solid red; */
}
#song {
  float: left;
  margin-top: 6px;
  margin-left: -70px;
}
#qifei {
  float: left;
}
#sptm {
  float: left;
  color: blue;
  font-size: 0.1rem;
}
#distance {
  float: left;
  margin-left: -10px;
  font-size: 0.1rem;
}
#ping {
  float: left;
  height: 20px;
  width: 70px;
  color: red;
  margin-top: 3px;
  /* background-color:green; */
  overflow: hidden;
}
#ming {
  font-size: 0.17rem;
  font-weight: bold;
  margin-left: 5px;
  float: left;
  color: black;
  margin-top: -5px;
  width: 150px;
}
#pai {
  float: left;
  width: 30px;
  font-size: 0.13rem;
  color: black;
  font-weight: bold;
  background-color: gold;
  margin-left: 3px;
}
#tupain {
  width: 70px;
  height: 70px;
  /* background-color: green; */
  float: left;
}
#tupain img {
  width: 100%;
  height: 100%;
}
#sale {
  float: left;
  width: 120px;
  font-size: 0.1rem;
  margin-left: 3px;
  margin-top: 3px;
}
#peifei {
  float: left;
}
#bottom2 {
  width: 100%;
  height: 80px;
  float: left;
}
#bottom1 img {
  width: 27px;
  height: 27px;
  float: left;
}
#bottom1 div {
  font-size: 0.15rem;
  float: left;
  margin-top: 2px;
}
#bottom1 {
  float: left;
  width: 100%;
}
.bo3 {
  font-size: 0.1rem;
}
.bo2 img {
  width: 60px;
  height: 60px;
}
.bo1 {
  width: 25%;
  height: 50%;
  text-align: center;
  float: left;
}
#one,
#two {
  width: 100%;
  height: 100%;
  /* background-color: green; */
}
#lunbo {
  width: 100%;
  height: 100%;
}
#center {
  height: 200px;
  width: 100%;
  float: left;
}

#img1,
#img2 {
  width: 30px;
  height: 30px;
  float: left;
  margin-top: 10px;
}
#img2 {
  float: right;
  margin-top: -35px;
  margin-right: 10px;
}
#top {
  background-color: blue;
  height: 50px;
  color: white;
  font-size: 0.25rem;
  text-align: center;
  width: 100%;
  float: left;
}
#botttom {
  float: left;
}
#xia {
  width: 100%;
  height: 88vh;
  float: left;
  margin-top: 88px;
  background-color: white-space;
  overflow: scroll;
}
.one img {
  width: 25px;
  height: 25px;
}
#center12 {
  left: 0;
  height: 25px;
  position: fixed;
  top: 50px;
  display: flex;
  justify-content: space-around;
  direction: row;
  width: 3.75rem;
  font-size: 0.15rem;
}
#top12 img {
  float: left;
  height: 30px;
  margin-top: 10px;
  margin-left: 5px;
}
#top12 {
  height: 50px;
  background-color: blue;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  color: white;
  font-size: 0.25rem;
  width: 100%;
  font-weight: bold;
}
</style>
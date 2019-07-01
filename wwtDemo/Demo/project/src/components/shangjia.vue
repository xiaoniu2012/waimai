<template>
  <div>
    <div id="hello">
      <div id="top1">
        <div id="one">
          <img :src="'https://elm.cangdu.org/img/'+imagepath" alt />
        </div>
        <div id="right">
          <p class="right1">{{msg}}</p>
          <div id="gao">
            <span>公告：</span>
            {{gg}}
          </div>
        </div>
        <div id="right2">
          <router-link to="/canxiangqing">
            <img src="../assets/img/iconfontjiantou2.png" alt />
          </router-link>
        </div>
      </div>
      <div id="bottom1">
        <div class="pin" @click="xia()">
          <router-link to="/shangjia">商品</router-link>
          <div class="xian" v-if="show1"></div>
        </div>
        <div class="pin" @click="xia1()">
          <router-link to="/pingjia">评价</router-link>
          <div class="xian" v-if="show2"></div>
        </div>
        <router-view v-if="kou"></router-view>
      </div>
    </div>

    <div id="zhanshi">
      <div class="allcontent" v-if="show">
        <ul class="hotShangping" style="overflow-y:scroll;height:65vh">
          <li :key="i" v-for="(value,i) in food" class="lis1">
            <a :href="'#a'+ value.id" class="da" @click="chepi()">{{value.name}}</a>
            <span v-if="nums[i]">{{nums[i]}}</span>
          </li>
        </ul>
      </div>

      <ul class="hotdetial" style="overflow-y:scroll;height:74vh" id="gun">
        <li :key="i2" v-for="(value,i2) in food" class="lis2" :id="'a' +value.id">
          <p>
            <span>{{value.name}}</span>
            <span>{{value.description}}</span>
          </p>
          <div>
            <ul>
              <li :key="i3" v-for="(v,i3) in value.foods" class="man">
                <router-link
                  :to="'/foods?cityId=' + v.name + '&image1=' + v.image_path +'&miaoshu=' + v.description +'&rate=' + v.rating +'&pei=' + feiyong+'&qi='+v.specfoods[0].price"
                >
                  <img :src="'https://elm.cangdu.org/img/'+v.image_path" alt class="allfoodsImg" />
                  <p class="zi">{{v.name}}</p>
                  <p class="miao">{{v.description}}</p>
                  <p>
                    <span class="shou">月售{{v.month_sales}}份</span>
                    <span>好评率{{v.satisfy_rate}}%</span>
                  </p>
                  <span v-if="v.activity" class="de">{{v.activity.image_text}}</span>
                  <p class="qian">￥{{v.specfoods[0].price}}起</p>
                </router-link>
                <p v-if="v.specifications[0]" class="gege1">
                  <router-link
                    :to="'/guige?cityId=' + v.specifications[0].values[1]+'&yi='+v.specifications[0].values[0]+'&hao='+v.name+'&qibu='+v.specfoods[0].price"
                  >
                    <span class="guai">规格</span>
                  </router-link>
                </p>

                <p
                  v-if="!v.specifications[0]"
                  class="gege"
                  @click="tianjia(v.specfoods[0].price,v.name,i2,i3)"
                >+</p>
                <span class="snow" v-if="v.is_featured>0">{{v.is_featured}}</span>
                <p
                  v-if="v.is_featured>0"
                  class="s"
                  @click="jian(v.specfoods[0].price,v.name,i2,i3)"
                >-</p>
                <div id="yang"></div>
                <!-- 定义小球，点击谁让他回到谁的身边进行抛物线的移动 -->
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div id="alldian" v-show="jia">
      <div class="cargo" v-if="shopping && sk1.length>0">
        <p v-if="sk1.length>0 && shopping" class="pshop1">
          <span>购物车</span>
          <span @click="clearall(sk1)" class="clearall">清空</span>
        </p>
        <div class="cargoline" v-for="(y,z) in sk1" :key="z">
          <div>
            <span>{{y.name}}</span>
          </div>
          <div class="bug">
            <span v-if="y.specfoods.length==1 ">￥{{y.specfoods[0].price}}</span>
            <span v-if="y.specfoods.length>1 & elsesee">￥{{y.specfoods[0].price}}</span>
            <span v-if="y.specfoods.length>1 & ifsee">￥{{y.specfoods[1].price}}</span>
          </div>
          <span class="jiangou" @click.stop="dejian(y._id)">-</span>
          <span class="reduceadd">{{y.is_featured}}</span>
          <span class="jiagou" @click.stop="adjia(y._id)">+</span>
        </div>
      </div>
    </div>
    <div id="jiesuan">
      <img src="../assets/img/gouwuche.png" alt />
      <p class="yi" @click="alldian()">￥{{allmoney}}</p>
      <p class="er" @click="clall()">配送费￥5</p>
      <p id="zong" v-if="num>0">{{num}}</p>
      <router-link :to="'/dingdan?ming='+msg+'&pian='+imagepath">
        <p id="suan">{{qusong}}</p>
      </router-link>
    </div>
    <router-view></router-view>
    <div id="push" @click.stop="fanjia()">
      <img src="../assets/img/back.png" />
    </div>
     <div id="ball"></div>
  </div>
</template>
<script>
var qun=document.getElementsByClassName("da");
export default {
  name: "shangjia",
  data() {
    return {
      shu1: 0,
      msg: "你好我的世界",
      imagepath: "",
      yu: 13,
      di: "",
      shop: "",
      result: "",
      gg: "欢迎光临，用餐高峰请提前下单，谢谢",
      food: "",
      show: true,
      show1: true,
      show2: false,
      total: 0,
      y2: "",
      shopping: false,
      jia: false,
      xian: 0,
      foodname: "",
      foodprice: "",
      zongliang: 0,
      elsesee: true,
      ifsee: false,
      kou: true,
      allmoney: 0,
      qusong:"还差20起送"
    };
  },
  created() {
    this.msg = this.$route.query.cityId;
    this.imagepath = this.$route.query.image1;
    this.di = this.$route.query.image2;
    this.feiyong = this.$route.query.fei;
    this.allshop();
    this.allfood();
  },
  methods: {
    tianjia(v, k, a, b) {
      this.$store.commit("getindex", {
        a: a,
        b: b
      });
      this.$store.state.zongjia += v;
      //新的总价
      this.allmoney += v;
      console.log(this.$store.state.count1);
      this.$store.state.count1++;
      this.$store.state.arr1ming[this.$store.state.count1] = k;
      //所选加号下对应的名字
      this.$store.state.arr1jia[this.$store.state.count1] = v;
      //所选加号下的下标对应的价格
      this.shu1++;
      //  所选取的数量结果
      var $ball = document.getElementById("ball");
      var su = document.getElementsByClassName("gege");
      for (var i = 0; i < su.length; i++) {
        // window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
        su[i].onclick = function (evt) {
        $ball.style.top = evt.pageY + "px";
        $ball.style.left = evt.pageX + "px";
        $ball.style.transition = "left 0s, top 0s";
        setTimeout(() => {
          $ball.style.top = window.innerHeight - 38 + "px";
          $ball.style.left = "5px";
          $ball.style.transition = "left 1s linear, top 1s ease-in";
        }, 20);
        }
      }
      if(this.allmoney=20)
      {
         this.qusong="去结算";
         var yu=document.getElementById("suan");
              yu.style.backgroundColor="green";
      }
    },
    jian(v, k, a, b) {
      this.$store.commit("getdele", {
        a: a,
        b: b
      });
      this.$store.state.zongjia -= v;
      // 得到新的总价
      this.allmoney -= v;
      if (this.allmoney < 0) {
        this.allmoney = 0;
      }
    },
    chepi(){
      for(var i=0;i<qun.length;i++)
      {
         qun[i].style.backgroundColor="";
          qun[i].onclick=function()
          {
            this.style.backgroundColor="blue";
          }
      }
    },
    alldian() {
      this.foodname = this.$store.state.arr2;
      this.foodprice = this.$store.state.arr3;
      this.xian++;
      if (this.xian % 2 != 0) {
        this.jia = true;
      } else {
        this.jia = false;
      }
    },
    qingkong() {
      this.$store.state.arr2 = this.$store.state.kong;
      this.$store.state.arr3 = this.$store.state.kong;
      this.$store.state.zongjia = 0;
      this.foodname = "";
      this.foodprice = "";
      var nu1 = document.getElementsByClassName("n1");
      nu1[0].nodeValue = "";
      nu1[1].nodeValue = "";
      this.jia = false;
      this.allmoney = 0;
    },
    chuan(m) {
      console.log(v);
      this.$router.push({
        name: "guige",
        query: {
          zhi: m
        }
      });
    },
    fanjia() {
      this.$router.push({ name: "shop2" });
    },
    allshop() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        this.result = res.data;
        this.shop = this.result[this.di];
      });
    },
    allfood() {
      const api =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.di;
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        this.food = res.data;
        this.$store.commit("spspshuju", res.data);
        console.log(this.food);
      });
    },
    xia() {
      this.show1 = true;
      this.show2 = false;
      var reduce = document.getElementById("zhanshi");
      reduce.style.opacity = 1;
      this.kou = true;
    },
    xia1() {
      this.show1 = false;
      this.show2 = true;
      var reduce = document.getElementById("zhanshi");
      reduce.style.opacity = 0;
      reduce.style.height = 0;
      this.kou = false;
    },
    //点击购物车时显示所有订单
    clall() {
      this.shopping = !this.shopping;
    },
    adjia(a) {
      this.$store.commit("goujia", a);
    },
    dejian(b) {
      this.$store.commit("goujian", b);
    },
    clearall(s) {
      for (var i = 0; i < s.length; i++) {
        s[i].is_featured = 0;
        this.allmoney = 0;
      }
      this.$store.state.totalprice = 0;
      this.shopping = false;
      this.chaqian = 20;
    }
  },
  computed: {
    sk1() {
      var ak = [];
      for (let i = 0; i < this.$store.state.obj.length; i++) {
        for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
          if (this.$store.state.obj[i].foods[k].is_featured > 0) {
            ak.push(this.$store.state.obj[i].foods[k]);
          }
        }
      }
      return ak;
    },

    nums() {
      var arr = [];
      for (var i = 0; i < this.$store.state.obj.length; i++) {
        var a = 0;
        for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
          a += this.$store.state.obj[i].foods[k].is_featured;
        }
        // console.log(a);
        arr.push(a);
      }
      return arr;
    },
    // 购物车显示数量
    num() {
      var a = 0;
      for (var i = 0; i < this.$store.state.obj.length; i++) {
        for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
          a += this.$store.state.obj[i].foods[k].is_featured;
        }
      }
      return a;
    }
  }
};
</script>
<style scoped>
.guai {
  color: white;
}
.bug {
  background-color: white;
}
#push {
  width: 20px;
  height: 20px;
  position: fixed;
  left: 5px;
  top: 10px;
}
#push img {
  width: 100%;
  height: 100%;
}
.man {
  border: 1px solid lightgray;
  border-left: 0px solid black;
  border-right: 0px solid black;
}
.snow {
  font-size: 0.18rem;
  font-weight: bold;
  float: left;
  margin-left: 185px;
  margin-top: -30px;
}
#hello {
  position: fixed;
  left: 0;
  top: 0;
}
#zong {
  width: 25px;
  height: 25px;
  border: 1px solid red;
  background-color: red;
  border-radius: 50%;
  font-size: 0.1rem;
  color: white;
  position: fixed;
  left: 35px;
  top: 590px;
  z-index: 3;
  text-align: center;
  line-height: 25px;
}
.jiajian {
  font-size: 0.2rem;
  font-weight: bold;
  color: black;
  display: inline-block;
  margin-left: 180px;
  margin-top: 4px;
}
.n3 {
  width: 240px;
  border: 1px solid goldenrod;
  background-color: goldenrod;
}
.n2 {
  width: 80px;
  float: left;
}
.n1 {
  float: left;
  width: 80px;
}
#alldian {
  width: 350px;
  border: 1px solid aqua;
  position: fixed;
  left: 1px;
  bottom: 60px;
  font-size: 0.12rem;
  z-index: 2;
  background-color: white;
}
#ball {
  width: 12px;
  height: 12px;
  background: blue;
  border-radius: 50%;
  position: fixed;
  left: -20px;
  transition: left 1s linear, top 1s ease-in;
  /* z-index:; */
}
.s {
  background-color: blue;
  color: white;
  font-size: 0.15rem;
  border-radius: 30%;
  height: 35px;
  width: 35px;
  text-align: center;
  line-height: 30px;
  margin-left: 140px;
  margin-top: -35px;
}
.da {
  font-size: 0.2rem;
}
a {
  text-decoration: none;
}
#gou {
  position: absolute;
  width: 330px;
  height: 330px;
  left: 40px;
  top: 160px;
  background-color: white;
  position: fixed;
}
.gege {
  background-color: blue;
  color: white;
  font-size: 0.15rem;
  border-radius: 30%;
  height: 35px;
  width: 35px;
  text-align: center;
  line-height: 35px;
  margin-left: 200px;
  margin-top: -30px;
}
.gege1 {
  background-color: blue;
  color: white;
  font-size: 0.15rem;
  border-radius: 30%;
  height: 35px;
  width: 35px;
  text-align: center;
  line-height: 35px;
  margin-left: 200px;
  margin-top: -30px;
}
#suan {
  width:1.5rem;
  background-color: grey;
  height: 100%;
  color: white;
  font-size: 0.2rem;
  float: left;
  margin-left: 100px;
  text-align: center;
  line-height: 50px;
}
.yi {
  font-size: 0.2rem;
  color: white;
  float: left;
  margin-left: 30px;
}
.er {
  font-size: 0.1rem;
  color: white;
  display: inline-block;
  margin-top: 30px;
  margin-left: -270px;
  font-family: Microsoft Yahei;
}
#jiesuan img {
  width: 50px;
  height: 50px;
  margin-top: -20px;
  background-color: blue;
  border-radius: 50%;
  float: left;
}
#jiesuan {
  width: 100%;
  height: 50px;
  background-color: black;
  position: fixed;
  left: 0;
  bottom: 0;
}
#yang {
  position: fixed;
  width: 150px;
  height: 150px;
}
.qian {
  font-size: 0.15rem;
  font-weight: bold;
  color: orange;
  margin-left: 40px;
  width: 40%;
}
.de {
  border: 1px solid red;
  border-radius: 10%;
  color: red;
  margin-left: 50px;
}
.shou {
  margin-left: 50px;
  font-size: 0.1rem;
  font-weight: bold;
}
.miao {
  margin-left: 60px;
  margin-top: -10px;
}
.content {
  width: 3.75rem;
  overflow: hidden;
}
.hotShangping {
  width: 1rem;
  /* background-color: #fff; */
  overflow: hidden;
  float: left;
}
.hotdetial {
  width: 2.75rem;
  float: right;
}
.zi {
  display: inline;
  font-weight: bold;
  font-size: 0.2rem;
}
.lis1 {
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
  height: 0.7rem;
  line-height: 0.7rem;
}
.allfoodsImg {
  width: 0.5rem;
}
.lis2 {
  width: 2.75rem;
  overflow: hidden;
}

#zhanshi {
  position: fixed;
  top: 140px;
  left: 0px;
  width: 100%;
  background-color: white;
}
.xian {
  width: 30%;
  margin-left: 35%;
  border-bottom: 2px solid blue;
}
.pin {
  width: 50%;
  height: 30px;
  float: left;
  font-size: 0.2rem;
  text-align: center;
  line-height: 30px;
}
#gao {
  float: left;
  margin-top: 60px;
  margin-left: -60px;
  height: 20px;
  width: 180px;
  overflow: hidden;
}
#dizhi {
  float: left;
  font-size: 3rem;
  background-color: green;
  width: 30px;
  height: 30px;
}
#right2 {
  width: 30px;
  float: left;
  height: 90px;
}
#right2 img {
  width: 30px;
  height: 30px;
  margin-top: 30px;
  margin-left: 20px;
}
.right1 {
  float: left;
  font-size: 0.18rem;
  font-weight: bold;
  margin-top: 2px;
  margin-left: 5px;
}
#right {
  float: left;
  height: 90px;
  width: 220px;
}
#top1 img {
  width: 100%;
}
#one {
  float: left;
  width: 70px;
  height: 70px;
  margin-top: 10px;
  margin-left: 5px;
}
#top1 {
  width: 3.75rem;
  height: 90px;
  float: left;
  background-color: bisque;
}
/* 点击后显示的购物车样式 */
.cargo {
  width: 100%;
  max-height: 2.8rem;
  overflow-y: scroll;
  z-index: 20;
}
.cargoline {
  width: 100%;
  height: 0.35rem;
  /* background-color: yellow; */
}
.cargoline > div {
  float: left;
  height: 0.35rem;
}
.cargoline > div:nth-child(1) {
  width: 65%;
  line-height: 0.35rem;
  font-size: 0.16rem;
  font-weight: bold;
  background-color: #fff;
  float: left;
}
.cargoline > div:nth-child(2) {
  width: 15%;
  font-size: 0.16rem;
  /* border: 1px solid red; */
  color: red;
  font-weight: bold;
  box-sizing: border-box;
  /* background-color:yellow; */
  line-height: 0.35rem;
  float: left;
}
.cargoline > div:nth-child(3) {
  width: 10%;
  background-color: lightblue;
  line-height: 0.35rem;
}
.jiangou,
.jiagou {
  /* margin-right: 0.05rem; */
  border-radius: 50%;
  font-size: 0.15rem;
  padding: 0.05rem;
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  margin-right: 0.05rem;
  float: left;
  color: white;
  margin-top: 0.05rem;
  background-color: rgb(49, 143, 231);
}
.reduceadd {
  line-height: 0.35rem;
  float: left;
  background-color: white;
  font-size: 0.2rem;
  font-weight: bold;
  width: 0.1rem;
  margin-top: 0.05rem;
}
.pshop1 {
  height: 0.35rem;
  line-height: 0.35rem;
  background-color: rgb(239, 239, 239);
}
.pshop1 span:nth-child(2) {
  float: right;
  margin-right: 0.1rem;
}
</style>
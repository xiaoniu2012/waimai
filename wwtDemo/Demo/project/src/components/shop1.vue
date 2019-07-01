<template>
  <div>
    <div id="top" @click="sousuo()">
      <img src="../assets/img/fangdajing.png" alt id="img1" />
      <div id="cheng"><p>{{chengshi}}</p></div>
      <img src="../assets/img/touxiang2.png" alt id="img2" />
    </div>
    <div id="center" v-if="show">
      <swiper :options="swiperOption" ref="mySwiper" id="lunbo">
        <!-- slides -->
        <swiper-slide>
          <div id="one">
            <!-- <ul> -->
            <div :key="i" v-for="(v,i) in bo1" class="bo1">
                
              <router-link :to=" '/shop2?cityId=' + v.title" >
                <div class="bo2">
                  <img :src="'https://fuss10.elemecdn.com'+v.image_url" />
                </div>
                <div class="bo3">{{v.title}}</div>
              </router-link>
            </div>
            <!-- </ul> -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <div id="two">
            <div :key="i" v-for="(v,i) in bo2" class="bo1">
              <router-link :to=" '/shop2?cityId=' + v.title" >
                <div class="bo2">
                  <img :src="'https://fuss10.elemecdn.com'+v.image_url" />
                </div>
                <div class="bo3">{{v.title}}</div>
              </router-link>
            </div>
            <!-- </ul> -->
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
    <div id="bottom">
      <div id="bottom1">
        <img src="../assets/img/weibiaoti2fuzhi14.png" alt />
        <div>附近商家</div>
      </div>
      <div :key="i" v-for="(v,i) in data2" id="bottom2">
        <div id="tupain">
          <img :src="'https://elm.cangdu.org/img/'+v.image_path" />
        </div>
        <div id="left">
          <div id="pai">品牌</div>
          <div id="ming">{{v.name}}</div>
          <div id="ping">
            <el-rate
              v-model="v.rating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{v.rating}"
            ></el-rate>
            <span>{{v.rating}}</span>
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
        <div id="right">
          <div id="top1">
            {{v.supports[0].icon_name}}
            {{v.supports[1].icon_name}}
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
</template>
<script>
import { Loading } from "element-ui";
var loadingInstance;
export default {
  name: "shop1",
  data() {
    return {
      data1: "",
      data2: "",
      bo1: [],
      show: false,
      bo2: [],
      all1: "",
      all2: "",
      chengshi: "",
      swiperOption: {
        //  autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.chengshi = this.$store.state.one;
    this.shopdian();
    this.allshop();
    loadingInstance = Loading.service({
      fullscreen: true,
      text: "拼命加载中",
      background: "gray"
    });
  },
  methods: {
    shopdian() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        this.data1 = res.data;
        for (var m = 0; m < this.data1.length / 2; m++) {
          this.$set(this.bo1, m, this.data1[m]);
        }
        var i = -1;
        for (var m = 8; m < this.data1.length; m++) {
          i++;
          this.$set(this.bo2, i, this.data1[m]);
        }
        this.show = true;
      });
    },
    allshop() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        this.data2 = res.data;
        loadingInstance.close();
        console.log(this.data2);
      });
    },
    sousuo(){
        this.$router.push({
            name:"search"
        })
    }
  }
};
</script>
<style scoped>
#top1 {
  float: right;
  letter-spacing: 2px;
  margin-top: 70px;
}
#a1 {
  background-color: blue;
  border-radius: 2px;
  border: 1px solid blue;
}
#a2 {
  border: 1px solid blue;
  border-radius: 2px;
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
  /* background-color: gray; */
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
#cheng {
  margin-top: 5px;
  width: 3.1rem;
  overflow: hidden;
}
</style>

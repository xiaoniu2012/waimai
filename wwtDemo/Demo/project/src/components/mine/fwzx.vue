<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/img/back.png">
      <p>服务中心</p>
    </div>
    <!-- 在线客服部分 -->
    <div id="kefu">
      <div id="kefu1">
        
          <img src="../../assets/img/kefu.png" alt>
        <p>在线客服</p>
        
      </div>
      <div id="kefu2">
        <a  href="tel:110" >
        <img src="../../assets/img/dianhua.png" alt>
        <p>在线客服</p>
        </a>
      </div>
    </div>
    <!-- 热门问题 -->
    <div id="hotquestion">热门问题</div>

    <div class="other" @click="chuanzhi1()">
      <P>{{datas.supervipCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi2()">
      <P>{{datas.signCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>
    <div class="other" @click="chuanzhi3()">
      <P>{{datas.rankCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi4()">
      <P>{{datas.pointtextCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi5()">
      <P>{{datas.phototutorialCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi6()">
      <P>{{datas.paymentCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi7()">
      <P>{{datas.otherCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi8()">
      <P>{{datas.ontimeCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi9()">
      <P>{{datas.memberTimesCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi10()">
      <P>{{datas.memberCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi11()">
      <P>{{datas.hongbaoCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi12()">
      <P>{{datas.freshmanCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi13()">
      <P>{{datas.forgotCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi14()">
      <P>{{datas.discountCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi15()">
      <P>{{datas.disclaimerCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi16()">
      <P>{{datas.couponCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi17()">
      <P>{{datas.businessCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi18()">
      <P>{{datas.balanceCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi19()">
      <P>{{datas.awesomeRestaurantCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi20()">
      <P>{{datas.anonymousBuyCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>

    <div class="other" @click="chuanzhi21()">
      <P>{{datas.activityCaption}}</P>
      <img src="../../assets/img/iconfontjiantou2.png">
    </div>
  </div>
</template>
<script>
export default {
  name: "fwzx",
  data() {
    return {
      datas: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    chuanzhi1() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.supervipContent,
          tit: this.datas.supervipCaption
        }
      });
    },
    chuanzhi2() {
      this.$router.push({
        name: "explain",
        query: { datass: this.datas.signContent, tit: this.datas.signCaption }
      });
    },
    chuanzhi3() {
      this.$router.push({
        name: "explain",
        query: { datass: this.datas.rankContent, tit: this.datas.rankCaption }
      });
    },
    chuanzhi4() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.pointtextContent,
          tit: this.datas.pointtextCaption
        }
      });
    },
    chuanzhi5() {
      var a = 1;
      var b = false;
      var str = this.datas.phototutorialContent;
      var arr = [];
      var reg1 = /\([^\)]+\)/g;
      str.replace(reg1, function(s, value) {
        //          alert(value); // value 就是 123456
        var s2 = s.substring(1, s.length - 1);
        arr.push(s2); //所有图片的路径
      });
      var str2 = this.datas.phototutorialContent;
      var arr2 = [];
      var reg2 = /#{2}[^\<]+(。|~)/g;
      str.replace(reg2, function(s, value) {
        //  console.log(s);
        //  console.log(value);
        var s3 = s.substring(2, s.length - 2);
        console.log(s3);

        arr2.push(s3); //所有图片的路径
        console.log(arr);
      });
      this.$router.push({
        name: "servicede",
        query: {
          data: arr,
          datas: arr2,
          // A: a,
          // B: b,
          tit: this.datas.phototutorialCaption
        }
      });
      // console.log(this.explain.phototutorialContent);

      // this.$router.push({
      //   name: "explain",
      //   query: {
      //     datass: this.datas.phototutorialContent,
      //     tit: this.datas.phototutorialCaption
      //   }
      // });
    },
    chuanzhi6() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.paymentContent,
          tit: this.datas.paymentCaption
        }
      });
    },
    chuanzhi7() {
      this.$router.push({
        name: "explain",
        query: { datass: this.datas.otherContent, tit: this.datas.otherCaption }
      });
    },
    chuanzhi8() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.ontimeContent,
          tit: this.datas.ontimeCaption
        }
      });
    },
    chuanzhi9() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.memberTimesContent,
          tit: this.datas.memberFullCutCaption
        }
      });
    },
    chuanzhi10() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.memberFullCutContent,
          tit: this.datas.memberCaption
        }
      });
    },
    chuanzhi11() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.hongbaoContent,
          tit: this.datas.hongbaoCaption
        }
      });
    },
    chuanzhi12() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.freshmanContent,
          tit: this.datas.freshmanCaption
        }
      });
    },
    chuanzhi13() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.forgotContent,
          tit: this.datas.forgotCaption
        }
      });
    },
    chuanzhi14() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.discountContent,
          tit: this.datas.discountCaption
        }
      });
    },
    chuanzhi15() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.disclaimerContent,
          tit: this.datas.disclaimerCaption
        }
      });
    },
    chuanzhi16() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.couponContent,
          tit: this.datas.couponCaption
        }
      });
    },
    chuanzhi17() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.businessContent,
          tit: this.datas.businessCaption
        }
      });
    },
    chuanzhi18() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.balanceContent,
          tit: this.datas.balanceCaption
        }
      });
    },
    chuanzhi19() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.awesomeRestaurantContent,
          tit: this.datas.awesomeRestaurantCaption
        }
      });
    },
    chuanzhi20() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.anonymousBuyContent,
          tit: this.datas.anonymousBuyCaption
        }
      });
    },
    chuanzhi21() {
      this.$router.push({
        name: "explain",
        query: {
          datass: this.datas.activityContent,
          tit: this.datas.activityCaption
        }
      });
    },
    getData() {
      const api = "https://elm.cangdu.org/v3/profile/explain";
      this.$http({
        url: api,
        methods: "get",
        data() {}
      }).then(res => {
        this.datas = res.data;
        console.log(this.datas);
      });
    },

    //返回上一级
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
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
/* 在线客服部分 */
#kefu {
  width: 3.75rem;
  height: 0.8rem;
  margin-top: 0.55rem;
  display: flex;
  justify-content: space-between;
}
#kefu1,
#kefu2 {
  width: 1.875rem;
  background-color: white;
  border: 0.1px solid rgb(246, 246, 246);
  position: relative;
  
}
#kefu1 img,
#kefu2 img {
  width: 0.4rem;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
#kefu1 p,
#kefu2 p {
  font-size: 0.15rem;
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
  color: black;
  
}
#hotquestion {
  height: 0.6rem;
  line-height: 0.6rem;
  padding-left: 0.2rem;
  border: 0.4px solid gainsboro;
  background-color: ghostwhite;
  font-size: 0.18rem;
  color: black;
}
.other {
  height: 0.4rem;
  line-height: 0.4rem;
  border: 0.4px solid gainsboro;
  background-color: ghostwhite;
  position: relative;
}
.other p {
  font-size: 0.15rem;
  position: absolute;
  left: 0.1rem;
  top: 0;
}
.other img {
  width: 0.3rem;
  position: absolute;
  right: 0;
  top: 0.05rem;
}
</style>

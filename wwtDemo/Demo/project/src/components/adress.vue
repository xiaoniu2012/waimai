<template>
  <div id="home">
    <div id="top">
      <p id="ea">ele.me</p>
      <p @click="tiaozhuan()" v-if="asda" class="denglu">{{zhuce}}</p>
      <p @click="tiaozhuan()" v-else  class="denglu"><img :src="denglu" alt=""></p>
    </div>
    <div id="city" @click="ding()">
      <p>当前定位城市:</p>
      <div>{{dingcity}}</div>
      <img src="../assets/1.png" alt id="tu" />
    </div>
    <div id="hot">
      <p>热门城市</p>
      <div id="cityhot">
        <ul id="lis">
          <li :key="i" v-for="(v,i) in datas" @click="chuanzhi(v)">{{v.name}}</li>
        </ul>
      </div>
    </div>
    <div id="bottom">
      <ul>
        <li :key="key" v-for="(value,key) in allCitys" id="lis2">
          <p>{{key}}</p>
          <span v-if="key == 'A'" id="zimu">(按字母排序)</span>
          <ul id="lis1">
            <li :key="i" v-for="(v,i) in value" @click="chuanzhi(v)">{{v.name}}</li>
          </ul>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "adress",
  data() {
    return {
      datas: [],
      allCitys: {},
      dingcity: "",
      city: "",
      show:true,
      show2:false,
      zhuce:"登陆/注册",
      denglu:require("../assets/img/tupian.jpg")
    };
  },
  created() {
    this.getcity();
    this.allcity();
    this.allcity();
    this.geohash();
  },
  computed: {
    asda(){
      return this.$store.state.whc;
    }
  },
  methods: {
    getcity() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        // console.log(res);
        this.datas = res.data;
      });
    },
    allcity() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        // console.log(res);
        // this.allCitys=res.data;
        var arr = [];
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        for (var i = 0; i < arr.length; i++) {
          this.$set(this.allCitys, arr[i], res.data[arr[i]]);
        }
      });
    },
    geohash() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        // console.log(res);
        this.dingcity = res.data.name;
        this.city = res.data.id;
        
      });
    },
    chuanzhi(v) {
      const api = "https://elm.cangdu.org/v1/cities/" + v.id;
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        console.log(res);
        this.$router.push({
          name: "sousuo2",
          query: res.data
        });
      });
    },
    ding() {
      const api = "https://elm.cangdu.org/v1/cities/" + this.city;
      this.$http({
        url: api,
        methods: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        console.log(res);
        this.$router.push({
          name: "sousuo2",
          query: res.data
        });
      });
    },
    tiaozhuan(){

      if(this.$store.state.username){
        this.show="false"
        this.show2="true"

        this.$router.push({
          name:"my"
        })
      }
      else{
        this.show="true"
        this.show2="false"
        this.$router.push({

          name:"login"
        })
      }

    }
  }
};
</script>
<style scoped>
#ea{
   font-size: 0.2rem;
   color: red;
}
#tu {
  float: right;
  height: 20px;
  width: 20px;
  margin-top: -10%;
}
#zimu {
  float: left;
  margin-left: -96%;
}

#bottom {
  margin-top: 10px;
  float: left;
}
#cityhot {
  width: 100%;
  float: left;
}
#lis2 p {
  width: 100%;
  background-color: aqua;
  float: left;
}
#lis1 li {
  float: left;
  height: 30px;
  width: 25%;
  box-sizing: border-box;
  border: 1px solid black;
  color: blue;
  font-size: 0.15rem;
  line-height: 30px;
  text-align: center;
  overflow: hidden;
}
#lis li {
  float: left;
  /* border: 1px solid black; */
  height: 30px;
  width: 25%;
  box-sizing: border-box;
  border: 1px solid black;
  color: blue;
  font-size: 0.15rem;
  line-height: 30px;
  text-align: center;
}
#lis {
  /* float: left; */
  width: 100%;
}
#home {
  width: 100%;
  height: 100%;
  float: left;
}
#top {
  background-color: blue;
  height: 50px;
  width: 100%;
  position: fixed;
  color: white;
  overflow: hidden;
}
#top p:nth-child(1) {
  line-height: 50px;
  float: left;
  margin-left: 5px;
}
.denglu {
  line-height: 50px;
  float: right;
  margin-right: 5px;
}
.denglu img{
  width: 0.25rem;
}
#city {
  background-color: whitesmoke;
  height: 100px;
  float: left;
  margin-top: 50px;
  width: 100%;
}
#city p {
  /* float: left; */
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 0.1rem;
}
#city div {
  float: left;
  font-size: 0.2rem;
  border: 1px solid bisque;
  width: 100%;
  height: 50px;
  font-weight: bold;
  line-height: 50px;
  color: blue;
}
#hot {
  margin-top: 10px;
  /* float: left; */
  /* border: 1px solid black; */
  width: 100%;
}
#hot p {
  font-size: 0.1rem;
  float: left;
  width: 100%;
  height: 20px;
}
* {
  margin: 0;
  padding: 0;
}
</style>

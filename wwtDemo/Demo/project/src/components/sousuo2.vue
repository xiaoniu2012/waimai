<template>
  <div>
    <div id="header">
    {{dizhi.name}}
    </div>
    <div id="xinxi">
      <input id="shuru" v-model="keyword" placeholder="输入学校、商务楼、地址" type="text">
      <button @click="search()" id="tijiao">提交</button>
    </div>
    <ul>
      <li :key="i" v-for="(v,i) in food" @click="jumpshop1(i,v.name)">
        <div @click="addss(v.name,v.address,v.geohash,v.longitude,v.latitude)">
          <router-link :to="'/shop1?name='+v.name">
        <h3 class="ming">{{v.name}}</h3>
        <p style="color:gray" class="dian">{{v.address}}</p>
        </router-link>
        </div>
      </li>
    </ul>
    <p id="history">搜索历史</p>
    <div id="before" v-if="show1">
     <ul id="ul2">
        <li class="li2" :key="i" v-for="(v,i) in names">
            <router-link tag="p" v-model="address" :to="'/shop1?Name='+names[i]+'&weidu='+latitudes[i]+'&jingdu='+longitudes[i]+'&geohash='+geohashs[i]">
            <p class="p2">{{names[i]}}</p>
             <p class="p3">{{dress[i]}}</p>
            </router-link>
        </li>
       <li class="qk" @click="addc()"><p v-if="show2">清空历史</p></li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "qiehuan",
  data() {
    return {
      name: "",
      id: "",
      keyword: "",
      food: "",
      dizhi:"",
      names:[],
      address: "",
      addresses:[],
      dress:[],
      dress:[],
      geohashs:"",
      show1:true,
      show2:true,
      longitudes:[],
      latitudes:[],
    };
  },
  created() {
    this.Add();
    this.dizhi=this.$route.query;
   this.addhi();
   this.$store.commit("chengid",this.$route.query.id);
    console.log(this.$route.query.id);
  },
  methods: {
    Add() {
      // this.name = this.$route.query.cityName;

      this.id = this.$route.query;
    },
    search() {
      if (this.keyword == "") {
        return;
      } else {
        const api =
          "https://elm.cangdu.org/v1/pois?city_id=" +
          this.dizhi.id +
          "&keyword=" +
          this.keyword +
          "&type=search";
        this.$http({
          url: api,
          method: "get"
        }).then(res => {
          this.food = res.data;
        });
      }
    },
    jumpshop1(i,n){
          this.$store.commit("jing", this.food[i].geohash);
          this.$store.commit("getone",n);
    },
    addss(a,b,c,d,e){
        if(localStorage.name){
            if(localStorage.name.indexOf(a)==-1){
                localStorage.name += ","+a;
                localStorage.address += ","+b;
                localStorage.geohash += "w" +c;
                localStorage.longitude += "," +d;
                localStorage.latitude += "," +e;
            }

        }else{
            localStorage.name = a;
            localStorage.address = b;
            localStorage.geohash = c;
            localStorage.longitude = d;
            localStorage.latitude = e;
            
        }
        console.log(c);
    },
    addhi(){
        if(localStorage.name){
        this.names = localStorage.name.split(",");
        console.log( "this.names");
        console.log( this.names);
        this.dress = localStorage.address.split(",");
        // console.log("this.dress");
        console.log(this.dress);
         this.geohashs = localStorage.geohash.split("w");
        console.log("this.geohashs");
        this.$store.commit('getjinweidu',this.geohashs);
        console.log(this.geohashs);
        this.longitudes = localStorage.longitude.split(",");
        this.latitudes = localStorage.latitude.split(",");
        if (this.names.length >0) {
         this.show2=true;
       }
        }
    },
   addc(){
       localStorage.removeItem("name");
       localStorage.removeItem("address");
      localStorage.removeItem("geohash");
      localStorage.removeItem("longitude");
      localStorage.removeItem("longitude");
       this.names =[],
       this.dress = "";
       this.geohashs = "";
       this.longitude = "";
       this.longitude = "";
       console.log(this.names.length)
       if (this.names.length==0 || this.names.length== "" ) {
         this.show1=false;
       }
         this.show1=false;
   }
  }
};
</script>
<style scoped>
.p2,.p3{
   font-size: 0.15rem;
   margin-top: 0.01rem;
}
.p2{
   color: blue;
    font-size: 0.2rem;
}
.ming{
   margin-top: 0.02rem;
   font-size:0.2rem;
}
.dian{
  margin-top: 0.02rem;
  font-size:0.18rem;
  margin-bottom: 1px;
}
.li2{
     width: 3.55rem;
}
.qk{
   height: 0.1rem;
   text-align: center;
   line-height: 0.1rem;
   width: 100%;
   font-size: 0.15rem;
   width: 3.55rem;
   background-color: #f5f5f5;
}
#ul2{
  background-color: white;
  width: 100%;
}
#before{
  width: 100%;
  float: left;
}
#history{
  width: 100%;
  height: 0.25rem;
  font-size: 0.15rem;
  color:white;
  background-color: grey;
  float: left;
}
#header {
  height: 0.45rem;
  background-color: rgb(48, 144, 232);
  font-size: 0.28rem;
  color: white;
  line-height: 0.45rem;
  padding: 0 0.1rem 0 0.1rem;
  text-align: center;
}
#xinxi {
  text-align: center;
  margin-top: 0.1rem;
}
#shuru {
  width: 95%;
  height: 0.4rem;
      border: 0.01rem solid gray;
          font-size: 0.15rem;
}
#tijiao {
  background-color: rgb(48, 144, 232);
  width: 95%;
  height: 0.4rem;
  margin-top: 0.1rem;
  font-size: 0.28rem;
}
ul {
  margin-top: 0.1rem;
}
ul li {
  padding: 0.1rem;
  padding-top: 0;
  background-color: white;
  border-bottom: 1px solid gray;
}
ul li p {
  margin-top: 0.1rem;
}
</style>
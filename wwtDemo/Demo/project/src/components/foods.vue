<template>
    <div>
    <div id="top" @click="back1()"><p id="top2"><img src="../assets/img/back.png" alt=""></p><p id="top1">{{msg}}</p></div>
    <div id="tu"><img :src="path2"></div>
    <div id="gao">{{desp}}</div>
    <p id="ming">{{msg}}</p>
    <p id="ping">
        <span>评分：</span>
        <el-rate
  v-model=rating
  disabled
  show-score
  text-color="#ff9900"
 score-template="">
</el-rate>
<span id="fen">{{rating}}</span>
    </p>
<div id="bottom">
    <img src="../assets/img/gouwuche.png" id="go">
    <p id="yang">￥5.00</p><span id="pei"><span>配送费</span>{{peifei}}</span>
    <div id="one">还差￥{{haicha}}起送</div>
</div>
    </div>
</template>
<script>
// import store from '../store/state'
export default {
    name:"foods",
    data() {
        return {
            msg:"你好我的世界",
            path1:"",
            path2:"",
            desp:"",
            rating:2,
            peifei:"",
            haicha:""
        }
    },
    created() {
        this.msg=this.$route.query.cityId;
        this.path1=this.$route.query.image1;
        this.path2='https://elm.cangdu.org/img/'+this.path1;
        this.desp=this.$route.query.miaoshu;
        this.rating=parseInt(this.$route.query.rate);
        this.peifei=this.$route.query.pei;
        this.haicha=this.$route.query.qi;
    },
    methods: {
        back1(){
             this.$router.back();
        }
    },
}
</script>
<style scoped>
#one{
     float: right;
     color: white;
     font-size: 0.17rem;
     background-color: rebeccapurple;
     height: 50px;
     text-align: center;
     line-height: 50px;
}
#pei{
  color: white;
  font-size: 0.05rem;
   float: left;
   margin-top: 30px;
  margin-left: -60px;
}
#yang{
     color: white;
     font-size: 0.2rem;
     margin-left: 20px;
     float: left;
}
#go{
     border: 1px solid grey;
     width: 60px;
     border: 1px solid grey;
     background-color: grey;
     border-radius: 50%;
     height: 60px;
     margin-left: 20px;
     margin-top: -20px;
     float: left;
}
#go img{
     width: 100%;
}
#bottom{
      float: left;
      height: 50px;
      margin-top: 90px;
      background-color: gray;
      width: 100%;
}
#fen{
     float: left;
     margin-top: -20px;
     margin-left: 130px;
     color: orange;
}
#ming{
     width: 100%;
     font-size: 0.25rem;
     font-weight: bold;
}
#gao{
     float: left;
     font-size: 0.15rem;
     height: 30px;
     margin-top: 10px;
    width: 100%;
}
   #top{
        height: 50px;
        font-size: 0.25rem;
        color: white;
        text-align: center;
        background-color: blue;
        float: left;
        width: 100%;
   } 
   #top1{
       margin-top: 1px;
       width: 150px;
       float: left;
       margin-left: 80px;
   }
   #tu{
        float: left;
        width: 100%;
        height: 400px;
   }
   #tu img{
        width: 100%;
        height: 100%;
   }
   #top2{
        width: 30px;
        margin-top: 2px;
        height: 30px;
        float: left;
   }
   #top2 img {
        width: 100%;
        height: 100%;
   }
</style>
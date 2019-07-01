<template>
    <div>
      <div id="top" @click="back1()"><img src="../assets/img/back.png" class="one"><p>确认订单</p><img src="../assets/img/touxiang2.png" id="img">
      </div> 
       <div id="dizhi">
           <router-link to="/receiptaddress">
        <img src="../assets/img/juli.png" class="biao">
        <p>请添加一个收货地址</p>
        <img src="../assets/img/iconfontjiantou2.png" class="tian">
        </router-link>
       </div>
       <div id="time">
               <div class="left"></div>
               <p>送达时间</p>
               <div id="right">
                <span id="song">尽快送达|预计{{hours}}{{fu}}{{minutes}}</span>
                <span class="dao">{{da1}}</span>
               </div>
       </div>
       <div id="pay">
         <div class="fang" @click="zhifu()"><span class="fukuan">支付方式</span><span class="he">在线支付<img src="../assets/img/iconfontjiantou2.png" id="tu"></span></div>
         <div class="fang"><span>红包</span><span class="he">暂时只在饿了吗APP中支持</span></div>
       </div>
       
       <div id="xianjin">
          <p id="jin1">支付方式</p> 
          <p id="jin2">货到付款(商家暂时不支持货到付款)<span><img src="../assets/img/icon-test2.png" id="hao"></span></p>
          <p id="jin3">在线支付<span><img src="../assets/img/icon-test.png" id="jin4"></span></p>
       </div>
       <div id="yin" @click="xiaoshi()" v-show="show"></div>
       <div id="list">
             <p id="shop">
              <img :src="'https://elm.cangdu.org/img/'+path" alt>
                {{name}}
            </p>
            <ul :key="i" v-for="(v,i) in ming1" class="yihui">
                <li class="enen">{{v}}</li>
                <li class="en">x1</li>
            </ul>
             <ul :key="i" v-for="(v,i) in ming2" class="yihui">
                <li class="enen">{{v}}</li>
                <li class="en">x1</li>
            </ul>
       <div id="jia">
           <ul :key="i" v-for="(v,i) in jia1">
             <li>{{v}}</li>
           </ul>
       </div>
       </div>
       
    </div>
</template>
<script>
export default {
    name:"dingdan",
    data() {
        return {
            da:"",
            da1:"",
            hours:"",
            minutes:"",
            fu:":",
            show:false,
            shop:"效果演示",
            ming1:"",
            ming2:"",
            shu1:"",
            shu2:"",
            path:"",
            name:"",
            jia1:""
        }
    },
    created(){
        this.song();
        this.gettime();
        this.name=this.$route.query.ming;
        this.path=this.$route.query.pian;
        this.ming1=this.$store.state.arr;
        this.ming2=this.$store.state.arr2;
        this.jia1=this.$store.state.arr1;
        console.log(this.path);
    },
    methods: {
        back1(){
            this.$router.back();
        },
        song() {
      const api ="https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes";
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        this.da = res.data;
        this.da1=this.da[0].text;
      });
    },
     gettime(){
           var  time1=new Date;
           var  time2=time1.getHours();
           var  time3=time1.getMinutes();
          console.log(time2,time3);
          if(time3<30)
          { time3=time3+30;
            this.hours=time2;
           this.minutes=time3;
          }
          else{
             time2+=1;
             time3-=30;
             if(time3<10)
             {
                 time3="0"+time3;
             }
             this.hours=time2;
             this.minutes=time3;
           }
     },
     zhifu(){
            // this.show=true;
            var yu=document.getElementById("xianjin");
            yu.style.height="370px";
            this.show=true;
     },
     xiaoshi(){
         this.show=false;
         var yu=document.getElementById("xianjin");
            yu.style.height="0px";
     }

    },
      
    
}
</script>
<style scoped>
.jia{
     float: left;
     width: 40%;
}
.yihui{
     border: 1px solid grey;
     float: left;
     width: 60%;
}
.enen{
    font-size: 0.15rem;
}
.en{
     float: left;
     margin-left: 140px;
     font-size: 0.15rem;
     margin-top: -25px;
     color: orange;
}
#shop img{
     width: 50px;
     height: 50px;
}
#shop{
     font-size: 0.2rem;
     color: black;
     font-weight: bold;
}
#list{
     width: 100%;
     height: 300px;
     background-color: white;
     float: left;
}
#xianjin{
     width: 100%;
     /* height: 370px; */
     overflow: hidden;
     z-index: 2;
     height: 0px;
     position: absolute;
     top: 370px;
     left: 0;
     background-color:white;
    transition: all 0.8s;
}
#yin{
     width: 100%;
     height: 83%;
     position:absolute;
     background-color: grey;
     opacity: 0.4;
}
#hao,#jin4{
     width: 25px;
     height: 25px;
     float: right;
     margin-right: 10px;
     margin-top: 20px;
}
#jin2,#jin3{
     width: 100%;
     height: 70px;
     font-size: 0.16rem;
     text-align: left;
     line-height: 70px;
     color: grey;
}
#jin3{
     color: black;
}
#jin1{
     width: 100%;
     height: 70px;
     font-size: 0.2rem;
     text-align: center;
     line-height: 70px;
     color: black;
     background-color: aqua;
}
#tu{
     width: 25px;
     height: 25px;
}
.he{
     float: right;
     margin-right: 10px;
}
.fang{
     width: 100%;
     height: 50%;
     float: left;
     font-size: 0.15rem;
}
#pay{
     width: 100%;
     height: 100px;
     margin-top: 10px;
     float: left;
     background-color: white;
}
.fukuan{
    font-size: 0.22rem;
}
.dao{
     font-size: 0.17rem;
     background-color: blue;
     color: white;
     margin-top: 10px;
     margin-left: 130px;
     border-radius:5px;
}
#song{
     float: left;
     color: blue;
     font-size: 0.2rem;
     height:50%;
     width: 100%;
     text-align: center;
     font-weight: bold;
     line-height: 60px;
}
#right{
    width: 60%;
    height: 100%;
    float: left;
}
.left{
    height: 100%;
    width: 3%;
    background-color: blue;
    float: left;
}
#time p{
     width: 37%;
     float: left;
     height: 100%;
     font-size: 0.2rem;
     font-weight: bold;
     text-align: center;
     line-height: 120px;
}
#time{
     float: left;
     width: 100%;
     height: 120px;
     background-color: white;
     margin-top: 10px;
}
.tian{
         width: 0.5rem;
    height: 0.5rem;
    float: left;
    margin-left: 0.9rem;
    margin-top: 0.1rem;
}
.biao{
    width: 0.5rem;
    height: 0.5rem;
    float: left;
    margin-top: 0.1rem;
}
#dizhi{
     width: 100%;
     height: 1.1rem;
     background-color: white;
}
#dizhi p{
     float: left;
     font-size: 0.2rem;
     font-weight: bold;
     margin-top:0.2rem; 
}
.one{
         margin-top: 0.05rem;
}
#img{
    width: 0.3rem;
    height: 0.3rem;
    float: left;
    margin-left: 0.9rem;
    margin-top: 0.1rem;
}
#top>img:nth-child(1){
         float: left;
    height: 0.3rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;

}
#top p{
         float: left;
    margin-left: 1rem;
    margin-top: 0.05rem;
}
#top{
    width: 100%;
     height: 0.5rem;;
     font-size: 0.25rem;
     float: left;
     color: white;
     background-color: #3190e8;
}
</style>
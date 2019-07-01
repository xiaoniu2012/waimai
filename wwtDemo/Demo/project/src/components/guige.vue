<template>
    <div id="top1">
        <p id="ming">{{ming}}</p>
        <img src="../assets/img/quxiao.png" id="an" @click="shi()">
        <p id="gui">规格:</p>
        <div id="ding">
         <ul :key="i" v-for="(v,i) in arr">
         <p id="top" @click="xuanze(v)">{{v}}</p>
         </ul>
         </div> 
        <p class="qi">￥{{qibu}}</p> 
  <button id="bt2" @click="shipin()">加入购物车</button>  
    </div>
</template>
<script>
export default {
    name:"guige",
    data() {
        return {
            msg:"中国",
            qibu:20,
            ming:"小可爱",
            ge:"",
            yangshi:"",
            yangshi1:"",
            arr:[],
            guige:"",
            i:-1
        }
    },
    created() {
        this.ge=this.$route.query.gui;
        this.yangshi=this.$route.query.cityId;
        this.yangshi1=this.$route.query.yi;
        this.$set(this.arr,0,this.yangshi1);
        this.$set(this.arr,1,this.yangshi);
        this.ming=this.$route.query.hao;
        this.qibu=this.$route.query.qibu;
    },
    methods: {
        shi(){
            this.$router.push({
                name:"shangjia"
            })
        },
        xuanze(v){
          this.guige=v;
        },
       shipin(){
          this.$store.state.count++;
        //   所选规格的下标
          this.$store.state.arrguiname[this.$store.state.count]=this.guige;
            // 所选规格的名字
          this.$store.state.arrguijia[this.$store.state.count]=this.qibu;
          var sum=0;
    for(var i=this.$store.state.arrguiname.length-1;i<this.$store.state.arrguiname.length;i++)
    {
         sum+=parseInt(this.$store.state.arrguijia[i]);
    }
    // 点击规格所选取的商品
    // 将所选取的规格进行相加得到新的总价
    this.$store.state.zongjia+=sum;
    console.log( this.$store.state.zongjia);
        //   获取到所选的样式存储到state中去
        }
    },
}
</script>
<style scoped>
.qi{
    width: 45%;
    float: left;
    margin-top: 30%;
    margin-left:5%;
    font-size: 0.2rem;
    height: 30px;
    color: orange;
}
#gui{
    float: left;
    font-size: 0.15rem;
    margin-left: 10%;
    margin-top: 5%;
    width: 80%;
}
#ming{
     float: left;
     font-size: 0.16rem;
     margin-left:37%; 
     margin-top: 10px;
}
#bt2{
     background-color: blue;
     width: 30%;
     float: left;
     height: 30px;
     font-size: 0.16rem;
     color: white;
     border-radius: 10%;
     margin-top: 33%;
}
#an{
     float: left;
     width: 40px;
     height: 40px;
     margin-left: 30%;
     margin-top: 10px;
}
#top1{
     position: fixed;
     width: 90%;
     left: 5%;
     top: 25%;
     height: 50%;
     background-color: whitesmoke;
     border-radius: 5%;
}
#ding{
    width: 100%;
    height: 50px;
    float: left;
    margin-top: 20px;
}
    #top{
        border: 1px solid grey;
         height: 50px;
         float: left;  
         color: blue;
         font-size: 0.15rem;
         text-align: center;
         line-height: 50px;
         padding: 5px;
         margin-top: 10%;
         margin-left: 10%;
    }
</style>

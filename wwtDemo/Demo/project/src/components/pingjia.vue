<template>
    <div>
      <div id="top">
         <div id="left">
             <p id="fen">{{zonghe}}</p>
             <p id="pin">综合评价</p>
             <p id="shang">高于周边商家76.9%</p>
         </div>
          <div id="right">
              <div class="yu"><p class="xing1">服务态度</p>
               <el-rate
          v-model="rating"
          class="xing"
          disabled
          show-score
          text-color="#ff9900"
          >
         </el-rate>
       </div>
              <div class="yu"><p class="xing1">菜品评价</p> <el-rate
              class="xing"
          v-model="rating"
          disabled
          show-score
          text-color="#ff9900"
          >
         </el-rate></div>
              <div class="yu"><p class="xing1">送达时间</p> <el-rate
              class="xing"
          v-model="rating"
          disabled
          show-score
          text-color="#ff9900"
          >
         </el-rate></div>
          </div>
      </div>

      <div id="center">
        <p>全部(473)</p>
        <p>满意(453)</p>
        <p>不满意(20)</p>
        <p>有图(2)</p>
        <p>味道好(47)</p>
        <p>送货快(32)</p>
        <p>分量足(18)</p>
        <p>包装精美(15)</p>
        <p>干净卫生(15)</p>
        <p>食材新鲜(15)</p>
      </div>
      <div id="bottom">
         <ul :key="i" v-for="(v,i) in jia" class="geping">
              <hr>
             <li class="touxiang"><div></div></li>
             <li class="name">{{v.username}}</li>
             <li class="time">{{v.rated_at}}</li>
             <li class="xiji"> <el-rate
              class="xing"
          v-model="rating"
          disabled
          show-score
          text-color="#ff9900"
          >
         </el-rate></li>
             <li v-if="v.time_spent_desc">{{v.time_spent_desc}}</li>
             <li class="quyu">
                <div :key="i" v-for="(v,i) in v.item_ratings" class="ting">
      <div class="chen">               
    <div v-if="v.image_hash" class="ting1"><img :src="'https://fuss10.elemecdn.com/'+ v.image_hash +'.jpeg'"></div>
       </div>             
                    <div class="shi">{{v.food_name}}</div>
                </div>
             </li>
            
         </ul>
      </div>
    </div>
</template>
<script>
export default {
    name:"pingjia",
    data() {
        return {
            msg:"你真的是个大傻瓜",
            jia:"",
            rating:5,
            zonghe:5
        }
    },
    created() {
        this.allfood1();
    },
    methods: {
         allfood1() {
      const api ="https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10";
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        this.jia = res.data;
        console.log(this.jia);
      });
    }
    },
}
</script>
<style scoped>
.chen{
      width:0.6rem;
      height: 0.6rem;
}
.shi{
    width: 150px;
    float: left; 
    text-align:left;
    margin-top: 1px;
    overflow: hidden;
}
.ting1 img{
     width: 100%;
}
.ting1{
    width: 70px;
    height: 70px;
    float: left;
}
.ting{
    float: left;
    width: 30%;
    height: 100%;
}
.quyu{
    float: left;
    width: 100%;
    height: 100px;
}
.xiji{
     float: left;
     width: 30%;
     overflow: hidden;
     margin-left:5%;
}
.time{
     float: left;
     width: 20%;
     margin-right: 3%;
}
.name{
    float: left;
    font-size: 0.1rem;
    margin-left: 5%;
    width: 60%;
}
.touxiang{
     float: left;
     width: 10%;
     height: 40px;
     background-color: aqua;
     border-radius: 50%;
}
.geping{
     float: left;
     width: 100%;
}
#bottom{
     width: 100%;
     float: left;
}
#center p{
     border: 1px solid grey;
     float: left;
     margin-left: 10px;
     font-size: 0.17rem;
     margin-top:4px;
}
#center{
     width: 100%;
     height: 1.2rem;
     float: left;
     margin-top: 20px;
}
.yu{
    margin-top: 20px;
    padding: 2px;
    font-size: 0.12rem;
}
.xing1{
     float: left;
}
.xing{
     float: left;
}
#shang{
     font-size: 0.1rem;
}
#pin{
     font-size: 0.2rem;
}
#fen{
     color: orange;
     font-size: 0.25rem;
     margin-left:30px;
      padding:0;
}
#left{
     width: 30%;
     height: 100%;
     margin-left: 10%;
     float: left;
}
#right{
     float: left;
     width: 50%;
     height: 100%;
     margin-left: 10%;
}
    #top{
         float: left;
         width: 100%;
         height: 100px;
         margin-bottom: 0.1rem;
    }
</style>
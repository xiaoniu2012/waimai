<template>
    <div>
     <div id="top" @click="back1()"><img src="../assets/img/back.png"><p>{{msg}}</p></div>
     <div id="center">
       <p class="shi">食品监督安全公示</p>
       <div class="lian">
           <img src="../assets/img/icon_xiaolian-mian.png" >
           <div id="gao">
               <p>监督检查结果：<span class="liang">良好</span></p>
               <p>检查日期:</p>
            </div>
        </div>
     </div>
     <div id="bottom">
      <p class="yu">工商登记信息</p>
      <p class="yi">企业名称</p>
      <p class="yi">工商执照注册号</p>
      <p class="yi">注册资本</p>
      <p class="yi">注册地址</p>
      <p class="yi">属地监管所</p>
      <p class="yi">法定代表人</p>
      <p class="yi">经营范围</p>
     </div>
     <div id="bottom1">
        <p class="yu">餐饮许可证</p>
        <p class="yi">营业范维</p>
      <p class="yi">许可证有效期</p>
      <p class="yi">许可证号</p>
      <p class="yi">发证时间</p>
      <p class="yi">发证机关</p>
     </div>
     <div id="bottom2">
           <p class="yu">许可证书</p>
           <div class="nu"><div></div><div></div></div>
     </div>
    </div>
</template>
<script>
export default {
    name:"qiye",
    data() {
        return {
            msg:"食品监督安全公示"
        }
    },
    methods: {
        back1(){
             this.$router.back();
        }
    },
}
</script>
<style scoped>
.nu{
    width: 100%;
    height: 150px;
    background-color: grey;
}
.nu div{
     width: 35%;
     height: 95%;
     border: 1px solid black;
     float: left;
     margin-left: 8%;
     margin-top: 5px;
}
.yu{
     width: 100%;
     font-size: 0.2rem;
     padding: 10px;
     font-weight: bold;
}
.yi{
     width: 100%;
     font-size: 0.13rem;
     padding: 10px;
}
#bottom,#bottom1,#bottom2{
     width: 100%;
     background-color: white;
     margin-top: 10px;
}
#gao{
    font-size: 0.15rem;
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px;
    float: left;

}
.lian img{
     width: 70px;
     height: 70px;
     float: left;
}
.lian{
     width: 100%;
     height: 100px;
}
.shi{
     font-size: 0.2rem;
     width: 100%;
     margin-top: 5px;
     font-weight: bold;
}
#center{
     width: 100%;
     background-color: white;
}
#top p{
     font-size: 0.25rem;
     color: white;
     font-weight: bold;
     float: left;
     margin-left: 50px;
}
#top img{
    width: 30px;
    height: 30px;
    float: left;
    margin-top: 10px;
}
    #top{
         width: 100%;
         height: 50px;
         background-color:blue;
    }
</style>
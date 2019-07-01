
<template>
  <!-- 服务中心共用的说明部分 -->
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/img/back.png">
      <p>{{title}}</p>
    </div>
    <p id="data">{{data1}}</p>
    <!-- <ul> -->
      <!-- <li :key="i" v-for="(v,i) in arr"> -->
        <img :src="arr[0]" alt="">
      <!-- </li> -->
    <!-- </ul> -->
  </div>
</template>
<script>
export default {
  name: "explain",
  data() {
    return {
      data1: "",
      title:"",
      arr:"",
      arr2:""
    };
  },
  created() {
    this.add();
  },
  methods: {
    add() {
      // this.arr = this.$route.query.data;
      // this.arr2 = this.$route.query.datas;
      this.data1 = this.$route.query.datass;
      this.title = this.$route.query.tit;
      
      console.log(this.$route);
    },
    back() {
    this.$router.back();
  }

  },
  
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  position: relative;
}
#top {
  width: 3.75rem;
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

#data {
  width: 3.4rem;
  margin-left: 0.15rem;
  margin-top: 0.55rem;
  font-size: 0.2rem;
}
</style>

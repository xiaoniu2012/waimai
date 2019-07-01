export default {
  getname(state, a) {
    this.state.username = a;
  },
  getimg(state, b) {
    this.state.imageUrl = b;
  },
  getlength(state, c) {
    this.state.hongbaolength = c;
  },
  getgeohash(state, d) {
    this.state.geohash = d;
  },
  getuserid(state, e) {
    this.state.userid = e;
  },
  initImageUrl(state) {
    console.log("initImageUrl", state);
    state.imageUrl = require("../assets/img/tupian.jpg");
  },
  //获取红包的数据
  //  gethongbaodata(state,d){
  //   this.state.hongbaodata=d;
  //  }
  // 经纬度
  jing(state, v) {//参数n默认值为1
    this.state.jingdu = v;
  },
  chengid(state,v){
    this.state.cityid1=v;
  },
  canid(state,v){
    this.state.id=v;
  },
  foodming(state,v){
      this.state.arr.push(v);
  },
  // 获取排序下标ID号
getshopID(state,shopID) {//state是必须参数
  state.shopID = shopID;
},
getindex(state, obj) {//state是必须参数
  state.obj[obj.a].foods[obj.b].is_featured += 1;
  state.totalprice += state.obj[obj.a].foods[obj.b].specfoods[0].price;
},
getdele(state, obj) {//state是必须参数
  state.obj[obj.a].foods[obj.b].is_featured -= 1;
  if (state.obj[obj.a].foods[obj.b].is_featured == 0) {
    state.obj[obj.a].foods[obj.b].is_featured = 0;
  };
  state.totalprice -= state.obj[obj.a].foods[obj.b].specfoods[0].price;
  if(state.totalprice==0){
    state.totalprice=0;
  }
},
spspshuju(state,obj){
  if (state.obj.length > 0 && state.shopID == state.obj[0].foods[0].restaurant_id) {
      return;
    }
    state.obj = obj;
 },
 //点击购物车时显示的加
 goujia(state,b){
  for(var i=0;i<state.obj.length;i++){
    for(var k=0;k<state.obj[i].foods.length;k++){
      if(state.obj[i].foods[k]._id==b){
        state.obj[i].foods[k].is_featured+=1;
        state.zongjia += state.obj[i].foods[k].specfoods[0].price;
      }
    }
  }
},
//点击购物车时显示的减
goujian(state,c){
  for(var i=0;i<state.obj.length;i++){
    for(var k=0;k<state.obj[i].foods.length;k++){
      if(state.obj[i].foods[k]._id==c){
        state.obj[i].foods[k].is_featured-=1;
        state.zongjia -= state.obj[i].foods[k].specfoods[0].price;
      }
    }
  }
},
xiugai(state,v){
  this.state.whc=v
},
getjinweidu(state,v){
  this.state.jinweidu=v;
},





  // 通过store.commit('方法名'，附加参数)调用  
  //创建方法 increAdd，第一个参数：接收state状态属性,第二个参数之后，是组件中调用该方法时，传递的参数
  // increAdd(state,a){
  // //  state.count += a;
  // //  或者
  //    this.state.count += a;
  // },
  // reduce(state,n=1){//参数n默认值为1
  //   state.count -= n;
  // }
}
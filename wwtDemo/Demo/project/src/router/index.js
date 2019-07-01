import Vue from 'vue'
import Router from 'vue-router'
//扫码之后进入的界面
import adress from '@/components/adress'


import shop1 from '@/components/shop1'
//登录界面
import login from '@/components/login'
//重置密码界面
import reset from '@/components/reset'


//  外卖     搜索      订单       我的
import takeout from '@/components/takeout'
// 搜索界面
import search from '@/components/search'
//订单界面
import bos from '@/components/bos'
// 我的界面
import my from '@/components/my'



// mine文件夹
//          1.账户信息
import zhxx from '@/components/mine/zhxx'
//          2.我的余额
import mybalance from '@/components/mine/mybalance'
//           3.我的优惠
import preference from '@/components/mine/preference'

//          4.我的积分
import myscore from '@/components/mine/myscore'
//          5.我的订单直接跳到 bos  订单界面
//          6.积分商城
import score from '@/components/mine/score'
//          7.会员中心
import membercenter from '@/components/mine/membercenter'
//          8.服务中心界面
import fwzx from '@/components/mine/fwzx'
//          9. 下载界面
import download from '@/components/mine/download'


//          1.1   头像的更换
//          1.2   用户名的修改
import reviseuesername from '@/components/mine/reviseuesername'
//          1.3   收货地址
import receiptaddress from '@/components/mine/receiptaddress'
//          1.4   新增地址          newaddress
import newaddress from '@/components/mine/newaddress'
//          1.4   搜索地址         lookaddress
import lookaddress from '@/components/mine/lookaddress'




//          1.4   登录密码的修改   跳到    reset界面
//          1.5   退出登录        跳到     my界面


//          我的优惠   红包   preference
//          我的优惠   商家代金券   shopcoupon
import shopcoupon from '@/components/mine/shopcoupon'
//          我的优惠   红包说明   redpackexplain
import redpackexplain from '@/components/mine/redpackexplain'
//          我的优惠   商品代金券说明   shopcouponexplain
import shopcouponexplain from '@/components/mine/shopcouponexplain'
//          我的优惠   历史红包    historyhongbao
import historyhongbao from '@/components/mine/historyhongbao'
//          我的优惠   兑换红包    converthongbao
import converthongbao from '@/components/mine/converthongbao'
//          我的优惠   推荐有奖    recommendencourage
import recommendencourage from '@/components/mine/recommendencourage'


//         我的积分   积分说明      scoreexplain
import scoreexplain from '@/components/mine/scoreexplain'

//          我的余额   余额说明
import balanceexplain from '@/components/mine/balanceexplain'
//          积分商城    积分商城图片的放大
// import scoreimg from '@/components/mine/scoreimg'
//          会员中心    我的优惠
import discount from '@/components/mine/discount'
//          会员中心    在线支付
import disburse from '@/components/mine/disburse'
//          会员中心    兑换会员
import exchangevip from '@/components/mine/exchangevip'
//          会员中心     购买记录
import buyrecord from '@/components/mine/buyrecord'
//          服务中心界面    说明部分
import explain from '@/components/mine/explain'

// shop2
import shop2 from '@/components/shop2'
// shangjia
import shangjia from '@/components/shangjia'
// guige
import guige from '@/components/guige'
// pingjia
import pingjia from '@/components/pingjia'
// canxiangqing
import canxiangqing from '@/components/canxiangqing'
// qiye
import qiye from '@/components/qiye'
// dingdan
import dingdan from '@/components/dingdan'
// foods
import foods from '@/components/foods'

//sousuo2
import sousuo2 from '@/components/sousuo2'



Vue.use(Router)
export default new Router({
  routes: [

    {
      path: '/',
      name: 'adress',
      component: adress
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    //  外卖     搜索      订单       我的
    {
      path: '/takeout',
      name: 'takeout',
      component: takeout,
      redirect: "/shop1",
      children: [
        {
          path: '/shop1',
          name: 'shop1',
          component: shop1
        },
      ]
    },

    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/bos',
      name: 'bos',
      component: bos,
      redirect: "/dingdan",
      children: [
        {
          path: '/dingdan',
          name: 'dingdan',
          component: dingdan
        },
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    // mine中的界面
    // 账户信息
    {
      path: '/zhxx',
      name: 'zhxx',
      component: zhxx
    },
    // 修改用户名
    {
      path: '/reviseuesername',
      name: 'reviseuesername',
      component: reviseuesername
    },
    // 我的余额
    {
      path: '/mybalance',
      name: 'mybalance',
      component: mybalance
    },
    // 余额说明     balanceexplain
    {
      path: '/balanceexplain',
      name: 'balanceexplain',
      component: balanceexplain
    },

    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/fwzx',
      name: 'fwzx',
      component: fwzx
    },
    {
      path: '/explain',
      name: 'explain',
      component: explain
    },
    {
      path: '/score',
      name: 'score',
      component: score
    },
    // {
    //   path: '/scoreimg',
    //   name: 'scoreimg',
    //   component: scoreimg
    // },
    //会员中心
    {
      path: '/membercenter',
      name: 'membercenter',
      component: membercenter
    },
    // 我的优惠
    {
      path: '/discount',
      name: 'discount',
      component: discount
    },
    //在线支付
    {
      path: '/disburse',
      name: 'disburse',
      component: disburse
    },
    //兑换会员
    {
      path: '/exchangevip',
      name: 'exchangevip',
      component: exchangevip
    },
    //购买记录
    {
      path: '/buyrecord',
      name: 'buyrecord',
      component: buyrecord
    },
    //我的优惠
    {
      path: '/preference',
      name: 'preference',
      component: preference
    },
    //商家代金券
    {
      path: '/shopcoupon',
      name: 'shopcoupon',
      component: shopcoupon
    },
    {
      path: '/redpackexplain',
      name: 'redpackexplain',
      component: redpackexplain
    },
    {
      path: '/shopcouponexplain',
      name: 'shopcouponexplain',
      component: shopcouponexplain
    },
    // historyhongbao
    {
      path: '/historyhongbao',
      name: 'historyhongbao',
      component: historyhongbao
    },
    {
      path: '/converthongbao',
      name: 'converthongbao',
      component: converthongbao
    },
    {
      path: '/recommendencourage',
      name: 'recommendencourage',
      component: recommendencourage
    },
    {
      path: '/myscore',
      name: 'myscore',
      component: myscore
    },
    {
      path: '/scoreexplain',
      name: 'scoreexplain',
      component: scoreexplain
    },
    {
      path: '/receiptaddress',
      name: 'receiptaddress',
      component: receiptaddress
    },
    {
      path: '/newaddress',
      name: 'newaddress',
      component: newaddress
    },
    {
      path: '/lookaddress',
      name: 'lookaddress',
      component: lookaddress
    },

    {
      path: '/shop2',
      name: 'shop2',
      component: shop2
    },
    // shangjia
    {
      path: '/shangjia',
      name: 'shangjia',
      component: shangjia,
      children: [{
        path: '/guige',
        name: 'guige',
        component: guige,
      },
      {
        path: '/pingjia',
        name: 'pingjia',
        component: pingjia,
      }
      ]
    },
    // foods
    {
      path: '/foods',
      name: 'foods',
      component: foods
    },
    
    // canxiangqing
    {
      path: '/canxiangqing',
      name: 'canxiangqing',
      component: canxiangqing
    },
    {
      path: '/qiye',
      name: 'qiye',
      component: qiye
    },
    // sousuo2
    {
      path: '/sousuo2',
      name: 'sousuo2',
      component: sousuo2
    },

  ]
})

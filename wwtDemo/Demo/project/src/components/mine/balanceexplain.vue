<template>
    <div>
       <div id="yewt">
        <img @click="back()" id="zj" src="../../assets/img/zuojian.png" alt="">
        <p>余额问题</p>
        </div> 
        <div id="jieshao">
        <h2>Q1: 使用余额的条件</h2>
        <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
        <h2>Q2: 余额可以怎么用？</h2>
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
        <h2>Q3:我要如何提现？</h2>
        <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
        <h2>Q4:为什么会提现失败？</h2>
        <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"yewt",
    data() {
        return {
            
        }
    },
    methods: {
        back(){
            this.$router.back();
        }
    },

}
</script>
<style scoped>
#background{
    width: 3.75rem;
    height: 100vh;
    background-color: white;
}
#yewt {
  background-color: #3190e8;
  color: white;
  /* float: left; */
  overflow: hidden;
  height: 0.45rem;
}
#zj {
  background-color: #3190e8;
  width: 0.2rem;
  margin: 0.08rem;
  float: left;
}
#yewt > p:nth-child(2) {
  background-color: #3190e8;
  font-size: 0.19rem;
  float: left;
  margin-left: 1.2rem;
  line-height: 0.45rem;
  color: #fff;
  margin-left: 1.1rem;
  font-weight: 700;
}
#jieshao h2 {
  margin: 0.1rem;
  font-weight: 400;
  font-size: 0.16rem;
}
#jieshao p {
  margin-left: 0.08rem;
  font-size: 0.14rem;
  color: #666;
  margin-right: 0.08rem;
  margin-top: 0.01rem;
  margin-bottom: 0.01rem;
}

</style>

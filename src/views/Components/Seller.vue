<template>
  <div class='seller'>
    <div class='delivery-info'>
      <h2>配送信息</h2>
      <p>由商家配送提供配送，约28分钟送达，距离1.7km</p>
      <p>配送费 <i class='iconfont icon-renminbi'></i> 9 </p>
    </div>
    <p class='bgbg'></p>

    <div class='delivery-info active-server'>
      <h2>活动与服务</h2>
      <p> <span class='tejia'>特价</span> 单品定价</p>
      <p> <span class='tejia'>特价</span> 单品定价</p>
      <p> <span class='tejia'>特价</span> 单品定价</p>
      <p> <span class='tejia'>特价</span> 单品定价</p>
      <p> <span class='shoudan'>首单</span> 新用户下单立减17元(不与其它活动同享)</p>
      <p> <span class='tejia'>特价</span> 单品定价</p>
      <p> <span class='tejia'>特价</span> 单品定价</p>
      <p> <span class='tejia'>特价</span> 单品定价</p>
      <p> <span class='tejia'>特价</span> 单品定价</p>
    </div>
    <p class='bgbg'></p>

    <div class='delivery-info seller-info'>
      <h2>商家信息</h2>
      <ul>
        <li>各类</li>
        <li><span>品类</span><span class='xiangxi'>各类</span></li>
        <li><span>商家电话</span><span class='xiangxi'>4000517117</span></li>
        <li><span>地址</span><span class='xiangxi'>湖南省怀化市鹤城区城东新区农贸市场4号门面</span></li>
        <li><span>营业时间</span><span class='xiangxi'>08:00-19:30</span></li>
      </ul>
    </div>
    <p class='bgbg'></p>

    <div class='delivery-info'>
      <h2>营业资质</h2>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../px2rem.scss";
.seller {
  .delivery-info {
    padding: px2rem(30);
    h2 {
      font-size: px2rem(30);
      margin-bottom: px2rem(40);
    }
    p {
      font-size: px2rem(25);
      margin: px2rem(15) 0;
      color: #666;
    }
  }
  .bgbg {
    height: px2rem(20);
    background-color: rgba(221, 207, 207, 0.3);
  }
  .active-server {
    p {
      margin: px2rem(30) 0;
    }
    .tejia {
      background-color: rgb(241, 136, 79);
      color: white;
      padding: 0 px2rem(10);
    }
    .shoudan {
      background-color: rgb(112, 188, 70);
      color: white;
      padding: 0 px2rem(10);
    }
  }

  .seller-info {
    ul {
      min-height: px2rem(230);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      li {
        border-bottom: 1px solid gray;
        font-size: px2rem(25);
        padding: px2rem(30) 0;
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        .xiangxi {
          width: 70%;
          text-align: right;
          color: gray;
          line-height: px2rem(35);
        }
      }
    }
  }
}
</style>

<template>
  <div class="detail">
    <!-- {/* 顶部背景与返回首页按钮 */} -->
    <div class='topbg'>
      <img src="https://fuss10.elemecdn.com/d/61/135a91686f2d4c2baa5a883e2459ajpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/" />
      <router-link
        to="/"
        class='iconfont icon-zuojiantou-'
      ></router-link>
    </div>
    <!-- {/* 店铺详情描述 */} -->
    <div class='detail-des'>
      <!-- {/* 店铺Logo */} -->
      <div class='detail-logo'>
        <img
          :src="shopData.logo"
          alt='elem'
        />
        <span>品牌</span>
      </div>

      <!-- {/* 店铺名称 销售情况*/} -->
      <div
        class='detail-shop'
        @click="maskSitch"
      >
        <h2>
          <span>{{shopData.name}}</span><i class='iconfont icon-sanjiaoright'></i>
        </h2>
        <p>
          评价{{shopData.score}}&nbsp;&nbsp;&nbsp;月售{{shopData.month_sales_count}}单 &nbsp;&nbsp;&nbsp;商家配送约28分钟
        </p>
      </div>

      <!-- {/* 单品特价/优惠活动*/} -->
      <div
        class='special-sprice'
        @click="maskBottom"
      >
        <div> <span class='sprice-icon'>特价</span><span class='sprice-single'>单品定价</span> </div>
        <div> <span class='sprice-discount'>12个优惠<i class='iconfont icon-sanjiaodown'></i></span> </div>
        <p class='shop-notice'>公告：新品元气满分双人早餐和全家满分早餐，给你早餐元气满分，快乐满分！</p>
      </div>
    </div>
    <!-- {/* tab-bar选项卡 */} -->
    <div class='tab-bar'>
      <div class='tab-bar-1'>
        <router-link
          to='/shopDetail/order'
          active-class='cur-tab-bar'
        >
          <h2 class='cur-h2'>点餐<span class='tab-bar-cur'></span></h2>
        </router-link>
      </div>
      <div class='tab-bar-2'>
        <router-link
          to='/shopDetail/evaluate'
          active-class='cur-tab-bar'
        >
          <h2 class='cur-h2'>评价<span class='tab-bar-cur'></span></h2>
        </router-link>
      </div>
      <div class='tab-bar-3'>
        <router-link
          to='/shopDetail/seller'
          active-class='cur-tab-bar'
        >
          <h2 class='cur-h2'>商家<span class='tab-bar-cur'></span></h2>
        </router-link>
      </div>
    </div>
    <!-- {/* 中间弹出层 */} -->
    <div
      class='mask-info'
      ref='closeMask'
      @click="closeMask"
    >
      <transition
        class='r'
        enter-active-class='animated fadeInUp'
        leave-active-class="animated fadeInDown"
      >
        <div class="popup">
          <h2><span class='sprice-icon'>品牌</span>{{shopData.name}}</h2>
          <ul class='delivery'>
            <li class='first-grade'>{{shopData.score}}<span>评分</span></li>
            <li>{{shopData.month_sales_count}}单<span>月售</span></li>
            <li>商家配送<span>约28分钟</span></li>
            <li>{{shopData.delivery_start_price}}元<span>匹配送</span></li>
            <li>1.7km<span>距离</span></li>
          </ul>
          <h3>——公告——</h3>
          <p>新品元气满分双人早餐和全家满分早餐，给你早餐元气满分，快乐满分！</p>
          <span
            class='close-mask'
            @click="closeMask"
          >X</span>
        </div>
      </transition>
    </div>
    <!-- {/* 底部弹出层 */} -->
    <div
      class='mask-bottom'
      ref='bottomMask'
      @click="closeMask"
    >
      <transition
        class='r'
        enter-active-class='animated fadeInUp'
        leave-active-class="animated fadeInDown"
      >
        <div
          class='popup'
          @click.stop=""
        >
          <h2>优惠活动</h2>
          <span
            class='close-mask'
            @click="closeMask"
          ><i class='iconfont icon-guanbi'></i></span>
          <ul class='yhhd'>
            <li><span>特价</span>单品定价</li>
            <li><span class='first-dan'>首单</span>新用户下单立减17元(不与其它活动同享)</li>
            <li><span>特价</span>单品定价</li>
            <li><span>特价</span>单品定价</li>
            <li><span class='free-song'>免费</span>免费送新品</li>
            <li><span>特价</span>单品定价</li>
            <li><span>特价</span>单品定价</li>
            <li><span>特价</span>单品定价</li>
            <li><span>特价</span>单品定价</li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import data from "@/api/date.json";
export default {
  data() {
    return {
      shopData: {}
    };
  },
  created() {
    this.sid = this.$route.params.id;
    this.getDetailDataList();
  },
  methods: {
    maskSitch() {
      this.$refs["closeMask"].style.display = "block";
    },
    maskBottom() {
      this.$refs["bottomMask"].style.display = "block";
    },
    closeMask() {
      this.$refs["closeMask"].style.display = "none";
      this.$refs["bottomMask"].style.display = "none";
    },
    //获取数据
    getDetailDataList() {
      let shopId = localStorage.getItem("shopId");
      let Data = {};
      data.map(item => {
        if (shopId === item.sid) {
          Data = item;
        }
        return Data;
      });
      this.shopData = Data;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../px2rem.scss";
.detail {
  a {
    text-decoration: none;
  }
  // 顶部
  .topbg {
    height: px2rem(200);
    width: 100%;
    position: relative;
    overflow: hidden;

    img {
      filter: opacity(60%);
      width: 100%;
    }

    .icon-zuojiantou- {
      font-size: px2rem(45);
      position: absolute;
      top: px2rem(25);
      left: px2rem(25);
      color: white;
    }
  }

  // 商家描述与活动
  .detail-des {
    height: px2rem(260);
    background-color: #fff;
    position: relative;
    padding-top: px2rem(62);

    .detail-logo {
      width: px2rem(150);
      height: px2rem(150);
      position: absolute;
      top: -50%;
      left: 40%;
      margin-left: -px2rem(75);
      margin-top: -px2rem(120);
      img {
        width: 100%;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(90deg, #fff100, #ffe339);
        font-size: px2rem(24);
        border-radius: px2rem(3);
        padding: px2rem(2);
      }
    }

    .detail-shop {
      width: px2rem(540);
      height: px2rem(86);
      margin: 0 auto;

      h2 {
        font-size: px2rem(42);
        color: #333;
        span {
          display: inline-block;
          line-height: px2rem(45);
          width: px2rem(300);
          overflow: hidden;
          margin-left: px2rem(100);
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        i {
          font-size: px2rem(30);
        }
      }

      p {
        font-size: px2rem(22);
        text-align: center;
        margin: px2rem(15) 0;
        color: #666;
      }
    }

    .special-sprice {
      display: flex;
      justify-content: space-between;
      width: px2rem(600);
      margin: px2rem(25) auto;
      flex-wrap: wrap;

      div {
        width: 50%;
        margin-bottom: px2rem(25);
      }

      .sprice-icon {
        font-size: px2rem(18);
        padding: 0 px2rem(10);
        border-radius: px2rem(5);
        background-color: rgb(241, 136, 79);
        color: #fff;
      }

      .sprice-single {
        margin-left: px2rem(10);
        font-size: px2rem(20);
      }

      .sprice-discount {
        display: flex;
        justify-content: flex-end;
        font-size: px2rem(20);
        color: #999;
      }

      i {
        font-size: px2rem(20);
        color: #999;
        margin-left: px2rem(10);
      }
    }

    .shop-notice {
      // flex: 1;
      font-size: px2rem(20);
      color: #999;
      width: px2rem(600);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: px2rem(0) auto px2rem(10);
    }
  }

  // tab-bar
  .tab-bar {
    position: sticky;
    display: flex;
    text-align: center;
    font-size: px2rem(30);
    top: 0;
    z-index: 2;
    margin-bottom: px2rem(10);
    background-color: white;
    border-bottom: px2rem(1) solid gray;
    height: px2rem(81);
    div {
      flex: 1;
      height: px2rem(80);
      a {
        h2 {
          line-height: px2rem(80);
          position: relative;
          color: #666;
        }

        &.cur-tab-bar > .cur-h2 {
          color: #333;

          .tab-bar-cur {
            color: #333;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: px2rem(60);
            border-bottom: px2rem(4) solid #2395ff;
          }
        }
      }
    }
  }

  // 中间弹出层
  .mask-info {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);

    .popup {
      position: relative;
      width: px2rem(600);
      height: px2rem(500);
      background-color: white;
      border-radius: px2rem(10);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: px2rem(-300);
      margin-left: px2rem(-300);

      h2 {
        font-size: px2rem(45);
        line-height: px2rem(55);
        width: px2rem(500);
        text-align: center;
        margin: px2rem(50) auto;
        color: #333;

        .sprice-icon {
          font-size: px2rem(25);
          padding: 0 px2rem(10);
          border-radius: px2rem(5);
          background-image: linear-gradient(90deg, #fff100, #ffe339);
          color: #6a3709;
        }
      }

      .delivery {
        display: flex;
        justify-content: space-around;

        .first-grade {
          // flex: 2;
          width: 20%;
        }

        li {
          text-align: center;
          font-size: px2rem(28);
          color: #333;
          font-weight: bolder;
          width: 20%;

          span {
            display: block;
            font-weight: 200;
            color: gray;
            font-size: px2rem(20);
            line-height: px2rem(50);
          }
        }
      }

      h3 {
        font-size: px2rem(25);
        text-align: center;
        color: gray;
        margin-top: px2rem(35);
      }

      p {
        font-size: px2rem(25);
        line-height: px2rem(35);
        color: #666;
        width: px2rem(500);
        margin: px2rem(25) auto;
      }
      .close-mask {
        position: absolute;
        top: 110%;
        left: 50%;
        bottom: -px2rem(120);
        width: px2rem(50);
        height: px2rem(50);
        line-height: px2rem(50);
        border: px2rem(1) solid white;
        border-radius: 50%;
        font-size: px2rem(30);
        color: white;
        background-color: rgba(0, 0, 0, 0);
        margin-left: px2rem(-25);
        text-align: center;
        font-weight: 100;
      }
    }
  }

  // 底部弹出层
  .mask-bottom {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    .popup {
      position: relative;
      width: 100%;
      height: px2rem(533);
      background-color: #f5f5f5;
      position: absolute;
      bottom: 0;
      h2 {
        height: px2rem(80);
        line-height: px2rem(80);
        font-size: px2rem(35);
        // padding: px2rem(20) 0;
        text-align: center;
        color: #333;
        border-bottom: px2rem(1) solid gray;
      }
      ul {
        height: px2rem(381);
        overflow-y: scroll;
        padding: 0 px2rem(25);
        li {
          height: px2rem(35);
          margin: px2rem(30) 0;
          padding: 0 px2rem(25);
          font-size: px2rem(25);
          color: #333;
          span {
            font-size: px2rem(25);
            padding: px2rem(2) px2rem(6);
            border-radius: px2rem(5);
            margin-right: px2rem(15);
            background-color: rgb(241, 136, 79);
            color: #fff;
          }
          .first-dan {
            background-color: rgb(112, 188, 70);
          }
          .free-song {
            background-color: rgba(123, 18, 70, 0.8);
          }
        }
      }
      .close-mask {
        position: absolute;
        top: px2rem(30);
        right: px2rem(30);
        margin-top: -px2rem(10);
        i {
          font-size: px2rem(35);
          color: #999;
        }
      }
    }
  }
}
</style>

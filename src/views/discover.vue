<template>
  <div class="gao-discover">
    <div class="gao-discover-top">
      <div class="gao-discover-top-left">
        <div class="left1">
          <p class="p1">金币商城</p>
          <p class="p2">0元好物在这里</p>
        </div>
        <div class="left2">
          <!-- {/* eslint-disable-next-line */} -->
          <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" />
        </div>
      </div>
      <div class="gao-discover-top-right">
        <div class="gao-discover-top-right-right1">
          <div class="gao-discover-top-right-right1-word">
            <p class="p1">推荐有奖</p>
            <p class="p2">10元现金拿不停</p>
          </div>
          <div class="gao-discover-top-right-right1-img">
            <!-- {/* eslint-disable-next-line */} -->
            <img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" />
          </div>
        </div>
        <div class="gao-discover-top-right-right2">
          <div class="gao-discover-top-right-right2-word">
            <p class="p1">周边优惠</p>
            <p class="p2">领取口碑好卷</p>
          </div>
          <div class="gao-discover-top-right-right2-img">
            <!-- {/* eslint-disable-next-line */} -->
            <img src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" />
          </div>
        </div>
      </div>
    </div>
    <div class="gao-discover-content">
      <div class="gao-discover-content-top">
        <p class="p1"><i className="iconfont icon-icon-test"></i>限时好礼</p>
        <p class="p2">金币换豪礼</p>
      </div>
      <div class="gao-discover-content-bottom">
        <div class="bottom1">
          <p class="p1">限时优惠</p>
          <!-- {/* eslint-disable-next-line */} -->
          <p class="p2"><img src="https://fuss10.elemecdn.com/d/e8/e9079650047f1cc00c16474a1e8bdjpeg.jpeg?imageMogr/format/webp/" /></p>
          <p class="p3">3元饿了么鲜果</p>
          <p class="p4">90金币<span>￥3</span></p>
        </div>
        <div class="bottom2">
          <p class="p1">特价换购</p>
          <!-- {/* eslint-disable-next-line */} -->
          <p class="p2"><img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/" /></p>
          <p class="p3">扫地机器人</p>
          <p class="p4">9金币<span>￥99</span></p>
        </div>
        <div class="bottom3">
          <p class="p1">特价换购</p>
          <!-- {/* eslint-disable-next-line */} -->
          <p class="p2"><img src="https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/" /></p>
          <p class="p3">电动按摩理疗仪</p>
          <p class="p4">9金币<span>￥239</span></p>
        </div>
      </div>
      <div
        class="gao-discover-content-more"
        onClick={this.toUrl}
      >
        查看更多<i class="iconfont icon-chevron-copy-copy"></i>
      </div>
    </div>
    <div class="gao-discover-bottom">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.gao-discover {
  flex: 1;
  display: flex;
  flex-direction: column;

  &-top {
    flex: 2;
    display: flex;
    justify-content: space-between;
    background: white;
    margin-bottom: px2rem(15);
    &-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .left1 {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 px2rem(10);
        line-height: px2rem(30);
        .p1 {
          font-size: px2rem(20);
          color: rgb(255, 153, 0);
        }
        .p2 {
          color: #999;
          font-size: px2rem(14);
        }
      }
      .left2 {
        flex: 1;
        img {
          float: right;
          width: p2rem(80);
          height: px2rem(80);
        }
      }
    }
    &-right {
      flex: 1;
      display: flex;
      padding: 0 px2rem(10);
      flex-direction: column;
      border-left: 1px solid #ededed;
      &-right1 {
        border-bottom: 1px solid #ededed;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: px2rem(30);
        &-word {
          .p1 {
            font-size: px2rem(20);
            color: rgb(27, 169, 225);
          }
          .p2 {
            color: #999;
            font-size: px2rem(14);
          }
        }
        &-img {
          img {
            height: px2rem(50);
            width: px2rem(50);
          }
        }
      }
      &-right2 {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: px2rem(30);
        &-word {
          .p1 {
            font-size: px2rem(20);
            color: rgb(237, 102, 96);
          }
          .p2 {
            color: #999;
            font-size: px2rem(14);
          }
        }
        &-img {
          img {
            height: px2rem(50);
            width: px2rem(50);
          }
        }
      }
    }
  }
  &-content {
    flex: 4;
    display: flex;
    background: white;
    flex-direction: column;
    padding: 0 px2rem(10);
    &-top {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      .p1 {
        font-size: px2rem(20);
        font-weight: 700;
        .icon-icon-test {
          color: #ff5339;
        }
      }
      .p2 {
        color: #999;
        margin-top: px2rem(5);
        font-size: px2rem(12);
      }
    }
    &-bottom {
      flex: 3;
      display: flex;
      .bottom1 {
        flex: 1;
        margin-right: px2rem(10);
        .p1 {
          background: black;
          width: px2rem(60);
          text-align: center;
          font-size: px2rem(14);
          color: white;
        }
        .p2 {
          img {
            height: px2rem(100);
            width: px2rem(120);
          }
        }
        .p3 {
          font-size: px2rem(15);
          margin-bottom: px2rem(10);
        }
        .p4 {
          font-size: px2rem(15);
          color: #ff5339;
          span {
            font-size: px2rem(12);
            color: #aaa;
            text-decoration: line-through;
          }
        }
      }
      .bottom2 {
        flex: 1;
        margin-right: px2rem(10);
        .p1 {
          background: black;
          width: px2rem(60);
          text-align: center;
          font-size: px2rem(14);
          color: white;
        }
        .p2 {
          img {
            height: px2rem(100);
            width: px2rem(120);
          }
        }
        .p3 {
          font-size: px2rem(15);
          margin-bottom: px2rem(10);
        }
        .p4 {
          font-size: px2rem(15);
          color: #ff5339;
          span {
            font-size: px2rem(12);
            color: #aaa;
            text-decoration: line-through;
          }
        }
      }
      .bottom3 {
        flex: 1;
        .p1 {
          background: black;
          width: px2rem(60);
          text-align: center;
          font-size: px2rem(14);
          color: white;
        }
        .p2 {
          img {
            height: px2rem(100);
            width: px2rem(120);
          }
        }
        .p3 {
          font-size: px2rem(15);
          margin-bottom: px2rem(10);
        }
        .p4 {
          font-size: px2rem(15);
          color: #ff5339;
          span {
            font-size: px2rem(12);
            color: #aaa;
            text-decoration: line-through;
          }
        }
      }
    }
    &-more {
      text-align: center;
      height: px2rem(40);
      color: #999;
      font-size: px2rem(15);
    }
  }
  &-bottom {
    flex: 2;
  }
}
</style>

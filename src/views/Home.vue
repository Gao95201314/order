<template>
  <div
    class="hungry"
    ref="top"
    @scroll="goPageTop"
  >
    <div
      class="goTop"
      :style="goTop"
      @click.stop="scrollToAnchor()"
    ><img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"
        alt=""
      />
    </div>
    <div
      class="header"
      id="header"
    >
      <i class="iconfont icon-tubiao-1 dingwei"></i>
      <router-link
        to="/detailCity"
        class="arial"
      >{{curCity}}</router-link>

    </div>
    <div class="foot-t">
      <router-link
        to="/search"
        class="food"
      ><span class="iconfont icon-sousuo ">搜索商家名称</span></router-link>
    </div>
    <div class="huadong">
      <ul class="banner">
        <li
          v-for="(item,index) in banners"
          :key="index"
        >
          <router-link
            to="/detail"
            class="detail"
          >
            <img
              :src="item.imgUrl"
              :key="index"
            />
            <span>{{item.discribe}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="banner">
        <li
          v-for="(item,index) in banner"
          :key="index"
        >
          <router-link
            to="/detail"
            class="detail"
          >
            <img
              :src="item.imgUrl"
              :key="index"
            />
            <span>{{item.discribe}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="special">
      <p> <img src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/" /><span className='h2'>超级会员·</span>每月领20元红包</p>
      <router-link
        to="#"
        class="on"
      >立即开通<i class="iconfont icon-iconfonti"></i></router-link>
    </div>
    <div class="rub">
      <router-link
        to="/"
        class="same"
      >
        <h3>品质套餐</h3>
        <p>搭配齐全吃的好</p>
        <span class="d1">立即抢购<i class="iconfont icon-iconfonti"></i></span>
        <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" />
      </router-link>
      <router-link
        to="/"
        class="same"
      >
        <h3 class="red">限量抢购</h3>
        <p>超值美味9.9元起</p>
        <span><em>187人</em>正在抢<i class="iconfont icon-iconfonti"></i></span>
        <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" />
      </router-link>
    </div>
    <div class="block">
      <el-carousel
        height="150px"
        arrow="never"
      >
        <el-carousel-item
          v-for="(item,index) in lunbo"
          :key="index"
        >
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tuijian">
      <p>—— 推荐商家 ——</p>
    </div>
    <div class="paixu">
      <p
        @click.stop="zongSort()"
        style="cursor: pointer;"
      >综合排序</p>
      <p
        @click.stop="range()"
        style="cursor: pointer;"
      >距离最近</p>
      <p>品质联盟</p>
      <p>筛选</p>

    </div>
    <ul class="list">
      <li
        v-for="(item,index) in list"
        :key="index"
      >
        <div
          @click="detailPage(item.sid)"
          class="detail"
        >
          <img
            :src="item.logo"
            :key="index"
          />
          <div class="right">
            <i>品牌</i><span>{{item.name}}</span>
            <p><span>{{item.score}}</span>&nbsp;<span>{{item.pingjia}}</span>月售{{item.month_sales_count}}单</p>
            <div class="line">
              <p>￥{{item.delivery_start_price}}起送 | 配送费 ￥{{item.delivery_fee}}</p><span>{{item.juli}}m | {{item.minite}}分钟</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      id="allmap"
      v-show="false"
    ></div>
  </div>
</template>
<script>
import date from "../api/date.json";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      goTop: { display: "none" },
      banner: [
        {
          discribe: "麻辣烫",
          imgUrl:
            "https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "素食简餐",
          imgUrl:
            "https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "地方小吃",
          imgUrl:
            "https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "大牌惠吃",
          imgUrl:
            "https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "米粉面管",
          imgUrl:
            "https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "包子粥店",
          imgUrl:
            "https://fuss10.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "炸鸡炸串",
          imgUrl:
            "https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "汉堡披萨",
          imgUrl:
            "https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "鸭脖卤味",
          imgUrl:
            "https://fuss10.elemecdn.com/b/70/9fd298fa84d49748984e082777e90jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        }
      ],
      banners: [
        {
          discribe: "美食",
          imgUrl:
            "https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "下午茶",
          imgUrl:
            "https://fuss10.elemecdn.com/7/a9/77ff360f7d3fde2d459727ad09fcfjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "商场便利",
          imgUrl:
            "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "水果",
          imgUrl:
            "https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "医药健康",
          imgUrl:
            "https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "鲜花绿植",
          imgUrl:
            "https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "厨房生鲜",
          imgUrl:
            "https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "甜品饮品",
          imgUrl:
            "https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "签到领红包",
          imgUrl:
            "https://fuss10.elemecdn.com/5/de/bebe83947afee0b0f38257b0e3866jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          discribe: "地方菜系",
          imgUrl:
            "https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        }
      ],
      lunbo: [
        "https://fuss10.elemecdn.com/7/90/8012dcb83434050f0363316f24809jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/",
        "https://fuss10.elemecdn.com/d/f5/456ea6285819f7932d8606bffeb35jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/",
        "https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
      ],
      list: []
    };
  },
  created() {
    this.getInfoList();
    this.getCityName();
  },
  //从vuex里面获取城市
  computed: {
    ...mapState(["curCity"])
  },
  methods: {
    //获取数据
    getInfoList() {
      this.list = date;
    },
    //页面改变城市信息，触发vuex里面changeCity的方法改变state里面城市信息
    ...mapMutations(["changeCity"]),
    //获取定位城市信息
    getCityName() {
      // 当前没有城市
      if (!this.curCity) {
        // 让他不没有找到的错误
        /* eslint-disable */
        var myCity = new BMap.LocalCity();
        myCity.get(result => {
          this.changeCity(result.name);
        });
      }
    },
    //到顶部
    goPageTop(e) {
      var top = this.$refs.top.scrollTop;
      if (top > 200) {
        this.goTop = { display: "block" };
      } else {
        this.goTop = { display: "none" };
      }
    },
    //锚点定位
    scrollToAnchor() {
      // 找到锚点
      let anchorElement = document.getElementById("header");
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
    //去到相应的商家详情页面
    detailPage(sid) {
      this.$router.push("/shopDetail/order");
      localStorage.setItem("shopId", sid);
    },
    //根据距离最近来排序
    range() {
      return (this.list = this.list.sort((a, b) => {
        return a.juli - b.juli;
      }));
    },
    //综合排序
    zongSort() {
      var zongScore = 0;
      for (let i = 0; i < date.length; i++) {
        zongScore = date[i].month_sales_count * 0.15 + date[i].score * 0.1;
        date[i].zongheScore = zongScore.toFixed(2);
      }
      return (this.list = this.list.sort((a, b) => {
        return a.zongheScore - b.zongheScore;
      }));
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.hungry {
  touch-action: none;
  a {
    text-decoration: none;
  }
  .goTop {
    position: fixed;
    z-index: 9999999999;
    border-radius: 50%;
    background: #fff;
    height: px2rem(40);
    width: px2rem(40);
    bottom: px2rem(84);
    line-height: px2rem(40);
    border: px2rem(1) solid #999;
    right: px2rem(25);
    text-align: center;
    img {
      height: px2rem(20);
      width: px2rem(20);
      margin-top: px2rem(10);
    }
  }
  background-color: white;
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  height: px2rem(1000);
  .header {
    height: px2rem(50);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    line-height: px2rem(50);
    .dingwei {
      position: absolute;
      height: px2rem(20);
      width: px2rem(20);
      top: px2rem(5);
      left: px2rem(7);
      color: #fff;
      font-size: px2rem(20);
    }
    .arial {
      padding-top: px2rem(7);
      font-size: px2rem(18);
      display: inline-block;
      height: px2rem(50);
      width: 100%;
      color: white;
      // padding: px2rem();
      padding-left: px2rem(29);
      font-weight: bold;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }

  .foot-t {
    position: sticky;
    top: 0;
    height: px2rem(65);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    text-align: center;
    z-index: 999999;
    padding-top: px2rem(5);
    // padding-bottom: px2rem(5);

    .food {
      margin-top: px2rem(5);
      display: inline-block;
      height: px2rem(45);
      width: px2rem(346);
      background-color: white;
      line-height: px2rem(40);
      font-family: simsun;
      border-radius: px2rem(2);
      background: #fff;
      color: #999;
      font-size: px2rem(14);
      -webkit-tap-highlight-color: transparent;
    }
  }
  .huadong {
    display: flex;
    overflow: auto;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 0;
      height: 0;
    }
    .banner {
      width: 100%;
      height: px2rem(150);
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
      li {
        text-align: center;
        width: 20%;
        display: flex;
        flex-direction: column;

        .detail {
          display: inline-block;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        img {
          width: px2rem(50);
        }

        span {
          color: #666;
          text-align: center;
          font-size: px2rem(10);
        }
      }
    }
  }

  .special {
    margin-left: px2rem(10);
    margin-top: px2rem(10);
    width: 95%;
    height: px2rem(40);
    background: linear-gradient(#f3dda0, #bb8f204f);

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: px2rem(20);
    }

    p {
      margin-left: px2rem(10);
      display: inline-block;
      font-size: px2rem(10);
    }

    .h2 {
      display: inline-block;
      font-size: px2rem(10);
      color: #644f1b;
      font-weight: bold;
      margin-left: px2rem(10);
    }

    .on {
      font-size: px2rem(10);
      color: #644f1b;
    }
  }

  .rub {
    margin-top: px2rem(5);
    height: px2rem(140);
    display: flex;
    justify-content: center;
    margin-bottom: px2rem(5);

    .same {
      padding-top: px2rem(15);
      padding-left: px2rem(10);
      height: 100%;
      width: 48%;
      background-color: #f4f4f4;
      margin-right: px2rem(2.5);

      h3 {
        font-size: px2rem(18);
        font-weight: bold;
        color: black;
      }

      .red {
        color: red;
      }

      p {
        margin: px2rem(10) 0;
        font-size: px2rem(15);
        color: #777;
      }

      img {
        width: px2rem(90);
        float: right;
      }

      span {
        font-size: px2rem(13);
        font-weight: bold;
        color: #333;

        em {
          color: red;
        }
      }

      .d1 {
        color: #af8260;
      }
    }
  }
  .swiper-container {
    height: px2rem(110);
    img {
      width: 100%;
    }
  }
  .tuijian {
    margin-top: px2rem(10);
    text-align: center;
    font-size: px2rem(15);
  }

  .paixu {
    background-color: white;
    position: sticky;
    top: px2rem(65);
    z-index: 999999;

    height: px2rem(50);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #666;
    font-size: px2rem(14);
    // border-top:px2rem(0.5)#eeeeeef2 solid;
    border-bottom: px2rem(0.5) #eeeeeef2 solid;
  }

  .list {
    font-size: px2rem(15);

    li {
      padding-right: px2rem(10);
      padding-top: px2rem(10);
      height: px2rem(100);
      border-bottom: px2rem(0.5) #eeeeeef2 solid;
      padding-left: px2rem(10);
    }

    img {
      width: px2rem(50);
      float: left;
    }

    i {
      font-size: px2rem(10);
      display: inline-block;
      background: yellow;
      width: px2rem(40);
      height: px2rem(20);
      color: #69690a;
      font-weight: bold;
      text-align: center;
      line-height: px2rem(20);
      margin-right: px2rem(10);
    }

    span {
      color: #000000bd;
      font-weight: bold;
    }

    p {
      margin-top: px2rem(10);
      font-size: px2rem(10);
      color: #666;

      span {
        color: #666;
        font-weight: 100;
      }
    }
  }

  .right {
    margin-left: px2rem(70);
  }
  .line {
    p {
      float: left;
    }
    span {
      float: right;
      font-size: px2rem(5);
      font-weight: 520;
      color: #666;
    }
  }
}
</style>

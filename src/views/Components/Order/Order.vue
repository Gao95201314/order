<template>
  <div>
    <div>
      <!-- {/* 单品宣传轮播图 */} -->
      <div class='publicityaa'>
        <div class="block">
          <span class="demonstration"></span>
          <el-carousel
            arrow="never"
            indicator-position="none"
            height="95px"
          >
            <el-carousel-item
              v-for="(item,index) in data"
              :key="index"
            >
              <img
                :src="item"
                alt="elem"
                style="width: '100%'; verticalAlign: 'top'"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- <mt-swipe :show-indicators="false">
          <mt-swipe-item
            v-for="(item,index) in data"
            :key="index"
          >
            <img
              :key="index"
              :src="item"
              alt="elem"
              style="width: '100%'; verticalAlign: 'top'"
            />
          </mt-swipe-item>
        </mt-swipe> -->
      </div>
      <h2>商家推荐</h2>
      <!-- {/* 商家推荐 ul横向滚动列表 */} -->
      <div class='recommend'>
        <ul>
          <li>
            <img
              alt="elem"
              src="//fuss10.elemecdn.com/f/73/645a9dc56249fd49ae07ef93f2a2djpeg.jpeg?imageMogr/format/webp/thumbnail/240x/"
            />
            <p class='goods-title'>A组合</p>
            <p class='goods-sales'>月售15 好评率100%</p>
            <div>
              <span><i class='iconfont icon-renminbi'></i>66.6</span>
              <!-- <i class='iconfont icon-jia'></i> -->
            </div>
          </li>
          <li>
            <img
              alt="elem"
              src="//fuss10.elemecdn.com/c/c8/34f45de2f6e213743ba976c537ab7jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/"
            />
            <p class='goods-title'>无辣不欢组合</p>
            <p class='goods-sales'>月售8 好评率89%</p>
            <div>
              <span><i class='iconfont icon-renminbi'></i>58.8</span>
              <!-- <i class='iconfont icon-jia'></i> -->
            </div>
          </li>
          <li>
            <img
              alt="elem"
              src="//fuss10.elemecdn.com/d/33/841750b7cc2bd7e86b2c5ded2e46fjpeg.jpeg?imageMogr/format/webp/thumbnail/240x/"
            />
            <p class='goods-title'>两人套餐饭</p>
            <p class='goods-sales'>月售15 好评率100%</p>
            <div>
              <span><i class='iconfont icon-renminbi'></i>88.8</span>
              <!-- <i class='iconfont icon-jia'></i> -->
            </div>
          </li>
          <li>
            <img
              alt="elem"
              src="//fuss10.elemecdn.com/c/c7/ba8cbc5eae0bc242da93942ebde91jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/"
            />
            <p class='goods-title'>香芋地瓜丸</p>
            <p class='goods-sales'>月售8 好评率60%</p>
            <div>
              <span><i class='iconfont icon-renminbi'></i>38.9</span>
              <!-- <i class='iconfont icon-jia'></i> -->
            </div>
          </li>
        </ul>
      </div>

      <!-- {/* 商品列表 */} -->
      <goodlist></goodlist>
    </div>
  </div>
</template>
<script>
// import { Swipe, SwipeItem } from "mint-ui";
import goodlist from "./GoodsList.vue";
export default {
  name: "Order",
  components: { goodlist },
  data() {
    return {
      data: [
        "//fuss10.elemecdn.com/4/31/27fb8498c5beb0a18f5fe07e4b541png.png?imageMogr/format/webp/thumbnail/686x/",
        "//fuss10.elemecdn.com/8/5d/5c17e8c37ae87fd9ad46d84d57eccpng.png?imageMogr/format/webp/thumbnail/686x/",
        "//fuss10.elemecdn.com/7/1b/eac126f486afd64f30ac6889c358cpng.png?imageMogr/format/webp/thumbnail/686x/",
        "//fuss10.elemecdn.com/4/f3/cdb5977b8a152cf3d8100147f8807png.png?imageMogr/format/webp/thumbnail/686x/"
      ]
    };
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../px2rem.scss";
// 宣传图
.publicityaa {
  height: px2rem(190);
  text-align: center;
  background-color: white;
  padding: 0 px2rem(35);
  img {
    width: 100%;
    border-radius: px2rem(8);
  }
}
h2 {
  font-size: px2rem(32);
  padding: px2rem(32) 0 0 px2rem(32);
  color: #333;
}
// 推荐
.recommend {
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0;
    height: 0;
  }
  padding-top: px2rem(20);
  height: px2rem(467);
  background-color: white;
  ul {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    overflow-y: scroll;
    margin-top: px2rem(26);
    padding: 0 px2rem(20);
    li {
      margin: 0 px2rem(10);
      min-width: px2rem(240);
      height: px2rem(408);
      // border: 1px solid red;
      // margin-left: px2rem(20);
      img {
        width: 100%;
      }
      .goods-title {
        font-size: px2rem(30);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #333;
        margin: px2rem(14) 0 px2rem(7);
      }
      .goods-sales {
        font-size: px2rem(23);
        color: #999;
        margin: px2rem(15) 0;
      }
      div {
        margin: px2rem(20) 0;
        height: px2rem(44);
        line-height: px2rem(44);
        display: flex;
        justify-content: space-between;
        span {
          font-size: px2rem(35);
          color: rgb(255, 83, 57);
          i {
            color: rgb(255, 83, 57);
            font-size: px2rem(25);
          }
        }
        i {
          font-size: px2rem(50);
          // line-height: px2rem(30);
          color: #2395ff;
        }
      }
    }
  }
}
</style>

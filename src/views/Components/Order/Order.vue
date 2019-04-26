<template>
  <div>
    <div>
      <!-- {/* 单品宣传轮播图 */} -->
      <!-- <div class='publicityaa'>
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
      </div> -->
      <h2>商家推荐</h2>
      <!-- {/* 商家推荐 ul横向滚动列表 */} -->
      <div class='recommend'>
        <ul>
          <li
            v-for="(item,index) in elemGoods"
            :key="index"
          >
            <img
              alt="elem"
              :src="item.images[0]"
            />
            <p class='goods-title'>{{item.name}}</p>
            <p class='goods-sales'>月售{{item.month_sales_count}}好评率{{item.recommends_rate}}</p>
            <div>
              <span><i class='iconfont icon-renminbi'></i>{{item.price}}</span>
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
import data from "@/api/date.json";
export default {
  name: "Order",
  components: { goodlist },
  data() {
    return {
      elemGoods: [],
      shopName: ""
    };
  },
  created() {
    this.getShopDetailList();
  },
  methods: {
    //获取推荐数据
    getShopDetailList() {
      let shopId = localStorage.getItem("shopId");
      let dataList = [];
      data.map(item => {
        if (item.sid === shopId) {
          dataList[0] = item;
          this.shopName = item.name;
        }
        return dataList[0];
      });
      let products = dataList[0].products;
      products.map(item => {
        return item.products.map(i => {
          return (i.num = 1);
        });
      });
      this.elemGoods = products[0].products;
      this.elemGoods = this.elemGoods.slice(2, 6);
    }
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

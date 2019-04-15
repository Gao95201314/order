<template>
  <div class='goods-list'>
    <ul class='goods-type'>
      <li
        v-for="(item,index) in elemGoods"
        :key="index"
        :class="[index === curTab ? 'cur-goods-type' : '']"
        @click="scrollToAnchor(elemGoods[index].category,index)"
      >
        <span>{{item.category}}</span>
      </li>
    </ul>

    <div class='goods-detail'>
      <dl>
        <div
          v-for="(item1,index1) in elemGoods"
          :key="index1"
        >
          <dt :id="elemGoods[index1].category">{{item1.category}}</dt>
          <dd
            v-for="(item2,index2) in elemGoods[index1].products"
            :key="index2"
          >
            <div class='goods-pic'><img
                :src="item2.images"
                alt='elem'
              /></div>
            <div class='goods-det'>
              <h2>{{item2.name}}</h2>
              <p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售{i.month_sales_count}份</span>
              <div class='h3'>
                <div><span>￥{{item2.price}}</span></div>
                <div class='inandre'>
                  <i
                    class='iconfont icon-jian1'
                    @click="redCart(item2)"
                  ></i>
                  <span>{{goodNum(item2.pid)}}</span>
                  <i
                    class='iconfont icon-jia'
                    @click="addCart(item2)"
                  ></i>
                </div>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
    <!-- {/* 底部购物车 */} -->
    <div class="b">
      <div class="l">
        <p> </p>
        <div class="y">
          <span>￥{{payMoney()}}</span>
          <div class="zi">另需配送费￥5</div>
        </div>
      </div>
      <router-link to="/order">
        <div class="r">去结算</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import data from "@/api/date.json";
export default {
  data() {
    return {
      curTab: 0,
      arr: [],
      cartList: [],
      elemGoods: [],
      username: ""
    };
  },
  created() {
    this.getcategory();
    this.getShopDetailList();
    this.username = localStorage.getItem("username");
    this.cartList = localStorage.getItem(this.username + "cartList")
      ? JSON.parse(localStorage.getItem(this.username + "cartList"))
      : [];
  },
  methods: {
    //锚点定位
    scrollToAnchor(anchorName, index) {
      this.curTab = index;
      if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    },
    // 获取侧边字
    getcategory() {
      for (var i = 0; i < this.elemGoods.length; i++) {
        this.arr.push(this.elemGoods[i].category);
      }
    },
    // 判断食品数量
    goodNum(id) {
      let cartGood = this.cartList.find(item => {
        return item.pid === id;
      });
      return cartGood ? cartGood.num : 0;
    },
    // 食品总额
    payMoney() {
      let tatolMoney = 0;
      this.cartList.forEach(element => {
        let price = element.price.split("元")[0];
        return (tatolMoney += parseInt(price) * element.num);
      });
      return tatolMoney ? tatolMoney : 0;
    },
    //获取商品数据
    getShopDetailList() {
      let shopId = localStorage.getItem("shopId");
      let dataList = [];
      data.map(item => {
        if (item.sid === shopId) {
          dataList[0] = item;
        }
        return dataList[0];
      });
      let products = dataList[0].products;
      products.map(item => {
        return item.products.map(i => {
          return (i.num = 1);
        });
      });
      this.elemGoods = products;
    },
    // 加入购物车
    addCart(food) {
      var flag = false; //默认存在
      var index = 0; //获取下标
      for (var i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].pid === food.pid) {
          flag = true;
          index = i;
          break;
        } else {
          flag = false;
        }
      }
      if (flag) {
        let num = this.cartList[index].num + 1;
        let cartList = this.cartList;
        let updateData = Object.assign({}, cartList[index], { num: num });
        for (var j = 0; j < cartList.length; j++) {
          if (cartList[j].pid === food.pid) {
            cartList.splice(j, 1, updateData);
            break;
          }
        }
        // console.log(cartList);
        // console.log(updateData);
        this.cartList = cartList;
        localStorage.setItem(
          this.username + "cartList",
          JSON.stringify(this.cartList)
        );
      } else {
        // 不存在
        let data2 = this.cartList;
        data2.push(food);
        this.cartList = data2;
        localStorage.setItem(
          this.username + "cartList",
          JSON.stringify(this.cartList)
        );
      }
    },

    // 从购物减去
    redCart(food) {
      var flag = false; //默认存在
      var index = 0; //获取下标
      for (var i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].pid === food.pid) {
          flag = true;
          index = i;
          break;
        } else {
          flag = false;
        }
      }
      if (flag) {
        // 存在
        if (this.cartList[index].num === 1) {
          let cartList = this.cartList;
          for (var k = 0; k < cartList.length; k++) {
            if (cartList[k].pid === food.pid) {
              cartList.splice(k, 1);
              break;
            }
          }
          this.cartList = cartList;
          localStorage.setItem(
            this.username + "cartList",
            JSON.stringify(this.cartList)
          );
          return false;
        }
        let num = this.cartList[index].num - 1;
        let cartList = this.cartList;
        let updateData = Object.assign({}, cartList[index], { num: num });
        for (var j = 0; j < cartList.length; j++) {
          if (cartList[j].pid === food.pid) {
            cartList.splice(j, 1, updateData);
            break;
          }
        }
        this.cartList = cartList;
        localStorage.setItem(
          this.username + "cartList",
          JSON.stringify(this.state.cartList)
        );
      } else {
        return false;
      }
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../px2rem.scss";
// 商品/食物列表
.goods-list {
  margin-top: px2rem(25);
  font-size: px2rem(25);
  // position: relative;
  height: px2rem(1250);
  overflow-y: scroll;
  display: flex;
  // 商品分类 ul
  .goods-type {
    width: 25%;
    background-color: #f8f8f8;
    position: sticky;
    top: 0;
    overflow-y: auto;
    .cur-goods-type {
      background-color: white;
    }
    li {
      height: px2rem(100);
      // line-height: px2rem(98);
      display: flex;
      justify-content: center;
      align-items: Center;
      text-align: center;
      color: #333;
      span {
        font-size: px2rem(18);
        a {
          color: #999;
        }
      }
    }
  }
  //分类详情
  .goods-detail {
    width: 100%;
    // background-color: white;
    // padding: px2rem(15);
    dl {
      background-color: white;
      // margin-top: px2rem(25);
    }
    dt {
      margin: px2rem(10) px2rem(10);
      font-size: px2rem(28);
      font-weight: bolder;
      color: #666;
    }
    dd {
      font-size: px2rem(25);
      height: px2rem(230);
      display: flex;
      align-items: center;
      justify-content: space-around;
      .goods-pic {
        width: px2rem(170);
        height: px2rem(170);
        img {
          width: 100%;
        }
      }
      .goods-det {
        width: px2rem(366);
        height: px2rem(197);
        h2 {
          font-weight: 800;
          font-size: px2rem(27);
          color: #333;
          margin: px2rem(20) 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          font-size: px2rem(20);
          margin: px2rem(15) 0;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        span {
          display: inline-block;
          font-size: px2rem(20);
          color: #999;
        }
        .h3 {
          display: flex;
          justify-content: space-between;
          font-size: px2rem(25);
          margin: px2rem(25) 0;
          line-height: px2rem(28);
          div {
            span {
              font-size: px2rem(25);
              color: rgb(255, 83, 57);
            }
          }
          .inandre {
            display: flex;
            justify-content: space-around;
            color: rgb(255, 83, 57);
            // margin-top: px2rem(15);
            width: px2rem(190);
          }
          .icon-jia {
            font-size: px2rem(50);
            color: #2395ff;
          }
          .icon-jian1 {
            font-size: px2rem(50);
            color: rgb(35, 149, 255);
          }
        }
      }
    }
  }
  // 底部购物车
  .b {
    height: px2rem(100) !important;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    .l {
      height: 100%;
      float: left;
      width: 75%;
      background: rgba(61, 61, 63, 0.9);
      // position: absolute;
      p {
        width: px2rem(100);
        height: px2rem(100);
        background-color: #0085fffa;
        background-clip: padding-box;
        border: px2rem(12) solid #191a1b94;
        border-radius: 100%;
        background-image: url(../../../images/1.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-origin: padding-box;
        position: relative;
        margin-top: px2rem(-20);
        margin-left: px2rem(40);
      }
    }
    .r {
      height: 100%;
      float: right;
      width: 25%;
      background: #38ca73;
      text-align: center;
      line-height: px2rem(100);
      font-weight: 600;
      color: white;
    }
    .y {
      margin-top: px2rem(20);
      position: absolute;
      top: -0.1px;
      margin-left: px2rem(200);
      float: right;
      z-index: 99999999999999999999;
      span {
        color: #ffe607;
        font-weight: 700;
        font-size: px2rem(28);
      }
    }
    .zi {
      font-size: px2rem(6);
      margin: px2rem(10) 0;
      color: #999;
    }
  }
}
</style>

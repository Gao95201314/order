<template>
  <div class="foodDetail">
    <div class="tupian"><img
        :src="foodObj.images[0]"
        alt=""
      ><span><i
          class="el-icon-close"
          @click="goToback"
        ></i></span></div>
    <div class="food">
      <p>{{foodObj.name}}</p>
      <p>月销{{foodObj.month_sales_count}}份 好评率{{foodObj.recommends_rate}}</p>
      <p><span>￥{{foodObj.price}}</span><i
          class='iconfont icon-jia'
          @click="addCart(foodObj)"
        ></i></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foodObj: {},
      cartList: [],
      username: ""
    };
  },
  created() {
    this.foodObj = this.$route.params.food;
    this.username = localStorage.getItem("username");
    this.cartList = localStorage.getItem(this.username + "cartList")
      ? JSON.parse(localStorage.getItem(this.username + "cartList"))
      : [];
  },
  methods: {
    // 加入购物车
    addCart(food) {
      var flag = false; //默认不存在
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
        // food.shopName = this.shopName;
        data2.push(food);
        this.cartList = data2;
        localStorage.setItem(
          this.username + "cartList",
          JSON.stringify(this.cartList)
        );
      }
    },
    goToback() {
      this.$router.push("/shopDetail/order");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../px2rem.scss";
.foodDetail {
  .tupian {
    width: 100%;
    height: px2rem(700);
    position: relative;
    img {
      width: 100%;
      height: px2rem(700);
    }
    span {
      display: inline-block;
      width: px2rem(50);
      height: px2rem(50);
      background-color: black;
      border-radius: 50%;
      opacity: 0.2;
      position: absolute;
      top: px2rem(25);
      right: px2rem(25);
      .el-icon-close {
        color: white;
        margin-left: px2rem(5);
        margin-top: px2rem(5);
      }
    }
  }
  .food {
    padding: px2rem(20);
    p:nth-child(1) {
      color: #333;
      font-family: PingFang;
      font-weight: 700;
      font-size: px2rem(50);
      margin-bottom: px2rem(10);
    }
    p:nth-child(2) {
      margin-bottom: px2rem(10);
      color: #666;
      font-size: px2rem(30);
    }
    p:nth-child(3) {
      display: flex;
      justify-content: space-between;
      margin-bottom: px2rem(10);
      span {
        color: red;
        font-size: px2rem(30);
      }
      .icon-jia {
        font-size: px2rem(50);
        color: #2395ff;
      }
    }
  }
}
</style>

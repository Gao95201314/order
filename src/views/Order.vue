<template>
  <div class="order">
    <div
      class="orderBox"
      v-for="(item,index) in orderList"
      :key="index"
    >
      <div class="tupian">
        <img
          :src="item.img"
          alt=""
        >
      </div>
      <div class="detailInfo">
        <div class="orderTop">
          <div class="shopName">
            <p>{{item.name}}</p>
            <p>{{item.orderTime}}</p>
          </div>
          <div class="status">
            订单已送达
          </div>
        </div>
        <div class="orderBottom">
          <div class="orderName">
            <!-- 秀才米线套餐等商品 -->
          </div>
          <div class="price">
            ￥{{item.totalPrice}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      orderList: []
    };
  },
  created() {
    this.username = localStorage.getItem("username");
    this.orderList = localStorage.getItem(this.username + "orderList")
      ? JSON.parse(localStorage.getItem(this.username + "orderList"))
      : [];
  },
  methods: {}
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/common/px2rem.scss";
.order {
  flex: 1;
  // bottom: 0;
  // height: 100%;
  // display: flex;
  // overflow-y: scroll;
  // flex-direction: column;
  // height: px2rem(1000);
  background-color: #f5f5f5;
  .orderBox {
    width: 100%;
    height: px2rem(100);
    padding: px2rem(20);
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin-bottom: px2rem(10);
    .tupian {
      width: px2rem(50);
      margin-right: px2rem(10);
      img {
        width: px2rem(50);
        height: px2rem(50);
        border-radius: 50%;
      }
    }
    .detailInfo {
      flex: 4;
      .orderTop {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        .shopName {
          p:nth-child(1) {
            color: #333;
            margin-bottom: px2rem(5);
            font-size: px2rem(18);
            width: px2rem(200);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-child(2) {
            color: #999;
            margin-bottom: px2rem(5);
            font-size: px2rem(13);
          }
        }
        .status {
          color: #333;
          font-size: px2rem(13);
        }
      }
      .orderBottom {
        display: flex;
        height: px2rem(50);
        justify-content: space-between;
        margin-top: px2rem(5);
        .orderName {
          color: #666;
        }
        .price {
          color: #333;
          font-weight: 700;
          margin-top: px2rem(10);
        }
      }
    }
  }
}
</style>

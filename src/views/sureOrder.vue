<template>
  <div class="order">
    <div class="header">
      <div
        class="iconfont icon-zuojiantou aror"
        @click="goBack"
      ></div>
      <div class="sure">确认订单</div>
    </div>
    <div class="s1">
      <div class="s1-1">
        <p>订单配送至家</p>
        <div
          class="place"
          @click="chooseAddress"
        >{{address}}<i class=" iconfont icon-youjiantou "></i></div>
        <div
          class="xin"
          v-show="address!='请选择地址'"
        >{{username}}</div>
      </div>
      <ul class="song">
        <li>
          <div>送到时间</div>
          <p @click="choose">尽快送达({{time}}送达)<i class=" iconfont icon-youjiantou j"></i></p>
        </li>
        <li>
          <div>支付方式</div>
          <p>在线支付</p>
        </li>
      </ul>
      <div
        class="item"
        v-for="(item,index) in dataArr"
        :key="index"
      >
        <!-- <p
          class="p1"
          style="float:right"
          @click="deleteFood(item.pid)"
        ><i
            class="el-icon-delete"
            style="color:red"
          ></i></p> -->
        <ul class="form">
          <li>
            <div>
              <p>
                <!-- {/* eslint-disable-next-line */} -->
                <img :src="item.images" />
              </p>
              <p class="pname">{{item.name}}</p>
            </div>
            <div>x {{item.num}}</div>
            <div>￥{{parseInt(item.price)}}</div>
          </li>
          <li>
            <div>
              <p class="package">包装</p>
              <p>餐盒</p>
            </div>
            <div>￥1</div>
          </li>
          <li>
            <div>
              <p class="buin">商家</p>
              <p class="mon">配送费</p>
            </div>
            <div>￥1</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="b">
      <div class="l">￥{{getPrice()}}</div>
      <div
        class="r"
        @click="goPayMoney"
      >去支付</div>
    </div>

    <div
      class="choose"
      ref="choose"
      @click="close"
    >
      <div class="top"></div>
      <div class="low">
        <div class="tag">选择送达时间</div>
        <div class="con">
          <div class="con-l">
            <p>今日（{{nowWeek}}）</p>
          </div>
          <div class="con-r">
            <div>尽快送达<em>(1元配送费)</em></div>
            <div
              v-for="(item,index) in dealTimeArr"
              :key="index"
              @click="chooseTime(item)"
            ><b>{{item}}</b> <em>(1元配送费)</em></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      time: "",
      animating: false,
      timeArr: [1200000, 2400000, 3600000, 4800000, 6000000],
      dealTimeArr: [],
      dataArr: [],
      username: "",
      address: "",
      nowTime: new Date(), //当前时间、
      nowWeek: "星期", //星期几
      orderList: [],
      allprice: ""
    };
  },
  created() {
    this.username = localStorage.getItem("username");
    this.address = localStorage.getItem("address")
      ? localStorage.getItem("address")
      : "请选择地址";
    this.orderList = localStorage.getItem(this.username + "orderList")
      ? JSON.parse(localStorage.getItem(this.username + "orderList"))
      : [];
    this.time = this.dateToString();
    this.getData();
    this.addMinites();
    this.getPrice();
    this.getWeek();
  },
  methods: {
    // 得到数据
    getData() {
      this.dataArr = JSON.parse(
        localStorage.getItem(this.username + "cartList")
      );
    },
    //处理分钟
    getDB(num) {
      return num < 10 ? "0" + num : num;
    },
    //处理时间
    dateToString() {
      var date = new Date().getTime();
      var dateStr = "";
      let date1 = date + 600000;
      let date2 = new Date(date1);
      let h = date2.getHours();
      let M = date2.getMinutes();
      // dateStr += y+"年"+getDB(m)+"月"+getDB(d)+"日"
      dateStr += " " + this.getDB(h) + ":" + this.getDB(M);
      return dateStr;
    },
    //送达时间
    addMinites() {
      let dateStr = new Date().getTime();
      let time = [];
      this.timeArr.map(item => {
        let date1 = dateStr + item;
        let date2 = new Date(date1);
        let h = date2.getHours();
        let M = date2.getMinutes();
        let timeStr = "" + this.getDB(h) + ":" + this.getDB(M);
        time.push(timeStr);
        return timeStr;
      });
      this.dealTimeArr = time;
    },
    //格式化时间
    formatDate(time) {
      var moment = require("moment");
      return moment(time).format("YYYY-MM-DD");
    },
    //获取星期几
    getWeek() {
      var dateArray = this.formatDate(new Date()).split("-");
      var date = new Date(
        dateArray[0],
        parseInt(dateArray[1] - 1),
        dateArray[2]
      );
      var week = "星期" + "日一二三四五六".charAt(date.getDay());
      this.nowWeek = week; // 赋值本地数据
    },
    //弹框显示选择时间
    choose() {
      this.$refs["choose"].style.display = "block";
    },
    //选择送达时间
    chooseTime(res) {
      // console.log(res);
      this.time = res;
      this.$refs["choose"].style.display = "none";
    },
    //关闭弹框
    close() {
      this.$refs["choose"].style.display = "none";
    },
    //返回到商家页面
    goBack() {
      this.$router.push("/shopDetail/order");
    },
    //计算总额
    getPrice() {
      let tatolMoney = 0;
      if (this.dataArr) {
        this.dataArr.forEach(element => {
          let price = element.price.split("元")[0];
          return (tatolMoney += parseInt(price) * element.num);
        });
      }
      this.allprice = tatolMoney;
      return tatolMoney ? tatolMoney : 0;
    },
    //删除订单
    // deleteFood(pid) {
    //   for (let i = 0; i < this.dataArr.length; i++) {
    //     if (this.dataArr[i].pid == pid) {
    //       this.dataArr.splice(i, 1);
    //     }
    //   }
    //   localStorage.setItem(
    //     this.username + "cartList",
    //     JSON.stringify(this.dataArr)
    //   );
    // }
    //选择地址
    chooseAddress() {
      this.$router.push("/chooseAddress");
    },
    //去支付
    goPayMoney() {
      Toast({
        message: "支付成功",
        duration: 900
      });
      var date = new Date();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var dateArr =
        this.formatDate(new Date()) +
        " " +
        this.getDB(hour) +
        ":" +
        this.getDB(minute);
      var obj = {};
      obj.img = this.dataArr[0].images[0];
      if (this.dataArr.length > 1) {
        obj.name = this.dataArr[0].name + "等" + this.dataArr.length + "商品";
      } else {
        obj.name = this.dataArr[0].name;
      }
      obj.orderTime = dateArr;
      obj.totalPrice = this.allprice;
      obj.address = this.address;
      this.orderList.unshift(obj);
      localStorage.setItem(
        this.username + "orderList",
        JSON.stringify(this.orderList)
      );
      localStorage.removeItem(this.username + "cartList");
      this.dataArr = [];
      this.$router.push("/order");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/common/px2rem.scss";
.order {
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  // flex: 1;
  overflow-y: scroll;
  .header {
    // text-align: center;
    // position: sticky;
    top: 0;
    width: 100%;
    height: px2rem(50);
    // background: #2395ff;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    line-height: px2rem(50);
    color: white;
    .sure {
      width: px2rem(100);
      height: px2rem(50);
      margin: 0 auto;
      font-weight: bolder;
      font-size: px2rem(20);
    }
    // background-color: linear-gradient(90deg,#0af,#0085ff);
    span {
      margin-left: px2rem(125);
      font-weight: bolder;
    }
    .aror {
      margin-left: px2rem(20);
      float: left;
    }
  }
  .s1 {
    padding-top: px2rem(15);
    min-height: px2rem(700);
    background-image: linear-gradient(
        0deg,
        #f5f5f5,
        #f5f5f5 65%,
        hsla(0, 0%, 96%, 0.3) 75%,
        hsla(0, 0%, 96%, 0)
      ),
      linear-gradient(270deg, #0085ff, #0af);
    color: white;
    .s1-1 {
      padding-top: px2rem(10);
      padding-left: px2rem(15);
      p {
        font-size: px2rem(10);
      }
      .place {
        margin: px2rem(10) 0;
        color: white;
        font-size: px2rem(30);
        font-weight: bolder;
      }
      .xin {
        color: white;
      }
    }

    p {
      font-size: px2rem(8);
      color: #ffffffc7;
    }
    span {
      display: inline-block;
      font-size: px2rem(30);
      font-weight: 600;
      margin: px2rem(10) 0;
      color: white;
      i {
        border: none;
        font-size: px2rem(10);
      }
    }
    div {
      color: #ffffffeb;
      font-size: px2rem(15);
    }
    .song {
      margin-top: px2rem(15);
      height: px2rem(100);
      background: white;
      margin-left: px2rem(5);
      margin-right: px2rem(5);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 px2rem(20);
      li {
        display: flex;
        justify-content: space-between;

        div {
          color: black;
        }
        p {
          font-weight: 520;
          color: #2395ff;
          font-size: px2rem(13);
        }
        i {
          color: #ccc;
          font-size: px2rem(17);
          font-weight: 600;
        }
      }
    }
    .item {
      background-color: white;
      margin: 0 px2rem(5);
      margin-top: px2rem(8);
      padding-left: px2rem(5);
      padding-top: px2rem(10);
      p {
        float: left;
        height: px2rem(20);
        &.p1 {
          font-size: px2rem(17);
          font-weight: 700;
          color: #333;
        }
      }
      .form {
        margin-top: px2rem(30);
        display: block;
        border-top: px2rem(0.5) #edededf0 solid;
        display: flex;
        flex-direction: column;
        padding-left: px2rem(5);
        //   padding-top: px2rem(15);
        background-color: white;

        li {
          margin-bottom: px2rem(20);
          height: px2rem(40);
          padding-top: px2rem(20);
          color: black;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-right: px2rem(10);
          div {
            color: black;
            font-weight: 500;
            .pname {
              font-size: px2rem(16);
            }
          }
          img {
            width: px2rem(35);
            margin-right: px2rem(10);
          }
          .xiao {
            font-size: px2rem(5);
            font-weight: 100;
            font-weight: 300;
            margin-top: px2rem(10);
            font-weight: 400;
          }
          div {
            .package {
              width: px2rem(30);
              height: px2rem(15);
              font-size: px2rem(1);
              border: px2rem(1) #ccc solid;
              background: #ededed;
              margin-right: px2rem(10);
              text-align: center;
              line-height: px2rem(13);
            }

            p {
              font-size: px2rem(12);
              color: black;
              line-height: px2rem(15);
            }
            .buin {
              background: #2395ff;
              width: px2rem(25);
              height: px2rem(15);
              text-align: center;
              //   font-size: px2rem(1);
              color: white;
              font-weight: 400;
              line-height: px2rem(15);
              margin-right: px2rem(10);
              // font-size: px2rem(1)
              font-weight: 400;
              font-size: 1px !important;
            }
            .mon {
              font-weight: 400;
            }
          }
        }
      }
    }
  }
  .b {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: px2rem(50);
    background: #00e067;
    color: white;
    .l {
      float: left;
      width: 70%;
      height: 100%;
      background: #3c3c3c;
      padding-left: px2rem(10);
      line-height: px2rem(50);
    }
    .r {
      float: right;
      width: 30%;
      height: 100%;
      text-align: center;
      line-height: px2rem(50);
    }
  }
  .choose {
    position: fixed;
    z-index: 11;
    width: 100%;
    height: 100%;
    display: none;
    // background: blue;
    top: 0;
    .top {
      width: 100%;
      height: 60%;
      background: #000000a3;
    }
    .low {
      height: 40%;
      background: #eee;
      display: flex;
      flex-direction: column;
      .tag {
        height: px2rem(40);
        text-align: center;
        line-height: px2rem(40);
      }
      .con {
        flex: 1;
        display: flex;

        .con-l {
          flex: 2;
          p {
            font-size: px2rem(14);
            background: white;
            height: px2rem(40);
            line-height: px2rem(40);
          }
        }
        .con-r {
          flex: 4;
          background: white;

          // display: flex;
          // flex-direction: column;
          padding: 0 px2rem(10);
          overflow-y: scroll;
          div {
            // padding-top: px2rem(10);
            border-bottom: px2rem(0.5) #ddddddbd solid;
            height: px2rem(50);
            line-height: px2rem(50);
            font-size: px2rem(14);
            color: #333333cf;
            font-weight: 540;
            text-shadow: -1px 1px 2px #bbbbbb7a;
            b {
              font-size: px2rem(13);
              font-weight: 530;
            }
            em {
              font-size: px2rem(8);
              color: #aaa;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
}
</style>

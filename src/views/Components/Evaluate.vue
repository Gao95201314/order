<template>
  <div>
    <div class='shop-grade'>
      <div>
        <h2>4.8</h2>
        <div>
          <p>商家评分</p>
          <img
            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4='
            alt='elem'
          />
        </div>
      </div>
      <ul>
        <li>味道<span>4.8</span></li>
        <li>包装<span>4.7</span></li>
        <li>配送<span>4.8</span></li>
      </ul>
    </div>
    <p class='bgbg'></p>
    <div class='evaluate'>
      <ul class='evaluate-type'>
        <li class='cur-type'>全部&nbsp;</li>
        <!-- <li class=''>满意&nbsp;<span>239</span></li> -->
        <!-- {/* bad-type-cur选中不满意 */} -->
        <!-- <li class='bad-type'>不满意&nbsp;<span>5</span></li> -->
        <!-- <li class=''>有图&nbsp;<span>19</span></li> -->
        <li
          style="color:white;background:#0097ff"
          @click="addEvaluate"
        >添加评价</li>
      </ul>
      <p class='only-content'><i class='iconfont icon-dui'></i> 只看有内容的评价</p>
      <!-- {/* 评价列表 */} -->
      <ul class='evaluate-list'>
        <li
          v-for="(item1,index1) in pingScored"
          :key="index1"
        >
          <div class='user-head'>tou</div>
          <div class='user-evaluate'>
            <p class='uesr-and-time'><span class='uesr-eva-name'>用户名...</span><span>2019-01-03</span></p>
            {{item1.pingyu}}
            <p class='uesr-eva-grade'>
              <el-rate
                style="margin-bottom:10px"
                v-model="item1.sored"
                show-text
                :allow-half="true"
                :colors="['#99A9BF', '#F7BA2A', 'red']"
              >
              </el-rate>
            </p>
            <p class='uesr-eva-pic'><img
                v-for="(item2,index2) in item1.picture"
                :key="index2"
                :src="require('../../images/'+item2.name)"
              /></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import date from "@/api/date.json";
export default {
  data() {
    return {
      pingLun: [],
      username: "",
      pingScored: []
    };
  },
  created() {
    this.getPingLunList();
  },
  methods: {
    addEvaluate() {
      this.$router.push("/addEvaluate");
    },
    //获取评论
    getPingLunList() {
      this.pingLun = localStorage.getItem("scored")
        ? JSON.parse(localStorage.getItem("scored"))
        : [];
      var sid = localStorage.getItem("shopId");
      if (this.pingLun.length != 0) {
        for (let i = 0; i < this.pingLun.length; i++) {
          if (this.pingLun[i].sid == sid) {
            this.pingScored = this.pingLun[i].pingScored;
            return;
          }
        }
        // this.pingScored.forEach((item1, index1) => {
        //   item1.picture.forEach((item2, index2) => {
        //     if (item2.name.substring(0, 1) == 2) {
        //       item2.url1 = require("../../images/2.jpg");
        //     } else if (item2.name.substring(0, 1) == 3) {
        //       item2.url1 = require("../../images/3.jpg");
        //     }
        //   });
        // });
      }
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../px2rem.scss";
.shop-grade {
  height: px2rem(191);
  display: flex;
  div {
    margin: 0 px2rem(30);
    display: flex;
    align-self: center;
    h2 {
      font-size: px2rem(80);
      color: #ff6000;
      font-weight: 400;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: px2rem(112);
      height: px2rem(58);
      p {
        font-size: px2rem(25);
      }
      img {
        height: px2rem(20);
      }
    }
  }
  ul {
    display: flex;
    flex: 1;
    justify-content: space-around;
    padding-right: px2rem(20);
    li {
      align-self: center;
      text-align: center;
      color: #666;
      font-size: px2rem(25);
      span {
        display: block;
        font-size: px2rem(38);
        margin-top: px2rem(15);
      }
    }
  }
}
.bgbg {
  background-color: rgba(10, 10, 10, 0.1);
  height: px2rem(15);
}
.evaluate {
  padding: px2rem(30) px2rem(20);
  .evaluate-type {
    display: flex;
    li {
      width: px2rem(130);
      height: px2rem(56);
      line-height: px2rem(56);
      text-align: center;
      font-size: px2rem(23);
      border-radius: px2rem(5);
      margin-left: px2rem(15);
      color: #666;
      background-color: #ebf5ff;
      &.cur-type {
        color: white;
        background-color: #0097ff;
      }
    }
    .bad-type {
      color: gray;
      background-color: #f5f5f5;
      &.bad-type-cur {
        color: white;
        background-color: rgba(128, 128, 128, 0.5);
      }
    }
  }
  .only-content {
    font-size: px2rem(25);
    height: px2rem(80);
    line-height: px2rem(80);
    border-top: px2rem(1) solid gray;
    border-bottom: px2rem(1) solid gray;
    margin-top: px2rem(20);
    padding-left: px2rem(30);
    opacity: 0.6;
    i {
      color: green;
      font-size: px2rem(25);
      line-height: px2rem(80);
    }
  }
  .evaluate-list {
    height: px2rem(351);
    li {
      display: flex;
      padding: px2rem(30) 0 px2rem(40);
      border-bottom: px2rem(1) solid gray;
      .user-head {
        height: px2rem(60);
        width: px2rem(60);
        margin-right: px2rem(15);
        border-radius: 50%;
        border: 1px solid red;
        line-height: px2rem(50);
        text-align: center;
        font-size: px2rem(30);
      }
      .user-evaluate {
        flex: 1;
        .uesr-and-time {
          display: flex;
          justify-content: space-between;
          height: px2rem(35);
          margin: px2rem(10) 0;
          font-size: px2rem(22);
          color: gray;
          .uesr-eva-name {
            color: #111;
            font-size: px2rem(25);
          }
        }
        .uesr-eva-grade {
          margin: px2rem(15) 0;
          img {
            width: px2rem(120);
            height: px2rem(20);
          }
        }
        .uesr-eva-pic {
          height: 100%;
          img {
            width: px2rem(150);
          }
        }
        .uesr-eva-name {
        }
      }
    }
  }
}
</style>

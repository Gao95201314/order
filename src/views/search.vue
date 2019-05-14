<template>
  <div class="search">
    <div class="header">
      <span
        class="iconfont icon-zuojiantou"
        @click="back"
      ></span>
      <input
        ref="search"
        i="search"
        type="search"
        placeholder="输入商家名称"
        @change="search"
      />
      <p>搜索</p>
    </div>
    <ul>
      <li
        class="s-li"
        v-for="(item,index) in list"
        :key="index"
        @click="toDetail(item.sid)"
      >
        <img
          :src="item.logo"
          alt="好吃"
          :key="index"
        />

        <div>
          <span>
            {{item.name}}<b>减</b>
          </span>

          <span class="s-fen">{{`评价4.7`}}</span>
        </div>

      </li>
    </ul>

    <div
      class="s-hot"
      ref="hot"
    >
      <p>热门搜索</p>
      <div class="section">
        <span>
          牛肉面
        </span>
        <span>
          麻辣烫
        </span>
        <span>小碗子</span>
        <span>生煎</span>
      </div>
    </div>

  </div>
</template>
<script>
import date from "../api/date.json";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {},
  methods: {
    //搜索
    search() {
      this.$refs["hot"].style.display = "none";
      var arr = date;
      var myVal = this.$refs["search"].value;
      var newArr = arr.filter(item => {
        return item.name.indexOf(myVal) > -1;
      });
      this.list = newArr;
    },
    //返回首页
    back() {
      this.$router.push({ name: "home" });
    },
    //根据商家进入到详情页面
    toDetail(sid) {
      this.$router.push("/shopDetail/order");
      localStorage.setItem("shopId", sid);
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.search {
  height: 100%;
  width: 100%;
  background: white;
  .header {
    height: px2rem(50);
    display: flex;
    padding-top: px2rem(10);
    justify-content: space-between;
    align-items: center;
    margin-bottom: px2rem(30);
    span {
      flex: 1;
      font-size: px2rem(18);
      color: #888888cf;
    }
    input {
      flex: 4;
      background-color: #f8f8f8;
      border: none;
      height: px2rem(30);
      padding-left: px2rem(15);
      font-size: px2rem(15);
      margin-right: px2rem(17);
      color: #ccc;
    }
    p {
      flex: 1;
    }
  }
  .s-li {
    height: px2rem(40);
    display: flex;
    font-size: px2rem(10);
    align-items: center;
    padding: 0 px2rem(10);
    // justify-content:space-between;
    div {
      display: flex;
      justify-content: space-between;
      flex: 5;
      border-bottom: px2rem(0.5) #eee solid;
      height: 100%;
    }
    span {
      font-size: px2rem(13);
      line-height: px2rem(30);
      b {
        background: red;
        color: white;
        border-radius: 4px;
        font-size: px2rem(3);
        width: px2rem(7);
        height: px2rem(5);
        // line-height: px2rem(5);
        margin-left: px2rem(10);
      }
    }
    .s-fen {
      font-size: px2rem(10);
      color: #ccc;
    }
    img {
      width: px2rem(30);
      float: left;
      margin-right: px2rem(20);
    }
  }
  .s-hot {
    p {
      font-weight: 500;
      color: #666;
      font-size: px2rem(17);
      margin-bottom: px2rem(30);
      padding-left: px2rem(10);
    }
    .section {
      padding-left: px2rem(10);

      span {
        padding: px2rem(5) px2rem(8);
        background-color: #f7f7f7;
        margin-right: px2rem(10);
        font-size: px2rem(15);
        color: #666;
      }
    }
  }
}
</style>

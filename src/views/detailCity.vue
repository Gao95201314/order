<template>
  <div class="lv-cityDetail">
    <header>
      <i
        class="iconfont icon-fanhui"
        @click="goBack()"
      ></i>
      选择收货地址
    </header>
    <div class="search">
      <div
        class="city"
        @click="goCity()"
      >{{curCity}} ∨</div>
      <input
        ref="search"
        i="search"
        type="search"
        class="inp"
        placeholder="输入地址"
        @change="search"
      />
      <p>搜索</p>
    </div>
    <ul class="all-cinemas">
      <li
        class="cinemas-list-item"
        v-for="(item,index) in list"
        :key="index"
        @click="goBackTo(item.short_address)"
      >
        <div class="cinema-info-lf cinema-info">
          <p class="cinema-name">{{item.name}}</p>
          <p class="cinema-address">{{item.address}}</p>
        </div>
        <div class="cinema-info-rt cinema-info">
          {{item.distance}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import date from "../api/cityDetail.json";
// import { Toast } from "mint-ui";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      list: ""
    };
  },
  created() {},
  //从vuex里面获取城市
  computed: {
    ...mapState(["curCity"])
  },
  methods: {
    //跳转到选择城市页面
    goCity() {
      this.$router.push({ name: "city" });
    },
    //页面改变城市信息，触发vuex里面changeCity的方法改变state里面城市信息
    ...mapMutations(["changeCity"]),
    //选择地址后返回首页
    goBackTo(name) {
      // Toast({
      //   message: "选择地址成功",
      //   duration: 900
      // });
      this.$router.push({ name: "home" });
      localStorage.setItem("address", name);
    },
    //返回首页
    goBack() {
      this.$router.push({ name: "home" });
    },
    //搜索
    search() {
      var arr = date;
      var myVal = this.$refs["search"].value;
      var newArr = arr.filter(item => {
        return item.name.indexOf(myVal) > -1;
      });
      this.list = newArr;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../styles/common/px2rem.scss";
.lv-cityDetail {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  header {
    height: px2rem(44);
    background: #fff;
    text-align: center;
    line-height: px2rem(44);
    font-size: px2rem(17);
    background: #0085ff;
    color: #fff;

    i {
      position: absolute;
      left: px2rem(15);
      font-size: px2rem(25);
    }
  }

  .search {
    height: px2rem(56);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .city {
      flex: 1;
      height: px2rem(56);
      text-align: center;
      line-height: px2rem(56);
      font-size: px2rem(14);
    }
    .inp {
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

  .all-cinemas {
    flex: 1;
    height: 100%;
    overflow: scroll;
    .cinemas-list-item {
      border-bottom: px2rem(1) solid #ededed;
      height: px2rem(75);
      background-color: #fff;
      padding: px2rem(15);
      .cinema-info {
        float: left;
        .cinema-name {
          color: #191a1b;
          font-size: px2rem(15);
          margin-top: px2rem(6);
        }
        .cinema-address {
          color: #797d82;
          font-size: px2rem(12);
          margin-top: px2rem(5);
          width: px2rem(265);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .cinema-info-rt {
        float: right;
        font-size: px2rem(14);
        margin-top: px2rem(16);
      }
    }
  }
}
</style>

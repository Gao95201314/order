<template>
  <div class="address">
    <div class="chooseAddress"><i
        class="iconfont icon-zuojiantou aror"
        @click="goBack"
      ></i><span>添加地址</span></div>
    <div class="linkMan">
      <span>联系人</span>
      <input
        type="text"
        class="inp"
        v-model="params.linkMan"
        placeholder="姓名"
      >
    </div>
    <div class="linkMan">
      <span>电话</span>
      <input
        type="text"
        class="inp"
        v-model="params.phone"
        placeholder="手机号码"
      >
    </div>
    <div class="linkMan">
      <span>地址</span>
      <input
        type="text"
        class="inp"
        v-model="params.address"
        placeholder="小区/写字楼/学校等"
      >
    </div>
    <div class="linkMan">
      <span>门牌号</span>
      <input
        type="text"
        class="inp"
        v-model="params.doorHao"
        placeholder="10号楼5层501室222"
      >
    </div>
    <div class="but">
      <div
        class="buttom"
        @click="addAddress"
      >
        保存
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      params: {
        linkMan: "",
        phone: "",
        address: "",
        doorHao: ""
      },
      allAddress: []
    };
  },
  created() {
    this.allAddress = localStorage.getItem("allAddress")
      ? JSON.parse(localStorage.getItem("allAddress"))
      : [];
  },
  methods: {
    //返回到上一级
    goBack() {
      this.$router.push("/chooseAddress");
    },
    //保存
    addAddress() {
      function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var id = rand(1000, 9999);
      this.params.id = id;
      this.allAddress.push(this.params);
      localStorage.setItem("allAddress", JSON.stringify(this.allAddress));
      Toast({
        message: "恭喜，添加成功",
        duration: 800
      });
      this.$router.push("/chooseAddress");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/common/px2rem.scss";
.address {
  flex: 1;
  background-color: #efeff4;
  .chooseAddress {
    color: white;
    height: px2rem(50);
    display: flex;
    align-items: center;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    font-weight: 600;
    span {
      margin-left: 35%;
    }
  }
  .linkMan {
    background-color: white;
    padding: 0 px2rem(10);
    span {
      display: inline-block;
      width: px2rem(50);
      height: px2rem(40);
      font-weight: 600;
      font-size: px2rem(16);
      margin-right: px2rem(10);
      text-align: right;
    }
    .inp {
      width: 80%;
      border: none;
      outline: none;
      height: px2rem(40);
      font-size: px2rem(15);
      border-bottom: px2rem(2) solid #f5f5f5;
    }
  }
  .but {
    padding: px2rem(20);
    .buttom {
      background-color: #00d762;
      height: px2rem(40);
      line-height: px2rem(40);
      text-align: center;
      color: white;
    }
  }
}
</style>

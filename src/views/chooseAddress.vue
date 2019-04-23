<template>
  <div class="address">
    <div class="chooseAddress"><i
        class="iconfont icon-zuojiantou aror"
        @click="goBack"
      ></i><span>选择地址</span></div>
    <div class="allAddressInfo">
      <ul>
        <li
          v-for="(item,index) in allAddress"
          :key="index"
          @click="chooseAddress(item.address)"
        >
          <div class="addressInfo">
            <div class="left">
              <p><span class="name">{{item.linkMan}}</span><span class="phone">{{item.phone}}</span></p>
              <p>{{item.address}}{{item.doorHao}}</p>
            </div>
            <div class="right">
              <span class="adit"><i
                  class="el-icon-edit-outline"
                  @click.stop="editAddress(item.id)"
                ></i></span>
              <span class="deleteAddress"><i
                  class="el-icon-close"
                  @click.stop="deleteAddress(item.id)"
                ></i></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="addAddress"
      @click="addAddress"
    >
      <i class="el-icon-circle-plus-outline"></i><span>新增收货地址</span>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
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
      this.$router.push("/order");
    },
    //编辑地址
    editAddress(id) {
      this.$router.push({ name: "editAddress", params: { id: id } });
    },
    //删除地址
    deleteAddress(id) {
      let arr = this.allAddress;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
          arr.splice(i, 1);
          break;
        }
      }
      this.addAddress = arr;
      localStorage.setItem("allAddress", JSON.stringify(this.addAddress));
      Toast({
        message: "恭喜，删除成功",
        duration: 800
      });
    },
    //添加新地址
    addAddress() {
      this.$router.push("/addHomeAddress");
    },
    chooseAddress(address) {
      localStorage.setItem("address", address);
      this.$router.push("/order");
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
  .allAddressInfo {
    .addressInfo {
      display: flex;
      justify-content: space-between;
      height: px2rem(100);
      background-color: white;
      padding: px2rem(10);
      border-bottom: px2rem(1) solid #f5f5f5;
      .left {
        flex: 5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p:nth-child(1) {
          height: px2rem(30);
          font-size: px2rem(18);
          .name {
            font-weight: 600;
          }
          .phone {
            color: #666;
          }
        }
        p:nth-child(2) {
          height: px2rem(30);
          color: #666;
          font-size: px2rem(15);
          line-height: px2rem(20);
        }
      }
      .right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .addAddress {
    position: fixed;
    bottom: 0%;
    width: 100%;
    height: px2rem(60);
    background-color: white;
    line-height: px2rem(60);
    text-align: center;
    color: #3190e8;
    font-size: px2rem(17);
  }
}
</style>

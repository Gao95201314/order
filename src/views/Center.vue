<template>
  <div class="center">
    <div class="profile-1vcJW">
      <section>
        <div class="profile-3g0uv">
          <div class="index-18Ili">
            <img
              src="../images/tou2.jpg"
              alt=""
              style="width: 60px;
        height: 60px;
        border-radius: 50%;
              "
            >
          </div>
          <div class="profile-xfCcC">
            <p class="profile-1_mtk">
              <span
                ref="abab"
                v-show="flag"
              >{{userInfoUser}}</span>
              <span
                ref="baba"
                @click="toLogin"
                v-show="!flag"
              >登录/注册</span>
            </p>
            <p class="profile-1UP72">
              <i class="iconfont icon-shouji"></i>
              <span
                ref="aabb"
                v-show="flag"
              >{{username}}</span>
              <span
                ref="bbaa"
                v-show="!flag"
              >登录后享受更多特权</span>
            </p>
          </div>
          <span
            class="profile-2XuMq"
            ref="jiantou"
            v-show="flag"
          >
            <i
              class="iconfont"
              @click="toUpdateUser"
            >＞</i>
          </span>
        </div>
      </section>
      <!-- {/* 这里写未登录时需要引入的组件 */} -->
      <div
        data-spm="maininfo"
        class="index-1G7HV"
        ref="ooxx"
        v-show="username==''"
      >
        <div
          class="index-1ryAh"
          @click="toLogin"
        >
          <p>
            <span class="index-2FmrF">
              <i class="iconfont icon-renminbi2"></i>
            </span>
            <!-- {/* <span class="index-2V-Hh">元</span> */} -->
          </p>
          <p class="index-3S6cZ">钱包</p>
        </div>
        <div
          class="index-1ryAh"
          @click="toLogin"
        >
          <p>
            <span class="index-2FmrF red">
              <i class="iconfont icon-hongbao"></i>
            </span>
            <!-- {/* <span class="index-2V-Hh red">个</span> */} -->
          </p>
          <p class="index-3S6cZ">红包</p>
        </div>
        <div
          class="index-1ryAh"
          @click="toLogin"
        >
          <p>
            <span class="index-2FmrF green">
              <i class="iconfont icon-qian2"></i>
            </span>
            <!-- {/* <span className="index-2V-Hh green">个</span> */} -->
          </p>
          <p class="index-3S6cZ">金币</p>
        </div>
      </div>
      <div
        data-spm="maininfo"
        class="index-1G7HV"
        ref="xxoo"
        v-show="username!=''"
      >
        <div class="index-1ryAh">
          <p>
            <span class="index-2FmrF">0.00</span>
            <span class="index-2V-Hh">元</span>
          </p>
          <p class="index-3S6cZ">钱包</p>
        </div>
        <div class="index-1ryAh">
          <p>
            <span class="index-2FmrF red">1</span>
            <span class="index-2V-Hh red">个</span>
          </p>
          <p class="index-3S6cZ">红包</p>
        </div>
        <div class="index-1ryAh">
          <p>
            <span class="index-2FmrF green">0</span>
            <span class="index-2V-Hh green">个</span>
          </p>
          <p class="index-3S6cZ">金币</p>
        </div>
      </div>
      <section class="profile-1reTe">
        <div class="index-2MEEn">
          <div class="index-161Mm">
            <i class="iconfont icon-dizhi address"></i>
          </div>
          <div class="index-yydpu">
            我的地址
            <span class="index-3Z8It">
              <!-- <i class="iconfont ">＞</i> -->
            </span>
          </div>
        </div>
      </section>
      <section class="profile-1reTe">
        <div class="index-2MEEn">
          <div class="index-161Mm">
            <i class="iconfont icon-shangcheng2 glod"></i>
          </div>
          <div class="index-yydpu">
            金币商城
            <span class="index-3Z8It"></span>
          </div>
        </div>
        <div class="index-2MEEn">
          <div class="index-161Mm">
            <i class="iconfont icon-liwulipinjiangpin gift"></i>
          </div>
          <div class="index-yydpu">
            分享拿10元现金
            <span class="index-3Z8It">
            </span>
          </div>
        </div>
      </section>
      <section class="profile-1reTe">
        <div class="index-2MEEn">
          <div class="index-161Mm">
            <i class="iconfont icon-wodekefu address"></i>
          </div>
          <div class="index-yydpu">
            我的客服
            <span class="index-3Z8It"></span>
          </div>
        </div>
        <!-- <div class="index-2MEEn">
          <div class="index-161Mm">
            <i class="iconfont icon-changyonglogo40 address"></i>
          </div>
          <div class="index-yydpu">
            下载APP
            <span class="index-3Z8It"></span>
          </div>
        </div> -->
      </section>
      <div
        class="profile-2dyk_"
        @click="rules"
      >
        规则中心
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfoUser: "",
      username: "",
      flag: false
    };
  },
  created() {
    if (localStorage.getItem("username")) {
      //   this.$refs["xxoo"].style.display = "none";
      //   this.$refs["aabb"].style.display = "none";
      //   this.$refs["abab"].style.display = "none";
      //   this.$refs["jiantou"].style.display = "none";
      // } else {
      //   this.$refs["ooxx"].style.display = "none";
      //   this.$refs["bbaa"].style.display = "none";
      //   this.$refs["baba"].style.display = "none";
      this.flag = true;
      let userName = JSON.parse(localStorage.getItem("username"));
      this.username = userName;
      this.userInfoUser = localStorage.getItem("user");
    } else {
      this.flag = false;
    }
  },
  methods: {
    toLogin() {
      this.$router.push({ name: "login" });
    },
    rules() {
      this.$router.push();
    },
    toUpdateUser() {
      this.$router.push("/updateUser");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.center {
  flex: 1;
  display: flex;
  .profile-1vcJW {
    // min-height: 100vh;
    width: 100%;
    .profile-3g0uv {
      display: flex;
      background-image: linear-gradient(90deg, #0af, #0085ff);
      padding: px2rem(25) px2rem(15);
      color: #fff;
      align-items: center;
      .index-18Ili {
        border-radius: 50%;
        width: px2rem(60);
        height: px2rem(60);
        span {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background: url("../images/logo.png");
          background-position: px2rem(0) px2rem(60);
          background-size: px2rem(60);
          display: inline-block;
        }
      }
      .profile-xfCcC {
        overflow: hidden;
        margin-left: px2rem(18);
        flex-grow: 1;
        .profile-1_mtk {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 0.9rem;
          margin-bottom: 2.133333vw;
          font-weight: 700;
          display: flex;
          align-items: center;
          span:nth-child(2) {
            a {
              color: white;
            }
          }
        }
        .profile-1UP72 {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          align-items: center;
          font-size: px2rem(14);
          display: flex;
          font-weight: 400;
          i {
            font-size: px2rem(14);
          }
        }
      }
      .profile-2XuMq {
        font-size: px2rem(12);
        font-weight: 700;
        color: #fff;
        height: px2rem(21);
        a {
          color: white;
          i {
            font-size: px2rem(20);
          }
        }
      }
    }
  }
}
.index-1G7HV {
  display: table;
  width: 100%;
  height: px2rem(84);
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .index-1ryAh {
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    p {
      margin: 0;
      font-weight: 400;
      display: block;
      .index-2FmrF {
        color: rgb(0, 152, 251);
        padding: px2rem(17) 0 px2rem(11);
        font-size: px2rem(26);
        line-height: px2rem(26);
        font-weight: 700;
      }
      .index-2V-Hh {
        color: rgb(0, 152, 251);
        font-size: px2rem(14);
        font-weight: 400;
        text-align: center;
      }
      .red {
        color: rgb(255, 95, 62);
      }
      .green {
        color: rgb(106, 194, 11);
      }
    }
    .index-3S6cZ {
      margin-top: px2rem(4.9);
      font-size: px2rem(14);
      line-height: px2rem(14);
      color: #666;
      font-weight: 700;
    }
  }
  .index-1ryAh:not(:last-child) {
    border-right: px2rem(1) solid #ddd;
  }
}
.profile-1reTe {
  margin-top: px2rem(10);
  border-top: px2rem(1) solid #ddd;
  border-bottom: px2rem(1) solid #ddd;
  font-size: px2rem(16);
  line-height: 4.533333vw;
  background: #fff;
  .index-2MEEn {
    font-size: px2rem(16);
    color: #333;
    display: flex;
    align-items: center;
    padding-left: px2rem(25);
    .index-161Mm {
      margin-left: px2rem(-10);
      margin-right: px2rem(15);
      i {
        font-size: px2rem(18);
        display: block;
        width: px2rem(10);
        height: px2rem(10);
        line-height: px2rem(10);
      }
      .address {
        color: rgb(74, 165, 240);
      }
      .gift {
        color: rgb(252, 123, 83);
      }
      .glod {
        color: rgb(106, 194, 11);
      }
    }
    .index-yydpu {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: px2rem(14) px2rem(8) px2rem(14) 0;
      .index-3Z8It {
        font-size: px2rem(12);
        color: #333;
      }
    }
  }
}
.index-2MEEn:not(:last-child) .index-yydpu {
  border-bottom: px2rem(1) solid #eee;
}
.profile-2dyk_ {
  text-align: center;
  margin: px2rem(18.75) auto;
  opacity: 0.7;
  color: #2395ff;
  font-size: px2rem(12);
  a {
    outline: none;
    color: inherit;
    text-decoration: none;
  }
}
.icon-renminbi2,
.icon-hongbao,
.icon-qian2 {
  font-size: px2rem(25) !important;
}
</style>

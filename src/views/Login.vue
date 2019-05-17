<template>
  <div class="login">
    <div class="App-1EAON">
      <div class="App-3Q8Qb">
        <div class="LoginHeader-1jXn6">
          <div class="img">
            <img
              src='../images/elme.jpg'
              alt=""
            />
          </div>
        </div>
        <div>
          <div class="MessageLogin-iYvWA">
            <section class="MessageLogin-FsPlX">
              <input
                type="tel"
                placeholder="手机号"
                :value="phone"
                @change="handleGetInputValue($event)"
              />
              <!-- {/* <InputItem type="phone"  placeholder="186 1234 1234" >手机号码</InputItem> */} -->
              <button
                class="CountButton-3e-kd"
                ubt-click="101161"
                @click="getPhonecode"
                ref="dis"
              >
                {{captchaBtnText}}
              </button>
            </section>
            <section class="MessageLogin-FsPlX">
              <input
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <div id="_umfp"></div>
            <div
              id="slideVerify"
              class="nc-container"
            ></div>
            <section class="MessageLogin-15xD9">
              新用户登录即自动注册，并表示已同意
              <a href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18">《用户服务协议》</a>
            </section>
            <button
              class="SubmitButton-2wG4T"
              @click="login"
            >
              登录
            </button>
          </div>
          <div class="MessageLogin-31EIr">关于我们</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import cook from "../utils/cookie";
import cook2 from "../utils/cookie2";
import cook3 from "../utils/cookie3";
import getCookieValue from "../utils/cookie3";
import { Toast } from "mint-ui";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      code: "",
      codes: "",
      captchaBtnText: "获取验证码"
    };
  },
  computed: {},
  methods: {
    //电话号码
    handleGetInputValue(e) {
      this.phone = e.target.value;
      if (/^1[34578]\d{9}$/.test(this.phone)) {
        this.$refs["dis"].style.color = "blue";
      } else {
        this.$refs["dis"].style.color = "gray";
      }
    },
    //获取验证码
    getPhonecode() {
      if (
        this.captchaBtnText == "获取验证码" ||
        this.captchaBtnText == "重新获取"
      ) {
        if (this.phone === "15111521187") {
          axios
            .post("/api/login", { codenum: this.code, phone: this.phone })
            .then(res => {
              console.log(res.data.body, "短信发送成功!");
              this.$refs["dis"].style.color = "gray";
              this.codes = res.data.body.codes;
              cook("secondsremained", 60, 60); //设置过期时间并进行加密
              const countdown = getCookieValue("secondsremained")
                ? getCookieValue("secondsremained")
                : 0; //获取过期的时间，并进行解密
              if (countdown !== undefined && countdown > 0) {
                this.settime(); //调用倒计时减减方法
              }
            });
        } else {
          Toast({
            message: "手机号码错误",
            duration: 1000
          });
        }
      }
    },
    //登录
    login() {
      if (
        this.phone === "15111521187" &&
        this.code !== "" &&
        this.code === this.codes
      ) {
        localStorage.setItem("username", this.phone);
        localStorage.setItem("user", "32a2b96");
        let redirect = this.$route.query.redirect;
        if (redirect) {
          this.$router.push(redirect);
        } else {
          this.$router.push("/");
        }
      } else if (this.code === "") {
        Toast({
          message: "请输入验证码！！",
          duration: 1000
        });
      } else {
        Toast({
          message: "验证码错误！！",
          duration: 1000
        });
      }
    },
    //倒计时
    settime() {
      let countdown = 60;
      countdown = cook3("secondsremained");
      this.timer = setInterval(() => {
        if (countdown <= 0) {
          clearInterval(this.timer);
          this.captchaBtnText = "重新获取";
        } else {
          this.captchaBtnText = `已发送` + countdown + "s";
          countdown--;
        }
        cook2("secondsremained", countdown, countdown + 1); //设置减减之后过期时间
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.login {
  .am-toast-text {
    position: absolute;
    bottom: px2rem(100);
    right: px2rem(100);
    width: px2rem(170);
    border-radius: px2rem(20) !important;
  }

  background-color: #fff;
  width: 100%;
  height: 100%;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  .App-1EAON {
    height: auto;
    min-height: 100%;
    padding-top: px2rem(40);
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    .App-3Q8Qb {
      width: px2rem(300);
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      justify-content: flex-start;
      .LoginHeader-1jXn6 {
        text-align: center;
        img {
          width: px2rem(300);
          height: px2rem(150);
        }
      }
    }
    .App-3Q8Qb > div:last-child {
      min-height: 296px;
    }
  }
}
.MessageLogin-iYvWA {
  margin-top: px2rem(16);
  .MessageLogin-FsPlX {
    position: relative;
    margin-bottom: px2rem(16);
    height: px2rem(48);
    font-size: px2rem(14);
    background: #fff;
    > input {
      width: 100%;
      height: 100%;
      left: 0;
      padding-left: px2rem(10);
      border: px2rem(1) solid #ddd;
      border-radius: px2rem(4);
      color: #333;
      outline: none;
      box-sizing: border-box;
      -webkit-appearance: none;
    }
    > * {
      display: inline-block;
      position: absolute;
      top: 50%;
      right: px2rem(10);
      transform: translateY(-50%);
    }
    .CountButton-3e-kd {
      color: #ccc;
      padding: 0;
      border-radius: px2rem(6);
      background: transparent;
      text-align: center;
      font-size: px2rem(14);
      outline: none;
      border: none;
    }
  }
  .MessageLogin-15xD9 {
    margin-top: px2rem(12);
    color: #999;
    font-size: px2rem(14);
    line-height: px2rem(20);
  }
  .SubmitButton-2wG4T {
    display: block;
    width: 100%;
    height: px2rem(42);
    margin-top: px2rem(30);
    border-radius: px2rem(4);
    background: #4cd96f;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: px2rem(16);
    line-height: px2rem(42);
    outline: none;
    border: none;
  }
}
.MessageLogin-31EIr {
  display: block;
  margin-top: px2rem(20);
  text-align: center;
  color: #999;
  font-size: px2rem(12);
}
.MessageLogin-FsPlX > input:focus {
  border-color: #0089dc;
}
</style>

<template>
  <div class="updateUserInfo">
    <div class="touxiang">
      <div
        class="gao-tou"
        style="margin-left:10px"
      ><span>头像</span></div>
      <div
        class="gao-img"
        style="margin-right:10px"
      ><img
          src="../images/tou2.jpg"
          alt=""
        ></div>
    </div>
    <div class="username">
      <div
        class="gao-user"
        style="margin-left:10px"
      ><span>用户名</span></div>
      <div
        class="gao-info"
        style="margin-right:10px;"
      >
        <span style="color:#C0C0C0">{{userInfo}}<i
            class="el-icon-arrow-right"
            @click="toUpdateName"
          ></i></span>
      </div>
    </div>
    <el-button
      type="primary"
      style="width:100%;margin-top:10px;height:8%;font-size:20px;"
      @click="layOutLogin"
    >退出登录</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: "",
      username: ""
    };
  },
  created() {
    this.userInfo = localStorage.getItem("user");
    this.username = localStorage.getItem("username");
  },
  methods: {
    //去到修改用户名页面
    toUpdateName() {
      this.$router.push("/updateUserName");
    },
    layOutLogin() {
      localStorage.setItem("username", "");
      localStorage.setItem("user", "");
      this.$router.push("/login");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.updateUserInfo {
  background-color: #f8f8f8;
  flex: 1;
  .touxiang {
    background-color: white;
    height: px2rem(80);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .gao-img {
      img {
        width: px2rem(60);
        height: px2rem(60);
        border-radius: 50%;
      }
    }
    border-bottom: 1px solid #f8f8f8;
  }
  .username {
    background-color: white;
    height: px2rem(50);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .gao-user {
    }
  }
}
</style>

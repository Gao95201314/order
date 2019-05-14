<template>
  <div class="gao-username">
    <div class="gao-username-update">
      <input
        type="text"
        v-model="username"
        placeholder="用户名"
      />
    </div>
    <div class="gao-username-info">
      <p>用户名只能修改一次(5-24个字)</p>
    </div>
    <div
      class="gao-username-sure"
      @click="changeUser()"
    >
      <p>确认修改</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  created() {
    this.username = localStorage.getItem("user");
  },
  methods: {
    changeUser() {
      localStorage.setItem("user", this.username);
      this.$router.push("/center");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.gao-username {
  &-update {
    height: px2rem(50);
    background: white;
    margin-top: px2rem(20);
    input {
      height: px2rem(46);
      border: none;
      outline: none;
      width: px2rem(360);
      margin-left: px2rem(10);
    }
  }
  &-info {
    height: px2rem(40);
    display: flex;
    align-items: center;
    font-size: px2rem(12);
    color: #9999;
    margin-left: px2rem(10);
  }
  &-sure {
    display: inline-block;
    height: px2rem(50);
    width: px2rem(355);
    margin: 0 px2rem(10);
    background: #fc7b53;
    text-align: center;
    color: white;
    line-height: px2rem(50);
    border-radius: px2rem(5);
  }
}
</style>

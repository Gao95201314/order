<template>
  <div class="home">
    <router-view></router-view>
    <NavBar></NavBar>
  </div>
</template>
<script>
import NavBar from "../components/NavBar/index";
export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../styles/common/px2rem.scss";

.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

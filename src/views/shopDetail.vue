<template>
  <div>
    <common></common>

    <router-view></router-view>
  </div>
</template>
<script>
import evaluate from "@/views/Components/Evaluate.vue";
import seller from "@/views/Components/Seller.vue";
import common from "@/views/Components/common.vue";
export default {
  name: "shopDetail",
  components: { evaluate, seller, common },
  data() {
    return {
      shopSid: ""
    };
  },
  created() {
    if (this.$route.params.id) {
      this.shopSid = this.$route.params.id;
    }
  },
  methods: {}
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/common/px2rem.scss";
</style>

<template>
  <div class="evaluate">
    <router-link
      to="/shopDetail/evaluate"
      class='iconfont icon-zuojiantou-'
    ></router-link>
    <div class="pingfen">
      <p style="text-align:center;color:#409EFF">对商家评分</p>
      <el-rate
        style="text-align:center;margin-bottom:10px"
        v-model="sored"
        show-text
        :allow-half="true"
        @change="changeScores"
        :colors="['#99A9BF', '#F7BA2A', 'red']"
      >
      </el-rate>
      <el-input
        type="textarea"
        placeholder="菜品口味如何，服务周到吗？（写够15字才是好同志）"
        v-model="pingyu"
      ></el-input>
    </div>
    <div class="shangchuan">
      <p style="color:#409EFF;text-align:center">上传图片效果更好哟</p>
      <el-upload
        class="tupian"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="shangSuccess"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img
          width="100%"
          :src="dialogImageUrl"
          alt=""
        >
      </el-dialog>
    </div>
    <el-button
      style="width:100%;"
      type="primary"
      @click="fabu"
    >提交发布</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sored: null,
      pingyu: "",
      dialogImageUrl: "",
      dialogVisible: false,
      fileListArr: [],
      params: localStorage.getItem("scored")
        ? JSON.parse(localStorage.getItem("scored"))
        : []
    };
  },
  created() {
    var paramss = localStorage.getItem("scored")
      ? JSON.parse(localStorage.getItem("scored"))
      : [];
  },
  methods: {
    //文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    //点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //文件上传成功时的钩子
    shangSuccess(response, file, fileList) {
      this.fileListArr = fileList;
    },
    //改变后的分值
    changeScores() {},
    //提交发布
    fabu() {
      var sid = localStorage.getItem("shopId");
      if (this.params.length == 0) {
        var obj1 = {};
        var obj2 = {};
        var pingArr = [];
        obj2.sored = this.sored;
        obj2.pingyu = this.pingyu;
        obj2.picture = this.fileListArr;
        pingArr.push(obj2);
        obj1.sid = sid;
        obj1.pingScored = pingArr;
        this.params.push(obj1);
        localStorage.setItem("scored", JSON.stringify(this.params));
      } else if (this.params.length != 0) {
        this.params.forEach((item, index) => {
          if (item.sid == sid) {
            var obj3 = {};
            obj3.sored = this.sored;
            obj3.pingyu = this.pingyu;
            obj3.picture = this.fileListArr;
            item.pingScored.push(obj3);
            return;
          } else if (item.sid != sid) {
            var obj1 = {};
            var obj2 = {};
            var pingArr = [];
            obj2.sored = this.sored;
            obj2.pingyu = this.pingyu;
            obj2.picture = this.fileListArr;
            pingArr.push(obj2);
            obj1.sid = sid;
            obj1.pingScored = pingArr;
            this.params.push(obj1);
          }
        });
        localStorage.setItem("scored", JSON.stringify(this.params));
        this.$router.push({ name: "evaluate" });
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/common/px2rem.scss";
.evaluate {
  a {
    text-decoration: none;
  }
  .icon-zuojiantou- {
    color: #409eff;
  }
  flex: 1;
  background-image: linear-gradient(180deg, #ffffff, #f5f5f5);
  .pingfen {
    p {
      font-size: px2rem(18);
      color: white;
      margin-top: px2rem(40);
      margin-bottom: px2rem(20);
    }
  }
  .shangchuan {
    background-color: white;
    margin-top: px2rem(10);
    p {
      color: white;
      margin-bottom: px2rem(20);
    }
  }
}
</style>

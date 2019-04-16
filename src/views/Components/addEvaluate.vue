<template>
  <div class="evaluate">
    <p
      style="float:right;color:	#FF4500"
      @click="fabu"
    >发布</p>
    <div class="pingfen">
      <p style="">对商家评分</p>
      <el-rate
        v-model="value"
        show-score
        :allow-half="true"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      >
      </el-rate>
      <el-form :v-model="data">
        <p>评语</p>
        <el-form-item>
          <el-input
            type="textarea"
            placeholder="菜品口味如何，服务周到吗？（写够15字才是好同志）"
            v-model="data.value2"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="shangchuan">
      <p>上传图片</p>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      data: {
        value2: ""
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
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
      console.log(fileList);
    },
    fabu() {}
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/common/px2rem.scss";
.evaluate {
  // background-color: #87cefa;
  flex: 1;
  background-image: linear-gradient(180deg, #87cefa, #00bfff);
  .pingfen {
    p {
      font-size: px2rem(18);
      color: white;
      margin-top: px2rem(40);
      margin-bottom: px2rem(20);
    }
  }
  .shangchuan {
    p {
      color: white;
      margin-bottom: px2rem(20);
    }
  }
}
</style>

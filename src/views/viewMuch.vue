<template>
  <div class="videoPage">
    <div>
      <i
        class='iconfont icon-zuojiantou-'
        @click="goToback()"
      ></i>
      <h1>美食推薦</h1>
    </div>
    <video
      id="myplayer"
      v-for="(item,index) in shipin"
      :key="index"
      controls="controls"
      width="100%"
      height="240"
      class=“video-js”
      ref=“myPlayer”
    >
      <source
        :src="item"
        type="video/mp4"
      />

    </video>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shipin: [
        "http://img.tukuppt.com/video_show/3987418/00/02/54/5b792cc595c10_10s.mp4",
        "http://img.tukuppt.com/video_show/3987418/00/02/61/5b82e206b3f75_10s.mp4",
        "http://img.tukuppt.com/video_show/2418175/00/03/25/5bc02e1b3061c_10s.mp4",
        "http://img.tukuppt.com/video_show/4015506/00/03/08/5ba8775e56207_10s.mp4",
        "http://img.tukuppt.com/video_show/3987418/00/02/54/5b796ba4c453c_10s.mp4",
        "http://img.tukuppt.com/video_show/2629112/00/02/80/5b91f7808725f_10s.mp4",
        "http://img.tukuppt.com/video_show/3987418/00/02/53/5b7930e59d4c4_10s.mp4",
        "http://img.tukuppt.com/video_show/4015506/00/03/08/5ba8775e56207_10s.mp4",
        "http://img.tukuppt.com/video_show/2629112/00/02/80/5b91f24629da0_10s.mp4",
        "http://img.tukuppt.com/video_show/2422006/00/02/92/5b9b5a0eae2d6_10s.mp4",
        "http://img.tukuppt.com/video_show/2629112/00/02/82/5b93cc444dc73_10s.mp4",
        "http://img.tukuppt.com/video_show/3987418/00/02/59/5b7ec52e90860_10s.mp4"
      ]
    };
  },
  mouted() {
    var videos = document.getElementById("myplayer");
    for (let i = videos.length - 1; i >= 0; i--) {
      (function() {
        var p = i;
        videos[p].addEventListener("play", () => {
          for (var j = videos.length - 1; j >= 0; j--) {
            if (j != p) videos[j].pause();
          }
        });
      })();
    }
  },
  methods: {
    goToback() {
      this.$router.push("/discover");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
.videoPage {
  flex: 1;
  h1 {
    color: #0085ff;
    text-align: center;
    line-height: px2rem(40);
  }
  .icon-zuojiantou- {
    color: #0085ff;
  }
  // 调整播放器样式
  .video-js .vjs-icon-placeholder {
    width: 100%;
    height: 100%;
    display: block;
  }
  .video-js .vjs-big-play-button {
  }
}
</style>


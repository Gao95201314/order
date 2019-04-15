<template>
  <div class="lv-city">

    <header>
      <i
        @click="goBack"
        class="iconfont icon-fanhui"
      ></i>
      当前城市-{{curCity}}
    </header>
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content">
        <li
          v-for="(item1,index1) in pageCity"
          :key="index1"
          class="lv-indexsection"
        >
          <p
            class="lv-indexsection__index"
            :id="pageCity[index1].letter"
          >
            {{item1.letter}}
          </p>
          <ul>
            <li
              v-for="(item2,index2) in pageCity[index1].city"
              :key="index2"
              @click="selectedCity(item2.name)"
            >
              {{item2.name}}
            </li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li
            v-for="(item,index) in pageCity"
            @click="scrollToAnchor(pageCity[index].letter)"
            :key="index"
          >
            {{item.letter}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import cityName from "../api/cityName.json";
// import { Toast } from "mint-ui";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      pageCity: [],
      arr: [],
      myCity: ""
    };
  },
  created() {
    this.getLetter();
    this.getCity();
  },
  //从vuex里面获取城市
  computed: {
    ...mapState(["curCity"])
  },
  methods: {
    //页面改变城市信息，触发vuex里面changeCity的方法改变state里面城市信息
    ...mapMutations(["changeCity"]),
    //锚点定位
    scrollToAnchor(anchorName) {
      // Toast({
      //   message: anchorName,
      //   duration: 600
      // });
      if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    },
    // 26字母
    getLetter() {
      for (var i = 0; i < 26; i++) {
        var letter = String.fromCharCode(65 + i);
        this.arr.push(letter);
      }
    },
    // 城市列表
    getCity() {
      //获取城市数据
      var allCity = cityName.data.cities;
      for (let i = 0; i < 26; i++) {
        // eslint-disable-next-line
        let arr1 = allCity.filter(item => {
          return item.pinyin.charAt(0) === this.arr[i].toLowerCase();
        });
        let obj = { letter: this.arr[i], city: arr1 };
        if (arr1[0] !== undefined) {
          this.pageCity.push(obj);
        }
      }
    },
    //选择城市信息
    selectedCity(cityname) {
      this.changeCity(cityname);
      this.$router.push({ name: "detailCity" });
    },
    goBack() {
      this.$router.push({ name: "detailCity" });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../styles/common/px2rem.scss";
.lv-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  header {
    height: px2rem(44);
    background: #fff;
    text-align: center;
    line-height: px2rem(44);
    font-size: px2rem(17);
    background: #0085ff;
    color: #fff;

    i {
      position: absolute;
      left: px2rem(15);
      font-size: px2rem(25);
    }
  }

  .am-search {
    height: px2rem(50);
    background: #0085ff;
  }

  .am-search-input {
    height: px2rem(30);
  }
  .am-search-cancel {
    color: #fff;
  }
}

.lv-indexlist {
  flex: 1;
  height: 100%;
  display: flex;
  background: #fff;
  overflow: hidden;

  &__content {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    width: 100%;
  }

  &__nav {
    width: px2rem(18);
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: px2rem(18);
    }

    li {
      height: px2rem(18);
      font-size: px2rem(12);
      color: #191a1b;
      padding: 0 px2rem(6);
    }
  }

  .lv-indexsection {
    font-size: px2rem(15);

    &__index {
      background-color: #f4f4f4;
      color: #797d82;
      padding-left: px2rem(15);
      height: px2rem(30);
      line-height: px2rem(30);
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0 px2rem(15);

      li {
        font-size: px2rem(15);
        position: relative;
        width: 33.33%;
        height: px2rem(48);
        line-height: px2rem(48);
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 500;
        font-family: "微软雅黑";
        font-style: normal;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: px2rem(1);
          background: #ededed;
          transform: scaleY(0.5);
          overflow: hidden;
        }
      }
    }
  }
}
</style>

<template>
  <!-- list -->
  <div class="film-list-content">
    <ul>
      <li
        v-for="(item, index) in films"
        :key="index"
        @click="goDetail(item.filmId)"
      >
        <div class="img">
          <img
            :src="item.poster"
            alt=""
          >
        </div>
        <div class="info">
          <div>
            <span class="name">{{ item.name }}</span>
            <span class="type">{{ item.filmType.name }}</span>
          </div>
          <div>
            <span class="label">观众评分</span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <div>
            <span class="label">主演： {{ actorsList(item.actors) }}</span>
          </div>
          <div>
            <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
          </div>
        </div>
        <!-- <button @click.stop="reduceFilm(item)">-</button>
          <input type="text" disabled :value="findNum(item)">
          <button @click.stop="addFilm(item)">+</button> -->
        <div
          class="buy"
          @click.stop="addFilm(item)"
        >购票</div>
      </li>
    </ul>
    <div
      class="load-more"
      @click="loadMore"
    >{{loadMoreText}}</div>
  </div>
  <!-- /list -->
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  name: "NowPlay",
  data() {
    return {
      films: [],
      loadMoreText: "点击，加载下一页",
      pageSize: 5, // 每页条数
      pageNum: 1, // 当前页码
      totalPage: 0 // 总页数
    };
  },
  computed: {
    ...mapState(["filmsCard"])
  },
  methods: {
    ...mapMutations(["addFilm", "reduceFilm"]),
    //获取影片
    getFilms() {
      axios
        .get("/api/film/list", {
          params: {
            pageSize: this.pageSize,
            pageNum: this.pageNum,
            type: 1
          }
        })
        .then(response => {
          //ps:response不单单包含后台的数据，还有一些个额外的东西
          // console.log(response);
          let result = response.data;
          // console.log(result);
          //一共多少页
          this.totalPage = Math.ceil(result.data.total / this.pageSize);
          // console.log(this.totalPage);
          //判断是否还有更多页
          if (this.pageNum >= this.totalPage) {
            //没有更多页面
            this.loadMoreText = "别拉了，没有更多了";
          }
          if (result.code === 0) {
            //  this.films=result.data.films;
            //数组的追加
            // this.films=this.films.push(...result.data.films);
            // for (var i=0; i < result.data.films.length; i++) {
            //   result.data.films[i].num=0;
            // }
            this.films = this.films.concat(result.data.films);
          } else {
            alert(result.msg);
          }
        });
    },
    /*
排列我们的主演列表
@param {Array} list 主演列表
*/
    actorsList(list) {
      let arr = [];
      //如果没有演员，就要判断，否则会报错
      if (list) {
        arr = list.map(item => {
          // map映射 返回一个满足条件的数组
          return item.name;
        });
      }
      return arr.join(" ");
    },
    loadMore() {
      if (this.pageNum < this.totalPage) {
        this.pageNum++;
        this.getFilms();
      }
    },
    /**
     * 去详情页面
     * @param {String} id 影片ID
     */
    goDetail(id) {
      this.$router.push({
        name: "filmDetail",
        params: {
          filmId: id
        }
      });
    },
    /*    addFilm (item) {
       let userphone = localStorage.getItem('userphone');
       if (!userphone) {
         this.$router.push('/user/login');
       }
     }, */
    /**
     * 查找当前这个电影，在购物车中的数量
     * @param {Object} item 当前电影
     */
    findNum(item) {
      let filmId = item.filmId;
      //判断当前这个filmId在store中的filmsCard中存在不？
      let num = 0;
      this.filmsCard.forEach(item => {
        if (item.filmId === filmId) {
          num = item.filmNum;
        }
      });
      return num;
    }
    //  addCard (item,index) {
    //   //  item.num++;
    //   var num = item.num || 0;
    //  this.$set(this.films[index], 'num', ++num);
    //  this.$store.commit('addFilm',{
    //    filmId:item.filmId,
    //    filmName:item.name,
    //    filmPrice:Math.random(10,20),
    //    filmNum:1
    //  })
    //  }
  },
  created() {
    this.getFilms();
  }
};
</script>

<style rel="stylesheet/scss" lang='scss'>
@import "@/styles/common/px2rem.scss";
.film-list-content {
  li {
    display: flex;
    margin: 0 px2rem(15);
    padding: px2rem(15) 0;
    border-bottom: px2rem(1) solid #ededed;
  }

  .img {
    flex-shrink: 0;
    width: px2rem(66);
    height: px2rem(94);
    img {
      width: 100%;
    }
  }

  .info {
    min-width: 100px;
    padding: 0 px2rem(10);
    font-size: px2rem(14);
    & > div {
      width: 100%;
      height: px2rem(22);
      line-height: px2rem(22);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .label {
      color: #797d82;
      margin-right: px2rem(2);
    }
    .name {
      font-size: px2rem(16);
      color: #191a1b;
    }
    .type {
      font-size: px2rem(12);
      color: #fff;
      background: #d2d6dc;
      padding: 0 px2rem(2);
    }
    .grade {
      color: #ffb232;
    }
  }
  .buy {
    flex-shrink: 0;
    align-self: center;
    width: px2rem(50);
    height: px2rem(26);
    line-height: px2rem(26);
    font-size: px2rem(14);
    color: #ff5f16;
    border: px2rem(1) solid #ff5f16;
    text-align: center;
    border-radius: px2rem(4);
  }
}
/*  input{
    width: px2rem(50);
    line-height: px2rem(50);
    height: px2rem(48);
    margin-top:px2rem(22);
    border:none;
    text-align: center;
  }
  button {
    flex-shrink: 0;
    align-self: center;
    width: px2rem(25);
    height: px2rem(50);
    font-size: px2rem(14);
    color: #ff5f16;
    border: px2rem(1);
    text-align: center;
    border-radius: px2rem(4);
  }
} */
.load-more {
  height: px2rem(30);
  line-height: px2rem(30);
  text-align: center;
  cursor: pointer;
}
</style>

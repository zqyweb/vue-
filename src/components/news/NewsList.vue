<template>
  <div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
                <h1>{{ item.title }}</h1>
                <p class='mui-ellipsis'>
                    <span>发表时间：{{ item.add_time | dateFormat }}</span>
                    <span>点击：{{ item.click }}次</span>
                </p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/13'">
            <img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567670206640&di=ecdf5deeee42d9717103f342e11b0622&imgtype=0&src=http%3A%2F%2Fimg2.51tietu.net%2F2019%2Fweimeitpian%2F20190707%2F15249029444305067280x180.jpg">
            <div class="mui-media-body">
                <h1>幸福1</h1>
                <p class='mui-ellipsis'>
                    <span>发表时间：2019-09-03 12:12:12</span>
                    <span>点击：0次</span>
                </p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567670206640&di=ecdf5deeee42d9717103f342e11b0622&imgtype=0&src=http%3A%2F%2Fimg2.51tietu.net%2F2019%2Fweimeitpian%2F20190707%2F15249029444305067280x180.jpg">
            <div class="mui-media-body">
                <h1>幸福</h1>
                <p class='mui-ellipsis'>
                    <span>发表时间：2019-09-03 12:12:12</span>
                    <span>点击：0次</span>
                </p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567670206640&di=ecdf5deeee42d9717103f342e11b0622&imgtype=0&src=http%3A%2F%2Fimg2.51tietu.net%2F2019%2Fweimeitpian%2F20190707%2F15249029444305067280x180.jpg">
            <div class="mui-media-body">
                <h1>幸福</h1>
                <p class='mui-ellipsis'>
                    <span>发表时间：2019-09-03 12:12:12</span>
                    <span>点击：0次</span>
                </p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567670206640&di=ecdf5deeee42d9717103f342e11b0622&imgtype=0&src=http%3A%2F%2Fimg2.51tietu.net%2F2019%2Fweimeitpian%2F20190707%2F15249029444305067280x180.jpg">
            <div class="mui-media-body">
                <h1>幸福</h1>
                <p class='mui-ellipsis'>
                    <span>发表时间：2019-09-03 12:12:12</span>
                    <span>点击：0次</span>
                </p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567670206640&di=ecdf5deeee42d9717103f342e11b0622&imgtype=0&src=http%3A%2F%2Fimg2.51tietu.net%2F2019%2Fweimeitpian%2F20190707%2F15249029444305067280x180.jpg">
            <div class="mui-media-body">
                <h1>幸福</h1>
                <p class='mui-ellipsis'>
                    <span>发表时间：2019-09-03 12:12:12</span>
                    <span>点击：0次</span>
                </p>
            </div>
        </a>
    </li>
   
</ul>
  </div>
</template>

<script>
import {Toast} from "mint-ui";

export default{
    data(){
        return {
            newslist:[]//新闻列表
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){//获取新闻列表
            this.$http.get('api/getnewslist').then(result =>{
                if(result.body.status === 0){
                    //如果成功，就将数据保存到data上
                    console.log(result.body.status);
                    this.newslist = result.body.message;
                }else{
                    Toast("获取新闻列表失败!")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size:12px;
            color:#226aff;
            display:flex;
            justify-content:space-between;//两端对齐
        }
    }
}
</style>

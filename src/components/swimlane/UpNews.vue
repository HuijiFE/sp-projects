<template>
  <div class="up-clamp up-news">
    <img class="up-swimlane_title"
         src="@/assets/新闻热点.svg"
         alt="新闻热点">
    <div class="up-news_item-wrapper">
      <div class="up-news_item"
           v-for="(item, index) in news"
           :key="index">
        <div class="up-news_thumbnail-outer">
          <div class="up-news_thumbnail-inner">
            <div class="up-news_thumbnail-container">
              <img class="up-news_thumbnail"
                   :src="item.thumbnail">
            </div>
          </div>
        </div>
        <a class="up-news_info"
           :href="isTgbus ? item.hrefTgbus : item.href178">
          <h3 class="up-news_title">{{item.title}}</h3>
          <!-- <p class="up-news_summary">{{item.summary}}</p> -->
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';

/**
 * Control News
 */
@Component
export default class UpNews extends Vue {
  public readonly baseUrl = process.env.BASE_URL;

  public get isTgbus(): boolean {
    return !!(window && window.location.hostname.includes('tgbus.com'));
  }

  public news: NewsInfo[] = [
    {
      hrefTgbus: 'http://ol.tgbus.com/201804/07766173817.html',
      href178: 'http://news.178.com/201804/318107654582.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/19/1/bd8e97ca696116310a72a73bf8675ee9.jpg',
      title: '主题海报曝光！UP2018腾讯动漫将公布重大战略举措',
    },
    {
      hrefTgbus: 'http://ol.tgbus.com/201804/07569173813.html',
      href178: 'http://news.178.com/201804/318107465910.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/19/1/c76552b9429c7a654bf035830b2d2fd5.jpg',
      title: '阅文集团超人气白金作家净无痕：最“怕”被催更',
    },
    {
      hrefTgbus: 'http://ol.tgbus.com/201804/07092173810.html',
      href178: 'http://news.178.com/201804/318106808102.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/19/1/7169a1abd6afcce76a2f9cc741ed9bab.jpg',
      title: '《英雄联盟》游戏汉化执行：懂，要“信达雅”',
    },
    {
      hrefTgbus: 'http://ol.tgbus.com/201804/06951173808.html',
      href178: 'http://news.178.com/201804/318106289945.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/19/1/776f655fc580ac40cbc6507152e9da60.jpg',
      title: '《一人之下》声优小连杀：人家说我是“怪物”',
    },
  ];
}
</script>
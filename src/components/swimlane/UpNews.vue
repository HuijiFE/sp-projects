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
    {
      hrefTgbus: 'http://ol.tgbus.com/201804/54474173979.html',
      href178: 'http://news.178.com/201804/318452502194.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/0f286e81bb25c293636b12fa407e0b89.jpg',
      title: '腾讯举办新文创生态大会 11位全球文创大师精彩开讲',
    },
    {
      hrefTgbus: 'http://ol.tgbus.com/201804/54859173987.html',
      href178: 'http://news.178.com/201804/318452835526.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/0f286e81bb25c293636b12fa407e0b89.jpg',
      title: '腾讯新文创生态大会 | 11位文创大师如是说',
    },
    {
      hrefTgbus: 'http://ol.tgbus.com/201804/54676173986.html',
      href178: 'http://news.178.com/201804/318452716287.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/24ee22b9d1a51afcbcd0ffd30c05f159.jpg',
      title: 'UP2018 腾讯程武：新文创时代的数字文化构建',
    },
  ];
}
</script>
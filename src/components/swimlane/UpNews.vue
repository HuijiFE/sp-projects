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
    {
      title: '腾讯程武：从“泛娱乐”到“新文创”的五个关键点',
      hrefTgbus: 'http://ol.tgbus.com/201804/68404174029.html',
      href178: 'http://news.178.com/201804/318468023642.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/5420ca4b6dcf7203dde1affcb9882c22.jpg',
    },
    {
      title: 'UP2018腾讯动漫品牌理念升级 多元内容覆盖传统与潮流文化：',
      hrefTgbus: 'http://ol.tgbus.com/201804/68588174031.html',
      href178: 'http://news.178.com/201804/318468168341.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/226cc9a53fb6e505c013d4465641b25f.jpg',
    },
    {
      title: '腾讯影业成立腾影发行 全版权开发古龙全系列：',
      hrefTgbus: 'http://ol.tgbus.com/201804/68880174036.html',
      href178: 'http://news.178.com/201804/318468348935.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/d08c6fc5bd647e0529f3bcfc9a666472.jpg',
    },
    {
      title: '新文创大会腾讯游戏学院构建人才培养生态',
      hrefTgbus: 'http://ol.tgbus.com/201804/68043174023.html',
      href178: 'http://news.178.com/201804/318468531375.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/4805f2f06dd14841a51aeb38349e309c.jpg',
    },
    {
      title: '腾讯游戏发布全新愿景 探索游戏更多可能：',
      hrefTgbus: 'http://ol.tgbus.com/201804/68173174025.html',
      href178: 'http://news.178.com/201804/318468944612.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/5e4539ea4c38f2232ee24cc60a1f4235.jpg',
    },
    {
      title: '聚势勃发 阅文携IP战略体系亮相“腾讯新文创生态大会”：',
      hrefTgbus: 'http://ol.tgbus.com/201804/68260174027.html',
      href178: 'http://news.178.com/201804/318469082922.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/bfa8c05fd41cab22a3e968a0493eb3d6.jpg',
    },
    {
      title: '探索游戏更多可能，腾讯游戏全面布局功能游戏探索游戏社会价值：',
      hrefTgbus: 'http://ol.tgbus.com/201804/68329174028.html',
      href178: 'http://news.178.com/201804/318469258608.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/a93903059ee6891b66f80234459f5c83.jpg',
    },
    {
      title: '腾讯电竞体育化布局 发布电竞运动城市发展计划：',
      hrefTgbus: 'http://ol.tgbus.com/201804/68114174024.html',
      href178: 'http://news.178.com/201804/318469320315.html',
      thumbnail:
        'http://img-sg.tgbusdata.cn/ol/2018/04/23/1/23620a5acd784fc53942d147567d1d1f.jpg',
    },
  ];
}
</script>
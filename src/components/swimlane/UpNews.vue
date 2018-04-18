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
        <div class="up-news_info">
          <h3 class="up-news_title">{{item.title}}</h3>
          <p class="up-news_summary">{{item.summary}}</p>
        </div>
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

interface NewsInfo {
  thumbnail: string;
  title: string;
  summary: string;
}

/**
 * Control News
 */
@Component
export default class UpNews extends Vue {
  public readonly baseUrl = process.env.BASE_URL;

  public news: NewsInfo[] = [
    {
      thumbnail: `${this.baseUrl}img/guests/Michael-Dobbs.jpg`,
      title: '腾讯新文创生态大会',
      summary:
        '腾讯新文创生态大会将于4月22日-23日在北京举办，作为汇聚文创行业前沿思想的交流平台。的交流平台。流平台。',
    },
    {
      thumbnail: `${this.baseUrl}img/guests/Michael-Dobbs.jpg`,
      title: '腾讯新文创生态大会',
      summary:
        '腾讯新文创生态大会将于4月22日-23日在北京举办，作为汇聚文创行业前沿思想的交流平台。的交流平台。流平台。',
    },
    {
      thumbnail: `${this.baseUrl}img/guests/Michael-Dobbs.jpg`,
      title: '腾讯新文创生态大会',
      summary:
        '腾讯新文创生态大会将于4月22日-23日在北京举办，作为汇聚文创行业前沿思想的交流平台。的交流平台。流平台。',
    },
    {
      thumbnail: `${this.baseUrl}img/guests/Michael-Dobbs.jpg`,
      title: '腾讯新文创生态大会',
      summary:
        '腾讯新文创生态大会将于4月22日-23日在北京举办，作为汇聚文创行业前沿思想的交流平台。的交流平台。流平台。',
    },
    {
      thumbnail: `${this.baseUrl}img/guests/Michael-Dobbs.jpg`,
      title: '腾讯新文创生态大会',
      summary:
        '腾讯新文创生态大会将于4月22日-23日在北京举办，作为汇聚文创行业前沿思想的交流平台。的交流平台。流平台。',
    },
    {
      thumbnail: `${this.baseUrl}img/guests/Michael-Dobbs.jpg`,
      title: '腾讯新文创生态大会',
      summary:
        '腾讯新文创生态大会将于4月22日-23日在北京举办，作为汇聚文创行业前沿思想的交流平台。的交流平台。流平台。',
    },
  ];
}
</script>
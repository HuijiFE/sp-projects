<template>
  <div class="up-clamp up-videos">
    <img class="up-swimlane_title"
         src="@/assets/精彩视频.svg"
         alt="精彩视频">
    <div class="up-videos_inner">
      <a class="up-videos_left"
         :href="selected.href"
         target="_blank">
        <img class="up-videos_video-thumbnail"
             :src="selected.thumbnail"
             alt="视频">
        <font-awesome class="up-videos_video-play"
                      icon="play-circle"></font-awesome>
      </a>
      <div class="up-videos_right">
        <div class="up-videos_item-wrapper">
          <button class="up-videos_item"
                  v-for="(item, index) in videos"
                  :key="index"
                  :class="{ 'is-selected': item === selected }"
                  @click="select(item)">
            <img class="up-videos_item-thumbnail"
                 :src="item.thumbnail">
            <span class="up-videos_item-label">{{item.label}}</span>
          </button>
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

/**
 * Control Videos
 */
@Component
export default class UpVideos extends Vue {
  public readonly baseUrl = process.env.BASE_URL;

  public videos: VideoInfo[] = [
    {
      thumbnail: `http://img-sg.tgbusdata.cn/shouji/2018/04/23/1/d57af5b4c33e810358077ee494b24623.jpg`,
      label: '国漫新作《超神灵主》热血开更！',
      href: 'https://v.qq.com/x/cover/x6jwrgbjehysagh/n06341bdmch.html',
    },
    {
      thumbnail: `http://img-sg.tgbusdata.cn/shouji/2018/04/23/1/fbd214c89b1fc9bef40bf3e99707d77d.jpg`,
      label: '狐妖小红娘手游18年秋上线 超还原王权富贵篇剧情首曝',
      href: 'https://v.qq.com/x/cover/x6jwrgbjehysagh/h0634kh8r40.html',
    },
  ];

  public selected: VideoInfo = this.videos[0];

  public select(item: VideoInfo): void {
    this.selected = item;
  }
}
</script>
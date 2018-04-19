<template>
  <div class="up-clamp up-videos">
    <img class="up-swimlane_title"
         src="@/assets/精彩视频.svg"
         alt="精彩视频">
    <div class="up-videos_inner">
      <div class="up-videos_left">
        <img src="@/assets/main-background.jpg"
             alt="视频"
             class="up-videos_video-thumbnail">
        <font-awesome class="up-videos_video-play"
                      icon="play-circle"></font-awesome>
      </div>
      <div class="up-videos_right">
        <div class="up-videos_item-wrapper">
          <button class="up-videos_item"
                  v-for="(item, index) in videos"
                  :key="index"
                  :class="{ 'is-selected': item === selected }"
                  @click="select(item)">
            <img class="up-videos_item-thumbnail"
                 src="@/assets/main-background.jpg">
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

interface VideoInfo {
  thumbnail: string;
  label: string;
  href: string;
}

/**
 * Control Videos
 */
@Component
export default class UpVideos extends Vue {
  public readonly baseUrl = process.env.BASE_URL;

  public videos: VideoInfo[] = [
    {
      thumbnail: ``,
      label: 'UP2018腾讯新文创生态大会开场视频',
      href: '',
    },
  ];

  public selected: VideoInfo = this.videos[0];

  public select(item: VideoInfo): void {
    this.selected = item;
  }
}
</script>
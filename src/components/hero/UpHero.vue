<template>
  <div class="up-swimlane up-hero"
       :id="id">
    <img class="up-hero_background"
         src="@/assets/main-background.jpg" />
    <div class="up-hero_inner">
      <up-clamp class="up-hero_content">
        <img class="up-hero_tencent"
             src="@/assets/tencent.png"
             alt="Tencent 腾讯" />
        <img class="up-hero_love"
             src="@/assets/with-love-we-create.svg"
             alt="向爱而生" />
        <div class="up-hero_info">
          <a href=""
             class="up-hero_gift">领取<br/>礼包</a>
          <span class="up-hero_where">北京国家会议中心<br/>4.22 - 4.23</span>
        </div>
        <div class="up-hero_scroll">
          <img class="up-hero_mouse"
               src="@/assets/mouse.svg" />
          <div>向下滑动</div>
        </div>
      </up-clamp>
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
import UpSwimlane from '@/components/swimlane/UpSwimlane.vue';

/**
 * Control Hero
 */
@Component
export default class UpHero extends UpSwimlane {}
</script>
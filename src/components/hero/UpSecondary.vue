<template>
  <div class="up-swimlane up-secondary"
       :id="id">
    <up-clamp class="up-secondary_inner">
      <a class="up-secondary_left"
         href="http://up.qq.com"
         target="_blank"
         >
        <img src="@/assets/main-background.jpg"
             alt="视频"
             class="up-secondary_video-thumbnail">
        <font-awesome class="up-secondary_video-play"
                      icon="play-circle"></font-awesome>
      </a>
      <section class="up-secondary_right">
        <h2>腾讯互动娱乐年度发布会</h2>
        <p>　　腾讯互娱年度发布会，是腾讯互动娱乐事业群于每年春季举办的大型综合性新闻发布活动，已经成为外界了解腾讯互娱全年品牌战略与业务重大动态的重要窗口和公认的互动娱乐产业风向标。2012年该发布会开始打造的“UP”主题已成为这一活动乃至腾讯互娱的重要品牌标签，发布会上提出的“泛娱乐”战略也已获得行业的认可与跟随，成为公认的互联网八大趋势之一，奠定了腾讯互娱在行业的引领地位。</p>
        <div class="up-secondary_where">
          <div>4月22日 13：45 行业峰会</div>
          <div>4月23日 09：45 业务发布会</div>
          <div>地点：北京国家会议中心4层大会堂B厅</div>
        </div>
      </section>
    </up-clamp>
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
 * Control Swimlane
 */
@Component
export default class UpSecondary extends UpSwimlane {}
</script>

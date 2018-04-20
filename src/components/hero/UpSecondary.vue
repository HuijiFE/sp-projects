<template>
  <div class="up-swimlane up-secondary"
       :id="id">
    <up-clamp class="up-secondary_inner">
      <a class="up-secondary_left"
         href="http://up.qq.com"
         target="_blank">
        <img src="@/assets/main-background.jpg"
             alt="视频"
             class="up-secondary_video-thumbnail">
        <font-awesome class="up-secondary_video-play"
                      icon="play-circle"></font-awesome>
      </a>
      <section class="up-secondary_right">
        <h2>UP2018腾讯新文创生态大会</h2>
        <p>　　腾讯新文创生态大会是腾讯UP发布会定位升级后的行业会议，最新定位是新文创行业风向标，是最受关注的行业动向、前沿思考及指导方法展示窗口，同时也是公司文化战略的承载平台。大会将分为两天进行，其中第一天行业峰会，既是为汇聚和分享全球文化创意领域顶级大师的思考与洞见，搭建的交流平台。希望让所有在文学、音乐、电影、动漫、游戏等文创领域有重大成就的世界级文化大师，能够基于自身精深的专业、独特的经验与非凡的思考做分享。</p>
        <div class="up-secondary_where">
          <div>整体议程：4月22日下午 行业峰会　4月23日全天 年度发布会</div>
          <div>地点：　　北京 · 国家会议中心</div>
          <div>参会者：　全球文化创意领域顶级大师、文化专家学者、行业人士、腾讯合作伙伴、媒体、用户</div>
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

<template>
  <div class="up-clamp up-live">
    <img class="up-swimlane_title"
         src="@/assets/现场直播.svg"
         alt="现场直播">
    <div class="up-live_inner">
      <a class="up-live_left"
         href="http://up.qq.com"
         target="_blank"
         rel="noopener noreferrer">
        <img src="@/assets/main-background.jpg"
             alt="视频"
             class="up-live_video-thumbnail">
        <font-awesome class="up-live_video-play"
                      icon="play-circle"></font-awesome>
      </a>
      <div class="up-live_right">
        <div class="up-live_table">
          <div class="up-live_table-header">
            <button class="up-live_table-header-item"
                    v-for="item in agendas"
                    :key="item.time"
                    :class="{ 'is-selected': item === selected }"
                    @click="select(item)">{{item.time}}</button>
          </div>
          <div class="up-live_table-body">
            <div class="up-live_table-item header">
              <span class="up-live_table-item-time">时间</span>
              <span class="up-live_table-item-label">节目</span>
            </div>
            <div class="up-live_table-item"
                 v-for="item in selected.items"
                 :key="item.time">
              <span class="up-live_table-item-time">{{item.time}}</span>
              <span class="up-live_table-item-label">{{item.label}}</span>
            </div>
          </div>
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

interface AgendaInfo {
  time: string;
  items: {
    time: string;
    label: string;
  }[];
}

/**
 * Control News
 */
@Component
export default class UpLive extends Vue {
  public readonly baseUrl = process.env.BASE_URL;

  public agendas: AgendaInfo[] = [
    {
      time: '4月22日',
      items: [
        { time: '13:30', label: '开场视频' },
        { time: '13:35', label: '程武' },
        { time: '13:50', label: 'Michael Dobbs' },
        { time: '14:10', label: '叶锦添' },
        { time: '14:30', label: '井上伸一郎' },
        { time: '14:50', label: '鬼蟹 Greg Street' },
        { time: '15:10', label: 'Brendan Greene' },
        { time: '15:30', label: 'Andrew R. Jones' },
        { time: '15:50', label: 'David Goyer' },
        { time: '16:10', label: '柴智屏' },
        { time: '16:30', label: 'Michael E. Uslan' },
        { time: '16:50', label: '马伯庸' },
        { time: '17:10', label: '方文山' },
      ],
    },
    {
      time: '4月23日 上午',
      items: [
        { time: '10:00', label: '整体战略发布' },
        { time: '10:10', label: '腾讯影业发布' },
        { time: '10:45', label: '腾讯动漫发布' },
        { time: '11:10', label: '阅文集团发布' },
        { time: '11:30', label: '腾讯电竞发布' },
        { time: '11:45', label: '腾讯游戏品牌发布' },
      ],
    },
    {
      time: '4月23日 下午',
      items: [
        { time: '14:00', label: '腾讯游戏策略发布' },
        { time: '14:15', label: '腾讯功能游戏新品发布' },
        { time: '14:25', label: '腾讯移动游戏新品发布' },
        { time: '15:15', label: '腾讯PC游戏新品发布' },
        { time: '15:50', label: '王者荣耀IP打造计划发布' },
        { time: '16:05', label: '腾讯棋牌发布' },
      ],
    },
  ];

  public selected: AgendaInfo = this.agendas[0];

  public select(item: AgendaInfo): void {
    this.selected = item;
  }
}
</script>
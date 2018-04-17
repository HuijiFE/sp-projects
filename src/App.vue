<template>
  <div id="app">
    <up-navbar :items-source="index"></up-navbar>
    <up-hero id="hero"></up-hero>
    <div class="up-swimlane-wrapper">

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
 * App
 */
@Component
export default class App extends Vue {
  public index: IndexItem[] = [
    // {
    //   id: 'guests',
    //   label: '嘉宾阵容',
    // },
    {
      id: 'news',
      label: '新闻',
    },
    {
      id: 'live',
      label: '直播',
    },
    {
      id: 'interpreted',
      label: '主题解读',
    },
    {
      id: 'works',
      label: '新品大作',
    },
    {
      id: 'videos',
      label: '精彩视频',
    },
  ];
}
</script>


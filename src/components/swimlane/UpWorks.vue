<template>
  <div class="up-clamp up-works">
    <img class="up-swimlane_title"
         src="@/assets/首推大作.svg"
         alt="首推大作">
    <div class="up-works_inner">
      <div class="up-works_left">
        <div class="up-works_cover">
          <div class="up-works_cover-container">
            <img class="up-works_background"
                 :src="`${baseUrl}img/works/${selected.label}-背景.png`"
                 alt="">
            <img class="up-works_foreground"
                 :src="`${baseUrl}img/works/${selected.label}-前景.png`"
                 alt="">
            <img class="up-works_logo"
                 :src="`${baseUrl}img/works/${selected.label}-logo.png`"
                 alt="">
            <div class="up-works_mask"></div>
            <h3 class="up-works_title">{{selected.title}}</h3>
          </div>
        </div>
        <p class="up-works_description">{{selected.description}}</p>
      </div>
      <div class="up-works_right">
        <button class="up-works_item"
                v-for="item in works"
                :key="item.label"
                :class="{ 'is-selected': item === selected }"
                @click="select(item)"
                @mousemove="select(item)">
          <img class="up-works_item-background"
               :src="`${baseUrl}img/works/${item.label}-背景.png`">
          <img class="up-works_item-background inner"
               :src="`${baseUrl}img/works/${item.label}-前景.png`">
          <span class="up-works_item-foreground">{{item.label}}</span>
        </button>
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

interface WorkInfo {
  label: string;
  title: string;
  description: string;
}

/**
 * Control Works
 */
@Component
export default class UpWorks extends Vue {
  public readonly baseUrl = process.env.BASE_URL;

  public works: WorkInfo[] = [
    {
      label: '狐妖小红娘',
      title: '《狐妖小红娘》',
      description:
        '《狐妖小红娘》是腾讯动漫平台的知名国漫作品，漫画点击量超120亿，动画全网播放量超31亿，2017年B站点击量破2亿，为B站首部破亿的国产动画，也是B站上播放量最高的动画。',
    },
    {
      label: '剑侠情缘',
      title: '《剑侠情缘》手游',
      description:
        '三十门派，四季江湖，家族情缘，比武招亲...江湖远不止于此，进入剑侠情缘手游，与赵丽颖林更新一起闯荡江湖。',
    },
    {
      label: '冒险岛2',
      title: '《冒险岛2》',
      description:
        '《冒险岛2》延续了《冒险岛》的经典游戏品牌，并全新融入沙盒玩法，是一款拥有萌爆可爱的画面、创新的房屋系统、自由丰富的DIY系统及多种小游戏玩法的休闲网游。',
    },
    {
      label: '天龙八部',
      title: '《天龙八部》手游',
      description:
        '《天龙八部》手游精致细腻的3D场景、实时便捷的交互体验、丰富多样的社交玩法，金戈铁马快意恩仇、最原汁原味的的正宗金庸武侠世界等你一起来体验！',
    },
    {
      label: '王者荣耀',
      title: '王者荣耀',
      description:
        '五五开黑节，福利不断，上分不停！王者荣耀，5月5日五排不掉星！一起来，give me five！',
    },
    {
      label: '消除者联盟',
      title: '《消除者联盟》',
      description: '《消除者联盟》萌翻世界的6向消除手游，爱怎么消，就怎么消！',
    },
  ];

  public selected: WorkInfo = this.works[0];

  public select(item: WorkInfo) {
    this.selected = item;
  }
}
</script>
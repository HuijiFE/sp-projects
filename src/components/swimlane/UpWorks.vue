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
                 :src="`${baseUrl}img/works/${selected.label}.png`"
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
               :src="`${baseUrl}img/works/${item.label}.png`">
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
import works from '@/components/swimlane/works';

/**
 * Control Works
 */
@Component
export default class UpWorks extends Vue {
  public readonly baseUrl = process.env.BASE_URL;

  public works: WorkInfo[] = works;

  public selected: WorkInfo = this.works[0];

  public select(item: WorkInfo) {
    this.selected = item;
  }
}
</script>
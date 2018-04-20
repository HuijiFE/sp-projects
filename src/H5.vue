<template>
  <div class="up-h5">
    <div class="up-h5_inner"
         ref="inner">

      <div class="up-h5_section"
           id="hero">
        <img class="up-h5_background"
             src="@/assets/h5-background.png" />

        <img class="up-h5_love"
             src="@/assets/with-love-we-create.svg"
             alt="向爱而生" />

        <div class="up-h5_where">北京国家会议中心<br/>4.22 - 4.23</div>

        <img class="up-h5_logo"
             src="@/assets/logo.svg"
             alt="up+ 腾讯新文创生态大会">
        <img class="up-h5_logo-donews"
             src="@/assets/logo-donews.svg"
             alt="多牛传媒">
      </div>

      <div class="up-h5_section"
           v-for="item in works"
           :key="item.label"
           :id="item.label">

        <img class="up-h5_work-background"
             :src="`${baseUrl}img/works/${item.label}-背景.png`">
        <img class="up-h5_work-foreground"
             :src="`${baseUrl}img/works/${item.label}-前景.png`">
        <img class="up-h5_work-logo"
             :src="`${baseUrl}img/works/${item.label}-logo.png`">
        <img class="up-h5_tag"
             src="@/assets/推荐大作.svg"
             alt="推荐大作">

        <h2 class="up-h5_work-title">{{item.title}}</h2>
        <p class="up-h5_work-description">{{item.description}}</p>

        <button class="up-h5_indicator"
                @click="selectNext">
          <img src="@/assets/down.svg"
               class="up-h5_indicator-icon">
        </button>
        <img class="up-h5_logo"
             src="@/assets/logo.svg"
             alt="up+ 腾讯新文创生态大会">
        <img class="up-h5_logo-donews"
             src="@/assets/logo-donews.svg"
             alt="多牛传媒">
      </div>

      <div class="up-h5_section"
           id="footer">
        <img src="@/assets/lastpage.png"
             alt=""
             class="up-h5_lastpage">
        <a href="http://up.qq.com/"
           class="up-h5_learn-more">了解更多</a>
      </div>

    </div>
    <up-indicator :items-source="index"
                  :active="selected.label"></up-indicator>
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
import UpIndicator from '@/components/indicator/UpIndicator.vue';
import { styler, tween, easing, decay, listen, pointer, value } from 'popmotion';
import { Easing } from 'popmotion/easing';
import { Styler } from 'stylefire/styler/types';
import { ValueReaction } from 'popmotion/reactions/value';

const ease: Easing = easing.easeInOut;

/**
 * Control H5
 */
@Component({
  components: {
    UpIndicator,
  },
})
export default class UpH5 extends Vue {
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

  public index: IndexItem[] = ['hero', ...this.works.map(w => w.label), 'footer'].map(
    str => ({ id: str, label: str }),
  );

  public selected: IndexItem = this.index[0];

  private isScrolling: boolean;
  private inner: Styler;
  private height: number;
  private innerY: number;
  private sliderY: ValueReaction;

  public select(index: number): void {
    if (this.isScrolling) {
      return;
    }
    this.isScrolling = true;

    if (index < 0) {
      index = 0;
    } else if (index >= this.index.length) {
      index = this.index.length - 1;
    }
    this.selected = this.index[index];

    const y: number = <number>this.inner.get('y');
    const target: number = this.height / this.index.length * index;

    tween({
      from: {
        y,
      },
      to: {
        y: -target,
      },
      ease,
    }).start({
      update: this.inner.set,
      complete: () => (this.isScrolling = false),
    });
  }

  public selectPrevious(): void {
    this.select(this.index.indexOf(this.selected) - 1);
  }

  public selectNext(): void {
    this.select(this.index.indexOf(this.selected) + 1);
  }

  private mounted(): void {
    this.inner = styler(<Element>this.$refs.inner, {});
    this.innerY = 0;
    this.height = this.inner.get('height');
    this.sliderY = value(0, <Function>this.inner.set('y'));

    let initialY: number = 0;
    let currentY: number = 0;

    listen(<Element>this.$refs.inner, 'mousedown touchstart').start(() => {
      initialY = <number>this.inner.get('y');
      pointer({ y: initialY })
        .pipe(({ y }: { y: number }) => {
          currentY = y;
          return y;
        })
        .start(this.sliderY);
    });

    listen(document, 'mouseup touchend').start(() => {
      const delta = currentY - initialY;
      if (delta < 0) {
        this.selectNext();
      } else if (delta > 0) {
        this.selectPrevious();
      }
    });
  }
}
</script>
<template>
  <div id="app">
    <up-navbar :items-source="index"
               :active="active"></up-navbar>
    <up-indicator :items-source="index"
                  :active="active">
      <a class="up-indicator_item"
         :class="{ 'is-active': active === 'hero' || active === 'secondary' }"
         :href="`#hero`">
        <span class="up-indicator_item-inner"></span>
      </a>
    </up-indicator>
    <up-hero id="hero"></up-hero>
    <div class="up-swimlane-wrapper">
      <up-secondary id="secondary"></up-secondary>
      <up-swimlane id="guests">
        <up-guests></up-guests>
      </up-swimlane>
      <up-swimlane id="news">
        <up-news></up-news>
      </up-swimlane>
      <up-swimlane id="live">
        <up-live></up-live>
      </up-swimlane>
      <!-- <up-swimlane id="interpreted">
        <up-interpreted></up-interpreted>
      </up-swimlane> -->
      <up-swimlane id="works">
        <up-works></up-works>
      </up-swimlane>
      <up-swimlane id="videos">
        <up-videos></up-videos>
      </up-swimlane>
      <up-swimlane id="about">
        <up-about></up-about>
      </up-swimlane>
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
 * App
 */
@Component
export default class App extends Vue {
  public index: IndexItem[] = [
    {
      id: 'guests',
      label: '嘉宾阵容',
    },
    {
      id: 'news',
      label: '新闻',
    },
    {
      id: 'live',
      label: '直播',
    },
    // {
    //   id: 'interpreted',
    //   label: '主题解读',
    // },
    {
      id: 'works',
      label: '新品大作',
    },
    {
      id: 'videos',
      label: '精彩视频',
    },
  ];

  public active: string = 'hero';

  private mounted(): void {
    const swimlanes: UpSwimlane[] = [];
    this.$nextTick(() => {
      this.$children.forEach(child => {
        if (child instanceof UpSwimlane) {
          swimlanes.push(child);
        }
      });
    });

    const bodyRect: ClientRect = window.document.body.getBoundingClientRect();

    const onScroll = () => {
      // console.log('scroll');
      swimlanes.forEach(sl => {
        const rect: ClientRect = sl.$el.getBoundingClientRect();
        const offset = rect.top - bodyRect.top;
        // console.log(sl.id, offset);
        if (offset > -152 && offset < 152) {
          this.active = sl.id;
        }
      });
    };

    window.addEventListener('scroll', onScroll);
  }
}
</script>


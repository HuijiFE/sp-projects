<template>
  <div class="up-guests">
    <img class="up-swimlane_title"
         src="@/assets/嘉宾阵容.svg"
         alt="嘉宾阵容">
    <div class="up-guests_inner">
      <div class="up-guests_item-wrapper"
           ref="wrapper">
        <div class="up-guests_item"
             v-for="item in guests"
             :key="item.name_en">
          <img class="up-guests_photo"
               :src="item.photo">
          <div class="up-guests_name">
            <div class="up-guests_name-zh">{{item.name_zh}}</div>
            <div class="up-guests_name-en">{{item.name_en}}</div>
          </div>
          <div class="up-guests_description">{{item.description}}</div>
          <div class="up-guests_works">{{item.works}}</div>
        </div>
      </div>
      <button class="up-guests_indicator left"
              @click="scrollToLeft">
        <img class="up-guests_indicator-inner"
             src="@/assets/back.svg">
      </button>
      <button class="up-guests_indicator right"
              @click="scrollToRight">
        <img class="up-guests_indicator-inner"
             src="@/assets/back.svg">
      </button>
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
import { styler, tween, easing, decay, listen, pointer, value } from 'popmotion';
import { Styler } from 'stylefire/styler/types';
import { ValueReaction } from 'popmotion/reactions/value';
import { Easing } from 'popmotion/easing';

interface GuestInfo {
  photo: string;
  name_zh: string;
  name_en: string;
  description: string;
  works: string;
}

const ease: Easing = easing.easeInOut;

/**
 * Control Guests
 */
@Component
export default class UpGuests extends Vue {
  public readonly baseUrl = process.env.BASE_URL;

  public guests: GuestInfo[] = [
    {
      photo: `${this.baseUrl}img/guests/Michael-Dobbs.jpg`,
      name_zh: '迈克尔⋅道布斯',
      name_en: 'MICHAEL DOBBS',
      description: '《纸牌屋》系列小说作者、美剧《纸牌屋》执行制片人',
      works: '《纸牌屋》系列作品',
    },
    {
      photo: `${this.baseUrl}img/guests/叶锦添.jpg`,
      name_zh: '叶锦添',
      name_en: 'TIM YIP',
      description:
        '知名视觉艺术家、电影与舞台美术指导、服装设计师，奥斯卡“最佳艺术指导”、英国电影学院“最佳服装设计”',
      works: '《卧虎藏龙》《赤壁》《大明宫词》 提出并践行“新东方主义”美学理念',
    },
    {
      photo: `${this.baseUrl}img/guests/David-S.Goyer.jpg`,
      name_zh: '大卫⋅S⋅高耶',
      name_en: 'DAVID S.GOYER',
      description: '好莱坞知名编剧、导演和制片人',
      works: '《蝙蝠侠：黑暗骑士崛起》《超人：钢铁之躯》',
    },
    {
      photo: `${this.baseUrl}img/guests/井上伸一郎.jpg`,
      name_zh: '井上伸一郎',
      name_en: 'INOUE SHINICHIRO',
      description: '曾任株式会社角川书店社长、现为株式会社KADOKAWA专务执行董事',
      works: '《你的名字。》《浪矢解忧杂货店》《妖猫传》《穿越时空的少女》',
    },
    {
      photo: `${this.baseUrl}img/guests/Andrew-R.jones.jpg`,
      name_zh: '安迪·琼斯',
      name_en: 'ANDREW R.JONES',
      description: '著名视觉特效动画师、电影导演，两届奥斯卡金像奖获得者',
      works: '《泰坦尼克号》《阿凡达》《奇幻森林》',
    },
    {
      photo: `${this.baseUrl}img/guests/Michael-E.-Uslan.jpg`,
      name_zh: '迈克⋅尤斯兰',
      name_en: 'MICHAEL E.USLAN',
      description: '蝙蝠侠系列作品开创者，被誉为“蝙蝠侠之父”，草莓影业联合创始人',
      works: '《蝙蝠侠》全系列电影《乐高大电影》《国家宝藏》',
    },
    {
      photo: `${this.baseUrl}img/guests/Greg-Street.jpg`,
      name_zh: '鬼蟹',
      name_en: 'GREG STREET',
      description:
        '知名游戏设计师，现任拳头游戏《英雄联盟》首席设计师，曾为《魔兽世界》首席系统设计师',
      works: '《英雄联盟》《魔兽世界》',
    },
    {
      photo: `${this.baseUrl}img/guests/Brendan-Greene.jpg`,
      name_zh: '布兰登⋅格林',
      name_en: 'BRENDAN GREENE',
      description: '爱尔兰游戏设计师、开发者，被誉为“吃鸡之父”',
      works: '《绝地求生》',
    },
    {
      photo: `${this.baseUrl}img/guests/方文山.jpg`,
      name_zh: '方文山',
      name_en: 'VINCENT FANG',
      description: '华语流行音乐作词人、导演，金曲奖最佳作词人',
      works: '《娘子》《东风破》《青花瓷》',
    },
    {
      photo: `${this.baseUrl}img/guests/柴智屏.jpg`,
      name_zh: '柴智屏',
      name_en: 'ANGIE CHAI',
      description: '金牌制作人、偶像剧教母、萌样影视总裁',
      works: '《流星花园》《那些年，我们一起追的女孩》',
    },
    {
      photo: `${this.baseUrl}img/guests/马伯庸.jpg`,
      name_zh: '马伯庸',
      name_en: 'MA BOYONG',
      description: '当代知名作家，作品涉足历史、科幻等领域',
      works: '《古董局中局》《长安十二时辰》《三国机密》',
    },
  ];

  private wrapperStyler: Styler;
  private width: number;
  private sliderX: ValueReaction;
  private isScrolling: boolean;

  public scrollToLeft(): void {
    if (this.isScrolling) {
      return;
    }
    this.isScrolling = true;

    const x: number = <number>this.wrapperStyler.get('x');
    let target: number = x + 306;
    if (target < -this.width) {
      target = -this.width;
    } else if (target > 0) {
      target = 0;
    }

    tween({
      from: {
        x,
      },
      to: {
        x: target,
      },
    }).start({
      update: this.wrapperStyler.set,
      complete: () => (this.isScrolling = false),
    });
  }

  public scrollToRight(): void {
    if (this.isScrolling) {
      return;
    }
    this.isScrolling = true;

    const x: number = <number>this.wrapperStyler.get('x');
    let target: number = x - 306;
    if (target < -this.width) {
      target = -this.width;
    } else if (target > 0) {
      target = 0;
    }

    tween({
      from: {
        x,
      },
      to: {
        x: target,
      },
    }).start({
      update: this.wrapperStyler.set,
      complete: () => (this.isScrolling = false),
    });
  }

  private mounted(): void {
    this.wrapperStyler = styler(<Element>this.$refs.wrapper, {});
    this.width = this.wrapperStyler.get('width');
    this.sliderX = value(0, <Function>this.wrapperStyler.set('x'));

    listen(<Element>this.$refs.wrapper, 'mousedown touchstart').start(() => {
      pointer({ x: <number>this.wrapperStyler.get('x') })
        .pipe(({ x }: { x: number }) => {
          if (x < -this.width) {
            return -this.width;
          } else if (x > 0) {
            return 0;
          } else {
            return x;
          }
        })
        .start(this.sliderX);
    });

    listen(document, 'mouseup touchend').start(() => {
      decay({
        from: this.sliderX.get(),
        power: 0,
      }).start(this.sliderX);
    });
  }
}
</script>
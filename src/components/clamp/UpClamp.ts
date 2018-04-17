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
import { CreateElement, VNode } from 'vue';

/**
 * Control Clamp
 */
@Component
export class UpClamp extends Vue {
  private render(h: CreateElement): VNode {
    return h(
      'div',
      {
        class: 'up-clamp',
      },
      [this.$slots.default],
    );
  }
}

<template>
  <div class="up-indicator">
    <slot></slot>
    <a class="up-indicator_item"
       v-for="item in itemsSource"
       :key="item.id"
       :class="{'is-active': active === item.id}"
       :href="`#${item.id}`">
      <span class="up-indicator_item-inner"></span>
    </a>
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
 * Control Indicator
 */
@Component
export default class UpIndicator extends Vue {
  @Prop({ type: Array })
  public itemsSource: IndexItem[];

  @Prop({ type: String })
  public active: string;
}
</script>
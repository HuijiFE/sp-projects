<template>
  <div class="up-swimlane"
       :id="id">
    <slot></slot>
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
 * Control Swimlane
 */
@Component
export default class UpSwimlane extends Vue {
  @Prop({ type: String })
  public id: string;
}
</script>
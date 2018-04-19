<template>
  <div class="up-clamp up-interpreted">
    <img class="up-swimlane_title"
         src="@/assets/主题解读.svg"
         alt="主题解读">
    <div class="up-interpreted_inner">
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
 * Control Interpreted
 */
@Component
export default class UpInterpreted extends Vue {
  public readonly baseUrl = process.env.BASE_URL;
}
</script>
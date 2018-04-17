<template>
  <div class="up-hero">
    <img class="up-hero_background"
         src="@/assets/main-background.jpg" />
    <div class="up-hero_inner">
      <up-clamp class="up-hero_content">
        <img class="up-hero_love"
             src="@/assets/with-love-we-create.svg"
             alt="向爱而生" />

      </up-clamp>
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
 * Control Hero
 */
@Component
export default class UpHero extends Vue {}
</script>
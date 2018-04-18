<template>
  <div class="up-navbar">
    <up-clamp class="up-navbar_inner">
      <a href="#hero">
        <img class="up-navbar_logo"
             src="@/assets/logo.svg"
             alt="up+ 腾讯新文创生态大会">
      </a>
      <a class="up-navbar_item"
         v-for="item in itemsSource"
         :key="item.id"
         :class="{ 'is-active': active === item.id }"
         :href="`#${item.id}`">{{item.label}}</a>
      <a class="up-navbar_item up-navbar_official"
         href="http://up.qq.com"
         target="_blank">UP2018官网</a>
    </up-clamp>
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
 * Control Navbar
 */
@Component
export default class UpNavbar extends Vue {
  @Prop({ type: Array })
  public itemsSource: IndexItem[];

  @Prop({ type: String })
  public active: string;
}
</script>
<template>
  <div class="home">
    <LeftMenu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <sliderNav />
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100%;

  .main-app {
    margin-left: 180px;
    transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);

    &.menu-unfold {
      margin-left: 80px;
    }
  }
}
</style>

<script>
import LeftMenu from "../components/Menu";
import sliderNav from "../components/sliderNav";

export default {
  data() {
    return {
    };
  },
  components: {
    LeftMenu,
    sliderNav,
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

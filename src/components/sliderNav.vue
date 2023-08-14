<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="user-info">
      <div class="user-name">
        XXXXXXXXXXX
        <a-icon type="down" />
      </div>
      <div class="user-exit">退出</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch("changeCollapsed");
    },
  },
};
</script>

<style lang="less" scoped>
.main-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  padding: 0 20px 0 10px;

  .breadcrumb {
    display: inline-block;
    margin-left: 20px;
  }

  .user-info {
    float: right;
    text-align: center;
    cursor: pointer;

    div {
      padding: 0 20px;
    }

    .user-exit {
      display: none;

      &:hover {
        background: #eee;
        color: #999;
        font-weight: bold;
      }
    }

    &:hover {
      .user-exit {
        display: block;
      }
    }
  }
}
</style>
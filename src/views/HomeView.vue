<template>
  <div class="home">
    <div class="menu-list">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="inbox" />
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="mail" /><span>Navigation One</span></span
          >
          <a-menu-item key="5"> Option 5 </a-menu-item>
          <a-menu-item key="6"> Option 6 </a-menu-item>
          <a-menu-item key="7"> Option 7 </a-menu-item>
          <a-menu-item key="8"> Option 8 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="appstore" /><span>Navigation Two</span></span
          >
          <a-menu-item key="9"> Option 9 </a-menu-item>
          <a-menu-item key="10"> Option 10 </a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11"> Option 11 </a-menu-item>
            <a-menu-item key="12"> Option 12 </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </div>
    <div :class="{ 'main-app': true, 'menu-unfold': collapsed }">
      <div class="main-header">
        <a-button
          type="primary"
          style="margin-bottom: 16px"
          @click="toggleCollapsed"
        >
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
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
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100%;

  .menu-list {
    height: 100%;
    position: fixed;
    float: left;
    width: 180px;

    .ant-menu {
      height: 100%;
    }
  }

  .main-app {
    margin-left: 180px;
    transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);

    &.menu-unfold {
      margin-left: 80px;
    }

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
  }
}
</style>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

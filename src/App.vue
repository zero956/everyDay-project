<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="less">
ul,
li,
body {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>

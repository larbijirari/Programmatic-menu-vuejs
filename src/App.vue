<template>
  <div id="app">
    <div class="inline-block">
      <Menu/>
    </div>
    <div class="inline-block">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu/";
export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
.inline-block {
  display: inline-block;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  margin-top: 0px;
}
.parent {
  color: #C5B17C;
}
.child {
  color: #96A8B4;
}

.sub-child {
  color: #AEC5A9;
}
</style>

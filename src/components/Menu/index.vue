
<template>
  <section class="menu">
    <div v-for="(route,index) in routes" :key="index">
      <MenuItem :data="route"/>
    </div>
  </section>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  name: "Menu",
  components: {
    MenuItem
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style scoped>
.menu {
  background-color: #F1F3F4;
  width: 300px;
  height: 100%;
}
</style>

<template>
  <section>
    <ul v-if="displayRoute">
      <router-link exact-active-class="active" :to="{name: data.name}" tag="li">
        <div>{{data.meta.label || data.name}}</div>

        <ul v-if="data.children && data.children.length">
          <MenuItem v-for="(child,index) in data.children" :key="index" :data="child"/>
        </ul>
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    /**
     * check if the route can be displayed or not
     * @return {Boolean}
     */
    displayRoute() {
      if (this.data.meta.display === undefined || this.data.meta.display) {
        return true;
      }
      return false;
    }
  },
  name: "MenuItem",
  props: {
    data: Object
  }
};
</script>

<style scooped>
ul {
  text-align: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

ul:first-of-type {
  margin-left: 0 !important;
}
li {
  width: 100%;
  padding-left: 10px;
}
li > div {
  padding: 10px;
  width: 100%;
}
li > div:hover {
  text-decoration: underline;
  cursor: pointer;
}
li.active > div {
  color: indigo;
}
</style>

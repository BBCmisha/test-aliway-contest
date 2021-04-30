<template>
  <div id="app">
    <list />
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List
  },
  mounted() {
    this.$store.dispatch('fetchInfluencers')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

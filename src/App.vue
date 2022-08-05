<template>
 <NavMenu/>
  <ArticlesItem/>
</template>

<script>
import ArticlesItem from './components/ArticlesItem.vue'
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    ArticlesItem,
    NavMenu
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #1A1B22;
}
</style>

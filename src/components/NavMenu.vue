<template>
  <header>
    <div class="title-section">
      <h1 class="title title-white">App</h1>
      <h1 class="title title-black">News</h1>
    </div>
    <button class="toggle" @click="drawerVisible = true">
      <img alt="Menu" src="../assets/menu.png"/>
    </button>
    <div class="left-drawer"
         :style="{
     width: drawerVisible? '20vw' : '0',
     paddingLeft: drawerVisible? '10px' : '0'
  }">
      <h1>Menu</h1>
      <h4 @click="getArticles('general')">Geral</h4>
      <h4 @click="getArticles('technology')">Tecnologia</h4>
      <h4 @click="getArticles('entertainment')">Entretenimento</h4>
      <h4 @click="getArticles('business')">Negócios</h4>
      <h4 @click="getArticles('sports')">Esportes</h4>
    </div>
    <div class="drawer-mask"
         :style="{
    width: drawerVisible ? '100%' : '0',
    opacity: drawerVisible ? '0.6' : '0'
  }"
         @click="drawerVisible = false"></div>
  </header>

</template>

<script>
import {store} from "@/store/store";

export default {
  name: "NavMenu",
  data() {
    return {
      drawerVisible: false
    };
  },
  methods: {
    getArticles(type) {
      this.drawerVisible = false
      store.dispatch('fetchArticles', {type})
    }
  }
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  padding: 0 60px;
  justify-content: space-between;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 4px;

  .title {
    color: white;
  }

  .title-black {
    background: black;
    border-radius: 4px;
    padding: 4px 8px;
  }
}

.left-drawer {
  position: absolute;
  top: 0;
  left: 0;
  width: 0; /* initially */
  overflow: hidden;
  height: 100%;
  padding-left: 0; /* initially */
  border-left: 1px solid whitesmoke;
  background: white;
  z-index: 200;
  transition: all 0.2s; /* for the animation */
  margin-left: -1px;

  h4 {
    cursor: pointer;
  }
}

.drawer-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 0; /* initially */
  height: 100%;
  background: #000;
  opacity: 0.3;
  z-index: 199;
  cursor: pointer;
}

button {
  background: transparent;
  cursor: pointer;
  border: none;
}
</style>

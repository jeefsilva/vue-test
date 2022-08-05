<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <div v-if="currentArticle">
            <img alt="Article Image" :src="currentArticle.urlToImage || 'https://deliveryapp.neemo.com.br/entrar/2606'"
                 @error="replaceByDefault"/>
            <h3>{{currentArticle.title}}</h3>
            <div class="modal-article-properties">
              <label>{{currentArticle.author}}</label>
              <label>{{ moment(currentArticle.publishedAt) }}</label>
            </div>
            <label class="content">{{currentArticle.content}}</label>
          </div>
          <slot />
        </div>
      </transition>
      <div class="overlay" @click="close"></div>
    </div>
  </transition>
</template>

<script>
import moment from "moment/moment";

export default {
  props: ["modalActive", "currentArticle"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const open = () => {
      emit("open");
    };
    return { close, open };
  },
  methods: {
    replaceByDefault(e) {
      e.target.src = 'https://deliveryapp.neemo.com.br/entrar/2606'
    },
    moment: function (date) {
      return moment(date).calendar();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  .modal-inner {
    z-index: 3;
    position: relative;
    max-width: 640px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 64px 16px;
    i {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: crimson;
      }
    }
    img {
      width: 100%;
    }

    .modal-article-properties {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
    }
  }
}

.overlay {
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 68%);
  position: absolute;
}
</style>

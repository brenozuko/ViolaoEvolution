<template>
  <div>
    <h1 class="text-3xl px-2 text-center font-bold pt-24 pb-8">
      SELECIONE O NÍVEL DE DIFICULDADE
    </h1>

    <div class="level-container flex justify-center flex-wrap">
      <button
        @click="setLevel(index + 1)"
        v-for="(button, index) in 2"
        :key="button"
        class="button-partiu"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      indexArray: [],
    };
  },

  methods: {
    setLevel(level) {
      this.$store.commit("screenStatus/setLevelShow", false);
      this.$store.commit("screenStatus/setLevelState", level);

      if (level == 1) {
        for (let i = 0; i < 3; i++) {
          this.indexArray[i] = i;
        }
      }

      if (level == 2) {
        for (let i = 0; i < 5; i++) {
          this.indexArray[i] = i;
        }
      }

      this.$store.commit("screenStatus/setArrayShuffle", this.indexArray);
    },
  },
};
</script>

<style lang="scss">
.level-container {
  .button-partiu {
    font-size: 35px;

    @apply font-bold text-center rounded-full;
  }
}
</style>
<template>
  <div class="frame">
    <div>
      <div class="flex py-10 justify-center">
        <img
          class="h-24"
          src="@/assets/img/violao-branco.png"
          alt="Violão Branco"
        />
      </div>
      <div v-if="!practice">
        <h1 class="text-4xl text-center font-bold pt-40">BORA PRATICAR?</h1>
        <div class="flex justify-center py-2">
          <button
            @click="
              setPractice();
              getRandomInt(0, 4);
            "
            class="button-partiu focus:outline-none"
          >
            PARTIU
          </button>
        </div>
      </div>

      <div v-if="practice">
        <div class="flex justify-center">
          <audio :src="notasArray[index].audio" autoplay></audio>
          <img :src="notasArray[index].url" alt="Chord" />
        </div>
        <h1 class="text-center text-6xl font-bold pb-6">
          {{ notasArray[index].chord }}
        </h1>
      </div>
    </div>
  </div>
</template>


<script>
import notas from "../static/json/notas.json";

export default {
  data() {
    return {
      notasArray: notas,
      practice: false,
      index: 0,
    };
  },

  methods: {
    setPractice() {
      this.practice = true;
    },

    getRandomInt(min, max) {
      setInterval(() => {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.index = Math.floor(Math.random() * (max - min)) + min;
      }, 4000);
    },
  },
};
</script>


<style lang="scss">
.button-partiu {
  background-color: #FF7F0D;
  font-size: 22px;
  @apply rounded-full py-4 px-10;
  transition: transform linear 150ms;

  &:hover {
    transition: transform linear 150ms;
    transform: scale(0.9);
  }
}
.frame {
  min-height: 750px;
}

@media (min-width: 768px) {
  .frame {
    max-width: 80%;
    border-radius: 60px;
    @apply border border-white mx-auto py-6 my-16;
    min-height: 750px;
  }
}
</style>

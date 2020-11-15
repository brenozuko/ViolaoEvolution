<template>
  <div>
    <div class="frame">
      <div>
        <div class="flex pt-2 justify-center">
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
              @click="setPractice()"
              class="button-partiu focus:outline-none"
            >
              PARTIU
            </button>
          </div>
        </div>

        <div class="flex flex-col" v-if="practice">
          <h1 class="chord-title -mb-10">
            {{ notasArray[index].chord }}
          </h1>
          <audio :src="notasArray[index].audio" autoplay></audio>

          <div style="min-height: 450px">
            <div v-if="reveal" class="flex justify-center pb-10">
              <img :src="notasArray[index].url" alt="Chord" />
            </div>
          </div>

          <div class="flex justify-center">
            <button @click="getRandomInt(0, 4)" class="button-partiu">
              REVELAR DIAGRAMA
            </button>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center pb-2">
      Violão Evolution &copy Todos direitos reservados.
    </p>
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
      reveal: false,
    };
  },

  methods: {
    setPractice() {
      this.practice = !this.practice;
    },

    getRandomInt(min, max) {
      this.reveal = true;
      setTimeout(() => {
        console.log("Tá chamando");
        min = Math.ceil(min);
        max = Math.floor(max);
        this.index = Math.floor(Math.random() * (max - min)) + min;
        this.reveal = false;
      }, 5000);
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
  &:focus {
    @apply outline-none;
  }
  &:hover {
    transition: transform linear 150ms;
    transform: scale(0.9);
  }
}

.chord-title {
  color: #FF7F0D;
  @apply text-center text-6xl font-bold;
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

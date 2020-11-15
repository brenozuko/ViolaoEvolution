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
        <transition name="fade">
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
        </transition>

        <div v-if="practice">
          <div class="flex justify-center">
            <audio :src="notasArray[index].audio" autoplay></audio>
            <img :src="notasArray[index].url" alt="Chord" />
          </div>
          <h1 class="text-center text-6xl font-bold pb-2">
            {{ notasArray[index].chord }}
          </h1>
          <div class="flex justify-center">
            <button
              @click="
                setPractice();
                getRandomInt(0, 4);
              "
              class="button-partiu"
            >
              PARAR DE PRATICAR
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
    };
  },

  methods: {
    setPractice() {
      this.practice = !this.practice;
    },

    getRandomInt(min, max) {
      let myInterval = setInterval(() => {
        console.log("Tá chamando");
        min = Math.ceil(min);
        max = Math.floor(max);
        this.index = Math.floor(Math.random() * (max - min)) + min;
      }, 3000);
      if (this.practice == false) {
        document.location.reload(true);
      }
    },
  },
};
</script>


<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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

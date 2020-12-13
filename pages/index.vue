<template>
  <div>
    <div class="frame">
      <div>
        <div class="flex pt-2 justify-center">
          <a href="/">
            <img
              class="h-24"
              src="@/assets/img/violao-branco.png"
              alt="Violão Branco"
            />
          </a>
        </div>

        <FirstScreen v-if="practiceShow" />
        <SelectLevel v-else-if="levelShow" />

        <div v-else class="flex flex-col">
          <h1 class="chord-title -mb-10">
            {{ notasArray[indexElement].chord }}
          </h1>
          <audio :src="notasArray[indexElement].audio" autoplay loop></audio>

          <div style="min-height: 350px">
            <div v-if="reveal" class="flex justify-center pb-10">
              <img
                class="diagram-image"
                :src="notasArray[indexElement].url"
                alt="Chord"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-center mx-auto">
            <button @click="goThroughSequence()" class="button-partiu">
              REVELAR DIAGRAMA
            </button>
          </div>
        </div>
      </div>
    </div>
    <p
      class="text-center absolute md:relative bottom-0 pl-2 md:pl-0 mt-10 pb-6"
    >
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
      index: 0,
      reveal: false,
      beforeNumber: 0,
      calledOnce: 0,
      indexElement: 0,
    };
  },

  computed: {
    practiceShow() {
      return this.$store.state.screenStatus.practiceShow;
    },

    levelShow() {
      return this.$store.state.screenStatus.levelShow;
    },

    levelState() {
      return this.$store.state.screenStatus.levelState;
    },

    getArray() {
      return this.$store.state.screenStatus.arrayShuffle;
    },
  },

  methods: {
    goThroughSequence() {
      if (this.index == 0) {
        this.shuffle(this.getArray);
      }

      this.reveal = true;
      this.calledOnce++;
      if (this.calledOnce == 1) {
        setTimeout(() => {
          console.log(this.getArray);
          this.indexElement = this.getArray[this.index];
          this.reveal = false;
          this.calledOnce = 0;
        }, 3000);
      }

      if (this.index < this.getArray.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },

    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
  },
};
</script>


<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.button-partiu {
  background-color: #ff7f0d;
  font-size: 22px;
  max-width: 400px;
  @apply rounded-full py-2 px-10 mx-2 my-2;
  transition: transform linear 150ms;
  &:focus {
    @apply outline-none;
  }
  &:hover {
    transition: transform linear 150ms;
    transform: scale(0.9);
  }
}

.diagram-image {
  height: 300px;
}

.chord-title {
  color: #ff7f0d;
  @apply text-center text-6xl font-bold;
}

.frame {
  min-height: 300px;
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

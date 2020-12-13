<template>
  <div>
    <h1 class="text-4xl text-center font-bold pt-40">BORA PRATICAR?</h1>
    <div class="flex justify-center py-2">
      <button @click="setPractice()" class="button-partiu focus:outline-none">
        PARTIU
      </button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    setPractice() {
      this.$store.commit("screenStatus/setPracticeShow", false);
      this.$store.commit("screenStatus/setLevelShow", true);
    },
  },
};
</script>


<style lang="scss">
.button-partiu {
  background-color: #ff7f0d;
  font-size: 28px;
  max-width: 400px;
  @apply rounded-full font-bold py-4 px-10 mx-2 my-2;
  transition: transform linear 150ms;
  &:focus {
    @apply outline-none;
  }
  &:hover {
    transition: transform linear 150ms;
    transform: scale(0.9);
  }
}
</style>
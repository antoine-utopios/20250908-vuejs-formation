<script setup lang="ts">
import { onMounted } from 'vue';
import { usePokedexStore } from '@/stores/pokedex';
import { usePokemonStore } from '../../stores/pokemon';

const pokedexStore = usePokedexStore()
const pokemonStore = usePokemonStore()

onMounted(() => {
  pokedexStore.fetchPokedexForGenerationId(2)
})
</script>

<template>
  <h1>PokeAPI</h1>
  <hr>
  <div v-for="pokeBasicInfo in pokedexStore.pokedexForCurrentGeneration" :key="pokeBasicInfo.id"
    @click="() => pokemonStore.fetchPokemonById(pokeBasicInfo.id)">
    <img :src="pokeBasicInfo.pictureUrl" :alt="pokeBasicInfo.name">
  </div>
</template>

<style scoped></style>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { usePokedexStore } from '@/stores/pokedex';
import { usePokemonStore } from '../../stores/pokemon';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const pokedexStore = usePokedexStore()

onMounted(() => {
  pokedexStore.fetchPokedexForGenerationId(2)
})

watch(
  () => route.params.generation,
  (newGeneration) => {
    pokedexStore.fetchPokedexForGenerationId(Number(newGeneration))
  }
)

const decrementGeneration = () => {
  if (Number(route.params.generation) > 2) router.push({ name: 'HomePokedex', params: { generation: Number(route.params.generation) - 1 } })
}

const incrementGeneration = () => {
  if (Number(route.params.generation) < 10) router.push({ name: 'HomePokedex', params: { generation: Number(route.params.generation) + 1 } })
}

const pokemonPictureClickHandler = (pokemonId: number) => {
  router.push({ name: 'PokemonDisplay', params: { pokemonId: pokemonId } })
}

</script>

<template>
  <div class="home-pokedex">
    <div class="app-title">
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI">
    </div>
    <div class="generation-container">
      <div class="generation-selector">
        <button @click="decrementGeneration">&lt;&lt;</button>
        <h3>{{ pokedexStore.pokedexNameForCurrentGeneration }}</h3>
        <button @click="incrementGeneration">&gt;&gt;</button>
      </div>
      <div class="pokemon-links">
        <img v-for="pokeBasicInfo in pokedexStore.pokedexForCurrentGeneration" :key="pokeBasicInfo.id"
          :src="pokeBasicInfo.pictureUrl" :alt="pokeBasicInfo.name"
          @click="() => pokemonPictureClickHandler(pokeBasicInfo.id)">
      </div>
    </div>
    <RouterView class="display-container" />
  </div>
</template>

<style scoped>
.home-pokedex {
  margin: 5dvh auto;
  display: grid;
  height: 90dvh;
  width: 80dvw;
  box-sizing: border-box;
  padding: 0 5%;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: 200px 1fr;
  gap: 3rem;
  background-color: gray;
  border-radius: 3rem;
}

.app-title {
  grid-row: 1;
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.generation-container {
  grid-row: 2;
  grid-column: 1;
  background-color: rgb(221, 221, 221);
  padding: 2%;
  border-radius: 2rem;
  height: 60dvh;
}

.display-container {
  grid-row: 2;
  grid-column: 2;

}

.generation-selector {
  height: 10%;
  box-sizing: border-box;
  padding: .5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.generation-selector button {
  height: 3rem;
  aspect-ratio: 1 / 1;
  border-radius: 999999999px;
  border: solid transparent 1px;
  transition: all .25s;
  background-color: rgb(17, 17, 100);
  color: white;
  font-weight: bolder;
}

.generation-selector button:hover {
  border: solid rgb(17, 17, 100) 1px;
  background-color: transparent;
  color: rgb(17, 17, 100);
  cursor: pointer;
}

.pokemon-links {
  background-color: white;
  border-radius: .25rem .25rem 2rem 2rem;
  height: 90%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-inline: auto;
}

.pokemon-links::-webkit-scrollbar {
  display: none;
}

.pokemon-links>img {
  height: 100px;
  aspect-ratio: 1 / 1;
}
</style>
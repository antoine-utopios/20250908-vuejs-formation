<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { usePokemonStore } from '../../stores/pokemon';
import { onMounted, watch } from 'vue';

const route = useRoute()
const router = useRouter()

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.fetchPokemonById(Number(route.params.pokemonId))
})

watch(
  () => route.params.pokemonId,
  (newPokemonId) => {
    pokemonStore.fetchPokemonById(Number(newPokemonId))
  }
)
</script>

<template>
  <div class="pokemon-display" v-if="pokemonStore.currentSelectionPokemon">
    <div class="pokemon-name">{{ pokemonStore.currentSelectionPokemon.name }}</div>
    <div class="pokemon-types">
      <span v-for="type in pokemonStore.currentSelectionPokemon.types">{{ type.name }}</span>
    </div>
    <div class="pokemon-sprite">
      <img :src="pokemonStore.currentSelectionPokemon.pictureUrl" :alt="pokemonStore.currentSelectionPokemon.name">
    </div>
    <div class="pokemon-moves">
      <span v-for="ability in pokemonStore.currentSelectionPokemon.abilities">
        {{ ability.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.pokemon-display {
  height: 60dvh;
  background-color: rgb(152, 21, 21);
  border-radius: 3rem;
  padding: 3dvh 3dvw;

  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
}

.pokemon-name {
  grid-row: 1;
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(58, 58, 58);
  border-radius: 2rem;
  font-size: 4rem;
  font-family: monospace;
  color: white;
}

.pokemon-types {
  grid-row: 2;
  grid-column: 1;
  background-color: rgb(252, 241, 219);
  border-radius: 2rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-inline: 10%;
}

.pokemon-types>span {
  background-color: rgb(95, 53, 15);
  font-family: monospace;
  text-transform: uppercase;
  padding: .25rem .5rem;
  border-radius: .75rem;
  color: white;
}


.pokemon-sprite {
  grid-row: 1 / span 2;
  grid-column: 2;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-sprite>img {
  height: 80%;
  aspect-ratio: 1 / 1;
  object-fit: fill;
}

.pokemon-moves {
  grid-row: 3 / span 2;
  grid-column: 1 / span 2;
  background-color: rgb(252, 241, 219);
  border-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 3rem;
  gap: 10%;
}

.pokemon-moves>span {
  background-color: rgb(95, 53, 15);
  margin: auto;
  font-family: monospace;
  text-transform: uppercase;
  font-size: 4rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: white;
}
</style>
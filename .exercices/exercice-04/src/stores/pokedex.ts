import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export interface PokedexResponse {
  names: { name: string }[];
  pokemon_entries: { pokemon_species: { name: string, url: string } }[]
}

export interface PokemonBasicEntries {
  id: number;
  name: string;
  pictureUrl: string;
}

const extractIdFromUrl = (url: string): number | null => {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? parseInt(match[1], 10) : null;
}


export const usePokedexStore = defineStore('pokedex', () => {
  const pokedexForCurrentGeneration = ref<PokemonBasicEntries[]>([])
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchPokedexForGenerationId = async (id: number) => {
    isLoading.value = true;

    try {
      const response = await axios.get<PokedexResponse>(`https://pokeapi.co/api/v2/pokedex/${id}`);
      const { data } = response;

      pokedexForCurrentGeneration.value = data.pokemon_entries.map(entry => ({
        id: extractIdFromUrl(entry.pokemon_species.url)!,
        name: entry.pokemon_species.name.substring(0, 1).toUpperCase() + entry.pokemon_species.name.substring(1).toLowerCase(),
        pictureUrl: `https://img.pokemondb.net/sprites/scarlet-violet/icon/${entry.pokemon_species.name}.png`
      }))
      error.value = null;
    } catch (err: any) {
      error.value = err.message;
      pokedexForCurrentGeneration.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  return { pokedexForCurrentGeneration, isLoading, error, fetchPokedexForGenerationId }
});
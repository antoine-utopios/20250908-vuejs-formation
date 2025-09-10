import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export interface PokemonResponse {
  abilities: { ability: { name: string, url: string } }[];
  types: { type: { name: string, url: string } }[];
  height: number;
  weight: number;
  name: string;
  id: number;
}

export interface PokemonDetailedInfos {
  abilities: { name: string }[];
  types: { name: string }[];
  height: number;
  weight: number;
  name: string;
  id: number;
  pictureUrl: string;
}

export const usePokemonStore = defineStore('pokemon', () => {
  const currentSelectionPokemon = ref<PokemonDetailedInfos | null>(null)
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchPokemonById = async (id: number) => {
    isLoading.value = true;

    try {
      const response = await axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const { data } = response;

      currentSelectionPokemon.value = {
        id,
        name: data.name.substring(0, 1).toUpperCase() + data.name.substring(1).toLowerCase(),
        abilities: data.abilities.map(ability => ({ name: ability.ability.name })),
        types: data.types.map(type => ({ name: type.type.name })),
        height: data.height,
        weight: data.weight,
        pictureUrl: `https://img.pokemondb.net/sprites/scarlet-violet/icon/${data.name}.png`
      }
      error.value = null;
    } catch (err: any) {
      error.value = err.message;
      currentSelectionPokemon.value = null;
    } finally {
      isLoading.value = false;
    }
  }

  return { currentSelectionPokemon, isLoading, error, fetchPokemonById }
});
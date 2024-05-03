import { httpClient } from "../plugins";

const getPokemonNameById = async (id: number | string): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClient.get(url);
  return pokemon.name;
}

export {
  getPokemonNameById,
}

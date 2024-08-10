import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonsGrid from "@/pokemons/components/PokemonGrid";



export const metadata = {
 title: '151 Pokémons',
 description: 'Listado de los primeros 151 pokémons',
};


const getPokemons = async( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {

    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
        .then( response => response.json() );
        
        
        const pokemons = data.results.map( pokemon => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }));

        // throw new Error('Esto es un error que no debe suceder');
    
    return pokemons;
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">

        <span className="text-5xl my-2">Listado de pokémons <small className="text-blue-600">estático</small></span>
        <PokemonsGrid pokemons={ pokemons } />
       
    </div>
  );
}
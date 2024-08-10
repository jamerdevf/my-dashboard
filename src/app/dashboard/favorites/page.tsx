import { FavoritePokemons, PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonsGrid from "@/pokemons/components/PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";



export const metadata = {
 title: 'Favoritos',
 description: 'Listado de los primeros 151 pokémons',
};


export default async function PokemonsPage() {



  return (
    <div className="flex flex-col">

        <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-600">Global state</small></span>
        {/* <PokemonsGrid pokemons={ [] } /> */}
        <FavoritePokemons/>
     
       
    </div>
  );
}



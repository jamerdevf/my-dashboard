'use client';

import { useState } from "react";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import PokemonsGrid from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

 const favoritePokemons = useAppSelector( state => Object.values(state.pokemons.favorites) );
//  console.log( {favoritePokemons} );
// const [pokemons, setPokemons] = useState(favoritePokemons);




  return (
    <>
      {
        favoritePokemons.length === 0
        ? (<NoFavorites />)
        : (<PokemonsGrid pokemons={ favoritePokemons } />)
      }
    </>

  )
}


export const NoFavorites = () => {

  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline  size={ 100 } className="text-red-500"  />
      <span>No hay favoritos</span>
    </div>
  )
}

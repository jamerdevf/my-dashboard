'use client';

import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { setFavorites } from "./pokemons/pokemons";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

  useEffect(() => {
    const favorites = JSON.parse( localStorage.getItem('favorite-Pokemons') ?? '{}');
    // console.log('favorites', favorites);
    store.dispatch( setFavorites( favorites ) );
    
  }, [])
  

  return (
      <Provider store={ store }>
        { children }
      </Provider>
   
  )
}

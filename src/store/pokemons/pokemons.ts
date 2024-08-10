import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

/*  así va a ser nuestro state de pokemons
{
  favorites: {
        '1' : { id: 1, name: 'Bulbasaur' },
        '2' : { id: 2, name: 'Bulbasaur' },
        '3' : { id: 3, name: 'Bulbasaur' },
      }

}     
*/

interface PokemonState {
    favorites: {[key: string]: SimplePokemon},
}

// const getInitialState = (): PokemonState => {
//     const favorites = JSON.parse( localStorage.getItem('favorite-Pokemons') ?? '{}');
//     return favorites;
// }

const initialState: PokemonState = {

  // if ( typeof localStorage ===  ) return {};

    favorites: {},
  // ...getInitialState(),
    // '1': { id: '1', name: 'Bulbasaur' },
    // '3': { id: '3', name: 'Venusaur' },
    // '5': { id: '5', name: 'Charmeleon' },

}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavorites( state, action: PayloadAction<{[key: string]: SimplePokemon}> ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const { id } = pokemon;

        if ( !!state.favorites[id] ){ // si existe, lo borramos del state // !!state[id] es lo mismo que tener state[id] !== undefined
            delete state.favorites[id];
            // return;
        } else {
          state.favorites[id] = pokemon;
        }

        // state[id] = pokemon;
        // TODO: No se debe de hacer en Redux
        localStorage.setItem('favorite-Pokemons', JSON.stringify(state.favorites) );
    }
      
  }
});

export const { toggleFavorite, setFavorites } = pokemonSlice.actions

export default pokemonSlice.reducer
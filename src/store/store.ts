import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import pokemonReducer from './pokemons/pokemons'; // Import the pokemonReducer

import { useDispatch, useSelector } from 'react-redux';
import { localStorageMiddlerware } from './middlewares/localstorage-middlewares';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,
  },
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( localStorageMiddlerware )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
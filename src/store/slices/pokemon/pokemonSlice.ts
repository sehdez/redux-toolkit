import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../../../interfaces/Pokemoninterfaces';

export interface PokemonState {
    page: number;
    pokemons: Pokemon[],
    isLoading: boolean
}

const initialState: PokemonState = {
    page:0,
    pokemons: [],
    isLoading: false
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading =  true
        },
        setPokemons : (state, action: PayloadAction<PokemonState> ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer


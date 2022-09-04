import { AppDispatch } from '../../store';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';
import { PokemonResponse } from '../../../interfaces/Pokemoninterfaces';
import axios from 'axios';
import { pokemonApi } from '../../../api/pokemonApi';

export const getPokemons = (page: number = 0): any => {

    return async ( dispatch: AppDispatch, getState: any ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon?limit=10&offset=${ page*10 }`);


        //TODO: realizar petición http
        dispatch( setPokemons({isLoading: false, page: page+1, pokemons: data.results}) )
    }
}
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';
import { RootState } from './store/store';
import { Pokemon } from './interfaces/Pokemoninterfaces';



export const PokemonApp = () => {

    const dispatch = useDispatch()
    const { isLoading, page, pokemons } = useSelector((state: RootState) => state.pokemon)
    const imgUrl = useRef('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/')


    useEffect(() => {
        dispatch( getPokemons() ) 
    }, [] )
    const nextPokemons = () => {
        dispatch( getPokemons(page+1) )
    }

    const getId = ( url:string ) => {
        const arr = url.split('/')
        return arr[arr.length-2]
    }


    return (
        <>
        
            <h2> Pokemon App</h2>
            <hr />
            {
                isLoading 
                ? <h3>Loading...</h3>
                : (
                    <ul className="container">
                        {
                            pokemons.map( ( pokemon: Pokemon ) => (
                                <div key={pokemon.url} className="pokemonCard">
                                    <h3> { pokemon.name } </h3>
                                    <h3> { getId(pokemon.url) } </h3>
                                    <img className="img" src={ imgUrl.current+getId(pokemon.url)+'.png' } alt="" />
                                </div>
                            ))
                        }
                        <button disabled={ isLoading } className="button" onClick={ nextPokemons }>Next</button>
                    </ul>
                )
            }
            
        </>
    )
}
